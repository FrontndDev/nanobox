<template>
  <main>
    <div class="settings">
      <PersonalInformation/>
      <DeliveryAddress/>
      <Password/>
      <TwoFactorAuthentication/>
    </div>
  </main>
</template>

<script>
import PersonalInformation from "@/components/Views/Settings/PersonalInformation.vue";
import DeliveryAddress from "@/components/Views/Settings/DeliveryAddress.vue";
import Password from "@/components/Views/Settings/Password.vue";
import TwoFactorAuthentication from "@/components/Views/Settings/TwoFactorAuthentication.vue";

export default {
  name: "Settings",
  components: {TwoFactorAuthentication, Password, DeliveryAddress, PersonalInformation}
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/Views/settings/_settings.scss";
</style>