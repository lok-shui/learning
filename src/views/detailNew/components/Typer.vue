<template>
  <div class="typer-contain">
    <div v-if="!image">
      <div class="base-text" v-html="content" ref="content" />
      <div class="typer-text" ref="typer" />
    </div>
    <div v-else>
      <img class="img base-text" :src="image.base64" />
      <img
        v-show="showImg"
        class="img typer-text fade-in"
        :src="image.base64"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import pageEvent from "@/utils/event";

@Component
export default class Typer extends Vue {
  @Prop() content!: any;
  // @Prop() showAll!: boolean; //表示是否直接显示全部 false则启用打字机效果
  @Prop() image: any;

  myInterval: any;
  text: string = "";

  showImg: boolean = false;

  finished: boolean = false;

  timeout: any;

  interval: any;

  created() {
    // console.log(this.content)
  }

  mounted() {
    const MathJax = window.MathJax;
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, this.$refs.content]);
  }

  //直接展示
  show() {
    if (!this.content || this.finished) return;
    clearInterval(this.myInterval);
    const typerEl = this.$refs.typer as HTMLElement;
    typerEl.innerHTML = this.content;
    this.finished = true;
    this.$nextTick(() => {
      const MathJax = window.MathJax;
      MathJax.Hub.Queue(["Typeset", MathJax.Hub, typerEl]);
    });
  }

  //播放打字效果
  play() {
    if (this.finished) {
      this.actionEmit();
      return;
    }
    if (!this.content) {
      this.finished = true;
      this.showImg = true;
      this.actionEmit();
      return;
    }
    const typerEl = this.$refs.typer as HTMLElement;
    const nodes = (this.$refs.content as HTMLElement).childNodes;
    const length = nodes.length;
    // let timeout: any
    clearTimeout(this.timeout);
    clearInterval(this.interval);
    typerEl.innerHTML = "";
    let tag = 0;
    const animate = () => {
      if (tag >= length || this.finished) {
        this.finished = true;
        this.actionEmit();
        return;
      }
      const node = nodes[tag] as any;
      const type = Object.prototype.toString.call(node);
      switch (type) {
        case "[object Text]": {
          const text = node.wholeText;
          let _tag = 0;
          let _length = text.length;
          let _text = typerEl.innerHTML;
          this.interval = setInterval(() => {
            _text += text.substr(_tag, 1);
            typerEl.innerHTML = _text;
            _tag += 1;
            if (_tag >= _length) {
              clearInterval(this.interval);
              tag += 1;
              animate();
            }
          }, 100);
          break;
        }
        case "[object HTMLSpanElement]":
        case "[object HTMLScriptElement]": {
          this.timeout = setTimeout(() => {
            clearTimeout(this.timeout);
            typerEl.innerHTML = typerEl.innerHTML + node.outerHTML;
            tag += 1;
            animate();
          }, 100);
          break;
        }
        default:
          break;
      }
    };

    animate();
  }

  clean() {
    clearInterval(this.myInterval);
    const typerEl = this.$refs.typer as HTMLElement;
    if (!typerEl) return;
    typerEl.innerHTML = "";
    this.finished = false;
  }

  actionEmit() {
    const timeout = setTimeout(() => {
      clearTimeout(timeout);
      pageEvent.emit("typerEnd");
    }, 200);
  }
}
</script>
<style lang="scss" scoped>
.typer-contain {
  position: relative;
  font-size: 16px;
  padding-left: 18px;

  .base-text {
    opacity: 0;
  }

  .typer-text {
    position: absolute;
    left: 18px;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 9;
    // width: 100%;
    // padding-left: 18px;
  }

  .img {
    max-width: 100%;
  }
}
</style>
