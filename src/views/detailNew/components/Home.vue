<template>
  <div v-if="title" class="flex home-contain fade-in">
    <div v-if="title.images && title.images.length" class="img-contain">
      <div v-for="item in title.images" :key="item.hash" class="drawing-board">
        <drawing-board :graph="item" ref="drawingBoard" />
      </div>
    </div>
    <div class="content">
      <div class="text" v-html="title.text" ref="content" />
      <div
        v-if="title.imagesInLine && title.imagesInLine.length"
        class="images"
      >
        <img
          v-for="item in title.imagesInLine"
          :key="item.hash"
          :src="item.base64"
        />
      </div>
      <div class="qs-contain">
        <div
          v-for="(item, index) in title.questions"
          :key="index"
          class="question"
          @click="startByIndex(index)"
        >
          <span v-html="item"></span>
          <div class="play" />
        </div>
      </div>

      <div v-if="title.options && title.options.length" class="options-contain">
        <div
          v-for="(item, $index) in title.options"
          :key="$index"
          class="flex option"
        >
          <div class="index">{{ formatCharCode($index) }}</div>
          <div class="option-content">{{ item }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import DrawingBoard from "../components/DrawingBoard.vue";
import { formatCharCode } from "@/utils";

@Component({
  components: {
    DrawingBoard
  }
})
export default class Home extends Vue {
  @Prop() title: any;

  get formatCharCode() {
    return formatCharCode;
  }

  mounted() {
    const MathJax = window.MathJax;
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
  }

  graphAction(data: any[]) {
    const boards = this.$refs.drawingBoard as any[];
    const arr = Array.from({ length: boards.length }, (item, index) => index);
    arr.forEach(pictureNo => {
      const el = boards[pictureNo];
      const _data = data.filter(item => item.pictureNo === pictureNo);
      if (_data.length) {
        el.draw(_data);
      }
    });
    this.textAction(data);
  }

  textAction(data: any[]) {
    const el = this.$refs.content as HTMLElement;
    data.forEach(item => {
      const ele = (el as Element).querySelector(item.target);
      if (ele) {
        ele.classList.add("text-highlight");
      }
    });
  }

  clean() {
    const boards = this.$refs.drawingBoard as any[];
    boards.forEach(board => {
      board.clean();
    });
  }

  startByIndex(index: number) {
    this.$emit("startByIndex", index);
  }
}
</script>
<style lang="scss" scoped>
.home-contain {
  position: relative;
  width: 100%;
  height: 100%;

  .img-contain {
    width: 272px;
    height: 100%;
    overflow: auto;

    .drawing-board {
      width: 250px;
      margin: auto;
    }
  }

  .content {
    flex: 1;
    height: 100%;
    overflow: auto;
    padding: 28px 34px;

    &::-webkit-scrollbar {
      /*滚动条整体样式*/
      width: 3px; /*高宽分别对应横竖滚动条的尺寸*/
      height: 1px;
    }

    &::-webkit-scrollbar-thumb {
      /*滚动条里面小方块*/
      border-radius: 10px;
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      background: #aaaaaa;
    }
    &::-webkit-scrollbar-track {
      /*滚动条里面轨道*/
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      background: #ededed;
    }

    .text {
      word-break: break-all;
      font-size: 16px;
      color: #000000;
      line-height: 28px;
    }

    .images {
      width: 310px;
      margin-top: 10px;
      .img {
        max-width: 100%;
      }
    }

    .qs-contain {
      margin-top: 24px;

      .question {
        width: 100%;
        background-color: #f4f6f8;
        padding: 8px 0 8px 48px;
        word-break: break-all;
        color: #000000;
        font-size: 16px;
        line-height: 24px;
        position: relative;
        margin-bottom: 8px;

        .play {
          width: 24px;
          height: 24px;
          position: absolute;
          left: 14px;
          top: 8px;
          background-size: 100% 100%;
          background-image: url("../../../assets/images/v1.6/icon_play_step.png");
        }
      }
    }

    .options-contain {
      position: relative;
      width: 100%;

      .option {
        line-height: 24px;
        font-size: 16px;
        margin-top: 10px;
        padding: 0 24px 0 48px;
        align-items: center;

        .index {
          color: rgba(0, 0, 0, 0.85);
        }
        .option-content {
          color: rgba(0, 0, 0, 0.65);
          margin-left: 15px;
          word-break: break-all;
        }
      }
    }
  }
}
</style>
<style lang="scss">
.text-highlight {
  background-color: rgba(122, 158, 255, 0.2);
  padding: 2px 4px;
  border-radius: 4px;
  transition: 0.5s;
  // line-height: 32px;

  &.now {
    background-color: rgba(122, 158, 255, 0.4);
  }
}
</style>
