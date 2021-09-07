<template>
  <div class="main-contain">
    <div class="ic-back" @click="back" />
    <div class="flex content-contain">
      <div class="qs-contain" :class="{ full: mode === 'preview' }">
        <div class="flex center head">
          <div class="flex center title">{{ type }}</div>
          <div class="flex center difficulty">
            <span>难度：</span>
            <score :score="difficulty" />
          </div>
        </div>

        <div class="wrapper">
          <div class="item question">
            <div class="question-text" v-html="question" ref="question" />
          </div>

          <div v-if="graph" class="item canvas">
            <drawing-board :graph="graph" ref="drawingBoard" />
          </div>

          <div v-if="options.length" class="item option-contain">
            <div class="option" v-for="item in options" :key="item.value">
              {{ item.name }}: {{ item.value }}
            </div>
          </div>
        </div>

        <div v-if="mode === 'preview'" class="flex center btn-contain">
          <div v-if="type" class="flex center btn primary" @click="handleInit">
            智能解析
          </div>
          <!-- <div class="flex center btn default">查看原解析</div> -->
        </div>
      </div>

      <div v-if="mode === 'answer'" class="ans-contain" @click="handleAnsClick">
        <div
          class="content-block"
          ref="contentBlock"
          :class="{ static: !showAll }"
        >
          <div class="content-wrapper" :style="wrapperStyle">
            <ans-content
              v-for="item in stepDataList"
              :key="item.step"
              :stepData="item"
              :actived="!!contentEventData.length"
              ref="ansContent"
              @subStepFinish="subStepFinish"
              @audioPlay="stepJump"
              @ansClick="ansClick"
            />
          </div>
        </div>

        <div class="bottom-contain">
          <div class="icon-contain">
            <div
              class="icon icon1"
              :class="{
                active:
                  (showAll && showAllStep === 0) || (!showAll && step === 0)
              }"
              @click="stepClick(0)"
            />

            <div
              class="icon icon2"
              :class="{
                active:
                  (showAll && showAllStep === 1) || (!showAll && step === 1)
              }"
              @click="stepClick(1)"
            />

            <div
              v-for="item in questionSteps"
              :key="item.questionNo"
              class="icon"
            >
              <div
                class="flex center number"
                :class="{
                  active:
                    (!showAll &&
                      step >= item.step &&
                      (!item.last || step < item.last) &&
                      step < stepCount) ||
                    (showAll && showAllStep === item.step)
                }"
                @click="stepClick(item.step)"
              >
                {{ item.questionNo }}
              </div>
            </div>
          </div>

          <div class="operation">
            <div
              v-if="showStepOperation"
              class="flex center operation-item step-choice"
            >
              <div class="flex center btn next" @click="nextStepByUser">
                这一步我会
              </div>
              <div
                class="flex center btn detail"
                @click="showContentDetail(false)"
              >
                查看详情
              </div>
            </div>
            <div
              v-if="step >= 0 && subStepOver"
              class="flex center operation-item tips"
            >
              <!-- 点我进入下一步 -->
              {{ step === stepCount - 1 ? "点我结束" : "点我进入下一步" }}
            </div>
            <div
              v-if="ansMode"
              class="operation-item choice-contain"
              ref="choicePanel"
            >
              <div
                v-for="(item, index) in choiceOptions"
                :key="item"
                class="flex center choice"
                @click="handleChoice(item)"
              >
                <div class="flex center index">{{ formatCharCode(index) }}</div>
                <div class="option-text">{{ item }}</div>
              </div>
            </div>
            <div class="icon-robot" @click="nextStep" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { cloneDeep, last, isEmpty } from "lodash";
import EventEmitter from "eventemitter3";
import Score from "@/components/Score.vue";
import DrawingBoard from "@/components/DrawingBoard.vue";
import AnsContent from "./components/AnsContent.vue";
import { getScreenType, color16 } from "@/utils";
// import dataList from "./data";
import QuestionService from "@/service/question";

const questionService = QuestionService.getService();

let data: any;

const pageEvent = new EventEmitter();

@Component({
  components: {
    Score,
    DrawingBoard,
    AnsContent
  }
})
export default class Index extends Vue {
  mode: string = "preview"; //answer  preview

  type: string = "";
  difficulty: number = 0;

  question: string = "";
  graph: any = null;
  options: any[] = [];

