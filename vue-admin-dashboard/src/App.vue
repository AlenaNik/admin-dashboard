<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: "App",
    mounted() {
      const isDarkMode = this.$store.getters.isDarkMode;
      document.body.style.background = isDarkMode ? '#212c4f' : '#f0f3f5'
    }
  }
</script>

<style lang="scss">
@import "./global-styles/colors";
@import "./global-styles/typography.scss";

body {
  margin: 0;
  background-color: $dark-blue;
}
h1 {
  @include heading-1;
}
p {
  @include large-text($purple);
}
#app {
  font-family: $system-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: $dark-blue;
  color: $white;
}

</style>
