<template>
  <div class="main-contain">
    <div v-show="contronlVisable" class="ic-back" @click="back" />
    <div v-show="contronlVisable" class="flex center header">
      <div class="flex center left">
        <div class="type">{{ type }}</div>
        <div class="difficulty">
          <span>难度</span>
          <score :score="difficulty" />
        </div>
      </div>
      <qs-radio
        v-if="answers.length > 1"
        v-show="mode === 'answer'"
        :count="answers.length"
        @handleChange="switchStep"
        ref="qsRadio"
      />
    </div>
    <div
      class="content-contain"
      ref="contentContain"
      @touchstart="eventEmit"
      @touchend="eventEmit"
    >
      <home
        v-if="mode === 'preview' && title && answers.length > 1"
        :title="title"
        @startByIndex="startByIndex"
        ref="home"
      />
      <swiper
        v-if="mode === 'answer' || answers.length === 1"
        class="swiper-contain fade-in"
        ref="mySwiper"
        :options="swiperOptions"
      >
        <swiper-slide v-for="(item, $index) in answers" :key="item.index">
          <answer
            :title="titleData"
            :data="item"
            :graph="images[item.pictureNo]"
            :answerIndex="answerIndex"
            :devMode="devMode"
            :index="$index"
            :bindMainIndex="bindMainIndex"
            :qsOverList="qsOverList"
            :commonAudios="commonAudios"
            ref="answer"
          />
        </swiper-slide>
      </swiper>
    </div>
    <div v-show="contronlVisable" class="fade-in">
      <div v-if="mode === 'answer'" class="step-control-contain">
        <step-control :list="stepList" />
      </div>
      <div class="speed-control-contain">
        <speed-control @toggleSpeed="toggleSpeed" />
      </div>
    </div>
    <div v-if="replayVisiable" class="ic-control replay" @click="replay" />
    <div
      v-else
      class="ic-control"
      :class="`${actionMode === 'pause' ? 'play' : 'pause'}`"
      @click="switchControl(actionMode)"
    />

    <!-- 视频 -->
    <div v-if="videoVisible" class="videoStyle">
      <div class="back" @click="closeVideo">
        <img src="../../assets/images/v1.6/icon_back.png" alt="" />
        {{ videoData.title }}
      </div>
      <video
        :src="videoUrl"
        class="video"
        :poster="videoSrc"
        controls
        disablePictureInPicture
        controlsList="nofullscreen nodownload noremote footbar"
        x5-video-player-type="h5"
        x5-video-player-fullscreen="false"
        x5-video-player-orientation="landscape"
        ref="video"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch, Mixins } from "vue-property-decorator";
import { cloneDeep, last, isEmpty } from "lodash";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { getScreenType } from "@/utils";
import pageEvent from "@/utils/event";
import MyMixins from "@/utils/mixins";

import Score from "./components/Score.vue";
import QsRadio from "./components/QsRadio.vue";
import Home from "./components/Home.vue";
import Answer from "./components/Answer.vue";
import StepControl from "./components/StepControl.vue";
import SpeedControl from "./components/SpeedControl.vue";

import testData from "./data/data5";

import "swiper/css/swiper.css";

@Component({
  components: {
    Score,
    QsRadio,
    Home,
    Answer,
    StepControl,
    SpeedControl,
    Swiper,
    SwiperSlide
  }
})
export default class Detail extends MyMixins {
  devMode: boolean = true; //是否pc下开发模式

  mode: string = "preview"; //answer  preview
  actionMode: string = "pause"; //pause play

  type: string = ""; //题型
  difficulty: number = 0; //难度

  title: any = null; //题目数据
  titleData: any = {}; //题目数据精简版
  answers: any[] = []; //每一问的数据
  answerIndex: number = 0;
  images: any[] = [];

  previewTag: string = "title|0"; //question|0

  colorArr: string[] = ["#0DC8A0", "#FF446E", "#7A9EFF", "#A55FEE", "#FF9D24"];