  stepCount: number = 0;
  step: number = -1;
  stepData: any = null; //大步骤数据
  subStep: number = 0;
  subStepOver: boolean = true; //子步骤是否全部执行完
  solveStep: number = 0; //解题步骤
  ansMode: boolean = false; //是否进入选择步骤d
  isCorrect: boolean = false;
  choiceOptions!: any[];
  // correct: any

  devMode: boolean = true; //是否pc调试模式
  stepDataList: any[] = [];
  wrapperStyle: any = {};
  showAll: boolean = false;
  showAllStep: number = 0;
  topTags: number[] = [];

  showStepOperation: boolean = false;

  contentEventData: any = [];
  contentEl: any;
  colorArr: string[] = ["#FF3D5F", "#00C2FF", "#10CB27", "#6B2FF1", "#477DFF"];
  graghColorTag: number = 0;
  activeStep: any;

  dataId: string = "1";

  questionSteps: any[] = [];

  ansTimeout: any;
  stepTimeout: any;

  jumpLock: boolean = false;

  created() {
    const webType = getScreenType();
    this.devMode = webType.isPc;

    if (!this.devMode) return;
    const id = (this.$route.query.id as string) || "1001140";
    // const id = "11";
    this.dataId = id;

    //@ts-ignore
    // data = dataList[`data11`];
    // this.init(data);
    this.getDetail(id);
  }

  mounted() {
    pageEvent.on("nextSubStep", () => {
      this.subStep += 1;
      this.handleTimeout(
        () => {
          this.actionSubStep();
        },
        this.devMode ? 100 : 10
      );
    });

    //给安卓提供的回调方法
    window.callback = (msg: any) => {
      const { action } = msg;
      switch (msg.action) {
        case 5:
          pageEvent.emit("playEnd");
          break;
        case 10:
          data = msg.text;
          this.init(msg.text);
          break;
        default:
          break;
      }
    };

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
    // MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
  }

  //web端调试用获取题目详情
  async getDetail(id: string) {
    const response = await questionService.getDetail({ id });
    data = response;
    this.init(response);
  }

  //数据初始化
  init(data: any) {
    console.log(data);
    const { type, difficulty, view } = data.subject;
    this.type = type;
    this.difficulty = +difficulty;
    view.forEach((item: any) => {
      switch (item.type) {
        case "text": {
          const question = this.formatLatex(item.content);
          this.question = question;
          // this.question = item.content;
          const MathJax = window.MathJax;
          const el = this.$refs.question as HTMLElement;
          this.$nextTick(() => {
            MathJax.Hub.Queue(["Typeset", MathJax.Hub, el]);
          });
          break;
        }
        case "graph": {
          const pointsOrigin: any = {};
          const points: any = {};
          item.points.forEach((point: any) => {
            const { chars, pos } = point;
            const [x1, y1, x2, y2] = pos;
            pointsOrigin[chars] = pos;
            points[chars] = { x: (x1 + x2) / 2, y: (y1 + y2) / 2 };
          });
          this.graph = {
            pointsOrigin,
            points,
            src: item.src
          };
          break;
        }
        case "options":
          this.options = item.options;
          break;
      }
    });

    this.stepCount = data.steps.length;
    data.steps.forEach((item: any, index: number) => {
      if (item.questionNo) {
        if (this.questionSteps.length) {
          let _item = this.questionSteps[this.questionSteps.length - 1];
          _item = Object.assign(_item, { last: index });
          this.questionSteps[this.questionSteps.length - 1] = _item;
        }
        this.questionSteps.push({
          questionNo: item.questionNo,
          step: index
        });
      }

      const _length = item.substeps.length;
      for (let i = _length - 1; i > 0; i--) {
        const substep = item.substeps[i];
        if (substep.showOptions) {
          const _next = item.substeps[i + 1];
          if (_next && _next.replaceContent) {
            item.substeps[i].showOptions.replaceContent = cloneDeep(
              _next.replaceContent
            );
            // delete item.substeps[i + 1].replaceContent;
            item.substeps.splice(i + 1, 1);
          }
        }
      }

      if (item.content && item.content.length) {
        item.content.forEach((content: any) => {
          Object.assign(content, {
            text: this.formatLatex(content.text)
          });
        });
      }
    });
    console.log(this.questionSteps);
  }

  //智能解析开始
  handleInit() {
    console.log("begin");
    this.mode = "answer";
    this.showAll = false;
    this.step = -1;
    this.handleTimeout(() => {
      // this.actionSubStep();
      this.nextStep();
    }, 500);
  }

