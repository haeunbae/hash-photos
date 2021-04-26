import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user_id: null,
    user_nm: null,
  },
  mutations: {
    setUser(state, user) {
      // console.log(user);

      state.user_id = user.user_id;
      state.user_nm = user.user_nm;
      // console.log(1);
      // console.log(state);
    },
  },
  actions: {},
  modules: {},
});
