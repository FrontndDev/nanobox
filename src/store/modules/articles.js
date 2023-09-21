import * as API from '@/api';

export default {
    namespaced: true,
    state() {
        return {
            listArticles: [],
            countPages: 1,
            articleMainPage: [],
            article: {},
        }
    },

    actions: {
        getListArticles({ commit }, page = 1) {
            console.log(page)
            API.getListArticles(page).then(response => {
                console.log(response.data)
                commit('SET_LIST_ARTICLES', response.data)
                commit('SET_COUNT_PAGES', response.meta.last_page)
            })
        },
        getArticleMainPage({ commit }) {
            API.getArticleMainPage().then(response => {
                console.log(response.data)
                commit('SET_ARTICLE_MAIN_PAGE', response.data)
            })
        },
        getArticleById({ commit }, id) {
            API.getArticleById(id).then(response => {
                console.log(response.data)
                commit('SET_ARTICLE', response.data)
            })
        }
    },
    mutations: {
        SET_LIST_ARTICLES(state, articles) {
            state.listArticles = articles
        },
        SET_COUNT_PAGES(state, count) {
            state.countPages = count
        },
        SET_ARTICLE_MAIN_PAGE(state, page) {
            state.articleMainPage = page
        },
        SET_ARTICLE(state, article) {
            state.article = article
        }
    },
    getters: {
        article(state) {
            return { ...state.article, publish_date: state.article.publish_date?.split('-') }
        }
    }
}