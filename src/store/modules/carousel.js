import {getCarousel} from "@/api";

export default {
  namespaced: true,
  state: {
    carousel: []
  },
  actions: {
    getCarousel({ commit }) {
      getCarousel().then(response => commit('SET_CAROUSEL', response.data))
    }
  },
  mutations: {
    SET_CAROUSEL(state, carousel) {
      state.carousel = carousel
    }
  }
}