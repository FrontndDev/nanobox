<template>
  <div class="product" :class="{ 'hide-buttons': !showButtons }">
    <div class="product__content" @click="$router.push(`/catalog/product/${id}`)">
      <div class="product__icon">
        <img v-if="images && images.length > 0" :src="images[0]" alt="image-product">
      </div>
      <div class="product__title product__title_mt-40">{{ name }}</div>
      <div class="product__subtitle product__subtitle_mt-4" v-html="description"/>
      <div class="product__price product__price_my">
        <span>₽{{ price }}</span>
        <s v-if="discountPrice">₽{{ discountPrice }}</s>
      </div>
    </div>
    <div class="product__buttons">
      <Button
          class="w-100"
          name="Быстрая покупка"
          width="100%"
          @click="fastBuy"
      />
      <Button
          class="w-100"
          bg="white"
          width="100%"
          :name="addOrRemoveFromBasket ? 'Добавить в корзину' : 'Удалить из корзины'"
          @click="addToBasket"
      />
    </div>
  </div>
</template>

<script>
import Button from "@/components/Buttons/Button.vue";
import {mapActions, mapMutations} from "vuex";

export default {
  name: "Product",
  components: {Button},
  emits: ['update-basket'],
  props: {
    id: {
      type: Number,
      default: 0,
    },
    showButtons: {
      type: Boolean,
      default: true,
    },
    name: {
      type: String,
    },
    description: {
      type: String
    },
    discountPrice: {
      type: Number
    },
    price: {
      type: Number
    },
    images: {
      type: Array
    },
    product: {
      type: Object,
      default: {}
    },
    addOrRemoveFromBasket: Boolean, //true === add | false === remove
  },
  methods: {
    ...mapActions('products', ['getDetailsProduct']),
    ...mapMutations('products', ['SET_PRODUCT_FOR_FAST_BUY']),

    fastBuy() {
      console.log('this.product', this.product)
      this.SET_PRODUCT_FOR_FAST_BUY(this.product)
      // this.getDetailsProduct({ id: this.id, type: 'fast-buy' })
      this.$router.push('/make-order')
    },
    addToBasket() {
      let basket = JSON.parse(localStorage.getItem('basket'))
      const index = basket?.map(item => item.id).indexOf(this.id)

      index === -1 ? basket.push({ ...this.product, amount: 1, type: 'product' }) : basket.splice(index, 1)
      localStorage.setItem('basket', JSON.stringify(basket))
      this.$emit('update-basket')
    }
  },
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/_product.scss";
</style>