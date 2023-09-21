import * as API from '@/api';
import {getTokenForGoogleAndFacebookAuth} from "@/api";
import router from "@/router";

const TOKEN_KEY = 'token'

export default {
  namespaced: true,
  state() {
    return {
      user: JSON.parse(localStorage.getItem('user')),
      token: localStorage.getItem('token'),
    }
  },
  actions: {
    register({commit}, user) {
      API.register(user).then(response => {
        console.log('register', response)
        commit('SET_USER', response.data.user)
        commit('SET_TOKEN', response.data.token)
      })
    },
    login({commit}, user) {
      API.login(user).then(response => {
        console.log('login', response)
        commit('SET_USER', response.data.user)
        commit('SET_TOKEN', response.data.token)
      })
    },
    logout({commit}) {
      API.logout().then(response => {
        console.log('logout', response)
        commit('SET_USER', null)
        commit('SET_TOKEN', null)
      })
    },
    sendEmail({commit}, email) {
      API.sendEmail(email).then(response => console.log('sendEmail', response))
    },
    changeUserData({commit}, user) {
      API.changeUserData(user).then(response => {
        console.log('changeUserData', response)
        commit('CHANGE_USER_DATA', user)
      })
    },
    updatePassword({commit}, password) {
      API.updatePassword(password).then(response => console.log(response))
    },
    getTokenForGoogleAndFacebookAuth({commit}, token) {
      API.getTokenForGoogleAndFacebookAuth(token).then(response => {
        console.log('register', response)
        commit('SET_USER', response.data.user)
        commit('SET_TOKEN', response.data.token)
        response.status === 401 ? router.push('/') : router.push('/cabinet')
      })
    }
  },
  mutations: {
    SET_USER(state, user) {
      if (user) {
        state.user = user
        localStorage.setItem('user', JSON.stringify(user))
      } else {
        state.user = null
        localStorage.removeItem('user')
      }
    },
    CHANGE_USER_DATA(state, user) {
      state.user = {...state.user, ...user}
      localStorage.setItem('user', JSON.stringify(user))
    },
    SET_TOKEN(state, token) {
      if (token) {
        state.token = token
        localStorage.setItem('token', token)
      } else {
        state.token = null
        localStorage.removeItem('token')
      }
    }
  },
  getters: {
    token(state) {
      return state.token
    },
    isAuthenticated(_, getters) {
      return !!getters.token
    },
  }
}