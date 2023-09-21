<template>
  <div class="commodity">
    <div class="container">

      <Preloader v-if="!detailProduct.id"/>
      <div class="commodity__body" v-if="detailProduct.id">
        <div class="commodity__left">
          <div class="commodity__images">
            <div
                :class="{ 'active': selectMainImage === item }"
                v-for="(item, idx) in detailProduct?.images"
                :key="idx"
                @click="selectMainImage = item"
            >
              <img :src="item" alt="photo">
            </div>
          </div>
          <div class="commodity__image" v-if="detailProduct?.images && detailProduct?.images.length > 0">
            <img :src="selectMainImage || detailProduct?.images[0]" alt="main-photo">
          </div>
        </div>
        <div class="commodity__right">
          <div class="commodity__right-up">
            <ArrowButton name="Back" @click="$router.push('/catalog')"/>
            <div class="commodity__share">
              <span>Share:</span>
              <VKIcon type="share"/>
<!--              <Networks type="share"/>-->
            </div>
          </div>

          <h2 class="commodity__title commodity__title_mt-20">{{ detailProduct?.name }}</h2>

          <p class="commodity__description commodity__description_mt-16" v-html="detailProduct?.description"/>

          <ProductPrice
              class="commodity__price commodity__price_mt-30"
              :detailProduct="detailProduct"
              :add-or-remove-from-basket="basket?.map(item2 => item2.id)?.indexOf(detailProduct.id) === -1 || basket === null"
              @update-basket="loadBasket"
          />

          <div class="commodity__info commodity__info_mt-30">
            <div class="commodity__info-item">
              <div class="commodity__info-item-title">Оплата</div>
              <p class="commodity__info-item-text">
                Вы можете оплатить заказ картой на сайте, электронными деньгами или по счёту через банк
              </p>
            </div>
            <div class="commodity__info-item">
              <div class="commodity__info-item-title">Доставка</div>
              <p class="commodity__info-item-text">
                При соблюдении условий минимальной суммы заказа доставка осуществляется бесплатно!
              </p>
            </div>
            <div class="commodity__info-item">
              <div class="commodity__info-item-title">Гарантия</div>
              <p class="commodity__info-item-text commodity__info-item-text_mt-3">
                Качество продукта гарантировано производителем
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArrowButton from "@/components/Buttons/ArrowButton.vue";
import ProductPrice from "@/components/Views/Product/ProductPrice.vue";
import {mapState} from "vuex";
import Networks from "@/components/Networks.vue";
import Preloader from "@/components/Utils/Preloader.vue";
import VKIcon from "@/components/Networks/VKIcon.vue";

export default {
  name: "Product",
  components: {VKIcon, Preloader, Networks, ProductPrice, ArrowButton},
  props: {
    detailProduct: {
      type: Object
    }
  },
  data() {
    return {
      selectMainImage: null,
      basket: [],
    }
  },
  methods: {
    loadBasket() {
      this.basket = JSON.parse(localStorage.getItem('basket'))
    }
  },
  watch: {
    'detailProduct.images.length'() {
      this.selectMainImage = this.detailProduct.images[0]
    }
  },
  mounted() {
    this.loadBasket()
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/Views/commodity/product";
</style>