<template>
  <div class="operation-with-balance" :class="{ 'active': opened }">
    <div class="operation-with-balance__content" @click="opened = !opened">
      <div class="operation-with-balance__left">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" :class="{ 'active': opened }">
          <path d="M8.70711 5.29289C8.31658 4.90237 7.68342 4.90237 7.29289 5.29289C6.90237 5.68342 6.90237 6.31658 7.29289 6.70711L9.58579 9L7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071C7.68342 13.0976 8.31658 13.0976 8.70711 12.7071L11.7071 9.70711C12.0976 9.31658 12.0976 8.68342 11.7071 8.29289L8.70711 5.29289Z" fill="#4B535A"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 -6.10673e-07 9 -3.93402e-07C4.02944 -1.76132e-07 -3.93402e-07 4.02944 -3.93402e-07 9C-3.93403e-07 13.9706 4.02944 18 9 18ZM9 16C12.866 16 16 12.866 16 9C16 5.13401 12.866 2 9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16Z" fill="#4B535A"/>
        </svg>

        <div class="operation-with-balance__info">
          <div class="operation-with-balance__info-title ">{{ card.name }}</div>
          <div class="operation-with-balance__info-status" :class="card.status">{{ getStatusTranslation }}</div>
        </div>
      </div>
      <div class="operation-with-balance__right">
        <div class="operation-with-balance__info">
          <div class="operation-with-balance__info-title method">{{ card.methodName }}</div>
          <div class="operation-with-balance__info-status">1,670.97 USD</div>
        </div>
        <div class="operation-with-balance__info">
          <div class="operation-with-balance__info-title">Метод</div>
          <div class="operation-with-balance__info-status">VISA</div>
        </div>
        <div class="operation-with-balance__info">
          <div class="operation-with-balance__info-title">Дата</div>
          <div class="operation-with-balance__info-status">12.12.2022</div>
        </div>
      </div>
      </div>
    <Transition name="dropdown">
      <div class="operation-with-balance__dropdown" v-if="opened">
        <div class="operation-with-balance__info row">
          <div class="operation-with-balance__info-title big">Подтверждений:</div>
          <div class="operation-with-balance__info-status operation-with-balance__info-status_ml-3">{{ card.operations.confirmations }}</div>
        </div>
        <div class="operation-with-balance__info row">
          <div class="operation-with-balance__info-title big">Coin</div>
          <div class="operation-with-balance__info-status operation-with-balance__info-status_ml-9">{{ card.operations.coin }}</div>
        </div>
        <div class="operation-with-balance__info row">
          <div class="operation-with-balance__info-title big">Network:</div>
          <div class="operation-with-balance__info-status operation-with-balance__info-status_ml-12">{{ card.operations.network }}</div>
        </div>
        <div class="operation-with-balance__info row">
          <div class="operation-with-balance__info-title big">Address</div>
          <div class="operation-with-balance__info-status operation-with-balance__info-status_ml-12">
            {{ card.operations.address }}
            <div class="operation-with-balance__info-icons">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M14.3031 11.9467L13.1247 10.7667L14.3031 9.58833C14.6927 9.20204 15.0023 8.74258 15.214 8.23633C15.4256 7.73008 15.5352 7.18701 15.5364 6.6383C15.5376 6.08959 15.4304 5.54605 15.221 5.03888C15.0115 4.53171 14.704 4.0709 14.316 3.6829C13.928 3.2949 13.4672 2.98736 12.96 2.77794C12.4528 2.56851 11.9093 2.46132 11.3606 2.46252C10.8119 2.46372 10.2688 2.57329 9.76256 2.78494C9.25631 2.99658 8.79685 3.30614 8.41056 3.69583L7.23222 4.875L6.05306 3.69666L7.23306 2.51833C8.32708 1.42431 9.81088 0.8097 11.3581 0.8097C12.9052 0.8097 14.389 1.42431 15.4831 2.51833C16.5771 3.61235 17.1917 5.09616 17.1917 6.64333C17.1917 8.19051 16.5771 9.67431 15.4831 10.7683L14.3039 11.9467H14.3031ZM11.9464 14.3033L10.7672 15.4817C9.67321 16.5757 8.1894 17.1903 6.64222 17.1903C5.09505 17.1903 3.61124 16.5757 2.51722 15.4817C1.42321 14.3876 0.808594 12.9038 0.808594 11.3567C0.808594 9.80949 1.42321 8.32568 2.51722 7.23166L3.69639 6.05333L4.87472 7.23333L3.69639 8.41166C3.3067 8.79796 2.99714 9.25742 2.7855 9.76367C2.57385 10.2699 2.46428 10.813 2.46308 11.3617C2.46188 11.9104 2.56907 12.4539 2.7785 12.9611C2.98792 13.4683 3.29546 13.9291 3.68346 14.3171C4.07146 14.7051 4.53227 15.0126 5.03944 15.2221C5.54661 15.4315 6.09015 15.5387 6.63886 15.5375C7.18757 15.5363 7.73064 15.4267 8.23689 15.2151C8.74314 15.0034 9.2026 14.6939 9.58889 14.3042L10.7672 13.1258L11.9464 14.3042V14.3033ZM11.3564 5.46416L12.5356 6.64333L6.64306 12.535L5.46389 11.3567L11.3564 5.465V5.46416Z" fill="#6A6E85"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 18" fill="none">
                <path d="M5.5 14C5.04167 14 4.64944 13.8369 4.32333 13.5108C3.99667 13.1842 3.83333 12.7917 3.83333 12.3333V2.33333C3.83333 1.875 3.99667 1.4825 4.32333 1.15583C4.64944 0.82972 5.04167 0.666664 5.5 0.666664H13C13.4583 0.666664 13.8508 0.82972 14.1775 1.15583C14.5036 1.4825 14.6667 1.875 14.6667 2.33333V12.3333C14.6667 12.7917 14.5036 13.1842 14.1775 13.5108C13.8508 13.8369 13.4583 14 13 14H5.5ZM5.5 12.3333H13V2.33333H5.5V12.3333ZM0.5 11.5H2.16667V9.83333H0.5V11.5ZM0.5 8.58333H2.16667V6.91666H0.5V8.58333ZM6.33333 17.3333H8V15.6667H6.33333V17.3333ZM0.5 14.4167H2.16667V12.75H0.5V14.4167ZM2.16667 17.3333V15.6667H0.5C0.5 16.125 0.663055 16.5175 0.989167 16.8442C1.31583 17.1703 1.70833 17.3333 2.16667 17.3333ZM3.41667 17.3333H5.08333V15.6667H3.41667V17.3333ZM9.25 17.3333C9.70833 17.3333 10.1008 17.1703 10.4275 16.8442C10.7536 16.5175 10.9167 16.125 10.9167 15.6667H9.25V17.3333ZM0.5 5.66666H2.16667V4C1.70833 4 1.31583 4.16333 0.989167 4.49C0.663055 4.81611 0.5 5.20833 0.5 5.66666Z" fill="#6A6E85"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  name: "OperationWithBalance",
  props: {
    card: {
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
        'successfully': 'Успешно',
        'canceled': 'Отменен'
      }[this.card.status]
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/operations/_operationWithBalance.scss";
</style>