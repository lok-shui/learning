<template>
  <div class="title-content">
    <div class="text" v-html="title.text" ref="content" />
    <div v-if="title.imagesInLine.length" class="images">
      <img
        v-for="item in title.imagesInLine"
        :key="item.hash"
        :src="item.base64"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component
export default class TitleContent extends Vue {
  @Prop() title: any;
  @Prop() manual!: boolean;

  mounted() {
    const MathJax = window.MathJax;
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);

    if (this.manual) return;
    const el = this.$refs.content as HTMLElement;
    this.title.highlight.forEach((target: string) => {
      const ele = (el as Element).querySelector(target);
      if (ele) {
        ele.classList.add("text-highlight");
      }
    });
  }
}
</script>
<style lang="scss" scoped>
.title-content {
  width: 100%;

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
}
</style>
