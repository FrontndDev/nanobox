<template>
  <div class="burger-menu" :class="{ 'active': opened }">
    <div>
      <div class="burger-menu__up">
        <div>
          <BurgerMenuLogo/>
          <IconButton bg="white" @click="$emit('close')">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M5.9987 7.16668L1.91536 11.25C1.76259 11.4028 1.56814 11.4792 1.33203 11.4792C1.09592 11.4792 0.901475 11.4028 0.748698 11.25C0.59592 11.0972 0.519531 10.9028 0.519531 10.6667C0.519531 10.4306 0.59592 10.2361 0.748698 10.0833L4.83203 6.00001L0.748698 1.91668C0.59592 1.7639 0.519531 1.56945 0.519531 1.33334C0.519531 1.09723 0.59592 0.902788 0.748698 0.75001C0.901475 0.597232 1.09592 0.520844 1.33203 0.520844C1.56814 0.520844 1.76259 0.597232 1.91536 0.75001L5.9987 4.83334L10.082 0.75001C10.2348 0.597232 10.4293 0.520844 10.6654 0.520844C10.9015 0.520844 11.0959 0.597232 11.2487 0.75001C11.4015 0.902788 11.4779 1.09723 11.4779 1.33334C11.4779 1.56945 11.4015 1.7639 11.2487 1.91668L7.16537 6.00001L11.2487 10.0833C11.4015 10.2361 11.4779 10.4306 11.4779 10.6667C11.4779 10.9028 11.4015 11.0972 11.2487 11.25C11.0959 11.4028 10.9015 11.4792 10.6654 11.4792C10.4293 11.4792 10.2348 11.4028 10.082 11.25L5.9987 7.16668Z" fill="#FFA765"/>
            </svg>
          </IconButton>
        </div>
        <div>
          <IconButton bg="white" @click="showOrderModal = true">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.40499 18C4.90954 18 4.48554 17.8239 4.13302 17.4717C3.77989 17.1189 3.60333 16.695 3.60333 16.2C3.60333 15.705 3.77989 15.2811 4.13302 14.9283C4.48554 14.5761 4.90954 14.4 5.40499 14.4C5.90045 14.4 6.32444 14.5761 6.67697 14.9283C7.0301 15.2811 7.20666 15.705 7.20666 16.2C7.20666 16.695 7.0301 17.1189 6.67697 17.4717C6.32444 17.8239 5.90045 18 5.40499 18ZM14.4133 18C13.9179 18 13.4939 17.8239 13.1413 17.4717C12.7882 17.1189 12.6117 16.695 12.6117 16.2C12.6117 15.705 12.7882 15.2811 13.1413 14.9283C13.4939 14.5761 13.9179 14.4 14.4133 14.4C14.9088 14.4 15.3331 14.5761 15.6862 14.9283C16.0387 15.2811 16.215 15.705 16.215 16.2C16.215 16.695 16.0387 17.1189 15.6862 17.4717C15.3331 17.8239 14.9088 18 14.4133 18ZM4.63929 3.6L6.80128 8.1H13.1071L15.5844 3.6H4.63929ZM3.7835 1.8H17.0708C17.4161 1.8 17.6788 1.9536 17.859 2.2608C18.0392 2.5686 18.0467 2.88 17.8815 3.195L14.6836 8.955C14.5184 9.255 14.2968 9.4875 14.0188 9.6525C13.7413 9.8175 13.4374 9.9 13.1071 9.9H6.39591L5.40499 11.7H16.215V13.5H5.40499C4.72937 13.5 4.2189 13.2036 3.87358 12.6108C3.52826 12.0186 3.51325 11.43 3.82854 10.845L5.04466 8.64L1.80166 1.8H0V0H2.92771L3.7835 1.8Z" fill="#FFA765"/>
            </svg>
          </IconButton>
          <Button name="Авторизация" padding="11px 24px" @click="showLoginModal = true" v-if="!token"/>
          <MenuUserInfo v-if="token"/>
        </div>
      </div>

      <div class="burger-menu__down">
        <div class="burger-menu__sidebar-buttons burger-menu__sidebar-buttons_mb-8" v-if="token">
          <Button2
              name="Сайт"
              max-width="50%"
              :class="{ 'active': activeButton === 'website' }"
              @click="activeButton = 'website'"
          />
          <Button2
              name="Кабинет"
              max-width="50%"
              :class="{ 'active': activeButton === 'cabinet' }"
              @click="activeButton = 'cabinet'"
          />
        </div>

        <nav class="burger-menu__nav" v-if="activeButton === 'website'">
          <RouterLink to="/">Главная</RouterLink>
          <RouterLink to="/catalog">Каталог</RouterLink>
          <RouterLink to="/about-us">О нас</RouterLink>
          <RouterLink to="/faq">Вопросы-ответы</RouterLink>
          <RouterLink to="/blog">Новости</RouterLink>
          <RouterLink to="/contacts">Контакты</RouterLink>
          <RouterLink to="/reviews">Отзывы</RouterLink>
          <RouterLink to="/certificates">Документы и сертификаты</RouterLink>
<!--          <RouterLink to="">Для дистрибьюторов</RouterLink>-->
        </nav>

        <Sidebar class="burger-menu__sidebar" @logout="activeButton = 'website'" v-if="activeButton === 'cabinet'"/>
      </div>
    </div>
    <div>
      <Button
          class="burger-menu__button"
          name="Консультация врача"
          width="100%"
          bg="orange"
          @click="$router.push('/doctor')"
      />
    </div>
  </div>
  <MakeOrderModal v-if="showOrderModal" @close="showOrderModal = false"/>
  <LoginModal v-if="showLoginModal" @close="showLoginModal = false"/>
</template>

<script>
import IconButton from "@/components/Buttons/IconButton.vue";
import Button from "@/components/Buttons/Button.vue";
import BurgerMenuLogo from "@/components/BurgerMenu/BurgerMenuLogo.vue";
import LoginModal from "@/components/Modals/LoginModal.vue";
import MakeOrderModal from "@/components/Modals/MakeOrderModal.vue";
import Sidebar from "@/components/Sidebar.vue";
import Button2 from "@/components/Buttons/Button2.vue";
import MenuUserInfo from "@/components/MenuUserInfo.vue";
import {mapState} from "vuex";

export default {
  name: "BurgerMenu",
  components: {
    MenuUserInfo, Button2, Sidebar, MakeOrderModal, LoginModal, BurgerMenuLogo, Button, IconButton},
  emits: ['close'],
  props: {
    opened: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      activeButton: 'website',
      showOrderModal: false,
      showLoginModal: false,
    }
  },
  computed: {
    ...mapState('auth', ['token']),
  },
  watch: {
    '$route.path'() {
      this.$emit('close')
    }
  },
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/_burgerMenu.scss";
</style>