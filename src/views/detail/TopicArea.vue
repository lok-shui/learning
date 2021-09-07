<template>
  <div class="wrapper">
    <!-- 头部样式 -->
    <header class="header">
      <div class="left">
        <div class="back">
          <img src="../../assets/images/v1.6/icon_back.png" alt="" />
        </div>
        <div class="answer">解答题</div>
        <div class="difficulty"><span>难度:</span></div>
      </div>
      <div class="right">
        <button class="tapBtn">第一问</button>
        <button class="tapBtn">第二问</button>
        <button class="tapBtn">第三问</button>
        <button class="tapBtn">第四问</button>
      </div>
    </header>
    <div class="pauseBtn">
      <img src="../../assets/images/v1.6/icon_play.png" alt="" />
    </div>
    <!-- 内容区域 -->
    <section class="section">
      <div class="content">
        <!-- 左侧图片 -->
        <div class="imgArea">
          <div class="imgWrap">
            <div class="imgTitle">图1</div>
            <!-- <drawing-board>
            </drawing-board> -->
          </div>

          <div class="imgWrap">
            <div class="imgTitle">图2</div>
          </div>
          <div class="imgWrap">
            <div class="imgTitle">图3</div>
          </div>
          <div class="imgWrap">
            <div class="imgTitle">图4</div>
          </div>
        </div>
        <!-- 右侧题干区域 -->
        <div class="subject">
          <!-- 
            <button  @clickHeadAction="clickChild" >bu</button> -->
          <!-- <explain :eachLine="lineContent" ></explain> -->

          <!-- 讲解步骤组件 -->
          <each-step></each-step>

          <!-- 题干组件 -->

          <!-- 视频组件 -->
          <!-- <video-child :url='videoURL' :poster="poster"></video-child> -->
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import dataList from "../detail/data";
import QuestionService from "@/service/question";
import { getScreenType, color16 } from "@/utils";
import DrawingBoard from "@/components/DrawingBoard.vue";
import VideoChild from "@/components/Video.vue";
import EachStep from "@/components/EachStep.vue";
import Explain from "@/components/Explain.vue";
import EventEmitter from "eventemitter3";

const questionService = QuestionService.getService();
const pageEvent = new EventEmitter();
let data: any;

@Component({
  components: {
    DrawingBoard,
    VideoChild,
    EachStep,
    Explain
  }
})
export default class TopicArea extends Vue {
  childmsg: string = "";
  devMode: boolean = true;
  dataId: string = "1";
  gradeId: string = "";
  content: string = "";
  graph: any = null;
  spread1: boolean = false;
  spread2: boolean = false;
  spread3: boolean = false;
  lineContent: object = {
    line1: "设正方形零件的边长为EF=x mm",
    line2: "则KD=FH=x mm",
    line3: "EF",
    mark: "//"
  };
  src: string =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRIuDlPsj3tyH5Zmab6xPSXZEk163Cht-jBepDUpklAmE4oMByz&usqp=CAU";

  // 视频的url 或 视频文件
  videoURL: string =
    "https://stream7.iqilu.com/10339/upload_transcode/202002/09/20200209104902N3v5Vpxuvb.mp4";
  poster: string = "";

  triganle: string = "返回的数据内容xxx";
  triganle3: string =
    "返回的数据内容xxx返回的数据内容xxx返回的数据内容xxx返回的数据内容xxx返回的数据内容xxx返回的数据内容xxx返回的数据内容xxx返回的数据内容xxx";

  created() {
    const webType = getScreenType();
    this.devMode = webType.isPc;

    if (!this.devMode) return;
    const id = (this.$route.query.id as string) || "1001140";
    this.dataId = id;
    this.getDetail(id);
  }
  //web端调试用获取题目详情
  async getDetail(id: string) {
    const response = await questionService.getDetail({ id });
    data = response;
    // console.log('data',response.subject.view)
    let a = response.subject.view.map((item: any) => {
      return item.content;
    });
    this.content = a.toString();

    // console.log('tiem',this.content)
    this.init(response);
  }

  init(data: any) {
    //   console.log('data',data)
  }

