<template>
  <div class="two-factor-authentication">
    <CardWithSettings title="Двухфакторная аутентификация">
      <template #right>
        <div class="two-factor-authentication__right" :class="{ 'active': activeTwoFactorAuthentication }">
          {{ getText.text }}
        </div>
      </template>
      <template #dropdown>
        <Button type="submit" :name="getText.button" @click="showModal = true"/>
      </template>
    </CardWithSettings>
  </div>
  <EnableTwoFactorAuthenticationModal v-if="showModal" @close="showModal = false"/>
</template>

<script>
import CardWithSettings from "@/components/Views/Settings/CardWithSettings.vue";
import Button from "@/components/Buttons/Button.vue";
import EnableTwoFactorAuthenticationModal from "@/components/Modals/EnableTwoFactorAuthenticationModal.vue";

export default {
  name: "TwoFactorAuthentication",
  components: {EnableTwoFactorAuthenticationModal, Button, CardWithSettings},
  data() {
    return {
      activeTwoFactorAuthentication: false,
      showModal: false,
    }
  },
  computed: {
    getText() {
      return {
        text: this.activeTwoFactorAuthentication ? 'Включено' : 'Отключено',
        button: this.activeTwoFactorAuthentication ? 'Отключить' : 'Включить',
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/Views/settings/_twoFactorAuthentication.scss";
</style>