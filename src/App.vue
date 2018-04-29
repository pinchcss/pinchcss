<template>
  <div id="app">
    <header>
      <h1 class="brand-logo">Pinch Css Framework</h1>
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
    margin-bottom: 1em;
    padding-top: .35em;
    padding-bottom: .35em;
    background: $brand-main;
    color: $body-bg;
    text-align: center;
    box-shadow: 0 1px 1px 0 rgba(0,0,0, .5);
  }

  .brand-logo {
    font-size: 1.5em;
    font-weight: 900;
    letter-spacing: .1ex;
    font-variant: small-caps;
    text-shadow: 1px 1px 0 rgba(0,0,0, .5);
    margin-bottom: 0;
  }

  .field {
    @extend %field;
  }
</style>
