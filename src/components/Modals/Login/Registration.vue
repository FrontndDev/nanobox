<template>
  <form class="registration" @submit.prevent="reg">
    <div class="registration__title">Зарегистрироваться</div>

    <div class="registration__content registration__content_mt-20">
      <Input
          title="Имя, фамилия"
          placeholder="Введите свое имя и фамилию"
          width="100%"
          :default-value="user.full_name"
          @custom-input="setFullName"
      />
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
      <InputTel @set-code="setPhoneCode" @custom-input="setPhoneNumber"/>
      <Input
          type="password"
          placeholder="Придумайте пароль"
          title="Пароль"
          width="100%"
          :show-password="true"
          :default-value="user.password"
          @custom-input="setPassword"
      />
    </div>

    <div class="registration__conditions registration__conditions_mt-20">
      <Checkbox :checked="agreementWithTheTerms" @click="agreementWithTheTerms = !agreementWithTheTerms"/>
      <div>
        Я соглашаюсь с <a href="https://docs.google.com/document/d/e/2PACX-1vQrb1X8AtqStEYsUymglANhnmucNqBDHJetlctdQjW7ltyQuF0cvD5kqraZ156mTM1mCWQBZ3EMeoV1/pub" target="_blank">условиями положения</a> о сборе и защите персональных данных и <a href="https://docs.google.com/document/d/e/2PACX-1vQrb1X8AtqStEYsUymglANhnmucNqBDHJetlctdQjW7ltyQuF0cvD5kqraZ156mTM1mCWQBZ3EMeoV1/pub" target="_blank">пользовательским соглашением</a>
      </div>
    </div>
    <Button
        class="registration__button registration__button_mt-20"
        name="Зарегистрироваться"
        width="100%"
        type="submit"
        @click="reg"
    />
  </form>
</template>

<script>
import Input from "@/components/Utils/Input.vue";
import InputTel from "@/components/Utils/InputTel.vue";
import Checkbox from "@/components/Utils/Checkbox.vue";
import Button from "@/components/Buttons/Button.vue";
import {mapActions} from "vuex";

export default {
  name: "Registration",
  components: {Checkbox, InputTel, Input, Button},
  data() {
    return {
      agreementWithTheTerms: true,
      user: {
        full_name: '',
        email: '',
        phone: '',
        password: ''
      },
      phoneCode: '',
      emailValid: true,
    }
  },
  methods: {
    ...mapActions('auth', ['register']),

    setPhoneCode(code) {
      this.phoneCode = code
    },
    reg() {
      this.register(this.getReferralToken ? { ...this.user, referal_token: this.getReferralToken } : this.user)
      this.$emit('close-modal')
    },
    setFullName(fullName) {
      this.user.full_name = fullName
    },
    setEmail(email) {
      const regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      this.emailValid = regExp.test(String(email).toLowerCase())

      this.user.email = email
    },
    setPhoneNumber(number) {
      this.user.phone = number
    },
    setPassword(pass) {
      this.user.password = pass
    }
  },
  computed: {
    getReferralToken() {
      return this.$route.fullPath.split('?referral_token=')[1]
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/Views/login/_registration.scss";
</style>