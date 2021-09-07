<template>
  <div class="step-control" ref="StepControl">
    <div class="step-contain">
      <div v-for="(item, $index) in list" :key="item.value" class="step">
        <div
          v-if="$index !== 0"
          class="line"
          :class="{ actived: item.actived }"
        />
        <div
          class="point"
          :class="{ actived: item.actived, active: item.active }"
        />
      </div>
    </div>

    <div v-show="switchVisable" class="step-switch">
      <div class="step-contain" ref="stepContain">
        <div
          v-for="(item, $index) in list"
          :key="item.value"
          class="step"
          ref="step"
        >
          <div
            v-if="$index !== 0"
            class="line"
            :class="{ actived: $index <= stepIndex }"
          />
          <div
            class="point"
            :class="{
              actived: $index <= stepIndex,
              active: $index === stepIndex
            }"
          />
          <div
            class="label"
            :class="{ 'step-index': item.active, active: $index === stepIndex }"
          >
            {{ item.label }}
          </div>
        </div>

        <div class="step">
          <div class="label" :class="{ active: stepIndex === -1 }">取消</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { findIndex } from "lodash";
import pageEvent from "@/utils/event";

@Component
export default class StepControl extends Vue {
  @Prop() list!: any[];

  switchVisable: boolean = false;

  stepIndex: number = 0; //标志滑动选中的index

  stepTags: number[] = [];

  mounted() {
    let timer: any;
    const el = this.$refs.StepControl as HTMLElement;
    el.addEventListener("touchstart", (e: any) => {
      // console.log(e)
      pageEvent.emit("windowTouch");
      timer = setTimeout(() => {
        clearTimeout(timer);
        this.switchVisable = true;

        this.$nextTick(() => {
          let stepTags: number[] = [];
          const touchData = e.targetTouches[0];
          const stepContain = this.$refs.stepContain as HTMLElement;
          const steps = this.$refs.step as any[];
          const top = stepContain.offsetTop;
          steps.forEach((step: HTMLElement) => {
            const _top = top + step.clientHeight + step.offsetTop;
            stepTags.push(_top);
          });
          this.stepIndex = findIndex(
            stepTags,
            (tag: number) => touchData.clientY < tag
          );
          this.stepTags = stepTags;
          el.addEventListener("touchmove", this.getStepIndex);
        });
      }, 100);
    });

    el.addEventListener("touchend", () => {
      clearTimeout(timer);
      if (!this.switchVisable) return;
      this.switchVisable = false;
      el.removeEventListener("touchmove", this.getStepIndex);
      if (this.stepIndex !== -1) {
        pageEvent.emit("stepJump", this.list[this.stepIndex]);
      }
    });
  }

  getStepIndex(e: any) {
    const touchData = e.targetTouches[0];
    this.stepIndex = findIndex(
      this.stepTags,
      (tag: number) => touchData.clientY < tag
    );
    pageEvent.emit("windowTouch");
  }
}
</script>

<style lang="scss" scoped>
.step-control {
  position: relative;
  width: 50px;
  height: auto;

  .step-contain {
    position: relative;

    .step {
      position: relative;
      width: 8px;
      margin: auto;

      &:not(:first-child) {
        margin-top: 28px;
      }

      .point {
        position: relative;
        width: 8px;
        height: 8px;
        background-color: #a0a9ae;
        border-radius: 50%;
        z-index: 9;

        &.active {
          transform-origin: center center;
          transform: scale(1.5);
          transition: 0.3s;
        }
      }

      .line {
        position: absolute;
        width: 8px;
        height: 32px;
        background-color: #a0a9ae;
        top: -30px;
        transform-origin: center center;
        transform: scaleX(0.25);
      }

      .actived {
        background-color: #ffffff;
      }
    }
  }

  .step-switch {
    position: fixed;
    width: 160px;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.65);
    z-index: 100;
    padding: 90px 0 0 21px;

    .step-contain {
      .step {
        margin-left: 0;

        .label {
          position: absolute;
          width: 56px;
          height: 24px;
          line-height: 24px;
          background-color: rgba(0, 0, 0, 0.25);
          border-radius: 15px;
          text-align: center;
          color: rgba(255, 255, 255, 0.85);
          font-size: 12px;
          right: -66px;
          top: -8px;
          transform-origin: 0 center;

          &.active {
            transform: scale(1.3);
            transition: 0.3s;
            background-color: #ffffff;
            color: #7a9eff;
          }

          &.step-index {
            color: #7a9eff;
          }
        }
      }
    }
  }
}
</style>
