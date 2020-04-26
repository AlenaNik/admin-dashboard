import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuexstore from "./vuexstore";

Vue.config.productionTip = false;

new Vue({
  router,
  vuexstore,
  render: h => h(App)
}).$mount("#app");
