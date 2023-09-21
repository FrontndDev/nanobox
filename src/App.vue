<template>
  <RouterView/>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "App",
  watch: {
    '$route.path'() {
      document.body.style.overflow = null;
      window.scrollTo(0, 0)
      if (this.$route.path !== '/thanks') this.$store.commit('orders/SET_THANKS_PAGE', false)
    }
  },
  computed: {
    ...mapState('auth', ['user']),
  },
  beforeCreate() {
    const basket = localStorage.getItem('basket')
    if (!basket) localStorage.setItem('basket', JSON.stringify([]))
  }
}
</script>