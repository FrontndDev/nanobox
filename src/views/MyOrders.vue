<template>
  <main>
    <div class="my-orders">
      <div class="my-orders__header">
        <div class="my-orders__buttons">
          <Button2
              name="Все заказы"
              :class="{ 'active': active === 'all' }"
              @click="active = 'all'"
          />
          <Button2
              name="Выполняются"
              :class="{ 'active': active === 'delivering' }"
              @click="active = 'delivering'"
          />
          <Button2
              name="Отмененные"
              :class="{ 'active': active === 'canceled' }"
              @click="active = 'canceled'"
          />
        </div>
        <Input placeholder="Искать заказ..." icon="svg/search.svg" padding="10px 12px 10px 46px" width="270px"/>
      </div>

      <div class="my-orders__content my-orders__content_mt-30">
        <template v-for="order in orders" :key="order.id" v-if="orders.length">
          <OperationWithOrder
              :order="order"
              v-if="active === 'all' || order.status === active"
          />
<!--          v-if="operation.type === 'order'"-->
<!--          <OperationWithBalance-->
<!--              :card="operation"-->
<!--              v-if="operation.type === 'card'"-->
<!--          />-->
        </template>
        <NoData class="my-orders__icon" name="У вас все еще нет ни одного заказа" v-if="!operations.length"/>
      </div>
    </div>
  </main>
</template>

<script>
import Button2 from "@/components/Buttons/Button2.vue";
import Input from "@/components/Utils/Input.vue";
import OperationWithOrder from "@/components/Operations/OperationWithOrder.vue";
import OperationWithBalance from "@/components/Operations/OperationWithBalance.vue";
import NoData from "@/components/Operations/NoData.vue";
import {mapState} from "vuex";

