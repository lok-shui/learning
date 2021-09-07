<template>
  <div
    v-show="stepIndex === -1 || index - 1 <= stepIndex || stepData.activated"
    class="item-contain"
    ref="stepItem"
  >
    <div class="flex title-item fade-in" @click="startByUser(index - 1)">
      <div class="index-text">步骤{{ index }}</div>
      <div class="ic-play" />
      <div v-if="stepData.type" class="type-text">{{ stepData.type }}</div>
      <div class="title-text" v-html="stepData.title" />
    </div>
    <div v-show="open">
      <div
        v-for="(item, $index) in stepData.contents"
        :key="$index"
        class="item-content"
        :class="{
          hidden: !item.activated && $index > subStepIndex,
          'hot-highlight': getHighlight(index - 1, $index)
        }"
        @click="handleClick(index - 1, $index)"
      >
        <div v-if="item.options">
          <a-popover
            trigger="click"
            placement="bottomLeft"
            :visible="
              ((isTarget && !item.userAnswer) || resultVisable) &&
                getHighlight(index - 1, $index) &&
                open &&
                resultTag
            "
            :getPopupContainer="getPopupContainer"
          >
            <div slot="content" class="question-contain">
              <pop-content
                :chooses="item.options"
                :correctValue="item.options[item.correctAnswers]"
                :answerRecords="
                  item.userAnswer ? item.options.indexOf(item.userAnswer) : null
                "
                @popContent="popContent"
              />
            </div>
            <typer :content="item.text" :image="item.imageInLine" ref="typer" />
          </a-popover>
        </div>
        <div v-else>
          <typer :content="item.text" :image="item.imageInLine" ref="typer" />
        </div>
        <!-- <div class="unknown fade-in" /> -->

        <a-popover
          v-show="
            getHighlight(index - 1, $index) &&
              actionMode === 'pause' &&
              item.activated &&
              !(item.options && !item.userAnswer)
          "
          trigger="click"
          placement="bottomRight"
          :getPopupContainer="getPopupContainer"
          @visibleChange="popoverChange"
        >
          <div
            slot="content"
            :class="
              `${
                item.knowledgePoints ? 'knowledge-contain' : 'unknown-contain'
              }`
            "
          >
            <div v-if="item.knowledgePoints">
              <feed-back :knowledgePoints="item.knowledgePoints" />
            </div>
            <div v-else>
              <un-known @closePop="closePop" />
            </div>
            <a-icon class="ic-close" type="close" @click="closePop" />
          </div>
          <div v-if="getHighlight(index - 1, $index)" class="unknown fade-in" />
        </a-popover>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import Typer from "./Typer.vue";
import UnKnown from "@/components/UnKnow.vue";
import FeedBack from "@/components/FeedBack.vue";
import PopContent from "@/components/PopContent.vue";

@Component({
  components: {
    Typer,
    UnKnown,
    FeedBack,
    PopContent
  }
})
export default class StepItem extends Vue {
  @Prop() stepData: any;
  @Prop() index!: number;
  @Prop() stepIndex!: number; //当前处于什么步骤
  @Prop() subStepIndex!: number; //当前子步骤
  @Prop() highlightLine!: number[];
  @Prop() isTarget!: boolean;
  @Prop() actionMode!: string; //play,pause

  open: boolean = false;

  resultVisable: boolean = false;

  resultTag: boolean = true;

  @Watch("highlightLine", { deep: true })
  handleChange() {
    this.resultVisable = false;
    this.resultTag = true;
  }

  mounted() {
    const MathJax = window.MathJax;
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
  }

  expand() {
    this.open = true;
  }

  handleOperation(index: number, type: string = "play") {
    const typers = this.$refs.typer as any[];
    const typer = typers[index];
    if (!typer) return;
    switch (type) {
      case "play":
        typer.play();
        break;
      case "show":
        typer.show();
        break;
      case "clean":
        typer.clean();
        break;
    }
  }

  handleClick(step: number, subStep: number) {
    this.$emit("handleClick", {
      step,
      subStep
    });
  }