  onSpread1() {
    this.spread1 = !this.spread1;
  }
  onSpread2() {
    this.spread2 = !this.spread2;
  }
  onSpread3() {
    this.spread3 = !this.spread3;
  }
  clickChild(data: string) {
    this.childmsg = data;
  }
}
</script>
<style lang="scss" scoped>
.wrapper {
  //   padding: 1% 2%;
  width: 100%;
  height: 100%;
  margin: 0;
  background: rgba(229, 233, 240, 1);
  .flex {
    display: flex;
    align-items: center;
  }
  .radius {
    border: 1px solid gray;
    border-radius: 15px;
    padding: 5px 15px;
  }
  .stepRadius {
    border: 1px solid gray;
    border-radius: 10px;
    padding: 2px 15px;
  }
  //    头部样式
  .header {
    width: 100%;
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2% 0 0;
    .left {
      @extend .flex;
      width: 40%;
      .back {
        width: 64px;
        height: 64px;
        img {
          max-width: 100%;
          max-height: 100%;
          margin-top: 5px;
        }
      }
      .answer {
        width: 56px;
        height: 30px;
        line-height: 30px;
        background: #cfdaf3;
        border-radius: 4px;
        color: #5e86f1;
        text-align: center;
        font-weight: bold;
        margin-right: 24px;
      }
      .difficulty {
        span {
          color: #949cb0;
        }
      }
    }
    .right {
      width: 338px;
      height: 32px;
      background: rgba(216, 221, 231, 1);
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      // 第几问 切换时的样式
      .tapBtn {
        width: 74px;
        height: 32px;
        border-radius: none;
        outline: none;
        border: none;
        text-align: center;
        background: none;
      }
      .tapBtn:focus {
        background: linear-gradient(
            180deg,
            rgba(254, 254, 254, 1) 0%,
            rgba(242, 246, 248, 1) 100%
          )
          rgba(255, 255, 255, 1);
        box-shadow: 0px 2px 3px 0px rgba(41, 67, 83, 0.09);
        border-radius: 20px;
        font-weight: bold;
        outline: none;
        color: #fd9700;
        font-size: 16px;
        border: solid white;
      }
    }
  }
  // 左下角的播放按钮
  .pauseBtn {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 112px;
    height: 102px;
    img {
      max-width: 100%;
    }
  }
  // 中间内容样式
  .section {
    width: 890px;
    height: 85%;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 12px 24px 0px rgba(41, 67, 83, 0.1);
    border-radius: 12px;
    margin: 2% 5% 2%;
    .content {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      // 左边图片
      .imgArea {
        width: 272px;
        height: 100%;
        overflow: auto;
        position: flex;
        left: 0;
        top: 0;
        text-align: center;
        padding-top: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .imgWrap {
          width: 185px;
          height: 112px;
          margin-bottom: 100px;
          img {
            max-width: 100%;
            margin-bottom: 4%;
          }
          .imgTitle {
            font-size: 12px;
          }
        }
      }
      .subject {
        width: 70%;
        height: 100%;
        overflow: auto;
        padding: 10px 20px;
        // background:#eee;
        .main,
        .embed,
        .question,
        .choose {
          width: 100%;
          margin-top: 10px;
        }
        .main {
          height: 18%;
          // background: #aaa;
        }
        .embed {
          height: 25%;
          display: grid;
          // background: #eee;
          grid-template-columns: repeat(7, 80px);
          grid-template-rows: repeat(3, 34px);
          .rect {
            border: 1px solid gray;
            margin: -1px -1px 0 0;
            text-align: center;
          }
        }
        .question {
          min-height: 30%;
          .question-1,
          .question-2,
          .question-3 {
            width: 96%;
            min-height: 30px;
            border: 1px solid gray;
            border-radius: 8px;
            margin-bottom: 5px;
            line-height: 30px;
            padding-left: 5px;
          }
          span {
            vertical-align: middle;
          }
          .btn {
            margin-left: 10px;
            width: 0;
            height: 0;
            display: inline-block;
            border-width: 8px 12px;
            border-style: solid;
            border-color: transparent transparent transparent gray;
          }
          .spread {
            // width: 50px;
            // height: 50px;
            img {
              margin-left: 40%;
              width: 40px;
              height: 40px;
            }
          }
        }
        .choose {
          height: 30%;
          line-height: 36px;
        }
      }
    }
  }
}
</style>
