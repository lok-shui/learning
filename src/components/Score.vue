<template>
  <div
    class="flex center score-contain"
    :class="{ 'list-type': from === 'list' }"
  >
    <div class="star full" v-for="i in score" :key="`full-${i}`" />
    <div class="star empty" v-for="i in 5 - score" :key="`empty-${i}`" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Score extends Vue {
  @Prop() score!: number;
  @Prop() from!: string;
}
</script>

<style lang="scss" scoped>
.score-contain {
  width: 130px;
  height: 20px;
  justify-content: space-between;

  .star {
    width: 22px;
    height: 20px;
    background-size: 100% 100%;

    &.full {
      background-image: url("../assets/images/icon_star.png");
    }
    &.empty {
      background-image: url("../assets/images/icon_star_empty.png");
    }
  }

  &.list-type {
    width: 235px;
    height: 35px;
    .star {
      width: 35px;
      height: 35px;
      &.full {
        background-image: url("../assets/images/icon_star2.png");
      }
      &.empty {
        background-image: url("../assets/images/icon_star2_empty.png");
      }
    }
  }
}
</style>
