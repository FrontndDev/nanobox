<template>
  <div class="change-password">
    <div class="modal__title">Изменение пароля</div>

    <div class="change-password__text change-password__text_mt-24">
      Мы вам отправили ссылку на email для изменения пароля
    </div>
  </div>
</template>

<script>
export default {
  name: "ChangePassword"
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/modals/_modal.scss";

.change-password {
  &__text {
    font-weight: 600;
    line-height: 19px;

    &_mt-24 {
      margin-top: 24px;
    }
  }
}
</style>