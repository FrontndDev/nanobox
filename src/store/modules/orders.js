import * as API from '@/api';
import router from "@/router";

export default {
  namespaced: true,
  state: {
    orders: [],
    thanksPage: false,
  },
  actions: {
    getListOrders({ commit }) {
      API.getListOrders().then(response => commit('SET_ORDERS', response.data))
    },
    makeNewOrder({ commit }, order) {
      API.makeNewOrder(order).then(response => {
        console.log('New Order', response)
        commit('SET_THANKS_PAGE', true)
        router.push('/thanks')
      })
    }
  },
  mutations: {
    SET_ORDERS(state, orders) {
      state.orders = orders
    },
    SET_THANKS_PAGE(state, boolean) {
      state.thanksPage = boolean
    }
  }
}