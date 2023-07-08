<script setup  lang="ts">

    import {computed} from "vue";

    const props = defineProps({
      width: {
        type: String,
        default: "40px",
      },
      height: {
        type: String,
        default: "40px",
      },
    });

    const circleStyle = computed(() => ({
      display: "flex",
      width: props.width,
      height: props.height,
      borderRadius: "50%",
      justifyContent: "center",
      alignItems: "center",
    }));

</script>
<template>
  <div class="circle" :style="circleStyle">
    <div>
      <slot></slot>
    </div>
  </div>
</template>



<style scoped>
.circle {
  display: flex;
  text-align: center;
  background-color: rgba(225, 224, 224, 0.3);
}
</style>