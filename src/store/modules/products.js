import * as API from '@/api';
import router from "@/router";

export default {
  namespaced: true,
  state() {
    return {
      listTopProducts: [],
      listAllProducts: [],
      listRecommendProducts: [],
      detailProduct: {},
      productForFastBuy: null,
    }
  },

  actions: {
    getListTopProducts({ commit }) {
      API.getListTopProducts().then(response => {
        commit('SET_LIST_TOP_PRODUCTS', response.data)
      })
    },
    getListAllProducts({ commit }) {
      API.getListAllProducts().then(response => {
        commit('SET_LIST_ALL_PRODUCTS', response.data)
      })
    },
    getDetailsProduct({ commit }, { id, type }) {
      API.getDetailsProduct(id).then(response => {
        !type ? commit('SET_DETAILS_PRODUCT', response.data) : commit('SET_PRODUCT_FOR_FAST_BUY', response.data.product)
      })
    },
    getListRecommendProducts({ commit }) {
      API.getListRecommendProducts().then(response => {
        commit('SET_LIST_RECOMMEND_PRODUCTS', response.data)
      })
    },
    getDetailsNanobox({ commit }, id) {
      API.getDetailsNanobox(id).then(response => {
        commit('SET_DETAILS_PRODUCT', response?.data)
      })
    }
  },

  mutations: {
    SET_LIST_TOP_PRODUCTS(state, payload) {
      state.listTopProducts = payload
    },
    SET_LIST_ALL_PRODUCTS(state, payload) {
      state.listAllProducts = payload
    },
    SET_DETAILS_PRODUCT(state, payload) {
      state.detailProduct = payload
    },
    SET_LIST_RECOMMEND_PRODUCTS(state, payload) {
      state.listRecommendProducts = payload
    },
    SET_PRODUCT_FOR_FAST_BUY(state, product) {
      state.productForFastBuy = product
    }
  },
  getters: {
    getProductForFastBuy(state) {
      return {
        product: {
          id: state.productForFastBuy.id,
          name: state.productForFastBuy.name,
          price: state.productForFastBuy.price,
          images: state.productForFastBuy.images
        },
        price: state.productForFastBuy.price,
        amount: 1,
      }
    }
  }
}