  swiperOptions: any = {
    allowTouchMove: false
  };

  contronlVisable: boolean = true; //用来控制操控区域是否显示

  bindMainIndex: number = 0;

  swiper: any;

  commonAudios: any;

  videoVisible: boolean = false;
  videoSrc: string = "";
  videoUrl: string = "";
  videoData: any = {};
  videoObject: any;
  currentTime: any;

  get qsOverList() {
    const list = this.answers.map(item => item.activated);
    return list;
  }

  get replayVisiable() {
    const answerData = this.answers[this.answerIndex - 1];
    if (!answerData) return null;
    return answerData.isOver;
  }

  get stepList() {
    const answerData = this.answers[this.answerIndex - 1];
    if (!answerData) return [];
    let step = 0;
    if (answerData.step > -1) {
      step = answerData.step + 2;
    } else if (answerData.activated) {
      step = 1;
    }
    let data: any[] = [
      { label: "审题", value: "审题" },
      { label: "总览", value: "总览" }
    ];
    answerData.steps.forEach((item: any, index: number) => {
      const _data = { label: `步骤${index + 1}`, value: index };
      data.push(_data);
    });
    data.forEach((item, index) => {
      Object.assign(item, {
        active: index === step,
        actived: index <= step
      });
    });
    return data;
  }

  created() {
    const webType = getScreenType();
    this.devMode = webType.isPc;

    if (!this.devMode) return;
    this.init(testData);
  }

  init(data: any) {
    console.log(cloneDeep(data));
    const { answers, title, commonAudios, actionsForQuestions } = data;
    this.type = title.type;
    this.difficulty = title.difficulty;
    this.title = title;
    this.commonAudios = commonAudios;
    this.images = title.images || [];

    let _answers = answers.map((answer: any) =>
      Object.assign(answer, {
        step: -1,
        subStep: 0,
        activated: false,
        isOver: false
      })
    );
    if (actionsForQuestions && actionsForQuestions.length) {
      _answers.forEach((item: any, index: number) => {
        Object.assign(item, {
          actions: actionsForQuestions[index]
        });
      });
    }
    this.answers = _answers;

    const {
      text,
      imagesInLine = [],
      questions,
      actions = [],
      // actionsForQuestions = [],
      audios,
      images = []
    } = title;
    let highlight: any[] = [];
    // const _actions = [...actions, ...actionsForQuestions].filter(
    //   item => !isEmpty(item)
    // );
    const _actions = [...actions].filter(item => !isEmpty(item));
    _actions.forEach((item: any) => {
      const { graphActions = [], textActions = [] } = item;
      const _item = [...graphActions, ...textActions];
      highlight = highlight.concat(_item.map(a => a.target));
    });
    this.titleData = {
      text,
      imagesInLine,
      questions,
      highlight,
      actions,
      audios,
      images
    };
  }

  mounted() {
    const MathJax = window.MathJax;
    MathJax.Hub.Config({
      showProcessingMessages: false, //关闭js加载过程信息
      messageStyle: "none", //不显示信息
      extensions: ["tex2jax.js"],
      tex2jax: {
        inlineMath: [
          ["$", "$"],
          ["\\(", "\\)"]
        ], //行内公式选择符
        displayMath: [
          ["$$", "$$"],
          ["\\[", "\\]"]
        ], //段内公式选择符
        skipTags: [
          "script",
          "noscript",
          "style",
          "textarea",
          "pre",
          "code",
          "a"
        ]
      },
      "HTML-CSS": {
        showMathMenu: false,
        linebreaks: { automatic: true }
      }
    });
    // MathJax.Hub.Queue(["Typeset", MathJax.Hub, this.$refs.content]);

    //给安卓提供的回调方法
    window.callback = (msg: any) => {
      const { action } = msg;
      switch (msg.action) {
        case 5:
          pageEvent.emit("playEnd");
          break;
        case 10:
          this.init(msg.text);
          break;
        default:
          break;
      }
    };

    pageEvent.on("pause", () => {
      this.pause();
    });

    pageEvent.on("play", () => {
      this.actionMode = "play";
    });

    //视频监听
    pageEvent.on("videoShow", (data: any) => {
      if (!this.devMode) {
        //安卓端环境下暂停语音
        window.dm.stopSpeaking();
      }
      // console.log('data',data)
      this.videoVisible = true;
      this.videoData = data;
      this.videoSrc = data.firstFrame.base64;
      this.videoUrl = data.url;

      // this.videoObject = document.getElementsByClassName("video");
      // console.log("video", this.videoObject);
      // this.videoObject.currentTime = this.currentTime;
    });
  }
  // 关闭视频
  closeVideo() {
    this.videoVisible = false;
    // this.video.paused
    let a: any = this.$refs.video;
    this.currentTime = a.currentTime;
  }