  startByUser(index: number) {
    const { activated } = this.stepData;
    if (activated) {
      // if (this.actionMode !== "pause") return;
      this.open = !this.open;
      this.$emit("stepToggle", {
        index,
        val: this.open
      });
      return;
    }
    this.$emit("startByUser", index);
  }

  popContent(val: string) {
    this.$emit("userAnswer", val);
  }

  getHighlight(stepIndex: number, subStepIndex: number) {
    const [step, subStep] = this.highlightLine;
    return stepIndex === step && subStepIndex === subStep;
  }

  getPopupContainer() {
    return this.$refs.stepItem;
  }

  toggleResult() {
    this.resultVisable = !this.resultVisable;
    this.resultTag = true;
  }

  closeResult() {
    this.resultTag = false;
  }

  closePop() {
    const stepItem = this.$refs.stepItem as HTMLElement;
    const el = stepItem.querySelector(".unknown") as HTMLElement;
    el.click();
  }

  popoverChange(data: any) {
    this.$emit("popoverChange", data);
  }
}
</script>
<style lang="scss" scoped>
.item-contain {
  width: 100%;
  height: auto;
  position: relative;
  margin-bottom: 8px;
  transition: 0.5s;

  // &.hide {
  //   height: 40px;
  //   overflow: hidden;
  // }

  .title-item {
    position: relative;
    align-items: center;
    width: 100%;
    min-height: 40px;
    background-color: #ffffff;
    border-radius: 4px;
    padding: 0 16px;

    &.title-highlight {
      background-color: rgba(122, 158, 255, 0.4);
    }

    .index-text {
      color: rgba(0, 0, 0, 0.65);
      font-size: 12px;
      margin-right: 8px;
    }

    .ic-play {
      width: 24px;
      height: 24px;
      background-size: 100% 100%;
      background-image: url("../../../assets/images/v1.6/icon_play_step.png");
      margin-right: 24px;
    }

    .type-text {
      height: 30px;
      line-height: 30px;
      padding: 0 12px;
      color: #5e86f1;
      font-size: 12px;
      font-weight: bold;
      background-color: rgba(122, 158, 255, 0.2);
      border-radius: 4px;
      margin-right: 16px;
    }

    .title-text {
      flex: 1;
      word-break: break-all;
      font-size: 16px;
      line-height: 24px;
      color: rgba(0, 0, 0, 0.85);
      font-weight: bold;
    }
  }

  .item-content {
    width: 100%;
    line-height: 24px;
    padding: 8px 100px 8px 0;
    color: rgba(0, 0, 0, 0.45);
    margin-top: 8px;
    position: relative;

    &.hidden {
      padding: 0;
      margin-top: 0;
      height: 0;
      overflow: hidden;
    }

    .unknown {
      width: 84px;
      height: 28px;
      background-size: 100% 100%;
      background-image: url("../../../assets/images/v1.6/icon_unknown.png");
      position: absolute;
      right: 8px;
      top: calc(50% - 14px);
      // display: none;
    }
  }
}
</style>
<style lang="scss">
@mixin hotIcon() {
  width: 20px;
  height: 24px;
  // display: inline-block;
  background-size: 100% 100%;
  // position: absolute;
  margin: 0 5px;
}

.knowledge-contain {
  position: relative;
  width: 548px;
  height: 200px;
}

.unknown-contain {
  position: relative;
  padding-top: 10px;
  width: 320px;
  height: 180px;
}

.ic-close {
  position: absolute;
  top: 12px;
  right: 12px;
}

.question-contain {
  width: 548px;
  height: 215px;
}

.ic-question {
  @include hotIcon;
  background-image: url("../../../assets/images/v1.6/icon_question.png");
}

.ic-qs::after {
  content: "";
  display: inline-block;
  width: 20px;
  height: 24px;
  margin-top: -5px;
}

.ic-right {
  @include hotIcon;
  background-image: url("../../../assets/images/v1.6/icon_right.png");
  margin-left: 5px;
}
.ic-wrong {
  @include hotIcon;
  background-image: url("../../../assets/images/v1.6/icon_wrong.png");
  margin-left: 5px;
}
</style>