  nextStep(jump?: any) {
    if (!this.subStepOver) return;
    this.reset();
    // if (this.step > -1) this.showContentDetail();
    this.subStepOver = false;
    if (jump !== "skip") this.step += 1;
    if (this.step >= data.steps.length) {
      //播放已经学习完了本题
    }
    this.subStep = 0;
    this.stepData = data.steps[this.step];
    console.log(this.stepData);
    const el = this.$refs.contentBlock as Element;
    if (!this.stepData) {
      //播放完解题步骤 展示全流程页面
      console.log("show all");
      // console.log(this.audioList);
      this.wrapperStyle = {};
      // const el = this.$refs.contentBlock as Element;
      el.scrollTop = 0;
      this.showAll = true;
      this.getTopTags();
      el.addEventListener("scroll", this.bindScrollEvent);
      return;
    }
    el.removeEventListener("scroll", this.bindScrollEvent);
    if (this.step > 1) {
      this.solveStep += 1;
      const type = this.stepData.type;
      if (type.indexOf("步骤-") !== -1) {
        this.stepData.type = type.substr(3);
      }
    }

    this.stepDataList.push({
      ...this.stepData,
      step: this.step,
      solveStep: this.solveStep
    });
    console.log("stepDataList", this.stepDataList);
    //下一步时自动上移翻页
    this.$nextTick(() => {
      const top = this.getTopByStep(this.step);
      console.log("top", top);
      this.wrapperStyle = {
        height: `calc(100% + ${top}px)`
      };
      this.blockScrollTop(top);
    });

    pageEvent.removeAllListeners("stepAudioFinish");
    pageEvent.removeAllListeners("audioPlay");
    pageEvent.removeAllListeners("subStepFinish");
    if (this.stepTimeout) clearTimeout(this.stepTimeout);
    //先播放完主步骤里的音频，再开始执行子步骤
    if (this.stepData.audio) {
      console.log("step audio");
      const graphAction = this.stepData.graphAction;
      if (graphAction) {
        this.graphAction(graphAction, null, true);
      }
      pageEvent.on("stepAudioFinish", () => {
        pageEvent.removeAllListeners("stepAudioFinish");
        if (this.stepData.text && this.stepData.content) {
          this.showStepOperation = true;
        } else {
          this.actionSubStep();
        }
      });
      this.playAudios(this.stepData.audio.slice(0, 1), true);
      return;
    }

    this.stepTimeout = setTimeout(() => {
      console.log("actionSubStep");
      this.actionSubStep();
      clearTimeout(this.stepTimeout);
    }, 500);
  }

  getTopByStep(step: number) {
    const ansContents = this.$refs.ansContent as any[];
    let top = 0;
    for (let i = 0; i < step; i++) {
      const el = ansContents[i];
      top += el.$el.clientHeight;
    }
    return top;
  }

  blockScrollTop(top: number) {
    const el = this.$refs.contentBlock as HTMLElement;
    let scrollTop = el.scrollTop;
    if (scrollTop >= top) return;
    let count = 0;
    function animate() {
      count += 1;
      el.scrollTop = scrollTop + (top - scrollTop) * (count / 20);
      if (count === 20) {
        return;
      }
      requestAnimationFrame(animate);
    }
    animate();
  }

  //showAll后滚动监听事件  showAllStep
  bindScrollEvent() {
    const el = this.$refs.contentBlock as Element;
    const scrollTop = el.scrollTop;
    let showAllStep = 0;
    const length = this.topTags.length;
    for (let i = 0; i < length; i++) {
      const top = this.topTags[i];
      if (scrollTop < top) {
        showAllStep = i;
        break;
      } else if (i === length - 1) {
        showAllStep = i;
      }
    }
    this.showAllStep = showAllStep;
  }

  getTopTags() {
    let stepTags = [0, 1];
    this.questionSteps.forEach(item => {
      stepTags.push(item.step);
    });
    let topTags: any[] = [];
    stepTags.forEach(item => {
      topTags.push(this.getTopByStep(item + 1));
    });
    console.log(topTags);
    this.topTags = topTags;
  }

