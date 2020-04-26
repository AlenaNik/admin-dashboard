<template>
    <div class="container"
         :class="{'light-background' : !isDarkMode, 'dark-background' : isDarkMode}"
    >
        <request-account></request-account>
        <div class="login">
            <img src="../../assets/DCHQ.svg" alt="" v-if="isDarkMode">
            <img src="../../assets/DCHQ-dark.svg" alt="" v-if="!isDarkMode">
            <h4 :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}">Sign into * </h4>
            <input type="email" placeholder="Email"
                   :class="{'light-field' : isDarkMode, 'dark-field' : !isDarkMode}"
            >
            <input type="password" placeholder="Password"
                   :class="{'light-field' : isDarkMode, 'dark-field' : !isDarkMode}"
            >
            <button>Sign In</button>
            <router-link to="/recover"
                         :class="{'light-link': isDarkMode, 'dark-link' : !isDarkMode}"
            >Forgot the password?</router-link>
            <SwitchButton>Toggle</SwitchButton>
        </div>
    </div>
</template>


<script>
    import RequestAccount from '../../components/RequestAccount'
    import SwitchButton from '../../components/SwitchButton'

    export default {
        name: "SignIn",
        components: {
          RequestAccount,
            SwitchButton
        },
        computed: {
            isDarkMode() {
                return this.$store.getters.isDarkMode;
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../global-styles/colors";
    @import "../../global-styles/typography";

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
    }
    .login {
        width: 400px;
    }
</style>
