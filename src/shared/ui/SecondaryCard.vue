<!--в эту карту в качестве children передавать любой DIV-->
<script  lang="ts">
  export default {
    props:{
      width:{
        type:String,
        default:"100%"
      }
    }
  }
</script>

<template>
  <div :style="{width:this.width}" class="secondary-card">
   <slot class="g"></slot>

  </div>
</template>

<style scoped>
  .secondary-card{
    box-sizing: border-box;
    background-color: #e7e7e7;
    border-radius: 20px;
    padding: 15px 15px 5px 25px;
    margin: 0;
  }
  .secondary-card div{
    width: 100%;
  }


</style>