<template>
  <div>
    <!-- ABCD选项 -->
    <div class="itemWrap">
      <div
        v-for="(item, index) in chooses"
        :key="index"
        @click="getItem(index, item)"
        :class="{
          default: activeClass !== index,
          active: activeClass == index,
          unclick: unclick === true,
          green: greenIndex == index,
          red: redIndex == index
        }"
      >
        <!-- ABCD索引 -->
        <div>{{ String.fromCharCode("A".charCodeAt() + index) }}</div>
        <!-- 选项内容 -->
        <div v-html="item" class="item"></div>
        <!-- icon 图标 -->
        <div>
          <div class="select"></div>

          <div
            :class="{
              corIcon: greenIndex == index,
              fade: greenIndex !== index
            }"
          ></div>
          <div
            :class="{ errIcon: redIndex == index, fade: redIndex !== index }"
          ></div>
        </div>
      </div>
    </div>

    <!-- '确定' '不太明白' 按钮 -->
    <div :class="{ info }" v-show="correctBtn">
      <div ref="sure" class="sure">
        <div :class="{ unclick: activeClass == -1 }">
          <button
            :class="[confirms, confirmFocus]"
            ref="confirm"
            @click="confirm($event)"
          >
            确定
          </button>
        </div>

        <button class="understand" @touchstart.stop="understand($event)">
          不太明白
        </button>
      </div>
    </div>

    <!-- '回答正确' '回答错误' '没有作答' -->
    <button class="corrBtn" ref="correct">
      <img
        src="../assets/images/v1.6/ic_hotzone_correct.png"
        alt=""
      />回答正确，为你点赞
    </button>
    <button class="errBtn" ref="error">
      <img src="../assets/images/v1.6/ic_pop_result_wrong.png" alt="" />
      回答错误，再接再厉哦
    </button>
    <button class="underBtn" v-show="underBtn" ref="noanswer">
      <img
        src="../assets/images/v1.6/ic_pop_result_remind.png"
        alt=""
      />你这里没有作答，继续加油哦！
    </button>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component({
  components: {}
})
export default class PopContent extends Vue {
  @Prop({
    type: Array,
    required: false
  })
  chooses!: any;

  @Prop({}) correctValue!: any; // 接收正确的值，判断选中的答案是否正确

  //作答记录
  // @Prop({
  //   type: Object,
  //   required: false
  // })
  // answerRecords!: any;
  @Prop() answerRecords!: any;

  activeClass: number = -1; // 被选项的样式
  itemValue: string = ""; // 选项的值
  confirmFocus: string = ""; // 点击'确定'时的样式
  confirms: string = "confirm"; // '确定'
  default: any = "default"; // 选项的默认样式
  active: any = "active"; // 选项的选中样式
  underBtn: boolean = false; // '不太明白'
  correctBtn: boolean = true; // '回答正确'
  errortBtn: boolean = true; // '回答错误'
  unclick: boolean = false; // 当右边的'错误'/'正确'的icon图片出现时，选项不能再点击了
  info: string = "info";
  // 右边的绿色icon
  green: string = "green";
  greenIndex: number = -1;
  greenCopy: number = -1;
  // 右边的红色icon
  red: string = "red";
  redIndex: number = -1;
  redCopy: number = -1;

  btnwrap: any;
  corbtn: any;
  errbtn: any;
  // noAnswer:any;

  mounted() {
    // console.log('answerRecords',this.answerRecords)

    this.btnwrap = this.$refs.sure as HTMLElement; //  '确定' 和 '不太明白'
    this.corbtn = this.$refs.correct as HTMLElement; // '回答正确' 的btn
    this.errbtn = this.$refs.error as HTMLElement; // '回答错误' 的btn
    // this.noAnswer = this.$refs.noanswer as HTMLElement; //没有作答

    let correctIndex = this.chooses.findIndex(
      (item: any) => item == this.correctValue
    );
    let chooseIndex = this.answerRecords;
    // console.log('value',chooseIndex)
    if (chooseIndex == null) {
      this.activeClass = -1;
    } else if (chooseIndex == -1) {
      this.activeClass = -1;
      this.btnwrap.style.display = "none";
      this.errbtn.style.display = "none";
      this.corbtn.style.display = "none";
      this.underBtn = true;
    } else if (chooseIndex !== correctIndex) {
      this.redIndex = correctIndex;
      this.btnwrap.style.display = "none";
      this.errbtn.style.display = "block";
      this.corbtn.style.display = "none";
    } else if (chooseIndex == correctIndex) {
      this.greenIndex = correctIndex;
      this.btnwrap.style.display = "none";
      this.errbtn.style.display = "none";
      this.corbtn.style.display = "block";
    }

    const MathJax = window.MathJax;
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
  }

