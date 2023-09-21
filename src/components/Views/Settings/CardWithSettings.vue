<template>
  <div class="card-with-settings">
    <div class="card-with-settings__up" @click="opened = !opened">
      <div class="card-with-settings__left">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" :class="{ 'active': opened }">
          <path d="M8.70711 5.29289C8.31658 4.90237 7.68342 4.90237 7.29289 5.29289C6.90237 5.68342 6.90237 6.31658 7.29289 6.70711L9.58579 9L7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071C7.68342 13.0976 8.31658 13.0976 8.70711 12.7071L11.7071 9.70711C12.0976 9.31658 12.0976 8.68342 11.7071 8.29289L8.70711 5.29289Z" fill="#4B535A"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 -6.10673e-07 9 -3.93402e-07C4.02944 -1.76132e-07 -3.93402e-07 4.02944 -3.93402e-07 9C-3.93403e-07 13.9706 4.02944 18 9 18ZM9 16C12.866 16 16 12.866 16 9C16 5.13401 12.866 2 9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16Z" fill="#4B535A"/>
        </svg>
        <div class="card-with-settings__title">{{ title }}</div>
      </div>
      <div class="card-with-settings__right">
        <slot name="right"/>
      </div>
    </div>

    <Transition name="dropdown">
      <div class="card-with-settings__dropdown" v-show="opened">
        <slot name="dropdown"/>
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  name: "CardWithSettings",
  props: {
    title: {
      type: String,
      default: 'Заголовок'
    }
  },
  data() {
    return {
      opened: false,
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/Views/settings/_cardWithSettings.scss";
</style>