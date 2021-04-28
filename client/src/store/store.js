// store.js
import Vue from "vue";
import Vuex from "vuex";

// Vue.use(Vuex);

export const state = () => ({
  user_id: null,
  user_nm: null,
});

export const mutations = {
  setUser(state, user) {
    this.user_id = user.user_id;
    this.user_nm = user.user_nm;
    // return state.user;
    // console.log(this.user);
  },
};

const store = new Vuex.Store({
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
    setUser: function (state, user) {
      this.user.user_id = user.user_id;
      this.user.user_nm = user.user_nm;
      // return state.user;
      console.log(this.user);
    },
  },
});