export default {
  name: "MyOrders",
  components: {NoData, OperationWithBalance, OperationWithOrder, Input, Button2},
  data() {
    return {
      active: 'all',
      //all, in-progress, 'canceled'
      operations: [
        {
          id: 1,
          type: 'order',
          number: 213,
          date: '12.01.2022',
          status: 'completed',
          price: 146.17,

          products: [
            {
              id: 1,
              image: 'images/home/top-products/top-product-item.png',
              name: 'Нано коктейль Коллоидный цинк',
              volume: '120 мл',
              price: 178.00,
              count: 1,
              sum: 178.00
            },
            {
              id: 2,
              image: 'images/home/top-products/top-product-item.png',
              name: 'Нано коктейль Коллоидный цинк',
              volume: '120 мл',
              price: 178.00,
              count: 1,
              sum: 178.00
            },
            {
              id: 3,
              image: 'images/home/top-products/top-product-item.png',
              name: 'Нано коктейль Коллоидный цинк',
              volume: '120 мл',
              price: 178.00,
              count: 1,
              sum: 178.00
            },
            {
              id: 4,
              image: 'images/home/top-products/top-product-item.png',
              name: 'Нано коктейль Коллоидный цинк',
              volume: '120 мл',
              price: 178.00,
              count: 1,
              sum: 178.00
            },
            {
              id: 5,
              image: 'images/home/top-products/top-product-item.png',
              name: 'Нано коктейль Коллоидный цинк',
              volume: '120 мл',
              price: 178.00,
              count: 1,
              sum: 178.00
            },
            {
              id: 6,
              image: 'images/home/top-products/top-product-item.png',
              name: 'Нано коктейль Коллоидный цинк',
              volume: '120 мл',
              price: 178.00,
              count: 1,
              sum: 178.00
            },
            {
              id: 7,
              image: 'images/home/top-products/top-product-item.png',
              name: 'Нано коктейль Коллоидный цинк',
              volume: '120 мл',
              price: 178.00,
              count: 1,
              sum: 178.00
            },
            {
              id: 8,
              image: 'images/home/top-products/top-product-item.png',
              name: 'Нано коктейль Коллоидный цинк',
              volume: '120 мл',
              price: 178.00,
              count: 1,
              sum: 178.00
            },
            {
              id: 9,
              image: 'images/home/top-products/top-product-item.png',
              name: 'Нано коктейль Коллоидный цинк',
              volume: '120 мл',
              price: 178.00,
              count: 1,
              sum: 178.00
            },
            {
              id: 10,
              image: 'images/home/top-products/top-product-item.png',
              name: 'Нано коктейль Коллоидный цинк',
              volume: '120 мл',
              price: 178.00,
              count: 1,
              sum: 178.00
            },
          ]
        },
        {
          id: 2,
          type: 'order',
          number: 214,
          date: '12.10.2022',
          status: 'in-progress',
          price: 670.77,

          products: [
            {
              id: 1,
              image: 'images/home/top-products/top-product-item.png',
              name: 'Нано коктейль Коллоидный цинк',
              volume: '120 мл',
              price: 178.00,
              count: 1,
              sum: 178.00
            },
            {
              id: 2,
              image: 'images/home/top-products/top-product-item.png',
              name: 'Нано коктейль Коллоидный цинк',
              volume: '120 мл',
              price: 178.00,
              count: 1,
              sum: 178.00
            },
            {
              id: 3,
              image: 'images/home/top-products/top-product-item.png',
              name: 'Нано коктейль Коллоидный цинк',
              volume: '120 мл',
              price: 178.00,
              count: 1,
              sum: 178.00
            },
            {
              id: 4,
              image: 'images/home/top-products/top-product-item.png',
              name: 'Нано коктейль Коллоидный цинк',
              volume: '120 мл',
              price: 178.00,
              count: 1,
              sum: 178.00
            },
            {
              id: 5,
              image: 'images/home/top-products/top-product-item.png',
              name: 'Нано коктейль Коллоидный цинк',
              volume: '120 мл',
              price: 178.00,
              count: 1,
              sum: 178.00
            },
            {
              id: 6,
              image: 'images/home/top-products/top-product-item.png',
              name: 'Нано коктейль Коллоидный цинк',
              volume: '120 мл',
              price: 178.00,
              count: 1,
              sum: 178.00
            },
            {
              id: 7,
              image: 'images/home/top-products/top-product-item.png',
              name: 'Нано коктейль Коллоидный цинк',
              volume: '120 мл',
              price: 178.00,
              count: 1,
              sum: 178.00
            },
            {
              id: 8,
              image: 'images/home/top-products/top-product-item.png',
              name: 'Нано коктейль Коллоидный цинк',
              volume: '120 мл',
              price: 178.00,
              count: 1,
              sum: 178.00
            },
          ]
        },
        {
          id: 3,
          type: 'order',
          number: 215,
          date: '12.11.2022',
          status: 'in-progress',
          price: 510.12,

          products: [
            {
              id: 1,
              image: 'images/home/top-products/top-product-item.png',
              name: 'Нано коктейль Коллоидный цинк',
              volume: '120 мл',
              price: 178.00,
              count: 1,
              sum: 178.00
            },
            {
              id: 2,
              image: 'images/home/top-products/top-product-item.png',
              name: 'Нано коктейль Коллоидный цинк',
              volume: '120 мл',
              price: 178.00,
              count: 1,
              sum: 178.00
            },
            {
              id: 3,
              image: 'images/home/top-products/top-product-item.png',
              name: 'Нано коктейль Коллоидный цинк',
              volume: '120 мл',
              price: 178.00,
              count: 1,
              sum: 178.00
            },
            {
              id: 4,
              image: 'images/home/top-products/top-product-item.png',
              name: 'Нано коктейль Коллоидный цинк',
              volume: '120 мл',
              price: 178.00,
              count: 1,
              sum: 178.00
            },
            {
              id: 5,
              image: 'images/home/top-products/top-product-item.png',
              name: 'Нано коктейль Коллоидный цинк',
              volume: '120 мл',
              price: 178.00,
              count: 1,
              sum: 178.00
            },
            {
              id: 6,
              image: 'images/home/top-products/top-product-item.png',
              name: 'Нано коктейль Коллоидный цинк',
              volume: '120 мл',
              price: 178.00,
              count: 1,
              sum: 178.00
            },
            {
              id: 7,
              image: 'images/home/top-products/top-product-item.png',
              name: 'Нано коктейль Коллоидный цинк',
              volume: '120 мл',
              price: 178.00,
              count: 1,
              sum: 178.00
            },
            {
              id: 8,
              image: 'images/home/top-products/top-product-item.png',
              name: 'Нано коктейль Коллоидный цинк',
              volume: '120 мл',
              price: 178.00,
              count: 1,
              sum: 178.00
            },
            {
              id: 9,
              image: 'images/home/top-products/top-product-item.png',
              name: 'Нано коктейль Коллоидный цинк',
              volume: '120 мл',
              price: 178.00,
              count: 1,
              sum: 178.00
            },
          ]
        },
        {
          id: 4,
          type: 'order',
          number: 230,
          date: '12.05.2022',
          status: 'completed',
          price: 670.97,

          products: [
            {
              id: 1,
              image: 'images/home/top-products/top-product-item.png',
              name: 'Нано коктейль Коллоидный цинк',
              volume: '120 мл',
              price: 178.00,
              count: 1,
              sum: 178.00
            },
            {
              id: 2,
              image: 'images/home/top-products/top-product-item.png',
              name: 'Нано коктейль Коллоидный цинк',
              volume: '120 мл',
              price: 178.00,
              count: 1,
              sum: 178.00
            },
            {
              id: 3,
              image: 'images/home/top-products/top-product-item.png',
              name: 'Нано коктейль Коллоидный цинк',
              volume: '120 мл',
              price: 178.00,
              count: 1,
              sum: 178.00
            },
            {
              id: 4,
              image: 'images/home/top-products/top-product-item.png',
              name: 'Нано коктейль Коллоидный цинк',
              volume: '120 мл',
              price: 178.00,
              count: 1,
              sum: 178.00
            },
            {
              id: 5,
              image: 'images/home/top-products/top-product-item.png',
              name: 'Нано коктейль Коллоидный цинк',
              volume: '120 мл',
              price: 178.00,
              count: 1,
              sum: 178.00
            },
            {
              id: 6,
              image: 'images/home/top-products/top-product-item.png',
              name: 'Нано коктейль Коллоидный цинк',
              volume: '120 мл',
              price: 178.00,
              count: 1,
              sum: 178.00
            },
            {
              id: 7,
              image: 'images/home/top-products/top-product-item.png',
              name: 'Нано коктейль Коллоидный цинк',
              volume: '120 мл',
              price: 178.00,
              count: 1,
              sum: 178.00
            },
            {
              id: 8,
              image: 'images/home/top-products/top-product-item.png',
              name: 'Нано коктейль Коллоидный цинк',
              volume: '120 мл',
              price: 178.00,
              count: 1,
              sum: 178.00
            },
            {
              id: 9,
              image: 'images/home/top-products/top-product-item.png',
              name: 'Нано коктейль Коллоидный цинк',
              volume: '120 мл',
              price: 178.00,
              count: 1,
              sum: 178.00
            },
          ]
        },
        {
          id: 5,
          type: 'card',
          name: 'Пополнение баланса',
          methodName: 'Сумма пополнения',
          status: 'canceled',
          sum: '1,670.97',
          method: 'VISA',
          date: '12.12.2022',

          operations: {
            confirmations: '50/1',
            coin: 'USDT',
            network: 'BNB Smart Chain (BEP20)',
            address: 'TA3X93FV5674LX2w4oQKsoi9oU5iVF7Gnf',
          }
        },
        {
          id: 6,
          type: 'order',
          number: 254,
          date: '12.06.2022',
          status: 'in-progress',
          price: 630.97,

          products: [
            {
              id: 1,
              image: 'images/home/top-products/top-product-item.png',
              name: 'Нано коктейль Коллоидный цинк',
              volume: '120 мл',
              price: 178.00,
              count: 1,
              sum: 178.00
            },
            {
              id: 2,
              image: 'images/home/top-products/top-product-item.png',
              name: 'Нано коктейль Коллоидный цинк',
              volume: '120 мл',
              price: 178.00,
              count: 1,
              sum: 178.00
            },
            {
              id: 3,
              image: 'images/home/top-products/top-product-item.png',
              name: 'Нано коктейль Коллоидный цинк',
              volume: '120 мл',
              price: 178.00,
              count: 1,
              sum: 178.00
            },
            {
              id: 4,
              image: 'images/home/top-products/top-product-item.png',
              name: 'Нано коктейль Коллоидный цинк',
              volume: '120 мл',
              price: 178.00,
              count: 1,
              sum: 178.00
            },
            {
              id: 5,
              image: 'images/home/top-products/top-product-item.png',
              name: 'Нано коктейль Коллоидный цинк',
              volume: '120 мл',
              price: 178.00,
              count: 1,
              sum: 178.00
            },
          ]
        },
        {
          id: 7,
          type: 'order',
          number: 230,
          date: '12.05.2022',
          status: 'completed',
          price: 670.97,

          products: [
            {
              id: 1,
              image: 'images/home/top-products/top-product-item.png',
              name: 'Нано коктейль Коллоидный цинк',
              volume: '120 мл',
              price: 178.00,
              count: 1,
              sum: 178.00
            },
            {
              id: 2,
              image: 'images/home/top-products/top-product-item.png',
              name: 'Нано коктейль Коллоидный цинк',
              volume: '120 мл',
              price: 178.00,
              count: 1,
              sum: 178.00
            },
            {
              id: 3,
              image: 'images/home/top-products/top-product-item.png',
              name: 'Нано коктейль Коллоидный цинк',
              volume: '120 мл',
              price: 178.00,
              count: 1,
              sum: 178.00
            },
            {
              id: 4,
              image: 'images/home/top-products/top-product-item.png',
              name: 'Нано коктейль Коллоидный цинк',
              volume: '120 мл',
              price: 178.00,
              count: 1,
              sum: 178.00
            },
            {
              id: 5,
              image: 'images/home/top-products/top-product-item.png',
              name: 'Нано коктейль Коллоидный цинк',
              volume: '120 мл',
              price: 178.00,
              count: 1,
              sum: 178.00
            },
            {
              id: 6,
              image: 'images/home/top-products/top-product-item.png',
              name: 'Нано коктейль Коллоидный цинк',
              volume: '120 мл',
              price: 178.00,
              count: 1,
              sum: 178.00
            },
            {
              id: 7,
              image: 'images/home/top-products/top-product-item.png',
              name: 'Нано коктейль Коллоидный цинк',
              volume: '120 мл',
              price: 178.00,
              count: 1,
              sum: 178.00
            },
            {
              id: 8,
              image: 'images/home/top-products/top-product-item.png',
              name: 'Нано коктейль Коллоидный цинк',
              volume: '120 мл',
              price: 178.00,
              count: 1,
              sum: 178.00
            },
            {
              id: 9,
              image: 'images/home/top-products/top-product-item.png',
              name: 'Нано коктейль Коллоидный цинк',
              volume: '120 мл',
              price: 178.00,
              count: 1,
              sum: 178.00
            },
          ]
        },
        {
          id: 8,
          type: 'card',
          name: 'Вывод',
          methodName: 'Сумма вывода',
          status: 'successfully',
          sum: '1,670.97',
          method: 'VISA',
          date: '12.12.2022',

          operations: {
            confirmations: '50/1',
            coin: 'USDT',
            network: 'BNB Smart Chain (BEP20)',
            address: 'TA3X93FV5674LX2w4oQKsoi9oU5iVF7Gnf',
          }
        },
      ]
    }
  },
  computed: {
    ...mapState('orders', ['orders']),
  },
  mounted() {
    this.$store.dispatch('orders/getListOrders')
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/_myOrders.scss";
</style>