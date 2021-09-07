<template>
  <div>
    <div class="unknown">
      <!-- “不太明白” 的组件 -->
      <div class="query">对这一步有什么疑问吗？</div>

      <button
        :class="activeIndex == index ? 'btnBg' : 'primary'"
        v-for="(item, index) in active"
        :key="index"
        @click="show(index)"
      >
        {{ item }}
      </button>
    </div>
    <div class="popcontent" v-show="visit">
      已记录您的反馈，我们会及时给您答复！
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Ant from "ant-design-vue";
@Component({
  components: {
    APopover: Ant.Popover,
    AButton: Ant.Button
  }
})
export default class UnKnown extends Vue {
  @Prop({}) visits!: any;
  visit: boolean = false; // 弹出的气泡
  closepop: boolean = true; // 关闭弹窗
  active: any[] = ["这一步是怎么得来的？", "我觉得这一步写错了"];
  activeIndex: number = 0;

  show(index: number) {
    this.activeIndex = index;
    this.visit = true;
    setTimeout(() => {
      this.visit = false;
      this.$emit("closePop");
    }, 2000);
  }
}
</script>
<style lang="scss" scoped>
button {
  outline: none;
  background: none;
}
.unknown {
  width: 100%;
  text-align: center;
  .primary {
    margin-bottom: 20px;
    width: 240px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border: none;
    color: black;
  }
  .btnBg {
    @extend .primary;
    background: rgba(255, 200, 46, 1);
    box-shadow: 0px -2px 0px 0px rgba(255, 167, 46, 0.63);
    border-radius: 20px;
  }
  .query {
    width: 100%;
    margin: 10px auto 20px -60px;
    color: #989898;
  }
}
.popcontent {
  width: 350px;
  height: auto;
  position: absolute;
  left: -260px;
  bottom: -60px;
  padding: 10px;
  margin-left: 40px;
  border-radius: 20px;
  text-align: center;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 2px 2px 2px rgba(41, 67, 83, 0.1),
    0px 6px 6px 0 rgba(74, 96, 153, 0.1);
}
</style>
