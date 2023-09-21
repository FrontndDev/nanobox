import { createStore } from 'vuex'
import articles from "@/store/modules/articles";
import products from "@/store/modules/products";
import auth from "@/store/modules/auth";
import addresses from "@/store/modules/addresses";
import reviews from "@/store/modules/reviews";
import doctors from "@/store/modules/doctors";
import faq from "@/store/modules/faq";
import orders from "@/store/modules/orders";
import certificates from "@/store/modules/certificates";
import carousel from "@/store/modules/carousel";

export default createStore({
  modules: {
    articles,
    products,
    auth,
    addresses,
    reviews,
    doctors,
    faq,
    orders,
    certificates,
    carousel,
  },
  state() {
    return {
      months: {
        abbreviated: [
          "янв",
          "февр",
          "март",
          "апр",
          "май",
          "июнь",
          "июль",
          "авг",
          "сент",
          "октб",
          "нояб",
          "дек",
        ],
        full: [
          "января",
          "февраля",
          "марта",
          "апреля",
          "мая",
          "июня",
          "июля",
          "августа",
          "сентября",
          "октября",
          "ноября",
          "декабря",
        ]
      }
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
})
