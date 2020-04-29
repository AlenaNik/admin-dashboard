<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  import "animate.css"
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

* {
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}

body {
  margin: 0;
  background-color: $dark-blue;
  text-align: center;
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
  background-color: $dark-blue;
  color: $white;
}


.light-background {
  background: $dark-blue;
}
.light-background {
  background: $light-gray;
}

.light-text {
  color: $white;
}

.dark-text {
  color: $black;
}

.light-background {
  background-color: $light-gray;
}

.dark-background {
  background-color: $dark-blue;
}

.light-text {
  color: $white;
}

.dark-text {
  color: $black;
}

.light-field {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
}

.dark-field {
  background: rgba(198, 208, 235, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
}

  // generic
h4 {
margin: 0;
font-weight: bold;
font-size: 24px;
line-height: 34px;
text-align: center;
color: #FFFFFF;
}
input {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  height: 60px;
  width: 100%;
  padding-left: 20px;
  margin-top: 20px;
  font-size: 20px;
  color: white;

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
}
button {
  background: #56CCF2;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  border: none;

  height: 60px;
  width: 100%;
  font-size: 20px;
  color: white;
  margin-top: 20px;
  margin-bottom: 40px;
}

a {
  text-decoration: none;
  line-height: 25px;
  /* identical to box height */
  text-align: center;
  color: rgba(255, 255, 255, 0.3);
}
</style>
