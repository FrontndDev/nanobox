import * as API from '@/api';
import {getReviews} from "@/api";

export default {
    namespaced: true,
    state: {
        reviews: [],
        countPages: 1,
    },
    actions: {
        getReviews({ commit }, page = null) {
            if (page) {
                API.getReviews(page).then(response => {
                    commit('SET_REVIEWS', response.data)
                    commit('SET_COUNT_PAGES', response.meta.last_page)
                })
            } else {
                API.getReviews().then(response => commit('SET_REVIEWS', response.data))
            }
        }
    },
    mutations: {
        SET_REVIEWS(state, reviews) {
            state.reviews = reviews
        },
        SET_COUNT_PAGES(state, count) {
            state.countPages = count
        },
    }
}