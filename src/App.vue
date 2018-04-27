<template>
  <div id="app">
    <header>
      Pinch Css Framework
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
  @import "../pinch.scss";

  #app {
    @extend %container;
  }
  header {
    @extend %container-invert;
  }
  .field {
    @extend %field;
  }
</style>