  //步骤跳跃
  stepJump(step: number) {
    if (this.jumpLock) return;
    this.jumpLock = true;
    pageEvent.removeAllListeners("stepAudioFinish");
    pageEvent.removeAllListeners("subStepFinish");
    pageEvent.removeAllListeners("audioPlay");
    if (!this.devMode) window.dm.stopSpeaking();
    this.showStepOperation = false;
    this.ansMode = false;
    this.subStepOver = false;
    this.step = -1;
    this.solveStep = 0;
    this.showAll = false;
    this.stepDataList = [];

    const questionText = this.$refs.question as HTMLElement;
    const drawingBoard = this.$refs.drawingBoard as any;
    // questionText.innerHTML = this.question;
    const underlineEl = questionText.querySelectorAll(".underline");
    if (underlineEl.length) {
      underlineEl.forEach(el => {
        el.classList.remove("underline");
      });
    }
    drawingBoard && drawingBoard.clean();

    let replaceList: any = [];
    for (let i = 0; i < step; i++) {
      let stepData = cloneDeep(data.steps[i]);
      if (i > 1) {
        this.solveStep += 1;
        const type = stepData.type;
        if (type.indexOf("步骤-") !== -1) {
          stepData.type = type.substr(3);
        }
      }

      this.stepDataList.push({
        ...stepData,
        step: i,
        solveStep: this.solveStep
      });

      stepData.substeps.forEach((substep: any) => {
        const stepList = Object.entries(substep);
        stepList.forEach(item => {
          const [key, val] = item;
          if (!val) return;
          switch (key) {
            case "graphAction":
              this.graphAction(
                val as any[],
                ["hideLine", "addPoint", "addLine"],
                true
              );
              break;
            case "replaceContent":
              // this.replaceContent(val);
              replaceList.push({ ...(val as Object), step: i });
              break;
            case "textAction":
              this.textAction(val, true);
              break;
            case "showOptions": {
              const replaceContent = (val as any).replaceContent;
              if (replaceContent) {
                replaceList.push({ ...replaceContent, step: i });
              }
              break;
            }
          }
        });
      });
    }

    this.step = step;
    this.$nextTick(() => {
      console.log("replaceList", replaceList);
      const ansContents = this.$refs.ansContent as Element[];
      ansContents.forEach((el: any) => {
        el.openDetail();
      });

      replaceList.forEach((val: any) => {
        const el = (this.$refs.ansContent as Element[])[val.step] as any;
        el.replaceContent(val);
      });
      // this.step = step - 1;
      console.log("--------stepJump-----------");
      this.handleTimeout(() => {
        this.subStepOver = true;
        this.nextStep("skip");
      }, 200);
      // this.nextStep();
      this.handleTimeout(() => {
        this.jumpLock = false;
      }, 1000);
    });
  }

  //执行子步骤
  actionSubStep() {
    console.log(this.subStep);
    if (!this.stepData) return;
    const subStepData = this.stepData.substeps[this.subStep];
    if (subStepData && isEmpty(subStepData)) {
      this.handleTimeout(
        () => {
          pageEvent.emit("nextSubStep");
        },
        this.devMode ? 100 : 10
      );
      return;
    }
    if (!subStepData) {
      this.subStepOver = true;
      if (this.step < 2) {
        this.nextStep();
        return;
      }
      //增加最后是判断且正确择自动下一步
      const length = this.stepData.substeps.length;
      const last = this.stepData.substeps[length - 1];
      if (last && (last.replaceContent || last.showOptions) && this.isCorrect) {
        this.nextStep();
      }
      return;
    }

    const stepList = Object.entries(subStepData);
    const stepCount = stepList.length;
    let count = 0;
    pageEvent.on("subStepFinish", () => {
      count += 1;
      if (count === stepCount) {
        this.handleTimeout(
          () => {
            pageEvent.emit("nextSubStep");
          },
          // this.devMode ? 100 : 500
          this.devMode ? 100 : 10
        );
        pageEvent.removeAllListeners("subStepFinish");
      }
    });

    stepList.forEach(item => {
      const [key, val] = item;
      console.log(key);
      // console.log(val);
      if (!val) {
        pageEvent.emit("subStepFinish");
        return;
      }
      switch (key) {
        case "audio":
          this.playAudios((val as string[]).slice(0, 1));
          break;
        case "graphAction":
          this.graphAction(val as any[]);
          break;
        case "textAction":
          this.textAction(
            (val as any[]).map((item: any, index: number) =>
              Object.assign(item, { color: this.colorArr[index % 5] })
            )
          );
          break;
        case "showOptions":
          this.showOptions(cloneDeep(val));
          break;
        case "replaceContent":
          this.replaceContent(val);
          break;
      }
    });
  }

