<template>
  <div class="feedback" ref="parent">
    <!-- 这是“详细讲解-小问交互-正确反馈”的组件 -->
    <header class="header">
      <div class="word">知识点解析</div>
      <div
        v-for="(item, index) in knowledgePoints"
        :key="index"
        :class="activeClass == index ? 'active' : 'primary'"
        @click="getItem(index, item)"
      >
        {{ item.text }}
      </div>
    </header>
    <section class="section">
      <!-- 微视频 -->
      <div v-for="(a, index1) in cards" :key="index1" class="d_jump">
        <!-- 知识点 -->
        <div class="static">
          <!-- <img
            src="../assets/images/v1.6/ic_pop_knowledge.png"
            alt=""
            height="24"
          /> -->
          <div v-for="(t, i) in cardText" :key="i">
            <div>{{ t }}</div>
          </div>
          <!-- <div>{{cardText[0]}}</div> -->
        </div>
        <!-- 封面图  -->
        <div class="Tab" ref="correct" @click="self(index1, a)" v-if="include">
          <img :src="a.firstFrame.base64" alt="封面图" class="bgImg" />
          <img
            src="../assets/images/v1.6/icon_play_step.png"
            alt="按钮"
            class="imgBtn"
          />
        </div>
        <!-- <div class="Tab"   v-else >
          <img :src="a.firstFrame.base64" alt="封面图" class="bgImg" />
          <img
            src="../assets/images/v1.6/icon_play_step.png"
            alt="按钮"
            class="imgBtn"
          />
        </div> -->
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Ant, { ConfigProvider } from "ant-design-vue";
import VideoChild from "./Video.vue"; // 引入视频组件
import pageEvent from "@/utils/event";
// import "@/views/detailNew/Index"

@Component({
  components: {
    VideoChild,
    AModal: Ant.Modal,
    AButton: Ant.Button
  }
})
export default class FeedBack extends Vue {
  @Prop({}) knowledgePoints!: any;

  videoURL: string = "http://img.tianxiang.com/d/2018/06/5b1a45f89f96b.mp4";

  active: string = ""; // 选中某一text时的样式
  activeClass: number = 0; // 头部标题名字索引
  changeClass: number = -1; // 微视频的索引
  cards: any = []; // cards
  posterSrc: string = ""; // 视频的封面图
  Tab: string = "Tab"; // tab的样式

  videoUrl: string = "";

  zindex: any = null;
  cardText: any = [];
  include: boolean = false;
  mounted() {
    for (let item of this.knowledgePoints) {
      this.cards.push(item.cards[0]);
      this.posterSrc = item.cards[0].firstFrame;
      this.videoUrl = item.cards[0].url;

      let a = item.cards[0];
      if ("firstFrame" in item.cards[0]) {
        this.include = true;
      } else {
        this.include = false;
      }

      let tex = item.cards[0].text;
      let t = tex.split("\n\n") + "<br/>";
      // let aa = this.cardText.push(t)

      var strs = new Array();
      strs = tex.split("\n\n");
      for (let i = 0; i < strs.length; i++) {
        this.cardText.push(strs[i]);
        console.log("12020", this.cardText.length);
      }
    }

    this.$nextTick(() => {
      this.zindex = document.getElementsByClassName("content-contain")[0];
    });
  }
  getItem(index: any, item: any) {
    this.activeClass = index;
    // 定位锚点
    let jump = document.querySelectorAll(".d_jump");
    jump[index].scrollIntoView({ block: "start", behavior: "smooth" });
  }
  // 放大微视频
  self(index: any, item: any) {
    this.changeClass = index;
    // console.log('index1',item.url, item.firstFrame.base64)
    pageEvent.emit("videoShow", item);
    // this.zindex.style.cssText =
    //   "z-index:100;left:0;top:0;width:100%;height:100%;";
  }
  // 关闭放大的视频
  hidden(index: any) {
    this.changeClass = -1;
    const slides = document.getElementsByClassName("Tab2");
    for (let i = 0; i < slides.length; i++) {
      const slide = slides[0] as HTMLElement;
      slide.className = "Tab";
    }
    // this.zindex.style.cssText = "z-index:0;";
  }
}
</script>
<style lang="scss" scoped>
.feedback {
  width: 100%;
  height: 239px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 12px 24px 0px rgba(41, 67, 83, 0.1),
    0px 30px 14px -20px rgba(74, 96, 153, 0.15);
  padding: 20px;
  z-index: -1 !important;
  .header {
    // width: 700px;
    width: 100%;
    margin-bottom: 25px;
    display: flex;
    justify-content: flex-start;
    .word {
      color: gray;
      margin-right: 10px;
    }
    .primary {
      height: 24px;
      line-height: 24px;
      color: #fd9700;
      margin: auto 0;
      padding: 0 10px;
    }
    .active {
      color: #000;
      font-weight: bold;
      border-radius: 15px;
      background: #ffc82e;
      margin: auto 0;
      padding: 0 10px;
    }
  }
  .section {
    display: flex;
    overflow-x: auto;
  }
  .d_jump {
    display: flex;
    .static {
      width: 210px;
      height: 144px;
      background: #f0f4fd;
      margin-right: 20px;
      padding: 5px 10px;
      background: url("../assets/images/v1.6/ic_pop_knowledge_bg@2x.png")
        no-repeat;
      background-size: cover;
      padding-top: 50px;
      overflow-y: auto;
    }
    .Tab {
      width: 256px;
      height: 144px;
      margin-right: 20px;
      background: linear-gradient(
          180deg,
          rgba(254, 254, 254, 1) 0%,
          rgba(242, 246, 248, 1) 100%
        )
        rgba(0, 0, 0, 0.45);
      border-radius: 5px;
      overflow: hidden;
      position: relative;
      .bgImg {
        max-width: 100%;
        max-height: 100%;
      }
      .imgBtn {
        width: 35px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
      }
      .backIcon {
        display: none;
      }
      .video {
        display: none;
      }
      .wrap {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 30px;
        color: white;
        padding: 0 5px;
        background: rgba(128, 128, 128, 0.6);
      }
    }
  }
}
.Tab2 {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  overflow: hidden;
  z-index: 9999;
  .bgImg {
    display: none;
  }
  .imgBtn {
    display: none;
  }
  .backIcon {
    display: inline-block;
    max-width: 100%;
    max-height: 100%;
  }
  .video {
    display: block;
  }
  .wrap {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 8%;
    color: white;
    padding: 0 5px;
    background: rgba(128, 128, 128, 0.9);
  }
}
</style>
