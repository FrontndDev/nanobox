<template>
  <div class="product-price">
    <div class="product-price__left">
      <div class="product-price__price">₽{{ detailProduct?.price }}</div>
      <s class="product-price__old-price" v-if="detailProduct?.discount_price">₽{{ detailProduct?.discount_price }}</s>
    </div>
    <div class="product-price__right">
      <Button name="Быстрая покупка" @click="fastBuy"/>
      <Button
          bg="white"
          :name="addOrRemoveFromBasket ? 'Добавить в корзину' : 'Удалить из корзины'"
          @click="addToBasket"
      />
    </div>
  </div>
</template>

<script>
import Button from "@/components/Buttons/Button.vue";
import {mapMutations} from "vuex";

export default {
  name: "ProductPrice",
  components: {Button},
  emits: ['update-basket'],
  props: {
    detailProduct: {
      type: Object
    },
    addOrRemoveFromBasket: Boolean,
  },
  methods: {
    ...mapMutations('products', ['SET_PRODUCT_FOR_FAST_BUY']),

    fastBuy() {
      this.SET_PRODUCT_FOR_FAST_BUY(this.detailProduct)
      this.$router.push('/make-order')
    },
    addToBasket() {
      let basket = JSON.parse(localStorage.getItem('basket'))
      const index = basket?.map(item => item.id).indexOf(this.detailProduct.id)

      index === -1 ? basket.push({ ...this.detailProduct, amount: 1, type: 'product' }) : basket.splice(index, 1)
      localStorage.setItem('basket', JSON.stringify(basket))
      this.$emit('update-basket')
    }
  },
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/_productPrice.scss";
</style>