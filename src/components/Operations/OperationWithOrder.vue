<template>
  <div class="operation-with-order" :class="{ 'active': opened }">
    <div class="operation-with-order__content" @click="opened = !opened">
      <div class="operation-with-order__left">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" :class="{ 'active': opened }">
          <path d="M8.70711 5.29289C8.31658 4.90237 7.68342 4.90237 7.29289 5.29289C6.90237 5.68342 6.90237 6.31658 7.29289 6.70711L9.58579 9L7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071C7.68342 13.0976 8.31658 13.0976 8.70711 12.7071L11.7071 9.70711C12.0976 9.31658 12.0976 8.68342 11.7071 8.29289L8.70711 5.29289Z" fill="#4B535A"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 -6.10673e-07 9 -3.93402e-07C4.02944 -1.76132e-07 -3.93402e-07 4.02944 -3.93402e-07 9C-3.93403e-07 13.9706 4.02944 18 9 18ZM9 16C12.866 16 16 12.866 16 9C16 5.13401 12.866 2 9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16Z" fill="#4B535A"/>
        </svg>
        <div class="operation-with-order__info">
          <div class="operation-with-order__info-title">Заказ №{{ order.id }} от {{ order.created_at?.split(' ')[0].replace(/-/g,'.') }}</div>
          <div class="operation-with-order__info-status" :class="order.status">{{ getStatusTranslation }}</div>
        </div>
      </div>
      <div class="operation-with-order__info">
        <div class="operation-with-order__info-title">Сумма заказа</div>
        <div class="operation-with-order__info-status">{{ order.price }} USD</div>
      </div>
      <div class="operation-with-order__products">
        <SmallProduct
            v-for="(product, idx) in order.items"
            :key="product.id"
            :image="product.product.images[0]"
            v-show="idx < 4"
        />
        <div class="operation-with-order__show-more" v-if="order.items?.length > 4">
          +{{ order.items.length - 4 }}
        </div>
      </div>
    </div>
    <Transition name="dropdown">
      <div class="operation-with-order__dropdown" v-if="opened">
        <MakeOrderTable
            :edited="false"
            :products="order.items"
        />
        <MakeOrderTablePayment :price="order.price" :with-button="false"/>
      </div>
    </Transition>
  </div>
</template>

<script>
import SmallProduct from "@/components/SmallProduct.vue";
import MakeOrderTable from "@/components/Views/MakeOrder/MakeOrderTable.vue";
import MakeOrderTablePayment from "@/components/Modals/MakeOrder/MakeOrderTablePayment.vue";

export default {
  name: "OperationWithOrder",
  components: {MakeOrderTablePayment, MakeOrderTable, SmallProduct},
  props: {
    order: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      opened: false,
    }
  },
  computed: {
    getStatusTranslation() {
      return {
        'pending': 'В ожидании',
        'canceled': 'Отменен',
        'delivered': 'Выполнен',
        'delivering': 'Выполняется',
      }[this.order.status]
    }
  },
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/operations/_operationWithOrder.scss";
</style>