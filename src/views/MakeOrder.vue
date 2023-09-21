<template>
  <main>
    <div class="make-order">
      <div class="container">
        <h1>Оформление заказа</h1>

        <div class="make-order__body make-order__body_mt-42">
          <div class="make-order__content">
            <div class="make-order__title make-order__title_mb-26">
              Заказанные товары
              <span>{{ getCountOfProducts }} {{ getProductQuantityEnding }} на сумму<span>₽{{ getPrice }}</span></span>
            </div>
            <MakeOrderTable :edited="false" :products="getProductsForMakeOrder"/>
            <div class="make-order__title make-order__title_mt-25 make-order__title_mb-24">Оплата</div>
            <div class="make-order__payment border-bottom">
              <Radio
                  v-for="(radio, idx) in radioButtons"
                  :key="radio.id"
                  :idx="idx"
                  :title="radio.title"
                  :active="idx === idxActiveRadio"
                  :class="`make-order__payment-method-${idx + 1}`"
                  @radio="setActiveRadio"
              />

              <div class="make-order__payment-method text" v-if="idxActiveRadio === 0">
                С вами свяжется консультант и все порешает и тд
              </div>
              <PaymentByCard
                  class="make-order__payment-method card"
                  v-show="idxActiveRadio === 1"
              />
              <PaymentByCryptocurrency
                  class="make-order__payment-method cryptocurrency"
                  v-show="idxActiveRadio === 2"
              />
            </div>
            <div class="make-order__title make-order__title_mt-25 make-order__title_mb-24">Доставка</div>
            <div class="make-order__delivery border-bottom">
              <Select
                  title="Адрес доставки"
                  button-text="Ввести другой адрес"
                  max-width="100%"
                  :dropdown="getAddressesForSelect"
                  :default-value="getAddressesForSelect[0]"
                  :update-default-value="true"
                  @select-button="showEnterShippingAddressModal = true"
                  @custom-select="selectAddress"
              />
            </div>
            <div class="make-order__title make-order__title_mt-25 make-order__title_mb-24">
              Контактные данные получателя
            </div>
            <div class="make-order__recipient-data">
              <Input placeholder="Введите свое имя" title="Имя" width="100%" @custom-input="setFirstName"/>
              <Input placeholder="Введите свою фамилию" title="Фамилия" width="100%" @custom-input="setLastName"/>
              <Input type="email" placeholder="Введите свой email" title="Email" width="100%" @custom-input="setEmail"/>
              <InputTel @set-code="setPhoneCode" @custom-input="setPhone"/>
<!--              <Input mask="+375 (##) ###-##-##" placeholder="000 000 000" title="Телефон" width="100%"/>-->
            </div>
          </div>
          <MakeOrderSidebar
              :count="getCountOfProducts"
              :ending="getProductQuantityEnding"
              :price="getPrice"
              @make-order="makeOrder"
          />
        </div>

      </div>
    </div>
  </main>
  <EnterShippingAddressModal
      v-if="showEnterShippingAddressModal"
      @close="showEnterShippingAddressModal = false"
  />
</template>

<script>
import MakeOrderTable from "@/components/Views/MakeOrder/MakeOrderTable.vue";
import Radio from "@/components/Utils/Radio.vue";
import Select from "@/components/Utils/Select.vue";
import Input from "@/components/Utils/Input.vue";
import MakeOrderSidebar from "@/components/Views/MakeOrder/MakeOrderSidebar.vue";
import PaymentByCard from "@/components/Views/MakeOrder/PaymentByCard.vue";
import PaymentByCryptocurrency from "@/components/Views/MakeOrder/PaymentByCryptocurrency.vue";
import InputTel from "@/components/Utils/InputTel.vue";
import EnterShippingAddressModal from "@/components/Modals/EnterShippingAddressModal.vue";
import {mapActions, mapGetters, mapState} from "vuex";

