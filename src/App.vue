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
    position: sticky;
    z-index: 1;
    top:0;
    margin-bottom: 1rem;
    padding-top: .35em;
    padding-bottom: .35em;
    background: $brand-main;
    color: $body-bg;
    text-align: center;
    font-size: 1.5em;
    font-weight: 900;
    letter-spacing: .1ex;
    box-shadow: 0 1px 1px 0 rgba(0,0,0, .5);
    text-shadow: 1px 1px 0 rgba(0,0,0, .5);
  }
  .field {
    @extend %field;
  }
</style>