  created() {}

  records(val: any) {
    console.log("val", val);
  }

  getItem(index: any, item: any) {
    this.activeClass = index;
    this.underBtn = false;
    this.correctBtn = true;

    let confirm = this.$refs.confirm as HTMLElement;
    this.confirmFocus = "confirmFocus";
    this.confirms = "";

    // let value = item.message.slice(3);
    this.itemValue = item;

    this.greenCopy = index;
    this.redCopy = index;
  }
  understand(e: any) {
    this.underBtn = !this.underBtn;
    this.correctBtn = false;
    this.activeClass = -1; // 恢复默认样式
    this.$emit("popContent", "unknown");
    e.preventDefault();
    // console.log("触发了不太明白事件");
  }
  confirm(e: any) {
    if (this.itemValue.trim() == this.correctValue.trim()) {
      this.btnwrap.setAttribute("style", "display:none");
      this.errbtn.setAttribute("style", "display:none");
      this.corbtn.setAttribute("style", "display:block");

      this.$emit("popContent", this.itemValue.trim());
      this.unclick = true;

      this.activeClass = -1;
      this.redIndex = -1;
      this.greenIndex = this.greenCopy;
    } else {
      this.btnwrap.setAttribute("style", "display:none");
      this.errbtn.setAttribute("style", "display:block");
      this.corbtn.setAttribute("style", "display:none");

      this.activeClass = -1;
      this.greenIndex = -1;
      this.redIndex = this.redCopy;

      this.$emit("popContent", this.itemValue.trim());
      this.unclick = true;
    }
  }
}
</script>
<style lang="scss" scoped>
.green {
  border: 2px solid #0dc8a0;
  border-radius: 8px;
}
.red {
  border: 2px solid red;
  border-radius: 25px;
}
.fade {
  display: block;
}
// 不能点击
.unclick {
  pointer-events: none;
}
button:focus {
  outline: none;
}

.style {
  width: 100%;
  height: auto;
  word-break: break-all;
  line-height: 48px;
  // text-indent: -20px;
  background: rgba(244, 246, 249, 1);
  margin-bottom: 16px;
  padding-left: 24px;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.itemWrap {
  width: 90%;
  margin: auto;
  height: 150px;
  overflow-y: auto;
  padding: 20px 5px 5px 5px;
}
.confirmFocus {
  background: #ffc82e;
  color: #000;
  font-weight: bold;
  width: 180px;
  height: 40px;
  border-radius: 8px;
  outline: none;
  border: none;
  font-size: 16px;
  letter-spacing: 6px;
}

.default {
  @extend .style;
  .item {
    flex: 2;
    text-align: left;
    padding: 0 10px;
  }
  span {
    display: none;
  }
}
.active {
  @extend .style;
  border-radius: 8px;
  border: 3px solid #ffc82e;
  // overflow: hidden;
  align-items: flex-end;
  .item {
    flex: 2;
    text-align: left;
    padding: 0 10px;
  }
  .select {
    width: 35px;
    height: 35px;
    background: url("../assets/images/v1.6/ic_pop_option_selected.png")
      no-repeat;
    background-size: cover;
    margin-bottom: -2px;
  }
}
.errIcon {
  width: 36px;
  height: 35px;
  background: url("../assets/images/v1.6/ic_pop_option_wrong.png") no-repeat;
  background-size: cover;
  margin-right: 6px;
}
.corIcon {
  width: 35px;
  height: 35px;
  background: url("../assets/images/v1.6/ic_pop_option_correct.png") no-repeat;
  background-size: contain;
  margin-right: 6px;
}

.info {
  width: 100%;
  text-align: center;
  margin: 20px auto;
  .sure {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .confirm {
    width: 180px;
    height: 40px;
    background: rgba(255, 200, 46, 0.3);
    border-radius: 8px;
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
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    &:focus {
      outline: none;
      border: none;
    }
  }
}
.common {
  min-width: 240px;
  height: 40px;
  line-height: 40px;
  border-radius: 20px;
  border: none;
  margin: 0 auto;
  display: none;
  font-size: 16px;
  padding-bottom: 10px;
  img {
    width: 24px;
    margin-right: 8px;
  }
  span {
    margin-right: 5px;
  }
}
.corrBtn {
  @extend .common;
  background: #dbf7eb;
}
.errBtn {
  @extend .common;
  background: #ffe3e3;
}
.underBtn {
  @extend .common;
  display: block;
  background: #f4f6f9;
}
</style>
