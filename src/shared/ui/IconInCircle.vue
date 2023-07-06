<template>
  <div class="circle" :style="circleStyle">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    width: {
      type: String,
      default: "40px",
    },
    height: {
      type: String,
      default: "40px",
    },
  },
  computed: {
    circleStyle() {
      return {
        display: "flex",
        width: this.width,
        height: this.height,
        borderRadius: "50%",
        justifyContent: "center",
        alignItems: "center",
      };
    },

  },
};
</script>

<style scoped>
.circle {
  display: flex;
  text-align: center;
  background-color: rgba(225, 224, 224, 0.3);
}
</style>