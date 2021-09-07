<template>
  <div class="flex center score-contain">
    <div class="star full" v-for="i in score" :key="`full-${i}`" />
    <div class="star empty" v-for="i in 5 - score" :key="`empty-${i}`" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Score extends Vue {
  @Prop() score!: number;
}
</script>

<style lang="scss" scoped>
.score-contain {
  width: 120px;
  height: 24px;

  .star {
    width: 24px;
    height: 24px;
    background-size: 100% 100%;

    &.full {
      background-image: url("../../../assets/images/v1.6/icon_star.png");
    }
    &.empty {
      background-image: url("../../../assets/images/v1.6/icon_star_empty.png");
    }
  }
}
</style>
