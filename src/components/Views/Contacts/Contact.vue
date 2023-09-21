<template>
  <div class="contact">
    <div class="contact__title">
      <div class="contact__title-line"/>
      <span :style="`max-width: ${maxWidth};`">{{ title }}</span>
      <div class="contact__title-line"/>
    </div>
    <div class="contact__phone contact__phone_mt-16">{{ phone }}</div>
    <div class="contact__email contact__email_mt-8">{{ email }}</div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  props: {
    title: {
      type: String,
      default: ''
    },
    phone: {
      type: String,
      default: ''
    },
    email: {
      type: String,
      default: ''
    },
    maxWidth: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/Views/contacts/_contact.scss";
</style>