  //播放音频
  playAudios(audios: string[], isMainStep?: boolean, notSave?: boolean) {
    if (!audios || !audios.length) {
      !isMainStep
        ? pageEvent.emit("subStepFinish")
        : pageEvent.emit("stepAudioFinish");
      return;
    }
    const length = audios.length;
    let i = -1;
    pageEvent.on("audioPlay", () => {
      i += 1;
      if (i >= length) {
        pageEvent.removeAllListeners("audioPlay");
        console.log("audio over");
        !isMainStep
          ? pageEvent.emit("subStepFinish")
          : pageEvent.emit("stepAudioFinish");
      } else {
        const text = audios[i];
        this.devMode ? this.audioPlay(text) : this.audioPlayByAndroid(text);
      }
    });
    pageEvent.emit("audioPlay");
  }

  //模拟音频监听事件
  audioPlay(text: string) {
    console.log(text);
    this.handleTimeout(() => {
      pageEvent.emit("audioPlay");
    }, 800);
  }

  //联调安卓播放语音
  audioPlayByAndroid(text: string) {
    const dm = window.dm;
    dm.stopSpeaking();
    dm.startSpeaking(text);
    pageEvent.on("playEnd", () => {
      pageEvent.removeAllListeners("playEnd");
      pageEvent.emit("audioPlay");
    });
  }

  //通知画图
  graphAction(data: any[], types?: string[] | null, notStep?: boolean) {
    if (types) {
      data = data.filter((item: any) => types.indexOf(item.type) !== -1);
    }
    if (!data.length) {
      if (!notStep) pageEvent.emit("subStepFinish");
      return;
    }
    let colorTag = 0;
    const drawingBoard = this.$refs.drawingBoard as any;
    data.forEach((item, index) => {
      if (!item.color) {
        Object.assign(item, { color: this.colorArr[colorTag % 5] });
        colorTag += 1;
      }
      if (item.color === 1) {
        Object.assign(item, { color: this.colorArr[0] });
      }
    });
    console.log("画图", data);
    drawingBoard.draw(data);
    if (notStep) return;
    pageEvent.emit("subStepFinish");
  }

  //通知题目交互
  textAction(data: any, notStep?: boolean) {
    console.log("题目交互", data);
    const el = this.$refs.question;
    data.forEach((item: any) => {
      const { type, target, color } = item;
      const ele = (el as Element).querySelector(target);
      if (ele) {
        switch (type) {
          case "underline":
            ele.classList.add("underline");
            // ele.style.borderBottomColor = color;
            break;
        }
      }
    });
    if (notStep) return;
    pageEvent.emit("subStepFinish");
  }

  //答题选择交互
  showOptions(data: any) {
    console.log("选择交互", data);
    this.ansMode = true;
    const { options, correctAudio, wrongAudio, replaceContent } = data;
    this.choiceOptions = options.map((str: string) => this.formatLatex(str)); //后续优化增加选项排序打乱，默认第一个是正确答案
    const correct = this.choiceOptions[0];
    this.$nextTick(() => {
      const MathJax = window.MathJax;
      const el = this.$refs.choicePanel as HTMLElement;
      MathJax.Hub.Queue(["Typeset", MathJax.Hub, el]);
    });
    pageEvent.on("handleChoice", ans => {
      if (replaceContent) {
        this.replaceContent(replaceContent);
      }
      console.log("选择 ", ans);
      const isCorrect = ans === correct;
      this.isCorrect = isCorrect;
      console.log(`回答${isCorrect ? "正确" : "错误"}`);
      this.playAudios(
        isCorrect ? correctAudio.slice(0, 1) : wrongAudio.slice(0, 1),
        false,
        true
      );
      this.ansMode = false;
      const top = this.getTopByStep(this.step);
      this.blockScrollTop(top);
      pageEvent.removeAllListeners("handleChoice");
    });
  }

  handleChoice(ans: any) {
    pageEvent.emit("handleChoice", ans);
  }

  //答题文本替换
  replaceContent(data: any) {
    const el = (this.$refs.ansContent as Element[])[this.step] as any;
    el.replaceContent(data);
  }

  //子组件中抛出的子步骤执行回调
  subStepFinish() {
    pageEvent.emit("subStepFinish");
  }

