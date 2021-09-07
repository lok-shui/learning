<template>
  <div class="speed-control">
    <div v-show="!switchVisable" class="speed-btn" @click="toggleSpeed">
      {{ speed.label }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component
export default class SpeedControl extends Vue {
  speedTag: number = 2;

  speedList: any[] = [
    { label: "0.5X", value: 0.5 },
    { label: "0.75X", value: 0.75 },
    { label: "1.0X", value: 1 },
    { label: "1.5X", value: 1.5 }
  ];

  switchVisable: boolean = false;

  get speed() {
    return this.speedList[this.speedTag];
  }

  toggleSpeed() {
    if (this.speedTag < 3) this.speedTag += 1;
    else this.speedTag = 0;
    const val = this.speedList[this.speedTag].value;
    this.$emit("toggleSpeed", val);
  }
}
</script>

<style lang="scss" scoped>
.speed-control {
  position: relative;

  .speed-btn {
    width: 48px;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    background-color: #ffc82e;
    box-shadow: 0px 10px 20px 0px rgba(248, 202, 83, 0.3),
      0px 16px 6px -11px rgba(255, 176, 46, 0.24);
    color: rgba(0, 0, 0, 0.85);
    font-size: 12px;
    font-weight: bold;
  }
}
</style>