export default {
  name: "MakeOrder",
  components: {
    EnterShippingAddressModal,
    InputTel,
    PaymentByCryptocurrency,
    PaymentByCard,
    MakeOrderSidebar,
    Input,
    Select,
    Radio,
    MakeOrderTable
  },
  data() {
    return {
      radioButtons: [
        { id: 1, title: 'Оплата при получении товара' },
        { id: 2, title: 'Оплата при помощи карты' },
        { id: 3, title: 'Оплата криптовалютой' }
      ],
      selectDropdown: [
        { id: 1, value: 'Япония, г. Токио, ул. Киото, д. 44, кв. 2' },
        { id: 2, value: 'Россия, г. Москва, ул. Пушкина, д. Калатушкина, кв. 123' }
      ],
      idxActiveRadio: 0,
      showEnterShippingAddressModal: false,
      contact_data: {
        last_name: '',
        first_name: '',
        email: '',
        phone: '',
      },
      phoneCode: '',
      selectedAddress: null,
    }
  },
  methods: {
    ...mapActions('orders', ['makeNewOrder']),
    ...mapActions('addresses', ['getAddresses']),

    setActiveRadio(idx) {
      this.idxActiveRadio = idx
    },
    setFirstName(firstName) {
      this.contact_data.first_name = firstName
    },
    setLastName(lastName) {
      this.contact_data.last_name = lastName
    },
    setEmail(email) {
      this.contact_data.email = email
    },
    setPhone(phone) {
      this.contact_data.phone = phone
    },
    setPhoneCode(phoneCode) {
      this.phoneCode = phoneCode
    },
    selectAddress(address) {
      this.selectedAddress = address
    },
    makeOrder() {
      console.log('Заказ подтверждён', this.getOrderForAdd)
      this.makeNewOrder(this.getOrderForAdd)
    }
  },
  computed: {
    ...mapState('auth', ['token']),
    ...mapState('products', ['productForFastBuy']),
    ...mapState('addresses', ['addresses']),
    ...mapGetters('products', ['getProductForFastBuy']),

    getAddressesForSelect() {
      const addresses = this.addresses?.map(address => new Object({
        id: address.id,
        value: `${address.country.name}, г. ${address.city.name}, ул. ${address.street}, д. ${address.house}, кв. ${address.flat}`
      }))

      return this.addresses.length ? addresses : []
    },
    getContactData() {
      return {
        ...this.contact_data,
        phone: `${this.phoneCode.slice(1)} ${this.contact_data.phone}`
      }
    },
    getProductsForMakeOrder() {
      return this.isFastBuy ? [this.getProductForFastBuy] : this.getBasket
    },
    getBasket() {
      return JSON.parse(localStorage.getItem('basket')).map(item => new Object({
        product: {
          id: item.id,
          name: item.name,
          price: item.price,
          images: item.images,
        },
        price: item.price * item.amount,
        amount: item.amount,
        type: item.type,
      }))
    },
    isFastBuy() {
      return !!this.productForFastBuy
    },
    getCountOfProducts() {
      return this.isFastBuy ? 1 : this.getBasket.length
    },
    getProductQuantityEnding() {
      const endings = {
        1: 'товар',
        2: 'товара',
        3: 'товара',
        4: 'товара',
        5: 'товаров',
        6: 'товаров',
        7: 'товаров',
        8: 'товаров',
        9: 'товаров',
        0: 'товаров'
      };

      const lastDigit = this.getCountOfProducts % 10;
      return endings[lastDigit];
    },
    getPrice() {
      return this.getProductsForMakeOrder.map(item => item.price).reduce((item1, item2) => item1 + item2, 0)
    },
    getOrderItems() {
      return this.getBasket.map(item => new Object({
        id: item.product.id,
        amount: item.amount,
        price: item.price,
        type: item.type
      }))
    },
    getOrderForAdd() {
      return {
        address_id: this.selectedAddress.id,
        delivery_price: 1000,
        contact_data: this.getContactData,
        items: this.getOrderItems,
      }
    }
  },
  mounted() {
    if (!this.token) this.$router.push('/')
    if (this.productForFastBuy === null && !this.getBasket.length) this.$router.push('/catalog')
    this.getAddresses()
    this.selectedAddress = this.getAddressesForSelect[0]
  }
}
</script>

<style scoped lang="scss">
main {
  margin: 20px 0 46px;
}

@import "@/assets/scss/Views/make-order/_makeOrder.scss";
</style>