  switchControl(key: "play" | "pause") {
    const keyValue = {
      play: "pause",
      pause: "play"
    };
    this.actionMode = keyValue[key];
    switch (this.mode) {
      case "preview": {
        this.previewAction();
        break;
      }
      case "answer": {
        pageEvent.emit("actionControl", this.actionMode);
        break;
      }
    }
  }

  replay() {
    this.actionMode = "play";
    pageEvent.emit("actionControl", "replay");
  }

  switchStep(index: number, stop: boolean = true) {
    // pageEvent.removeAllListeners('')
    if (!this.devMode) {
      pageEvent.removeAllListeners("playEnd");
      window.dm.stopSpeaking();
    }
    pageEvent.emit("actionControl", "pause");
    this.swiper.slideTo(index, 500);
    const stepData = this.answers[index];
    // this.step = index;
    this.answerIndex = stepData.index;
    if (stop) this.pause();
  }

  pause() {
    this.actionMode = "pause";
  }

  startByIndex(index: number) {
    this.bindEvent();
    this.mode = "answer";
    this.actionMode = "play";
    this.bindMainIndex = index;
    if (this.answers.length > 1) {
      const qsRadio = this.$refs.qsRadio as any;
      qsRadio.setDefault(index);
    }
    this.$nextTick(() => {
      const mySwiper = this.$refs.mySwiper as any;
      this.swiper = mySwiper.$swiper;

      this.switchStep(index, false);
      this.handleTimeout(() => {
        pageEvent.emit("actionControl", "play");
      }, 500);
    });
  }

  //审题过程的交互
  previewAction() {
    this.startByIndex(0);
    // this.bindEvent();
  }

  bindEvent() {
    let touchTimeout: any;
    pageEvent.on("windowTouch", () => {
      clearTimeout(touchTimeout);
      this.contronlVisable = true;
      touchTimeout = setTimeout(() => {
        this.contronlVisable = false;
      }, 3500);
    });
    pageEvent.emit("windowTouch");
  }

  eventEmit() {
    pageEvent.emit("windowTouch");
  }

  //切换播放速率
  toggleSpeed(val: number) {
    console.log("切换播放速率", val);
    pageEvent.emit("windowTouch");
    if (this.devMode) return;
    window.dm.setSpeed(val);
  }

  //平板返回关闭
  back() {
    if (this.devMode) return;
    window.dm.exit();
  }
}
</script>
<style lang="scss" scoped>
@import "./index.scss";

.test-content {
  color: #ffffff;
  font-size: 20px;
  width: 650px;
  padding: 50px;
  word-break: break-all;
}
</style>
<style lang="scss">
.test-content {
  .color0 {
    color: #13ef56;
  }
}

.text-highlight {
  background-color: rgba(122, 158, 255, 0.2);
}
// 视频样式
.videoStyle {
  position: fixed;
  width: 100%;
  height: 100;
  z-index: 100;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: gray;
  // background: gray;
  video {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
  .back {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 8%;
    z-index: 110;
    background: rgba(128, 128, 128, 0.8);
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
}
//去掉video右下角的全屏图标
video::-webkit-media-controls-fullscreen-button {
  display: none;
}
</style>
