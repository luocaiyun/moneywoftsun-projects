<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
  @import "../public/assets/stylesheet/commons.css";
  #app{
    overflow-x: hidden;
  }
</style>
