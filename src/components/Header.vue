<template>
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/team">Team</router-link>
    </div>
</template>


<script>
    export default {
      name: "Header"
    }
</script>

<style scoped lang="scss">
@import '../global-styles/colors';

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: $white;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
