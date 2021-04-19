import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios"; // import axios
import "./assets/reset.css";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(
  fas,
)
Vue.component('font-awesome-icon', FontAwesomeIcon)

const instance = axios.create({
  baseURL: "http://localhost:3004/",
  withCredentials: true,
});

Vue.config.productionTip = false;
Vue.prototype.$axios = instance;


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
