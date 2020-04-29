<template>
<div class="container">
  <h2>Team</h2>
  <div class="cards">
    <transition appear appear-active-class="animated flipInX">
      <a href="" class="card card-1"
      :class="{'light-card' : !isDarkMode, 'dark-card' : isDarkMode}"
      >
        <img src="../assets/slack.png" alt="" class="card-header">
        <h3>Slack</h3>
      </a>
    </transition>
    <transition appear appear-active-class="animated flipInX">
      <a href="" class="card card-2"
         :class="{'light-card' : !isDarkMode, 'dark-card' : isDarkMode}"
      >
        <img src="../assets/dropbox.png" alt="" class="card-header">
        <h3>Dropbox</h3>
      </a>
    </transition>
    <transition appear appear-active-class="animated flipInX">
      <a href="" class="card card-3"
         :class="{'light-card' : !isDarkMode, 'dark-card' : isDarkMode}"
      >
        <img src="../assets/notion.png" alt="" class="card-header">
        <h3>Notion</h3>

      </a>
    </transition>
    <transition appear appear-active-class="animated flipInX">
      <a href="" class="card card-4"
         :class="{'light-card' : !isDarkMode, 'dark-card' : isDarkMode}"
      >
        <img src="../assets/figma.png" alt="" class="card-header">
        <h3>Figma</h3>
      </a>
    </transition>
    <transition appear appear-active-class="animated flipInX">
      <a href="" class="card card-5"
         :class="{'light-card' : !isDarkMode, 'dark-card' : isDarkMode}"
      >
        <img src="../assets/contentful.png" alt="" class="card-header">
        <h3>Contentful</h3>
      </a>
    </transition>
  </div>
</div>
</template>

<script>
    export default {
      name: "Team",
      computed: {
        isDarkMode() {
          return this.$store.getters.isDarkMode;
        }
      }
    }
</script>

<style scoped lang="scss">
  .container {
    margin-left: 25px;
  }
  h2 {
    @include heading-2;
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .card {
    width: 100%;
    max-width: 200px;
    height: 200px;
    margin: 20px;
  }


  .card-1 {
    animation-delay: 1s;
  }
  .card-2 {
    animation-delay: 1.2s;
  }
  .card-3 {
    animation-delay: 1.5s;
  }
  .card-4 {
    animation-delay: 1.7s;
  }
  .card-5 {
    animation-delay: 2s;
  }

  .card-header {
    width: 100%;

  }
  .light-card {
    background: $white;
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    &:hover {
      box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.25);
    }
  }

  .dark-card {
    background: #1b233f;
    box-shadow: 0px 20px 40px rgba(255, 255, 255, 0.15);
    border-radius: 10px;
    &:hover {
      box-shadow: 0px 15px 30px rgba(255, 255, 255, 0.25);
    }
  }

</style>
