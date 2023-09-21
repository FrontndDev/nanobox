<template>
  <header class="header" :class="{ 'auth': token }" :style="`background-color: ${bg};`">
    <div class="container">
      <div class="header__content">
        <div class="header__left">
          <HeaderLogo class="header__logo" @click="$router.push('/')"/>
<!--          <SelectLanguage/>-->
        </div>
        <div class="header__right">
          <Button bg="orange" name="Консультация врача" @click="showAnAppointmentModal = true"/>
          <IconButton bg="white" @click="showOrderModal = true">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.40499 18C4.90954 18 4.48554 17.8239 4.13302 17.4717C3.77989 17.1189 3.60333 16.695 3.60333 16.2C3.60333 15.705 3.77989 15.2811 4.13302 14.9283C4.48554 14.5761 4.90954 14.4 5.40499 14.4C5.90045 14.4 6.32444 14.5761 6.67697 14.9283C7.0301 15.2811 7.20666 15.705 7.20666 16.2C7.20666 16.695 7.0301 17.1189 6.67697 17.4717C6.32444 17.8239 5.90045 18 5.40499 18ZM14.4133 18C13.9179 18 13.4939 17.8239 13.1413 17.4717C12.7882 17.1189 12.6117 16.695 12.6117 16.2C12.6117 15.705 12.7882 15.2811 13.1413 14.9283C13.4939 14.5761 13.9179 14.4 14.4133 14.4C14.9088 14.4 15.3331 14.5761 15.6862 14.9283C16.0387 15.2811 16.215 15.705 16.215 16.2C16.215 16.695 16.0387 17.1189 15.6862 17.4717C15.3331 17.8239 14.9088 18 14.4133 18ZM4.63929 3.6L6.80128 8.1H13.1071L15.5844 3.6H4.63929ZM3.7835 1.8H17.0708C17.4161 1.8 17.6788 1.9536 17.859 2.2608C18.0392 2.5686 18.0467 2.88 17.8815 3.195L14.6836 8.955C14.5184 9.255 14.2968 9.4875 14.0188 9.6525C13.7413 9.8175 13.4374 9.9 13.1071 9.9H6.39591L5.40499 11.7H16.215V13.5H5.40499C4.72937 13.5 4.2189 13.2036 3.87358 12.6108C3.52826 12.0186 3.51325 11.43 3.82854 10.845L5.04466 8.64L1.80166 1.8H0V0H2.92771L3.7835 1.8Z" fill="#FFA765"/>
            </svg>
          </IconButton>
          <IconButton @click="showAuthModal = true" v-if="!token">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.0002 0.833344C11.2157 0.833344 12.3815 1.31623 13.2411 2.17577C14.1006 3.03531 14.5835 4.2011 14.5835 5.41668C14.5835 6.63225 14.1006 7.79804 13.2411 8.65758C12.3815 9.51712 11.2157 10 10.0002 10C8.78459 10 7.6188 9.51712 6.75926 8.65758C5.89971 7.79804 5.41683 6.63225 5.41683 5.41668C5.41683 4.2011 5.89971 3.03531 6.75926 2.17577C7.6188 1.31623 8.78459 0.833344 10.0002 0.833344ZM10.0002 3.12501C9.39237 3.12501 8.80948 3.36645 8.37971 3.79622C7.94994 4.22599 7.7085 4.80889 7.7085 5.41668C7.7085 6.02446 7.94994 6.60736 8.37971 7.03713C8.80948 7.4669 9.39237 7.70834 10.0002 7.70834C10.608 7.70834 11.1908 7.4669 11.6206 7.03713C12.0504 6.60736 12.2918 6.02446 12.2918 5.41668C12.2918 4.80889 12.0504 4.22599 11.6206 3.79622C11.1908 3.36645 10.608 3.12501 10.0002 3.12501ZM10.0002 11.1458C13.0595 11.1458 19.1668 12.6698 19.1668 15.7292V19.1667H0.833496V15.7292C0.833496 12.6698 6.94079 11.1458 10.0002 11.1458ZM10.0002 13.3229C6.59704 13.3229 3.01058 14.9958 3.01058 15.7292V16.9896H16.9897V15.7292C16.9897 14.9958 13.4033 13.3229 10.0002 13.3229Z" fill="white"/>
            </svg>
          </IconButton>
          <MenuUserInfo v-if="token"/>
        </div>
      </div>
      <nav class="header__nav">
        <RouterLink to="/">Главная</RouterLink>
        <RouterLink to="/catalog">Каталог</RouterLink>
        <RouterLink to="/about-us">О нас</RouterLink>
        <RouterLink to="/faq">Вопросы-ответы</RouterLink>
        <RouterLink to="/blog">Новости</RouterLink>
        <RouterLink to="/contacts">Контакты</RouterLink>
        <RouterLink to="/reviews">Отзывы</RouterLink>
        <RouterLink to="/certificates">Документы и сертификаты</RouterLink>
<!--        <RouterLink style="color: #262626;" to="">Для дистрибьюторов</RouterLink>-->
      </nav>
    </div>
  </header>
  <MakeOrderModal v-if="showOrderModal" @close="showOrderModal = false"/>
  <LoginModal v-if="showAuthModal" @close="showAuthModal = false"/>
  <MakeAnAppointmentModal v-if="showAnAppointmentModal" @close="showAnAppointmentModal = false"/>
</template>

<script>
import SelectLanguage from "@/components/Selects/SelectLanguage.vue";
import Button from "@/components/Buttons/Button.vue";
import MakeOrderModal from "@/components/Modals/MakeOrderModal.vue";
import IconButton from "@/components/Buttons/IconButton.vue";
import LoginModal from "@/components/Modals/LoginModal.vue";
import HeaderLogo from "@/components/Header/HeaderLogo.vue";
import {mapState} from "vuex";
import MakeAnAppointmentModal from "@/components/Modals/MakeAnAppointmentModal.vue";
import MenuUserInfo from "@/components/MenuUserInfo.vue";

export default {
  name: "Header",
  components: {
    MenuUserInfo,
    MakeAnAppointmentModal, HeaderLogo, LoginModal, IconButton, MakeOrderModal, Button, SelectLanguage},
  props: {
    bg: {
      type: String,
      default: 'transparent',
    }
  },
  data() {
    return {
      showOrderModal: false,
      showAuthModal: false,
      showAnAppointmentModal: false,
    }
  },
  methods: {
    openAuthModalForReferralUser() {
      if (this.$route.fullPath.split('?referral_token=')[1] && !this.token) this.showAuthModal = true
    }
  },
  computed: {
    ...mapState('auth', ['token'])
  },
  mounted() {
    this.openAuthModalForReferralUser()
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/_header.scss";
</style>