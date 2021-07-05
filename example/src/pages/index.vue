<template>
  <div class="bg">{{text}}</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    text: 'Example'
  })
})
</script>

<style lang="less" scoped>
  .bg {
    background-color: blue;
  }
</style>