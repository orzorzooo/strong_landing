import { get, post } from "@/api/request";
export default {
  namespaced: true,
  state: {
    landingDatas: null,
  },
  getters: {
    landingDatas(state) {
      return state.landingDatas;
    },
  },
  mutations: {
    setLandingDatas(state, payload) {
      state.landingDatas = payload;
    },
  },
  actions: {
    async getLandingDatas({ commit }) {
      try {
        const data = await get({ collection: "landingpage" });
        commit("setLandingDatas", data.attributes);
        return true;
      } catch (error) {
        return false;
      }
    },
  },
};
