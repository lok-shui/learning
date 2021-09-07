<template>
  <div class="list-contain">
    <!-- <div
      v-for="item in list"
      :key="item['question_id']"
      class="list-item"
      @click="openDetail(item['question_id'])"
    >
      <div class="text-contain" v-html="item.title" />
      <div class="flex center info-contain">
        <div class="type" v-html="item['question_type']" />
        <div class="flex center difficulty">
          <span>难度：</span>
          <score :score="item.diff" from="list" />
        </div>
      </div>
    </div> -->
    <div
      v-for="item in list"
      :key="item['question_id']"
      class="list-item"
      @click="openDetail(item.id)"
    >
      <div class="text-contain" v-html="item.text" />
      <div class="flex center info-contain">
        <div class="type" v-html="item.type" />
        <div class="flex center difficulty">
          <span>难度：</span>
          <score :score="item.difficulty" from="list" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import Score from "@/components/Score.vue";
// import dataList from "../detail/data";
import { getScreenType } from "@/utils";
import QuestionService from "@/service/question";

import list from "./data";

const questionService = QuestionService.getService();

@Component({
  components: {
    Score
  }
})
export default class List extends Vue {
  list: any[] = [];
  gradeId: string = "";

  devMode: boolean = true; //是否pc调试模式

  created() {
    const gradeId = this.$route.query.gradeId || "200";
    this.gradeId = gradeId as string;
    // this.getList();

    console.log(list);
    this.list = list.filter(item => item.id === 1 || item.id === 7);
  }

  mounted() {
    const webType = getScreenType();
    this.devMode = webType.isPc;

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

  async getList() {
    const response = await questionService.getList({
      gradeId: this.gradeId,
      pageSize: 100
    });
    console.log(response);
    this.list = response.map((item: any) =>
      Object.assign(item, {
        title: item.title.replace(/<latex>/g, "$").replace(/<\/latex>/g, "$")
      })
    );
    this.$nextTick(() => {
      const MathJax = window.MathJax;
      MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
    });
  }

  openDetail(id: string) {
    console.log("detail--", id);
    if (this.devMode) {
      this.$router.push({
        path: "detail",
        query: {
          id
        }
      });
      return;
    }
    window.dm.loadScript(id);
  }
}
</script>

<style lang="scss" scoped>
.list-contain {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #f6f6f5;
  overflow: auto;
  padding: 35px 40px 0;

  &::-webkit-scrollbar {
    display: none;
  }

  .list-item {
    width: 880px;
    height: 320px;
    background-color: #ffffff;
    box-shadow: 0px -8px 27px 0px rgba(0, 0, 0, 0.13);
    border-radius: 32px;
    margin-bottom: 35px;
    padding-top: 24px;

    .text-contain {
      width: 810px;
      height: 160px;
      line-height: 53px;
      font-size: 32px;
      color: 32px;
      margin-left: 40px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      animation-duration: 0.8s;
      animation-name: fadeIn;
    }

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }

      20% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }

    .info-contain {
      margin: 27px 0 0 27px;
      justify-content: flex-start;

      .type {
        width: 130px;
        height: 54px;
        line-height: 54px;
        border-radius: 27px;
        background-color: rgba(242, 89, 106, 0.13);
        color: #ff8fa3;
        font-size: 27px;
        text-align: center;
      }

      .difficulty {
        margin-left: 27px;
        width: 350px;
        height: 54px;
        border-radius: 27px;
        background-color: rgba(107, 47, 241, 0.13);
        color: #a991ff;
        font-size: 27px;
      }
    }
  }
}
</style>

<style lang="scss">
.list-contain {
  .MathJax span {
    font-size: 28px;
  }

  p {
    margin-bottom: 0;
  }
}
</style>
