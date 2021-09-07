<template>
  <div v-if="stepData" class="ans-content">
    <div
      v-if="stepData.type.indexOf('思路') === -1 || questionNo"
      class="flex center head"
    >
      <div class="icon" :class="{ icon1: step === 0, icon2: step === 1 }">
        <div v-if="solveStep" class="flex center font">
          {{ questionNo }}
        </div>
      </div>
      <div class="type">
        {{ questionNo ? "题目解析" : stepData.type }}
      </div>
      <div class="icon-replay" @click="audioPlay" />
    </div>

    <div v-if="stepData.text" class="text-contain">
      <div class="text-item">
        <span class="type">{{ stepData.type }}</span>
        <span class="text">{{ stepData.text }}</span>
      </div>
    </div>

    <div
      v-if="stepData.content"
      class="content"
      :class="{ hidden: !showDetail && step > 1 }"
    >
      <span v-if="typeof stepData.content === 'string'">{{
        stepData.content
      }}</span>
      <div v-else ref="ansContent">
        <div
          v-for="(item, index) in stepData.content"
          :key="item.text"
          @click="ansClick(item.onClick, index)"
        >
          <div
            class="content-text"
            :class="{ active: actived && activeText === index }"
            v-html="item.text"
            ref="contentText"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component
export default class AnsContent extends Vue {
  @Prop() stepData: any;
  // @Prop() step!: number;
  // @Prop() solveStep!: number;
  @Prop() actived: any;

  showDetail: boolean = false;
  activeText: any = null;

  get step() {
    return this.stepData.step;
  }

  get solveStep() {
    return this.stepData.solveStep;
  }

  get questionNo() {
    return this.stepData.questionNo;
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
        showMathMenu: false
      }
    });
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
  }

  //答题过程中content点击事件
  ansClick(data: any, index: number) {
    if (!data) return;
    // console.log(data);
    const contentEl = (this.$refs.contentText as any[])[index];
    this.$emit("ansClick", { data, contentEl, step: this.stepData.step });
    this.activeText = index;
  }

  //答题文本替换
  replaceContent(data: any) {
    console.log("答题文本替换", data);
    const el = this.$refs.ansContent;
    const { target, content } = data;
    const ele = (el as Element).querySelector(target);
    if (ele) {
      ele.innerHTML = content
        .replace(/<latex>/g, "$")
        .replace(/<\/latex>/g, "$");
      this.$nextTick(() => {
        const MathJax = window.MathJax;
        MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
      });
    }
    // pageEvent.emit("subStepFinish");
    this.$emit("subStepFinish");
  }

  //文本的上色
  colourContent(data: any[]) {
    //data:{target,color}[]
    const el = this.$refs.ansContent;
    data.forEach((item: any) => {
      const { target, color } = item;
      // const ele = (el as Element).querySelector(target);
      // if (ele) {
      //   ele.style.color = color;
      // }
      const eles = (el as Element).querySelectorAll(target);
      if (eles.length) {
        eles.forEach(ele => {
          ele.style.color = color;
        });
      }
    });
  }

  //文本还原
  cleanContent(data: any) {
    //data: {target}
    const el = this.$refs.ansContent;
    data.forEach((item: any) => {
      const { target } = item;
      // const ele = (el as Element).querySelector(target);
      // if (ele) {
      //   ele.style.color = "";
      // }
      const eles = (el as Element).querySelectorAll(target);
      if (eles.length) {
        eles.forEach(ele => {
          ele.style.color = "";
        });
      }
    });
    this.activeText = null;
  }

  audioPlay() {
    this.$emit("audioPlay", this.step);
  }

  openDetail() {
    this.showDetail = true;
  }
}
</script>

<style lang="scss" scoped>
.ans-content {
  padding-bottom: 20px;
  position: relative;
  overflow: hidden;

  .head {
    height: 28px;
    justify-content: flex-start;
    margin-bottom: 14px;

    .icon {
      width: 28px;
      height: 28px;
      background-size: 100% 100%;
      border-radius: 8px;
      overflow: hidden;

      &.icon1 {
        background-image: url("../../../assets/images/icon_step1_active.png");
      }
      &.icon2 {
        background-image: url("../../../assets/images/icon_step2_active.png");
      }

      .font {
        width: 100%;
        height: 100%;
        background-color: #14b2e4;
        color: #e3f2fe;
        font-size: 17px;
        font-family: NotoSansHans-Bold, NotoSansHans;
      }
    }

    .type {
      font-size: 17px;
      color: #ffffff;
      margin-left: 13px;
      font-weight: 500;
      line-height: 26px;
    }

    .icon-replay {
      width: 20px;
      height: 20px;
      background-size: 100% 100%;
      background-image: url("../../../assets/images/icon_replay.png");
      margin-left: 10px;
    }
  }

  .text-contain {
    margin-left: 40px;
    // height: 28px;
    // margin-top: 14px;

    .text-item {
      position: relative;
      display: inline-block;
      // height: 28px;
      line-height: 28px;
      font-size: 17px;
      background-color: #40457c;
      border-radius: 5px;
      padding-left: 5px;

      .type {
        // float: left;
        height: 28px;
        background-color: #477dff;
        color: #ffffff;
        border-radius: 5px;
        padding: 0 8px;
        display: inline-block;
        margin-left: -5px;
      }

      .text {
        // float: left;
        // height: 28px;
        color: #adb3ef;
        padding: 0 5px;
      }

      .icon {
        float: left;
        width: 28px;
        height: 28px;
        background-size: 100% 100%;
        background-image: url("../../../assets/images/icon_arrow_down.png");

        &.open {
          transform: rotate(180deg);
        }
      }
    }
  }

  .content {
    position: relative;
    color: #adb3ef;
    font-size: 17px;
    line-height: 24px;
    word-wrap: break-word;
    margin-top: 14px;
    margin-left: 40px;
    transition: all 0.3s ease-in-out;
    opacity: 1;
    &.hidden {
      display: none;
      opacity: 0;
    }

    // .content-text {
    //   display: inline-block;
    //   p {
    //     line-height: 28px;
    //     margin-bottom: 6px;
    //   }
    //   &.active p {
    //     background-color: #13163B;
    //     border-radius: 3px;
    //   }
    // }
  }
}
</style>
<style lang="scss">
.content-text {
  display: inline-block;
  p {
    line-height: 28px;
    margin-bottom: 8px;
  }
  &.active p {
    background-color: #13163b;
    border-radius: 3px;
    padding-right: 6px;
  }
}
</style>
