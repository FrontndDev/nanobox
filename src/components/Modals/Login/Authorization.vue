<template>
  <form class="authorization" @submit.prevent="auth">
    <div class="authorization__title">Войти через email</div>

    <div class="authorization__content authorization__content_mt-20">
      <Input
          type="email"
          placeholder="Введите свой email"
          title="Email"
          width="100%"
          error-message="Некорректный эмайл"
          :error="emailValid"
          :default-value="user.email"
          @custom-input="setEmail"
      />
      <Input
          type="password"
          placeholder="Введите пароль"
          title="Пароль"
          width="100%"
          :show-password="true"
          :default-value="user.password"
          @custom-input="setPassword"
      />
    </div>

    <div class="authorization__forgot-password authorization__forgot-password_mt-12" @click="$emit('remind-password')">
      Забыли пароль?
    </div>
    <Button
        class="authorization__button authorization__button_mt-20"
        name="Войти"
        width="100%"
        @click="auth"
    />
  </form>
</template>

<script>
import Input from "@/components/Utils/Input.vue";
import Button from "@/components/Buttons/Button.vue";
import {mapActions} from "vuex";

export default {
  name: "Authorization",
  components: {Input, Button},
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      emailValid: true,
    }
  },
  methods: {
    ...mapActions('auth', ['login']),

    auth() {
      this.login(this.user)
      this.$emit('close-modal')
    },
    setEmail(email) {
      const regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      this.emailValid = regExp.test(String(email).toLowerCase())

      this.user.email = email
    },
    setPassword(password) {
      this.user.password = password
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/Views/login/_authorization.scss";
</style>