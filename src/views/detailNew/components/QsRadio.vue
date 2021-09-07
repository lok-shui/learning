<template>
  <div class="flex center radio-contain">
    <div
      v-for="(item, $index) in questions"
      :key="$index"
      class="name"
      :class="{ radio: index === $index }"
      @click="handleChange($index)"
    >
      第{{ item }}问
    </div>
    <!-- <div class="name radio" :style="radioStyle">第{{ questions[index] }}问</div> -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import pageEvent from "@/utils/event";

@Component
export default class QsRadio extends Vue {
  @Prop() count!: number;

  index: number = 0;

  get questions() {
    return Array.from({ length: this.count }, (item, index) => index + 1);
  }

  mounted() {
    pageEvent.on("qsRadioEvent", val => {
      this.handleChange(val);
    });
  }

  handleChange(index: number) {
    if (index === this.index) return;
    this.index = index;
    this.$emit("handleChange", index);
    pageEvent.emit("windowTouch");
  }

  setDefault(index: number) {
    this.index = index;
  }
}
</script>

<style lang="scss" scoped>
.radio-contain {
  height: 32px;
  position: relative;
  background-color: #d8dde7;
  border-radius: 20px;

  .name {
    width: 74px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    color: #949cb0;
    font-size: 12px;
    border-radius: 20px;
    &:not(:last-child) {
      margin-right: 16px;
    }
  }

  .radio {
    // position: absolute;
    color: #fd9700;
    font-size: 16px;
    transition: 0.2s;
    // z-index: 9;
    background: linear-gradient(
        180deg,
        rgba(254, 254, 254, 1) 0%,
        rgba(242, 246, 248, 1) 100%
      )
      rgba(255, 255, 255, 1);
    box-shadow: 0 2px 3px 0 rgba(41, 67, 83, 0.09);
  }
}
</style>
