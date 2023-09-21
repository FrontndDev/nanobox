<template>
  <main>
    <div class="thanks">
      <div class="container">
        <div class="thanks__body">
          <div class="thanks__circle">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="18" viewBox="0 0 23 18" fill="none">
              <path d="M22.1732 1.1653C21.7393 0.731359 21.0358 0.731359 20.6018 1.1653L7.29002 14.4772L2.17318 9.36039C1.73928 8.92645 1.03581 8.9265 0.601823 9.36039C0.167882 9.79429 0.167882 10.4978 0.601823 10.9317L6.50434 16.8341C6.93811 17.268 7.6421 17.2677 8.07569 16.8341L22.1732 2.73665C22.6071 2.30276 22.6071 1.59924 22.1732 1.1653Z" fill="white"/>
            </svg>
          </div>
          <h2 class="thanks__title thanks__title_mt-30">Спасибо за ваш заказ!</h2>
          <p class="thanks__subtitle thanks__subtitle_mt-16 page-subtitle">
            Наши консультанты свяжутся с вами в ближайшее время чтобы проинструктировать вас с деталями заказа и тд и тп
          </p>
          <Button class="thanks__button thanks__button_mt-24" name="Вернуться на главную" @click="$router.push('/')"/>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Button from "@/components/Buttons/Button.vue";
import {mapState} from "vuex";

export default {
  name: "Thanks",
  components: {Button},
  computed: {
    ...mapState('orders', ['thanksPage']),
  },
  mounted() {
    if (!this.thanksPage) this.$router.push('/')
  }
}
</script>

<style scoped lang="scss">
main {
  margin: 13.35vh 0;
}

@media screen and (max-width: 1200px) {
  main {
    margin: 100px 0 120px;
  }
}

@import "@/assets/scss/_thanks.scss";
</style>