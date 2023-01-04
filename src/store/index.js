import Vue from "vue";
import Vuex from "vuex";
import user from "./user";
import landing from "./landing";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    landing,
  },
});
