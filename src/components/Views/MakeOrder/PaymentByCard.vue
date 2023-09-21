<template>
  <div class="payment-by-card">
    <Select
        title="Тип карты"
        max-width="248px"
        :dropdown="cardTypes"
        :default-value="cardTypes[0]"
    />
    <Input
        type="tel"
        placeholder="0000 0000 0000 0000 0000"
        title="Номер карты"
        width="220px"
        :show-arrows="false"
        :max-length="20"
        v-mask="'#### #### #### #### ####'"
        @custom-input="setCardNumber"
    />
    <ValidityPeriod title="Срок действия"/>

    <Input
        type="tel"
        placeholder="000"
        title="CVV"
        text-align="center"
        width="70px"
        :show-arrows="false"
        :max-length="3"
        v-mask="'###'"
    />
  </div>
</template>

<script>
import Select from "@/components/Utils/Select.vue";
import Input from "@/components/Utils/Input.vue";
import ValidityPeriod from "@/components/Utils/ValidityPeriod.vue";
import { mask } from 'vue-the-mask';

export default {
  name: "PaymentByCard",
  components: {ValidityPeriod, Input, Select},
  data() {
    return {
      cardNumber: '',
      cardTypes: [
        { id: 0, value: 'VISA/Mastercard USD' },
        { id: 1, value: 'VISA/Mastercard USD' },
        { id: 2, value: 'VISA/Mastercard USD' },
        { id: 3, value: 'VISA/Mastercard USD' },
        { id: 4, value: 'VISA/Mastercard USD' },
      ]
    }
  },
  methods: {
    setCardNumber(value) {
      this.cardNumber = value
    }
  },
  directives: {
    mask
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/Views/make-order/_paymentByCard.scss";
</style>