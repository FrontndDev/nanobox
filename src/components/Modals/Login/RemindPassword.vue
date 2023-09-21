<template>
  <div class="remind-password">
    <div class="modal__title little">Напомнить пароль</div>

    <Input
        type="email"
        placeholder="Введите свой email"
        title="Email"
        error-message="Некорректный эмайл"
        :error="emailValid"
        @custom-input="setEmail"
    />

    <div class="remind-password__buttons">
      <Button name="Войти" width="100%" @click="toSendALetter"/>
      <ArrowButton name="Вернуться на страницу входа" type="left" @click="$emit('auth')"/>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Buttons/Button.vue";
import ArrowButton from "@/components/Buttons/ArrowButton.vue";
import Input from "@/components/Utils/Input.vue";
import {mapActions} from "vuex";

export default {
  name: "RemindPassword",
  components: {Input, ArrowButton, Button},
  data() {
    return {
      email: '',
      emailValid: true,
    }
  },
  methods: {
    ...mapActions('auth', ['sendEmail']),

    toSendALetter() {
      if (this.emailValid && this.email.length) {
        this.sendEmail({ email: this.email })
        this.$emit('change-password')
      }
    },
    setEmail(email) {
      const regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      this.emailValid = regExp.test(String(email).toLowerCase())

      this.email = email
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/modals/_modal.scss";

.remind-password {
  display: flex;
  flex-direction: column;
  row-gap: 30px;

  &__buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
  }
}
</style>