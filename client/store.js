// store.js
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  //$store.state.user
  state: {
    user: {
      user_id: "",
      user_nm: "",
    },
  },
  //this.$store.getters.getUser;
  getters: {
    getUser: function (state) {
      return state.user;
    },
  },
  mutations: {
    setUser: function (state, payload) {
      return state.user;
    },
  },
});
