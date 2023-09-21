<template>
  <aside class="make-order-sidebar">
    <h3>Итого</h3>

    <div class="make-order-sidebar__body">
      <div class="make-order-sidebar__info make-order-sidebar__info_mt-28 border-bottom">
        <div class="make-order-sidebar__info-item">
          <span>{{ count }} {{ ending }} на сумму</span>
          <span>₽{{ price }}</span>
        </div>
        <div class="make-order-sidebar__info-item">
          <span>Стоимость доставки</span>
          <span>Бесплатно</span>
        </div>
      </div>

      <div class="make-order-sidebar__info make-order-sidebar__info_mt-24">
        <div class="make-order-sidebar__info-item">
          <span>К оплате</span>
          <span class="make-order-sidebar__info-item-price">₽{{ price }}</span>
        </div>
      </div>

      <Button
          class="make-order-sidebar__button"
          name="Заказ подтверждаю"
          width="100%"
          @click="$emit('make-order')"
      />

      <div class="make-order-sidebar__terms-of-agreement make-order-sidebar__terms-of-agreement_mt-24">
        <p>
          Подтверждая заказ я соглашаюсь с
          <a href="https://docs.google.com/document/d/e/2PACX-1vQrb1X8AtqStEYsUymglANhnmucNqBDHJetlctdQjW7ltyQuF0cvD5kqraZ156mTM1mCWQBZ3EMeoV1/pub" target="_blank">условиями положения</a>
          о сборе и защите персональных данных и
          <a href="https://docs.google.com/document/d/e/2PACX-1vQrb1X8AtqStEYsUymglANhnmucNqBDHJetlctdQjW7ltyQuF0cvD5kqraZ156mTM1mCWQBZ3EMeoV1/pub" target="_blank">пользовательским соглашением</a>
        </p>
      </div>
    </div>
  </aside>
</template>

<script>
import Button from "@/components/Buttons/Button.vue";

export default {
  name: "MakeOrderSidebar",
  components: {Button},
  emits: ['make-order'],
  props: ['count', 'ending', 'price']
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/Views/make-order/_makeOrderSidebar.scss";
</style>