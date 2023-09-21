import * as API from '@/api';
import {updateAddress} from "@/api";

export default {
  namespaced: true,
  state() {
    return {
      addresses: [],
      countries: [],
      cities: [],
    }
  },

  actions: {
    getCountries({ commit }) {
      API.getCountries().then(response => commit('SET_COUNTRIES', response.data))
    },
    getCities({ commit }, countryId) {
      API.getCities(countryId).then(response => commit('SET_CITIES', response.data))
    },
    getAddresses({ commit }) {
      API.getAddresses().then(response => commit('SET_ADDRESSES', response.data))
    },
    addAddress({ commit }, address) {
      API.addAddress(address).then(response => commit('ADD_ADDRESS', response.data))
    },
    deleteAddress({ commit }, id) {
      API.deleteAddress(id).then(() => commit('DELETE_ADDRESS', id))
    },
    updateAddress({ commit }, { id, address }) {
      API.updateAddress(id, address).then(response => commit('UPDATE_ADDRESS', { id, address: response.data }))
    }
  },
  mutations: {
    SET_ADDRESSES(state, addresses) {
      state.addresses = addresses
    },
    SET_COUNTRIES(state, countries) {
      state.countries = countries
    },
    SET_CITIES(state, cities) {
      state.cities = cities
    },
    ADD_ADDRESS(state, address) {
      state.addresses.push(address)
    },
    UPDATE_ADDRESS(state, { id, address }) {
      const index = state.addresses.map(address2 => address2.id).indexOf(id)
      state.addresses[index] = address
    },
    DELETE_ADDRESS(state, id) {
      const index = state.addresses.map(address => address.id).indexOf(id)
      state.addresses.splice(index, 1)
    }
  }
}