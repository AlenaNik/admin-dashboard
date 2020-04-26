<template>
    <div @click="toggleDarkMode" class="toggle"
    :class="{'light-toggle' : !isDarkMode, 'dark-toggle': isDarkMode}"
    >
        <div class="toggle-switch"
             :class="{'toggle-left' : !isDarkMode, 'toggle-right': isDarkMode}"
        >
            <img v-if="!isDarkMode" src="../assets/Moom.svg" alt="">
            <img v-if="isDarkMode" src="../assets/Sun.svg" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SwitchButton',
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
    .toggle {
       border-radius: 10px;
       width: 175px;
       margin: 15px auto;
        display: flex;
    }

    .light-toggle {
        background: linear-gradient(346.78deg, #F7FCFC 0%, #FAFCFA 100%);
        border: 1px solid rgba(0, 0, 0, 0.04);
        box-shadow: inset 0px 5px 10px rgba(0, 0, 0, 0.1);
    }

    .dark-toggle {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: inset 0px 5px 10px rgba(255, 255, 255, 0.1);
    }
    .toggle-switch {
        border-radius: 8px;
        margin: 2px;
        padding: 15px 35px;
    }

    .toggle-left {
        transform: translateX(0);
        background: #FFFFFF;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    }

    .toggle-right {
        transform: translateX(95%);
        background: #1B233F;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    }
</style>
