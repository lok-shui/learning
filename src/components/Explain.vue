<template>
  <div class="explain">
    <!-- 这是:点开步骤，详细讲解 的组件 -->
    <div class="line1">{{ eachLine.line1 }}</div>
    <div class="line2">{{ eachLine.line2 }}</div>
    <div class="line3">
      <span class="color">{{ eachLine.line3 }}</span>
      <span>{{ eachLine.mark }}</span>
      <span class="icon" @click="clickAction" v-show="eachLine.correct[0] == 1">
        <img src="../assets/images/v1.6/ic_hotzone_question.png" alt="" />
      </span>
      <span v-show="eachLine.correct == true" class="correct">
        <img src="../assets/images/v1.6/ic_hotzone_correct.png" alt="" />
      </span>
      <span v-show="eachLine.correct == false">
        <img src="../assets/images/v1.6/ic_pop_result_wrong.png" alt="" />
      </span>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
@Component({
  components: {}
})
export default class Explain extends Vue {
  @Prop({
    type: Object,
    required: false
  })
  eachLine!: object;

  clickAction() {
    this.$emit("clickHeadAction");
  }
}
</script>
<style lang="scss" scoped>
.explain {
  width: 100%;
  .line1,
  .line2,
  .line3 {
    line-height: 40px;
    padding-left: 20px;
  }
  .line3 {
    background: #e5e9f0;
  }
  .color {
    font-size: 16px;
    color: #7b9fff;
    font-weight: 500;
  }
  .icon {
    display: inline-block;
    width: 28px;
    height: 28px;
    line-height: 28px;
    margin-left: 8px;
    img {
      max-width: 100%;
    }
  }
  .correct {
    width: 26px;
    height: 26px;
    line-height: 26px;
    margin-left: 15px;
    border-radius: 50%;
    text-align: center;
    display: inline-block;
    background: white;
  }
}
</style>
