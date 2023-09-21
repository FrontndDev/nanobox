<template>
  <main>
    <div class="operations">
      <div class="operations__header">
        <div class="operations__buttons">
          <Button2
              name="Все операции"
              :class="{ 'active': active === 'all' }"
              @click="active = 'all'"
          />
          <Button2
              name="Пополнение"
              :class="{ 'active': active === 'replenishment' }"
              @click="active = 'replenishment'"
          />
          <Button2
              name="Вывод"
              :class="{ 'active': active === 'conclusion' }"
              @click="active = 'conclusion'"
          />
        </div>
        <Input placeholder="Искать транзакцию..." icon="svg/search.svg" padding="10px 12px 10px 46px" width="270px"/>
      </div>

      <div class="operations__content operations__content_mt-30">
        <template v-for="operation in operations" v-if="operations.length">
          <OperationWithOrder
              :order="operation"
              v-if="operation.type === 'order'"
          />
          <OperationWithBalance
              :card="operation"
              v-if="operation.type === 'card'"
          />
        </template>
        <NoData class="operations__icon" name="У вас все еще нет ни одной операции" v-if="!operations.length"/>
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

export default {
  name: "Operations",
  components: {NoData, OperationWithBalance, OperationWithOrder, Input, Button2},
  data() {
    return {
      active: 'all',
      operations: [
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
        {
          id: 5,
          type: 'card',
          name: 'Пополнение баланса',
          methodName: 'Сумма пополнения',
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
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/Views/operations/_operations.scss";
</style>