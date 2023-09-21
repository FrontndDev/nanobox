import * as API from '@/api';

export default {
  namespaced: true,
  state() {
    return {
      certificates: []
    }
  },
  actions: {
    getCertificates({ commit }) {
      API.getCertificates().then(response => commit('SET_CERTIFICATES', response.data))
    }
  },
  mutations: {
    SET_CERTIFICATES(state, certificates) {
      state.certificates = certificates
    }
  }
}