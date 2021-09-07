<template>
  <div class="eachStep">
    <!-- 讲解步骤 -->
    <div class="step1">
      步骤1<img
        src="../assets/images/v1.6/icon_play_step.png"
        alt=""
        @click="translate"
        v-show="show"
      />
      <span class="skill" @popContent="popcont($event)">技巧</span>做辅助线
      <div v-show="inner">inner</div>
      <!-- <img :src="src2" alt="" @click="translate" v-show="fade" /> -->
    </div>

    <!-- 讲解区 -->
    <div class="stepArea" v-show="fade">
      <explain
        :eachLine="lineContent"
        @clickHeadAction="clickChild($event)"
      ></explain>

      <!-- 弹出框 icon_play_step.png -->
      <div v-show="pop">
        <div class="pop">
          <un-known @closePop="closePop($event)"></un-known>

          <feed-back :knowledgePoints="knowledgePoints"></feed-back>

          <pop-content
            :chooses="options"
            :correctValue="correct"
            :noAnswer="noanswer"
            :answerRecords="recordObject"
            @popContent="popcont($event)"
          ></pop-content>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Component, Prop, Vue } from "vue-property-decorator";
import Explain from "./Explain.vue";
import PopContent from "./PopContent.vue";
import FeedBack from "./FeedBack.vue";
import UnKnown from "./UnKnow.vue";
export default {
  data() {
    return {
      src1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdididmuXGuXdWPhWGcuBvAG5r_FUOeOdc7etDN_8Z58UdlfoM&usqp=CAU",
      src2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0HtRuQYw4AHr1_Fy2vBcAuzJ0xTNFCS7LkiTudfFinp3nYNur&usqp=CAU",
      src3:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJKkkioga3WLSN-Lg5nYr0NppkCrnAqoArjSXdtDaCrDeEQ95X&usqp=CAU",
      fade: false,
      show: true,
      pop: false,
      unknown: true,
      inner: false,
      fadein: false,
      childmsg: "",
      parentMsg: [],
      nov: "",
      // 讲解内容
      lineContent: {
        line1: "设正方形零件的边长为EF=x mm",
        line2: "则KD=FH=x mm",
        line3: "EF",
        mark: "//",
        correct: [1, 2, 3]
      },
      recordObject: {
        index: 1, // 选项的索引
        answered: "correct" // 作答情况：答对，答错，没作答
      },
      recordObject2: [
        { index: 1 },
        { correctAnswer: "yes" },
        { errorSwered: "yes" },
        { noAnswer: "yes" }
      ],
      // ABCD选项的数据
      // chooses: [
      //   { message: "A. new80-X " },
      //   { message: "B. new80-XYZnew80-XYZnew80-XYZnew80-XYZnew80-XYZnew80-XYZnew80-XYZnew80-XYZnew80-XYZnew80-XYZnew80" },
      //   { message: "C. wne80-XYZ" },
      //   { message: "D. Dw80-XYZ" }
      // ],
      // 模拟的ABCD选项
      options: [
        "123123",
        "123123123",
        "dfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfg",
        "123qwe"
      ],
      correct: "123123", // 判断是不是正确答案
      noanswer: false,
      knowledgePoints: [
        {
          text: "平行线性质",
          cards: [
            {
              title: "平行线性质1",
              text: "两直线平行，同位角相等",
              firstFrame: {
                hash: "https",
                base64: "://d.zdqx.com/isadc_20190704/002.jpg"
              },
              url:
                "https://vod-progressive.akamaized.net/exp=1593255669~acl=%2A%2F625866489.mp4%2A~hmac=0d044a670b08cf37c0a171006f8364482ec499a52937444467ece78ecc47dd64/vimeo-prod-skyfire-std-us/01/2671/7/188355959/625866489.mp4?filename=Emoji+Saver+-+Bucket+Party.mp4"
            }
          ]
        },
        {
          text: "相似三角形的判定",
          cards: [
            {
              title: "相似三角形的判定2",
              text: "两角相等的三角形相似",
              firstFrame: {
                hash: "https",
                base64: "://qq.yh31.com/tp/fj/201903192118302864.jpg"
              },
              url: "http://vjs.zencdn.net/v/oceans.mp4"
            }
          ]
        },
        {
          text: "相似三角形的正确判定",
          cards: [
            {
              title: "相似三角形的正确判定3",
              text: "两角两角相等的三角形相似",
              firstFrame: {
                hash: "https",
                base64:
                  "://cdn.pixabay.com/photo/2020/01/24/14/47/landscape-pictures-4790401_960_720.jpg"
              },
              url: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
            }
          ]
        }
      ]
    };
  },
  components: {
    Explain,
    PopContent,
    FeedBack,
    UnKnown
  },
  mounted() {},
  watch: {
    parentMsg(newV, oldV) {
      console.log("new", newV);
      console.log(" old", oldV);
    }
  },
  methods: {
    closePop(e) {
      this.nov = e;
      console.log(e);
    },
    translate() {
      //   this.show = !this.show;
      this.fade = !this.fade;
      this.pop = false;
      if (!this.fade) {
        this.src1 = this.src1;
      }
    },
    popBtn() {
      this.pop = !this.pop;
    },

    clickChild(data) {
      this.pop = !this.pop;
      this.fadein = !this.fadein;
      this.nov = !this.nov;
      console.log("aaf", this.nov);
    },
    popcont(datap) {
      this.lineContent.correct = datap;
      this.lineContent.correct = Object.is(
        this.correct,
        this.lineContent.correct
      );
      console.log("new value", datap);
      // this.inner = datap
    },
    correctValue(value) {
      // console.log("correct");
      // this.correct = value
    }
  }
};
</script>
<style lang="scss" scoped>
.eachStep {
  width: 100%;
  background: #f4f6f8;
  .step1 {
    width: 500px;
    height: 40px;
    background: rgba(255, 255, 255, 1);
    border-radius: 4px;
    margin: 8px auto;
    padding-left: 16px;
    line-height: 40px;
    img {
      width: 24px;
      height: 24px;
      margin: auto 24px auto 10px;
    }
    .skill {
      width: 48px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      color: #7a9eff;
      font-weight: bold;
      margin-right: 16px;
      display: inline-block;
      background: #e4ecff;
    }
  }
  .stepArea {
    width: 500px;
    line-height: 30px;
    margin: auto;

    // 问号
    .question-mark {
      display: inline-block;
      width: 28px;
      height: 28px;
      line-height: 28px;
      margin-left: 8px;
      text-align: center;
      background: #ffc82e;
      color: white;
      border-radius: 50%;
      font-size: 16px;
    }
    .blue {
      font-size: 16px;
      color: #7b9fff;
      font-weight: 500;
    }
    .stepBg {
      height: 40px;
      line-height: 40px;
      background: #e5e9f0;
    }
    .each {
      padding-left: 20px;
    }
    .unknown {
      max-height: 28px;
      float: right;
      margin: 6px 10px 6px 12px;
    }
    // 弹出框
    .pop {
      width: 100%;
      height: 224px;
      margin: 10px 0;
      border-radius: 10px;
      background: white;
      padding: 24px 6px 24px 24px;
      .btnA,
      .btnB {
        width: 100%;
        height: 48px;
        line-height: 48px;
        background: rgba(244, 246, 249, 1);
        border-radius: 28px;
        margin-bottom: 16px;
        padding-left: 24px;
      }

      .info {
        width: 100%;
        text-align: right;
        padding-right: 5%;
        .confirm {
          width: 180px;
          height: 40px;
          background: rgba(255, 200, 46, 0.3);
          border-radius: 22px;
          outline: none;
          border: none;
          color: #c0ab7f;
          font-size: 16px;
          letter-spacing: 6px;
        }
        .understand {
          border: none;
          color: #c0ab7f;
          background: none;
          font-size: 16px;
          margin-left: 25px;
          &:focus {
            outline: none;
            border: none;
          }
        }
      }
    }
  }
}
</style>
