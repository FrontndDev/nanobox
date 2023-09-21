<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__body">
        <div class="footer__up">
          <div class="footer__logo" @click="$router.push('/')">
            <img src="@/assets/images/logo2.png">
            <div class="footer__logo-name">
              nanobox <span>bio</span>
            </div>
          </div>
          <nav class="footer__info">
            <RouterLink class="footer__item" to="/">Главная</RouterLink>
            <RouterLink class="footer__item" to="/blog">Новости</RouterLink>
            <RouterLink class="footer__item" to="/privacy-policy">Политика конфиденциальности</RouterLink>
            <RouterLink class="footer__item" to="/catalog">Каталог</RouterLink>
            <RouterLink class="footer__item" to="/faq">Вопросы-ответы</RouterLink>
            <RouterLink class="footer__item" to="/terms-of-use">Пользовательское соглашение</RouterLink>
            <RouterLink class="footer__item" to="/delivery-terms">Доставка товара</RouterLink>
<!--            <RouterLink style="color: #262626;" class="footer__item" to="">Для дистрибьюторов</RouterLink>-->
            <RouterLink class="footer__item" to="/reviews">Отзывы</RouterLink>
            <RouterLink class="footer__item" to="/offer-agreement">Договор оферты</RouterLink>
            <RouterLink class="footer__item" to="/return-procedure">Порядок возврата</RouterLink>
          </nav>
          <div class="footer__networks">
            <InstagramIcon/>
            <VKIcon/>
            <TelegramIcon/>
            <YouTubeIcon/>
          </div>
        </div>
        <div class="footer__line"/>
        <div class="footer__down">© 2023 NanoboxBio | All Rights Reserved</div>
      </div>
    </div>
  </footer>
</template>

<script>
import InstagramIcon from "@/components/Networks/InstagramIcon.vue";
import VKIcon from "@/components/Networks/VKIcon.vue";
import TelegramIcon from "@/components/Networks/TelegramIcon.vue";
import YouTubeIcon from "@/components/Networks/YouTubeIcon.vue";

export default {
  name: "Footer",
  components: {YouTubeIcon, TelegramIcon, VKIcon, InstagramIcon}
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/_footer.scss";
</style>