  //打开详情
  showContentDetail(isNext?: boolean) {
    const el = (this.$refs.ansContent as Element[])[this.step] as any;
    el && el.openDetail();
    this.showStepOperation = false;
    if (isNext) return;
    const top = this.getTopByStep(this.step);
    this.blockScrollTop(top);
    this.handleTimeout(() => {
      this.actionSubStep();
    }, 500);
  }

  //强制下一步
  nextStepByUser() {
    //暂停语音，移除子步骤执行监听器，执行该步骤中子步骤的(清除线/增加点/辅助线/填充)操作
    this.showStepOperation = false;
    pageEvent.removeAllListeners("audioPlay");
    pageEvent.removeAllListeners("subStepFinish");
    if (!this.devMode) window.dm.stopSpeaking();
    this.showContentDetail(true);
    this.stepData.substeps.forEach((substep: any) => {
      const stepList = Object.entries(substep);
      stepList.forEach(item => {
        const [key, val] = item;
        switch (key) {
          case "graphAction":
            this.graphAction(val as any[], [
              "hideLine",
              "hideAngle",
              "hidePolygon"
            ]);
            break;
          case "replaceContent":
            this.replaceContent(val);
            break;
          case "showOptions": {
            const replaceContent = (val as any).replaceContent;
            if (replaceContent) {
              this.replaceContent(replaceContent);
            }
            break;
          }
        }
      });
    });
    this.subStepOver = true;

    this.nextStep();
  }

  //底部栏步骤点击事件
  stepClick(step: number) {
    if (!this.showAll) {
      this.stepJump(step);
      return;
    }
    const el = this.$refs.contentBlock as Element;
    const top = this.getTopByStep(step);
    el.scrollTop = top;
    this.showAllStep = step;
  }

  //答题过程中content的每行点击事件
  ansClick(res: any) {
    const { data, contentEl, step } = res;
    console.log(contentEl);
    if (!data || (!this.subStepOver && !this.ansMode && !this.showAll)) return;
    if (this.contentEl) {
      if (!this.contentEl.contains(contentEl)) {
        this.reset();
      } else {
        return;
      }
    }
    if (!this.showAll) {
      const drawingBoard = this.$refs.drawingBoard as any;
      drawingBoard.cleanByDraw();
    }
    if (this.ansTimeout) {
      clearTimeout(this.ansTimeout);
    }
    this.ansTimeout = setTimeout(() => {
      this.contentEl = contentEl;
      const graphAction = cloneDeep(data[0].graphAction);
      this.contentEventData = graphAction.map((item: any, index: number) =>
        Object.assign(
          {
            color:
              item.color === 1 ? this.colorArr[0] : this.colorArr[index % 5]
          },
          item
        )
      );
      console.log(this.contentEventData);
      this.graphAction(this.contentEventData, null, true);
      const el = (this.$refs.ansContent as Element[])[step] as any;
      el.colourContent(this.contentEventData);
      this.activeStep = step;
      clearTimeout(this.ansTimeout);
    }, 20);
  }

  handleAnsClick(e: any) {
    e.preventDefault();
    const target = e.target;
    if (!this.contentEl) return;
    console.log(this.contentEl.contains(target));
    if (!this.contentEl.contains(target)) {
      this.reset();
      this.contentEl = null;
    }
  }

  //还原每行解题点击的交互效果
  reset() {
    console.log("reset");
    if (!this.contentEventData.length || !this.activeStep) return;
    this.contentEventData = this.contentEventData.map((item: any) =>
      // Object.assign(item, { type: "hideLine" })
      Object.assign(item, { type: `hide${this.strUpperCase(item.type)}` })
    );
    this.graphAction(this.contentEventData, null, true);
    const el = (this.$refs.ansContent as Element[])[this.activeStep] as any;
    this.activeStep = null;
    if (!el) return;
    el.cleanContent(this.contentEventData);
    this.contentEventData = [];
  }

  strUpperCase(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  //平板返回关闭
  back() {
    if (this.devMode) return;
    window.dm.exit();
  }

  //timeout
  handleTimeout(func: Function, delay: number) {
    const timeout = setTimeout(() => {
      func();
      clearTimeout(timeout);
    }, delay);
  }

  formatCharCode(num: number) {
    return String.fromCharCode(num + 65);
  }

  formatLatex(str: string) {
    return str.replace(/<latex>/g, "$").replace(/<\/latex>/g, "$");
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
<style lang="scss">
.underline {
  border-bottom: #f2596a solid 2px;
}
</style>
