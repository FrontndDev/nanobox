<template>
  <div class="order-payment">
    <div class="order-payment__info">
      <span>{{ getText }}</span>
      <div class="order-payment__price">
        {{ price }} ₽
<!--        {{ price }}<span>.00 USD</span>-->
      </div>
    </div>
    <Button
        class="order-payment__button"
        name="Оформить заказ"
        width="172px"
        @click="makeOrder"
        v-if="withButton"
    />
  </div>
</template>

<script>
import Button from "@/components/Buttons/Button.vue";
import {mapState} from "vuex";

export default {
  name: "MakeOrderTablePayment",
  components: {Button},
  emits: ['open-login-modal'],
  props: {
    withButton: {
      type: Boolean,
      default: true
    },
    price: {
      type: Number,
      default: 0
    }
  },
  computed: {
    ...mapState('auth', ['token']),

    getText() {
      return this.withButton ? 'К оплате' : 'Итого'
    },
  },
  methods: {
    makeOrder() {
      if (!this.token) {
        this.$emit('open-login-modal')
      } else {
        const basket = JSON.parse(localStorage.getItem('basket'))
        basket.length ? this.$router.push('/make-order') : this.$router.push('/catalog')
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/modals/_makeOrderTablePayment.scss";
</style>