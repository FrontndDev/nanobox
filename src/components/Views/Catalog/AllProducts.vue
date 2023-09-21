<template>
  <div class="all-products">
    <h6>Все продукты</h6>

    <Preloader style="margin-top: 40px;" v-if="!listAllProducts.length"/>
    <div class="all-products__body all-products__body_mt-40" v-if="listAllProducts.length">
      <Product
          v-for="item in listAllProducts"
          :key="item.id"
          :id="item.id"
          :name="item.name"
          :description="item.short_description"
          :price="item.price"
          :discount-price="item.discount_price"
          :images="item.images"
          :product="item"
          :add-or-remove-from-basket="basket?.map(item2 => item2.id)?.indexOf(item.id) === -1 || basket === null"
          @update-basket="loadBasket"
      />
<!--      :show-buttons="false"-->
    </div>
  </div>
</template>

<script>
import Product from "@/components/Product.vue";
import {mapState} from "vuex";
import Preloader from "@/components/Utils/Preloader.vue";

export default {
  name: "AllProducts",
  components: {Preloader, Product},
  props: {
    listAllProducts: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      basket: [],
    }
  },
  methods: {
    loadBasket() {
      this.basket = JSON.parse(localStorage.getItem('basket'))
    }
  },
  mounted() {
    this.loadBasket()
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/Views/catalog/_allProducts.scss";
</style>