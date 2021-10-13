import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

import "./assets/styles/style.css";
window.$ = require("jquery");
window.JQuery = require("jquery");

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
