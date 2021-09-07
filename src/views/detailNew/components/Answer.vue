<template>
  <div class="flex answer-contain">
    <div
      class="title-contain"
      :class="{ open: answerData.activated, max: titleMax }"
      ref="title"
    >
      <div class="inner" ref="titleInner">
        <title-content :title="title" />
        <div
          v-if="title.questions && title.questions.length > 1"
          class="qs-contain"
        >
          <div class="question">
            <span v-html="answerData.text" />
          </div>
        </div>
      </div>
      <!-- <div
        v-if="answerData.activated"
        class="drag-icon"
        ref="titleDrag"
        @click="titleMax = !titleMax"
      /> -->
      <div v-if="answerData.activated" class="drag-contain">
        <a-icon class="drag-icon" type="down" @click="titleMax = !titleMax" />
      </div>
    </div>
    <div class="content-contain">
      <div v-if="graph" class="img-contain">
        <div class="drawing-board">
          <drawing-board :graph="graph" ref="drawingBoard" />
        </div>
      </div>

      <div class="content" :class="{ full: !this.graph }">
        <div
          v-show="openCount > 0 && answerData.activated && step > -1"
          class="hot-area fade-in"
          ref="hot"
        />
        <div v-if="!answerData.activated">
          <title-content
            class="title-in-content"
            :title="title"
            :manual="bindMainStep"
            ref="titleContent"
          />
          <div
            v-if="title.questions && title.questions.length > 1"
            class="question-text"
            v-html="answerData.text"
          />
        </div>
        <div v-else class="fade-in content-inner no-scroll" ref="content">
          <step-item
            v-for="(item, $index) in answerData.steps"
            :key="$index"
            :stepData="item"
            :index="$index + 1"
            :stepIndex="step"
            :subStepIndex="subStep"
            :highlightLine="highlightLine"
            :isTarget="isTarget"
            :actionMode="actionMode"
            @handleClick="setTarget"
            @startByUser="startByUser"
            @stepToggle="stepToggle"
            @userAnswer="userAnswer"
            @popoverChange="popoverChange"
            ref="stepItem"
          />
          <div
            v-if="answerData.isOver"
            class="flex center over-contain"
            :class="{ full: overBtnList.length > 1 }"
          >
            <div
              v-for="(item, index) in overBtnList"
              :key="item.value"
              class="over-btn"
              :class="{ primary: index === 0 }"
              @click="handleOverClick(item.value)"
            >
              {{ item.label }}
            </div>
          </div>
        </div>
      </div>

      <div v-show="coverVisable" class="scroll-cover" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { cloneDeep, last, isEmpty } from "lodash";
import pageEvent from "@/utils/event";
import MyMixins from "@/utils/mixins";

import DrawingBoard from "./DrawingBoard.vue";
import TitleContent from "./TitleContent.vue";
import StepItem from "./StepItem.vue";

@Component({
  components: {
    DrawingBoard,
    TitleContent,
    StepItem
  }
})
export default class Answer extends MyMixins {
  @Prop() data: any;
  @Prop() graph: any;
  @Prop() title: any;
  @Prop() answerIndex!: number; //标记父级当前题目index
  @Prop() devMode!: boolean;
  @Prop() index!: number;
  @Prop() bindMainIndex!: number;
  @Prop() qsOverList!: boolean[];
  @Prop() commonAudios!: any;

  answerData: any;

  hotArea: any;

  colorArr: string[] = ["#0DC8A0", "#FF446E", "#7A9EFF", "#A55FEE", "#FF9D24"];

  actionMode: string = "pause"; //pause play

  autoScroll: boolean = false; //表示是否播放过程中的自动滚动，用来区分自动滚动和手动滚动

  highlightLine: number[] = [-1, -1]; //记录当前高亮区域的所属步骤和小步骤

  qsMode: boolean = false; //是否处在待答题状态

  timeoutEvent: any;

  isFirst: boolean = true;

  openCount: number = 0;

  mainOver: boolean = false;

  mainTag: number = 0;

  overviewFinish: boolean = false;

  stepJumpBlock: boolean = false;
  stepJumpTarget: number = 0;

  titleMax: boolean = false;

  intervalEvent: any;

  coverVisable: boolean = false;

  get overBtnList() {
    let list = [{ label: "巩固练习", value: 99 }];
    if (this.qsOverList.length > 1) {
      let tag = this.answerData.index;
      if (tag < this.qsOverList.length && !this.qsOverList[tag]) {
        list.unshift({ label: "学习下一问", value: tag });
      } else {
        const animate = () => {
          tag += 1;
          if (tag >= this.qsOverList.length) {
            tag = 0;
          }
          const item = this.qsOverList[tag];
          if (!item) {
            list.unshift({ label: `学习第${tag + 1}问`, value: tag });
            tag = this.answerData.index - 1;
          } else if (tag !== this.answerData.index - 1) {
            animate();
          }
        };
        animate();
      }
    }

    return list;
  }

  get isTarget() {
    return this.answerData.index === this.answerIndex;
  }

  get step() {
    return this.answerData.step;
  }

  get subStep() {
    return this.answerData.subStep;
  }

  get bindMainStep() {
    return this.index === this.bindMainIndex;
  }

  created() {
    this.answerData = this.data;
  }

  mounted() {
    const MathJax = window.MathJax;
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);

    pageEvent.on("actionControl", val => {
      if (!this.isTarget) return;
      switch (val) {
        case "play":
          this.play();
          break;
        case "pause":
          this.pause();
          break;
        case "replay":
          this.answerData.isOver = false;
          this.actionMode = "play";
          pageEvent.emit("stepJump", { value: "审题" });
          break;
      }
    });

