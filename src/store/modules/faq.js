import * as API from '@/api';

export default {
  namespaced: true,
  state() {
    return {
      faqList: []
    }
  },

  actions: {
    getFAQ({ commit }) {
      API.getFAQ().then(response => {
        commit('SET_LIST_FAQ', response.data)
      })
    }
  },
  mutations: {
    SET_LIST_FAQ(state, payload) {
      state.faqList = payload
    }
  }
}