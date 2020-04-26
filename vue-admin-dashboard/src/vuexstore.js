import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


const userSelectedDarkMode = window.localStorage.getItem("isDarkMode") === "true"

// state

let state = {
    isDarkMode: userSelectedDarkMode
}

// getters
const getters = {
    isDarkMode(state) {
        return state.isDarkMode
    }
}

// mutations
const mutations = {
    toggleDarkMode(state) {
        if (state.isDarkMode) {
            state.isDarkMode == false
            document.body.style.background = "#212c4f"
            window.localStorage.setItem("isDarkMode", "true")
        }  else {
            state.isDarkMode
            document.body.style.background = "#f0f3f5"
            window.localStorage.setItem("isDarkMode", "false")
        }
    }
}

const actions = {
    triggerDarkMode(context) {
        context.commit('toggleDarkMode')
    }
}

export default new Vuex.store({
    state,
    getters,
    mutations,
    actions
});