    //步骤跳跃监听
    pageEvent.on("stepJump", val => {
      if (!this.isTarget) return;
      const drawingBoard = this.$refs.drawingBoard as any;
      this.cleanBoard();
      const actionMode = cloneDeep(this.actionMode);
      this.pause();
      this.answerData.isOver = false;
      this.answerData.step = -1;
      this.answerData.subStep = 0;
      this.highlightLine = [-1, -1];
      this.qsMode = false;
      if (actionMode) this.autoScroll = true;
      this.answerData.activated = false;
      this.answerData.steps.forEach((step: any) => {
        step.activated = false;
        step.contents.forEach((content: any) => {
          content.activated = false;
          // if (content.options) {
          //   content.userAnswer = null;
          // }
        });
      });
      this.cleanStepItem();

      const { value } = val;
      switch (value) {
        case "审题":
          if (this.graph) drawingBoard.init(this.graph);
          this.isFirst = true;
          if (actionMode === "play") this.play();
          break;
        case "总览":
          if (this.graph) drawingBoard.init(this.graph);
          this.mainOver = true;
          // this.qsMode = false;
          this.isFirst = true;
          this.overviewFinish = false;
          this.$nextTick(() => {
            this.actionMode = actionMode;
            // if (actionMode === "play") this.stepOverview();
            this.stepOverview();
          });
          break;
        default:
          this.answerData.activated = true;
          this.answerData.step = value;
          this.actionMode = actionMode;
          this.mainOver = true;
          this.overviewFinish = true;
          this.$nextTick(() => {
            this.startByUser(value);
          });
          break;
      }
      if (actionMode === "play") pageEvent.emit("play");
      this.$nextTick(() => {
        const stepItems = this.$refs.stepItem as any[];
        if (stepItems && stepItems.length) {
          stepItems.forEach(item => {
            const titleItem = item.$el.querySelector(
              ".title-item"
            ) as HTMLElement;
            titleItem.classList.remove("title-highlight");
          });
        }
      });
    });
  }

  play() {
    // console.log(this.answerData.index, "play");
    this.actionMode = "play";
    this.cleanBoard();
    if (this.bindMainStep && !this.mainOver) {
      //mainAudioFinish
      pageEvent.removeAllListeners("mainAudioFinish");
      const { actions, audios, images } = this.title;
      const audio = audios[this.mainTag];
      const action = actions[this.mainTag];
      if (!isEmpty(action)) {
        const { graphActions, textActions } = action;
        if (graphActions) {
          this.graphAction(graphActions);
          this.titleTextAction(graphActions);
        }
        if (textActions) {
          this.titleTextAction(textActions);
        }
      }
      this.playAudio(audio, "main");
      pageEvent.on("mainAudioFinish", () => {
        pageEvent.removeAllListeners("mainAudioFinish");
        this.mainTag += 1;
        if (this.mainTag >= audios.length) {
          this.mainOver = true;
        }
        this.timeoutEvent = setTimeout(() => {
          clearTimeout(this.timeoutEvent);
          this.play();
        }, 1000);
      });
    } else if (!this.answerData.activated) {
      //当前问未审过题
      this.qsMode = false;
      const { audio, actions, audios } = this.answerData;
      pageEvent.removeAllListeners("mainAudioFinish");
      if (!this.devMode) {
        pageEvent.removeAllListeners("playEnd");
        window.dm.stopSpeaking();
      }

      if (audio) {
        this.playAudio(audio, "main");
        if (actions) {
          const { graphActions } = actions;
          this.graphAction(graphActions);
        }

        pageEvent.on("mainAudioFinish", () => {
          pageEvent.removeAllListeners("mainAudioFinish");
          console.log(this.answerData.index, "审题结束");
          this.stepOverview();
        });
      } else if (audios) {
        const length = audios.length;
        let index = 0;
        const play = () => {
          if (actions && actions[index]) {
            const { graphActions } = actions[index];
            this.graphAction(graphActions);
          }
          const _audio = audios[index];
          this.playAudio(_audio, "main");
          index += 1;
        };
        pageEvent.on("mainAudioFinish", () => {
          this.cleanBoard();
          if (index >= length) {
            pageEvent.removeAllListeners("mainAudioFinish");
            console.log(this.answerData.index, "审题结束");
            this.stepOverview();
          } else {
            play();
          }
        });

        // this.handleTimeout(() => {
        //   pageEvent.emit("mainAudioFinish");
        // }, 100);
        play();
      }
    } else if (this.answerData.step === -1) {
      //总览
      this.qsMode = false;
      if (!this.overviewFinish) {
        // pageEvent.removeAllListeners("stepAudioFinish");
        this.stepOverviewAudio();
        return;
      }
      this.answerData.step = 0;
      this.$nextTick(() => {
        const stepItems = this.$refs.stepItem as any[];
        const item = stepItems[0];
        item.expand();
        this.actionPlay();

        this.bindInteraction();
      });
    } else {
      const { step, subStep } = this.answerData;
      const stepData = this.answerData.steps[step];
      const subStepData = stepData.contents[subStep];
      if (this.qsMode && subStepData.options && !subStepData.userAnswer) {
        pageEvent.removeAllListeners("stepAudioFinish");
        pageEvent.removeAllListeners("subStepFinish");
        pageEvent.removeAllListeners("audioEnd");
        pageEvent.removeAllListeners("typerEnd");
        this.qsMode = false;
        this.nextSubStep(true);
        return;
      }
      this.actionPlay(true);
    }
  }

  //总览
  stepOverview() {
    this.answerData.activated = true;
    this.$nextTick(() => {
      const titleEl = this.$refs.title as HTMLElement;
      const titleInner = this.$refs.titleInner as HTMLElement;
      const el = titleInner.querySelector(".question") as HTMLElement;
      if (!el) return;
      const height = 108 * (window.innerWidth / 960);
      titleEl.scrollTop = el.offsetTop + el.clientHeight - height + 8;
    });

    if (this.actionMode === "pause") return;
    // pageEvent.removeAllListeners("stepAudioFinish");
    this.stepOverviewAudio();
  }

  //总览播音
  stepOverviewAudio() {
    //stepAudioFinish
    pageEvent.removeAllListeners("stepAudioFinish");
    if (!this.devMode) {
      window.dm.stopSpeaking();
    }
    const audios = this.answerData.steps.map((item: any) => item.audio);
    const actions = this.answerData.steps.map((item: any) => item.actions);
    // let index = -1;
    let index = 0;
    const length = audios.length;
    pageEvent.on("stepAudioFinish", () => {
      this.cleanBoard();
      const stepItems = this.$refs.stepItem as any[];
      if (stepItems && stepItems.length) {
        stepItems.forEach(item => {
          const titleItem = item.$el.querySelector(
            ".title-item"
          ) as HTMLElement;
          titleItem.classList.remove("title-highlight");
        });
      }
      // index += 1;
      if (index >= length) {
        pageEvent.removeAllListeners("stepAudioFinish");
        this.overviewFinish = true;
        this.openCount += 1;
        this.timeoutEvent = setTimeout(() => {
          if (this.actionMode === "pause") return;
          this.answerData.step = 0;
          this.$nextTick(() => {
            const stepItems = this.$refs.stepItem as any[];
            const item = stepItems[0];
            item.expand();
            this.actionPlay();

            this.bindInteraction();
          });

          clearTimeout(this.timeoutEvent);
        }, 3000);
      } else {
        //title-item  title-highlight
        if (actions && actions[index]) {
          const { graphActions } = actions[index];
          this.graphAction(graphActions);
        }
        const audio = audios[index];
        this.$nextTick(() => {
          this.playAudio(audio, "step");
          const stepItems = this.$refs.stepItem as any[];
          const item = stepItems[index].$el as HTMLElement;
          const titleItem = item.querySelector(".title-item") as HTMLElement;
          titleItem.classList.add("title-highlight");
          index += 1;
        });
      }
    });
    this.handleTimeout(() => {
      pageEvent.emit("stepAudioFinish");
    }, 100);
  }

  bindDragEvent() {
    const titleEl = this.$refs.title as HTMLElement;
    const dragEl = this.$refs.titleDrag as HTMLElement;
    const minHeight = 108 * (window.innerWidth / 960);
    const maxHeight = window.innerHeight * 0.3;
    let startY = 0;
    let dragTop = 0;
    let baseHeight = 108 * (window.innerWidth / 960);

    this.handleTimeout(() => {
      dragEl.style.display = "block";

      dragEl.addEventListener("touchstart", (e: any) => {
        const touchData = e.targetTouches[0];
        startY = touchData.clientY;
        baseHeight = titleEl.clientHeight;
        dragTop = dragEl.offsetTop;
      });

      dragEl.addEventListener("touchmove", (e: any) => {
        const touchData = e.targetTouches[0];
        const distanceH = touchData.clientY - startY;
        const height = baseHeight + distanceH;
        if (height <= minHeight || height > maxHeight) {
          return;
        }
        titleEl.style.height = `${height}px`;
        dragEl.style.top = `${dragTop + distanceH}px`;
        if (height >= maxHeight - 5) {
          titleEl.classList.add("scroll");
        } else {
          titleEl.classList.remove("scroll");
        }
      });

      dragEl.addEventListener("touchend", () => {
        startY = 0;
        dragTop = 0;
      });
    }, 500);
  }

  //页面交互相关事件绑定
  bindInteraction() {
    if (!this.isFirst) return;
    this.isFirst = false;
    let scrollTimer: any;
    let tag: any;
    const contentEl = this.$refs.content as HTMLElement;
    // contentEl.addEventListener("scroll", () => {
    //   if (this.autoScroll) return;
    //   if (this.actionMode !== "pause") {
    //     console.log("11111111111111");
    //     pageEvent.emit("pause");
    //     this.pause();
    //     //this.coverVisable = true;
    //   }
    //   tag = true;
    // });
    let startY = 0;
    let startTop = 0;
    contentEl.addEventListener("touchstart", (e: any) => {
      const touchData = e.targetTouches[0];
      startY = touchData.clientY;
      startTop = contentEl.scrollTop;
    });
    contentEl.addEventListener("touchmove", (e: any) => {
      // if (this.autoScroll) return;
      if (this.actionMode !== "pause") {
        pageEvent.emit("pause");
        this.pause();
      }
      tag = true;

      const touchData = e.targetTouches[0];
      contentEl.scrollTop = startTop - (touchData.clientY - startY);
    });
    contentEl.addEventListener("touchend", () => {
      // if (tag) {
      //   tag = false;
      //   this.autoScroll = true;
      //   const contentEl = this.$refs.content as HTMLElement;
      //   // contentEl.classList.add("no-scroll");
      //   this.queryAnchor();
      // }
      if (tag) {
        tag = false;
        this.queryAnchor();
      }
    });
  }

  //热区寻找最近锚点
  queryAnchor(noAction: boolean = false) {
    this.cleanBoard();
    const contentEl = this.$refs.content as HTMLElement;
    const scrollTop = contentEl.scrollTop;
    const hotArea = this.$refs.hot as HTMLElement;
    const stepItems = this.$refs.stepItem as any[];
    hotArea.style.height = "";
    let step = 0;
    let subStep = 0;
    const hotTop = hotArea.offsetTop;
    const hotHeight = hotArea.clientHeight;
    const hotBottom = hotTop + hotArea.clientHeight;
    for (step = 0; step < stepItems.length; step++) {
      const stepData = this.answerData.steps[step];
      if (!stepData.activated) {
        step -= 1;
        const _stepData = this.answerData.steps[step];
        const _length = _stepData.contents.length;
        for (let i = _length - 1; i >= 0; i--) {
          const subStepData = _stepData.contents[i];
          if (subStepData.activated) {
            subStep = i;
            break;
          }
        }
        break;
      }
      const item = stepItems[step].$el as HTMLElement;
      const offsetTop = item.offsetTop - scrollTop;
      const bottom = offsetTop + item.clientHeight + 1; //+1是为了容错处理
      if (bottom >= hotBottom) {
        const subItems = item.querySelectorAll(".item-content");
        const length = subItems.length;
        for (let i = 0; i < length; i++) {
          const subItem = subItems[i] as HTMLElement;
          const _bottom =
            offsetTop + subItem.offsetTop + subItem.clientHeight + 1;
          if (_bottom >= hotBottom) {
            subStep = i;
            break;
          } else if (_bottom > hotTop) {
            const distanceH = _bottom - hotTop;
            if (distanceH >= (hotHeight - 8) / 2) {
              subStep = i;
              break;
            }
          }
        }
        break;
      } else if (bottom > hotTop) {
        const distanceH = bottom - hotTop;
        if (distanceH >= (hotHeight - 8) / 2) {
          const subItems = item.querySelectorAll(".item-content");
          const length = subItems.length;
          subStep = length - 1;
          break;
        }
      } else if (step === stepItems.length - 1 && bottom < hotTop) {
        const _stepData = this.answerData.steps[step];
        const _length = _stepData.contents.length;
        for (let i = _length - 1; i >= 0; i--) {
          const subStepData = _stepData.contents[i];
          if (subStepData.activated) {
            subStep = i;
            break;
          }
        }
        break;
      }
    }
    if (step >= stepItems.length) {
      console.log(step, subStep);
      const _stepData = this.answerData.steps[step - 1];
      const _length = _stepData.contents.length;
      for (let i = _length - 1; i >= 0; i--) {
        const subStepData = _stepData.contents[i];
        if (subStepData.activated) {
          subStep = i;
          break;
        }
      }
      step -= 1;
    }
    console.log(step, subStep);
    this.answerData.step = step;
    this.answerData.subStep = subStep;
    this.scrollToTarget(() => {
      if (noAction) return;
      const data = this.answerData.steps[step].contents[subStep];
      const { actions } = data;
      if (actions && data.activated) {
        const { graphActions, textAction } = actions;
        this.graphAction(graphActions);
      }
    });
  }

  //滚动到目标元素
  scrollToTarget(callback?: Function) {
    //clearInterval(this.intervalEvent);
    this.highlightLine = [-1, -1];
    const { step, subStep } = this.answerData;
    const contentEl = this.$refs.content as HTMLElement;
    const scrollTop = contentEl.scrollTop;
    const hotArea = this.$refs.hot as HTMLElement;
    const hotHeight = hotArea.clientHeight;
    const stepItems = this.$refs.stepItem as any[];
    const item = stepItems[step].$el as HTMLElement;
    const subItems = item.querySelectorAll(".item-content");
    const targetEl = subItems[subStep] as HTMLElement;
    const _scrollTop = item.offsetTop + targetEl.offsetTop - hotArea.offsetTop;
    const distance = _scrollTop - scrollTop;
    const distanceH = targetEl.clientHeight
      ? targetEl.clientHeight - hotHeight
      : 0;

    let _count = 0;
    // const finalTop = scrollTop + distance;
    clearTimeout(this.timeoutEvent);
    // this.autoScroll = true;
    const animate = () => {
      _count += 1;
      contentEl.scrollTop = scrollTop + distance * (_count / 20);
      hotArea.style.height = `${hotHeight + distanceH * (_count / 20)}px`;
      if (_count === 20) {
        callback && callback();
        // contentEl.classList.remove("no-scroll");
        this.highlightLine = [step, subStep];
        this.timeoutEvent = setTimeout(() => {
          clearTimeout(this.timeoutEvent);
          this.autoScroll = false;
        }, 300);
        const stepData = this.answerData.steps[step];
        const subStepData = stepData.contents[subStep];
        if (
          this.actionMode === "pause" &&
          subStepData.options &&
          subStepData.replace
        ) {
          this.qsMode = true;
          this.bindAnswerEvent();
        }
        return;
      }
      requestAnimationFrame(animate);
    };
    animate();

    // clearInterval(this.intervalEvent)
    // this.intervalEvent = setInterval(() => {
    //   _count += 1;
    //   contentEl.scrollTop = scrollTop + distance * (_count / 20);
    //   hotArea.style.height = `${hotHeight + distanceH * (_count / 20)}px`;
    //   if (_count === 20) {
    //     callback && callback();
    //     this.highlightLine = [step, subStep];
    //     this.handleTimeout(() => {
    //       this.autoScroll = false;
    //     }, 100);
    //     clearInterval(this.intervalEvent)
    //   }
    // }, 20)
    // this.autoScroll = true;
  }

  actionPlay(type: boolean = false, auto: boolean = true) {
    clearTimeout(this.timeoutEvent);
    pageEvent.removeListener("subStepFinish");
    this.timeoutEvent = setTimeout(
      () => {
        clearTimeout(this.timeoutEvent);

        if (this.actionMode === "pause") return;
        this.cleanBoard();
        const { step, subStep } = this.answerData;
        // console.log("step", step, subStep);
        const stepData = this.answerData.steps[step];
        const subStepData = stepData.contents[subStep];
        const stepItems = this.$refs.stepItem as any[];
        const item = stepItems[step].$el as HTMLElement;
        const {
          audio,
          actions,
          options,
          text,
          imageInLine,
          //题目问答相关参数
          replace,
          correctAnswers,
          rightAudio,
          wrongAudio,
          userAnswer
        } = subStepData;

        //执行过的大步骤
        if (!stepData.activated) {
          stepData.activated = true;
          if (step > 0) this.openCount += 1;
        }

        // if (step === 0 && subStep === 0 && auto) {
        //   const audioText = `第${step + 1}步`;
        //   const { stepAudio } = this.commonAudios;
        //   const audio = stepAudio.filter(
        //     (item: any) => item.text === audioText
        //   )[0];
        //   this.playAudio(audio);
        //   pageEvent.on("audioEnd", () => {
        //     pageEvent.removeAllListeners("audioEnd");
        //     this.actionPlay(true, false);
        //   });
        //   return;
        // }

        if (subStep === 0 && auto && stepData.commonAudio) {
          this.playAudio(stepData.commonAudio);
          pageEvent.on("audioEnd", () => {
            pageEvent.removeAllListeners("audioEnd");
            this.actionPlay(true, false);
          });
          return;
        }

        const contentEl = this.$refs.content as HTMLElement;
        const hotArea = this.$refs.hot as HTMLElement;
        const targetEl = item.querySelectorAll(".item-content")[
          subStep
        ] as HTMLElement;
        const titleEl = item.querySelector(".title-item") as HTMLElement;
        const targetElHeight = targetEl.clientHeight;
        if (
          item.clientHeight < targetElHeight + titleEl.clientHeight ||
          targetElHeight === 0
        ) {
          console.log("is close");
          stepItems[step].expand();
          this.openCount += 1;
          this.$nextTick(() => {
            this.actionPlay(true);
          });
          return;
        }
        const hotAreaHeight = hotArea.clientHeight;
        const scrollTop = contentEl.scrollTop;
        const _scrollTop =
          item.offsetTop + targetEl.offsetTop - hotArea.offsetTop;
        const distance = _scrollTop - scrollTop;
        const distanceH = targetElHeight - hotAreaHeight;
        let stepCount = 0;
        let count = 0;

        const action = () => {
          subStepData.activated = true;
          pageEvent.on("subStepFinish", () => {
            count += 1;
            // console.log("subStepFinish", count);
            if (count === stepCount) {
              pageEvent.removeListener("subStepFinish");
              if (this.actionMode === "play") this.nextSubStep();
            }
          });

          if (audio) {
            stepCount += 1;
            if (options && userAnswer) {
              this.playAudio(subStepData.backToAudio);
            } else {
              this.playAudio(audio);
            }
            pageEvent.on("audioEnd", () => {
              pageEvent.removeAllListeners("audioEnd");
              pageEvent.emit("subStepFinish");
            });
          }

          if (actions) {
            const { graphActions, textAction, imageAction } = actions;
            if (imageAction) {
              const drawingBoard = this.$refs.drawingBoard as any;
              drawingBoard.init(imageAction);
            }
            if (graphActions) stepCount += 1;
            this.handleTimeout(() => {
              this.graphAction(graphActions);
            }, 20);
          }

          if (text || imageInLine) {
            stepCount += 1;
            const item = stepItems[step];
            pageEvent.on("typerEnd", () => {
              pageEvent.removeAllListeners("typerEnd");
              console.log("typer end");
              pageEvent.emit("subStepFinish");

              if (options && replace) {
                //增加判断，是否回答过题目/回答结果
                if (userAnswer) {
                  pageEvent.emit("userAnswer", userAnswer);
                  return;
                }
                const { target } = replace;
                const replaceEl = targetEl.querySelectorAll(
                  target
                )[1] as HTMLElement;
                replaceEl.innerHTML = "";
                replaceEl.classList.add("ic-question", "ic-qs");
              }
            });
            if (step === 0 && subStep === 0) {
              item.handleOperation(subStep, "show");
              pageEvent.emit("typerEnd");
            } else {
              item.handleOperation(subStep);
            }
          }

          if (options && options.length) {
            if (userAnswer) {
              this.bindAnswerEvent(true);
              return;
            }
            stepCount += 1;
            this.qsMode = true;
            this.actionMode = "pause";
            pageEvent.emit("pause");
            // this.bindAnswerEvent();
          }
        };

        if (distance || distanceH) {
          this.autoScroll = true;
          this.scrollToTarget(() => {
            if (this.actionMode === "play") action();
          });
        } else {
          this.autoScroll = false;
          if (this.actionMode === "play") action();
        }
        // this.scrollToTarget(() => {
        //   if (this.actionMode === "play") action();
        // });
      },
      type ? 100 : 1200
    );
  }

  bindAnswerEvent(restore: boolean = false) {
    clearTimeout(this.timeoutEvent);
    pageEvent.removeAllListeners("userAnswer");
    this.timeoutEvent = setTimeout(() => {
      const { step, subStep } = this.answerData;
      const stepData = this.answerData.steps[step];
      const subStepData = stepData.contents[subStep];
      const stepItems = this.$refs.stepItem as any[];
      const item = stepItems[step].$el as HTMLElement;
      const {
        options,
        replace,
        correctAnswers,
        rightAudio,
        wrongAudio,
        notUnderstandAudio
      } = subStepData;
      const targetEl = item.querySelectorAll(".item-content")[
        subStep
      ] as HTMLElement;

      pageEvent.on("userAnswer", val => {
        console.log(+new Date());
        pageEvent.removeAllListeners("userAnswer");
        subStepData.userAnswer = val;
        const isCorrect = val === options[correctAnswers[0]];
        subStepData.isCorrect = isCorrect;
        console.log("用户回答", val);
        const { target, text } = replace;
        const replaceEl = targetEl.querySelectorAll(target)[1] as HTMLElement;
        replaceEl.classList.remove("ic-question", "ic-qs");
        replaceEl.innerHTML = text;
        const typerEl = targetEl.querySelector(".typer-text") as HTMLElement;
        typerEl.innerHTML =
          typerEl.innerHTML +
          `<span class="${isCorrect ? "ic-right" : "ic-wrong"} ic-qs"></span>`;
        this.$nextTick(() => {
          const MathJax = window.MathJax;
          MathJax.Hub.Queue(["Typeset", MathJax.Hub, replaceEl]);

          const btnEl = typerEl.querySelector(".ic-qs") as HTMLElement;
          btnEl.addEventListener("click", () => {
            stepItems[step].toggleResult();
          });

          if (!isCorrect && !restore) {
            const el = targetEl.querySelector(".unknown") as HTMLElement;
            el.style.display = "block";
            el.click();
            stepItems[step].closeResult();
          }
        });

        if (restore) return;
        //播放回答结果语音
        pageEvent.emit("audioEnd");
        let audio: any;
        if (val === "unknown") {
          audio = notUnderstandAudio;
        } else {
          audio = isCorrect ? rightAudio : wrongAudio;
        }
        this.playAudio(audio);
        pageEvent.on("audioEnd", () => {
          pageEvent.removeAllListeners("audioEnd");
          // this.qsMode = false;
          // if (this.stepJumpBlock) {
          //   this.stepJumpBlock = false;
          //   this.actionMode = "play";
          //   pageEvent.emit("play");
          //   this.startByUser(this.stepJumpTarget);
          //   return;
          // }
          if (!isCorrect) return;
          this.qsMode = false;
          this.actionMode = "play";
          pageEvent.emit("play");
          // pageEvent.emit("subStepFinish");
          pageEvent.removeListener("subStepFinish");
          this.autoScroll = true;
          this.nextSubStep();
        });
      });
    }, 200);
  }

  nextSubStep(type: boolean = false) {
    const { step, subStep } = this.answerData;
    const stepData = this.answerData.steps[step];
    const stepItems = this.$refs.stepItem as any[];
    const _subStep = subStep + 1;
    this.answerData.subStep = _subStep;
    // this.cleanBoard()
    if (_subStep >= stepData.contents.length) {
      if (step < this.answerData.steps.length - 1) {
        const _step = step + 1;
        this.answerData.step = _step;
        this.answerData.subStep = 0;
        stepItems[_step].expand();
        this.actionPlay(type);
        // const audioText = `第${_step + 1}步`;
        // const { stepAudio } = this.commonAudios;
        // const audio = stepAudio.filter(
        //   (item: any) => item.text === audioText
        // )[0];
        // this.playAudio(audio);
        // pageEvent.on("audioEnd", () => {
        //   pageEvent.removeAllListeners("audioEnd");
        //   // this.answerData.steps[_step].activated = true;
        //   this.actionPlay(type);
        // });
      } else {
        console.log("当前问播放完了");
        this.actionMode = "pause";
        this.answerData.isOver = true;
        //播放结束语音
        const { endAudio } = this.commonAudios;
        const finished = this.qsOverList.filter(item => !!item);
        let audioText = "";
        if (finished.length === this.qsOverList.length) {
          audioText = "这道题到这里就结束了，再回顾一下整个解答过程吧";
        } else {
          audioText = "这一问到这里就结束了，是否学习其他小问";
        }
        const audio = endAudio.filter(
          (item: any) => item.text === audioText
        )[0];
        this.playAudio(audio);
      }
      return;
    }
    this.actionPlay(type);
  }

  //语音
  playAudio(audio: any, type?: string) {
    const { text, hash } = audio;
    this.devMode ? this.audioPlay(text) : this.audioPlayByAndroid(hash);
    console.log("audio", text);
    if (!type) return;
    pageEvent.on("audioEnd", () => {
      pageEvent.removeAllListeners("audioEnd");
      switch (type) {
        case "subStep":
          pageEvent.emit("subStepFinish");
          break;
        case "step":
          pageEvent.emit("stepAudioFinish");
          break;
        case "main":
          pageEvent.emit("mainAudioFinish");
          break;
        default:
          break;
      }
    });
  }

  //图片区交互
  graphAction(data: any[]) {
    if (!data || !data.length) return;
    console.log("graphAction", data);
    const drawingBoard = this.$refs.drawingBoard as any;
    const _data = cloneDeep(data).map((item: any) => {
      const index = item.color;
      return Object.assign(item, { color: this.colorArr[index] });
    });
    drawingBoard.draw(_data, this.actionMode);
    // pageEvent.emit("subStepFinish");
  }

  pause() {
    // console.log(this.answerData.index, "pause");
    this.actionMode = "pause";
    pageEvent.emit("pause");
    clearTimeout(this.timeoutEvent);
    //清空各种事件监听
    pageEvent.removeAllListeners("mainAudioFinish");
    pageEvent.removeAllListeners("stepAudioFinish");
    pageEvent.removeAllListeners("subStepFinish");
    pageEvent.removeAllListeners("audioEnd");
    pageEvent.removeAllListeners("typerEnd");
    //清空画布高亮
    // this.cleanBoard();
    if (!this.devMode) {
      window.dm.stopSpeaking();
    }
  }

  cleanBoard() {
    if (!this.graph) return;
    const drawingBoard = this.$refs.drawingBoard as any;
    drawingBoard.clean();
  }

  //某行点击
  setTarget(data: any) {
    const { step, subStep } = data;
    if (
      this.actionMode !== "pause" ||
      (step === this.step && subStep === this.subStep) ||
      this.autoScroll
    ) {
      return;
    }
    this.pause();
    this.cleanBoard();
    this.answerData.step = step;
    this.answerData.subStep = subStep;
    this.scrollToTarget();

    const subStepData = this.answerData.steps[step].contents[subStep];
    const { actions } = subStepData;
    if (actions) {
      const { graphActions, textAction } = actions;
      this.graphAction(graphActions);
    }
  }

  //手动选择从某步骤开始播放
  startByUser(index: number) {
    if (!this.overviewFinish) {
      if (!this.devMode) window.dm.stopSpeaking();
      pageEvent.removeAllListeners("stepAudioFinish");
      this.overviewFinish = true;
      const stepItems = this.$refs.stepItem as any[];
      if (stepItems && stepItems.length) {
        stepItems.forEach(item => {
          const titleItem = item.$el.querySelector(
            ".title-item"
          ) as HTMLElement;
          titleItem.classList.remove("title-highlight");
        });
      }
    }
    clearTimeout(this.timeoutEvent);

    const next = () => {
      const drawingBoard = this.$refs.drawingBoard as any;
      this.answerData.step = index;
      this.answerData.subStep = 0;
      // let breakTag: any;
      let graph: any;
      this.$nextTick(() => {
        const stepItems = this.$refs.stepItem as any[];
        for (let i = 0; i <= index; i++) {
          const stepItem = stepItems[i];
          const stepData = this.answerData.steps[i];
          stepData.activated = true;
          if (i < index) {
            // stepData.activated = true;
            const length = stepData.contents.length;
            for (let j = 0; j < length; j++) {
              const item = stepData.contents[j];
              item.activated = true;
              stepItem.handleOperation(j, "show");
              if (item.options && item.replace) {
                const { target, text } = item.replace;
                const targetEl = stepItem.$el.querySelectorAll(".item-content")[
                  j
                ] as HTMLElement;
                const replaceEl = targetEl.querySelectorAll(
                  target
                )[1] as HTMLElement;
                replaceEl.innerHTML = "";

                if (!item.userAnswer) {
                  replaceEl.classList.add("ic-question", "ic-qs");
                } else {
                  console.log(item.userAnswer);
                  replaceEl.innerHTML = text;
                  const typerEl = targetEl.querySelector(
                    ".typer-text"
                  ) as HTMLElement;
                  typerEl.innerHTML =
                    typerEl.innerHTML +
                    `<span class="${
                      item.isCorrect ? "ic-right" : "ic-wrong"
                    } ic-qs"></span>`;

                  const btnEl = typerEl.querySelector(".ic-qs") as HTMLElement;
                  btnEl.addEventListener("click", () => {
                    stepItems[i].toggleResult();
                  });
                }
              }
              if (item.actions && item.actions.imageAction) {
                graph = item.actions.imageAction;
              }
            }
          }
          stepItem.expand();
          this.openCount += 1;
        }

        this.$nextTick(() => {
          // if (graph) {
          //   drawingBoard.init(graph);
          // }
          this.scrollToTarget(() => {
            this.actionPlay(true, false);
            this.bindInteraction();
          });
        });
      });
    };
    next();

    // if (this.actionMode === 'pause') {
    //   next()
    //   return
    // }
    // const audioText = `第${index + 1}步的详细过程是这样的`;
    // const { stepAudio } = this.commonAudios;
    // const audio = stepAudio.filter((item: any) => item.text === audioText)[0];
    // this.playAudio(audio);
    // pageEvent.on("audioEnd", () => {
    //   pageEvent.removeAllListeners("audioEnd");
    //   next();
    // });
  }

  //步骤标题点击展开和收起
  stepToggle(data: any) {
    this.pause();
    // if (this.actionMode !== "pause") return;
    const { val, index } = data;
    this.openCount += val ? 1 : -1;
    this.timeoutEvent = setTimeout(() => {
      clearTimeout(this.timeoutEvent);
      // if (this.openCount === 0) {
      //   this.cleanBoard();
      //   return;
      // }
      // this.queryAnchor();
      this.cleanBoard();
      if (val) {
        this.answerData.step = index;
        this.answerData.subStep = 0;
        this.scrollToTarget();
      } else {
        this.queryAnchor(true);
      }
    }, 500);
  }

  //用户回答
  userAnswer(val: string) {
    pageEvent.emit("userAnswer", val);
  }

  //清除步骤中已渲染的文本
  cleanStepItem() {
    const stepItems = this.$refs.stepItem as any[];
    if (stepItems && stepItems.length) {
      stepItems.forEach((stepItem, index) => {
        const stepData = this.answerData.steps[index];
        stepData.contents.forEach((item: any, index: number) => {
          stepItem.handleOperation(index, "clean");
        });
      });
    }
  }

  titleTextAction(data: any[]) {
    const titleContent = this.$refs.titleContent as any;
    if (!titleContent) return;
    const el = titleContent.$el as HTMLElement;
    data.forEach(item => {
      const ele = el.querySelector(item.target);
      if (ele) {
        ele.classList.add("text-highlight");
      }
    });
  }

  handleOverClick(val: number) {
    if (val === 99) {
      this.$message.destroy();
      this.$message.info("该功能正在完善中，敬请期待!");
    } else {
      pageEvent.emit("qsRadioEvent", val);
    }
  }

  popoverChange(data: any) {
    if (data) {
      const stepItems = this.$refs.stepItem as any[];
      const { step, subStep } = this.answerData;
      const stepData = this.answerData.steps[step];
      const subStepData = stepData.contents[subStep];
      const { knowledgePoints } = subStepData;
      let audioText = "";
      if (!knowledgePoints) {
        audioText = "在这一步遇到困难了吗？";
      } else {
        const knowledge = knowledgePoints[0];
        audioText = `这里主要考察的是${knowledge.text}，可以进一步学习一下哦`;
      }
      const { knowledgeAudio } = this.commonAudios;
      const audio = knowledgeAudio.filter(
        (item: any) => item.text === audioText
      )[0];
      this.playAudio(audio, "knowledgePoints");
      stepItems[step].closeResult();
    }
  }
}
</script>
<style lang="scss" scoped>
.answer-contain {
  position: relative;
  width: 100%;
  height: 100%;
  flex-direction: column;

  .title-contain {
    position: relative;
    width: 100%;
    height: 0;
    background-color: #ffffff;
    border-radius: 12px 12px 8px 8px;
    z-index: 9;
    overflow: hidden;
    transition: 0.5s;
    max-height: 30%;

    &.open {
      box-shadow: 0 2px 3px 0 rgba(41, 67, 83, 0.09);
      height: 108px;
      // animation-duration: 0.5s;
      // animation-name: open;

      .inner {
        padding: 15px 30px;
        // height: 100%;
        // overflow: hidden;
      }
    }

    &.max {
      height: auto;
      overflow-y: scroll;
      // max-height: 30%;
      // .inner {
      //   overflow: auto;
      //   overflow-y: scroll;
      // }
    }

    .qs-contain {
      margin-top: 12px;

      .question {
        width: 100%;
        height: 24px;
        line-height: 24px;
        word-break: break-all;
        color: #000000;
        font-size: 16px;
        margin-bottom: 8px;

        span {
          padding: 2px 4px;
          display: inline-block;
        }
      }
    }

    .drag-contain {
      bottom: 10px;
      transition: 0.6s;
      position: sticky;
      text-align: center;
    }
    .drag-icon {
      // position: absolute;
      // width: 40px;
      // height: 20px;
      // background-color: #999999;
      // left: calc(50% - 20px);
      width: 30px;
    }
  }

  @keyframes open {
    0% {
      height: 0;
    }
    100% {
      height: 108px;
    }
  }

  .content-contain {
    flex: 1;
    position: relative;
    overflow: hidden;

    .img-contain {
      width: 272px;
      height: 100%;
      padding-top: 10px;
      overflow: auto;

      .drawing-board {
        width: 250px;
        margin: auto;
      }
    }

    .content {
      // flex: 1;
      height: 100%;
      // position: relative;
      padding: 0 34px;
      background-color: #f4f6f8;
      // overflow: auto;
      // overflow-y: auto;
      transition: 0.3s;
      position: absolute;
      top: 0;
      left: 272px;
      right: 0;

      &.full {
        left: 0;
      }

      .title-in-content {
        padding-top: 28px;
      }

      .hot-area {
        background-color: #e5e9f0;
        height: 40px;
        position: absolute;
        // top: 76px;
        top: 105px;
        left: 34px;
        right: 34px;
        border-radius: 4px;
      }

      .question-text {
        margin-top: 30px;
        color: #000000;
        font-size: 16px;
        line-height: 24px;
      }

      .content-inner {
        position: relative;
        height: 100%;
        padding: 57px 0 calc(100% - 116px);
        // padding: 57px 0 calc(100% - 116px - 54px);
        overflow-y: auto;

        &::-webkit-scrollbar {
          display: none;
        }

        &.no-scroll {
          overflow-y: hidden;
        }

        .over-contain {
          width: 510px;
          margin: 25px auto 0;
          &.full {
            justify-content: space-between;
          }

          .over-btn {
            width: 240px;
            height: 40px;
            text-align: center;
            line-height: 40px;
            border-radius: 20px;
            font-size: 12px;
            color: rgba(0, 0, 0, 0.65);
            background-color: #e5e9f0;
            &.primary {
              background-color: #ffc82e;
              box-shadow: 0px -2px 0px 0px rgba(255, 167, 46, 0.63);
            }
          }
        }
      }
    }
  }
}

.scroll-cover {
  position: absolute;
  background-color: transparent;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
}
</style>
<style lang="scss">
.text-highlight {
  background-color: rgba(122, 158, 255, 0.2);
  transition: 0.5s;
}
</style>
