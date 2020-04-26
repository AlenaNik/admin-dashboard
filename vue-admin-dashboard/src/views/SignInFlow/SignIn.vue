<template>
    <div class="container"
         :class="{'light-background' : !isDarkMode, 'dark-background' : isDarkMode}"
    >
        <transition
        name="slide-in-right"
        enter-active-class="animated slideInRight">
            <div
                    v-show="show"
                    class="request"
            :class="{'light-request' : isDarkMode, 'dark-request' : !isDarkMode}"
            >
                Don't have an account?
            <router-link to="/request">Request an account</router-link>
            </div>
        </transition>
        <div class="login">
            <img src="../../assets/DCHQ.svg" alt="" v-if="isDarkMode">
            <img src="../../assets/DCHQ-dark.svg" alt="" v-if="!isDarkMode">
            <h4 :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}">Sign into Design+Code HQ</h4>
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
            <button @click="toggleDarkMode">Toggle</button>
        </div>
    </div>
</template>


<script>
    export default {
        data() {
          return  {
              show: false
          }
        },
        mounted() {
          this.show = true
        },
        name: "SignIn",
        computed: {
            isDarkMode() {
                return this.$store.getters.isDarkMode;
            }
       },
        methods: {
               toggleDarkMode() {
                   this.$store.commit('toggleDarkMode')
               }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../global-styles/colors";
    @import "../../global-styles/typography";

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

    .light-request {
        color: rgba(255, 255, 255, 0.3);

        a {
            color: white;
        }
    }

    .dark-request {
        color: rgba(0, 0, 0, 0.3);

        a {
            color: $black;
        }
    }

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
    }
    .login {
        width: 400px;
    }
    .request {
        position: absolute;
        top: 40px;
        right: 40px;
        color: rgba(255, 255, 255, 0.3);

        a {
            color: white;
        }
    }
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
