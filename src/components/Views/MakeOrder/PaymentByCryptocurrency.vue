<template>
  <div class="payment-by-cryptocurrency">
    <div class="payment-by-cryptocurrency__wallets">
      <div
          class="payment-by-cryptocurrency__item"
          :class="{ 'active': wallet.id === selectedWalletId }"
          v-for="wallet in wallets"
          :key="wallet.id"
          @click="selectedWalletId = wallet.id"
      >
        <img :src="require(`@/assets/${wallet.img}`)">
        <div class="payment-by-cryptocurrency__item-info">
          <div class="payment-by-cryptocurrency__item-name">
            {{ wallet.name }}
            <span class="payment-by-cryptocurrency__item-short-name">{{ wallet.shortName }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="payment-by-cryptocurrency__net payment-by-cryptocurrency__net_mt-16">
      <Select
          title="Сеть"
          max-width="100%"
          :dropdown="nets"
          :default-value="nets[0]"
      />
    </div>

    <div class="payment-by-cryptocurrency__wallet-address payment-by-cryptocurrency__wallet-address_mt-24">
      <div class="payment-by-cryptocurrency__qr-code">
        <img src="@/assets/images/qr-code.png">
      </div>
      <div class="payment-by-cryptocurrency__wallet-address-content">
        <Input
            class="payment-by-cryptocurrency__wallet-address-input"
            title="Адрес кошелька"
            width="100%"
            padding="8px 32px 8px 12px"
            default-value="TA3X93FV5674LX2w4oQKsoi9oU5iVF7Gnf"
            :can-copy="true"
        />

        <div class="payment-by-cryptocurrency__wallet-address-info payment-by-cryptocurrency__wallet-address-info_mt-16">
          <p><span>Expected arrival:</span> 15 network confirmation</p>
          <p><span>Expected unlock:</span> 15 network confirmation</p>
          <p>Отправляйте только Bitcoin на этот адрес</p>
          <p>Используйте только <span class="orange">сеть BNB Chain.</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Select from "@/components/Utils/Select.vue";
import Input from "@/components/Utils/Input.vue";

export default {
  name: "PaymentByCryptocurrency",
  components: {Input, Select},
  data() {
    return {
      wallets: [
        {
          id: 1,
          name: 'Bitcoin',
          shortName: 'BTC',
          img: 'images/BTC_Bitcoin.png',
        },
        {
          id: 2,
          name: 'Litecoin',
          shortName: 'LTC',
          img: 'images/BTC_Bitcoin.png'
        },
        {
          id: 3,
          name: 'Tether USD',
          shortName: 'USDT',
          img: 'images/BTC_Bitcoin.png'
        }
      ],
      selectedWalletId: -1,
      nets: [
        {
          id: 1,
          value: 'BNB Chain (BEP 20)',
        },
        {
          id: 2,
          value: 'BNB Chain (BEP 20)',
        },
        {
          id: 3,
          value: 'BNB Chain (BEP 20)',
        }
      ]
    }
  },
  mounted() {
    this.selectedWalletId = this.wallets[0].id
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/Views/make-order/_paymentByCryptocurrency.scss";
</style>