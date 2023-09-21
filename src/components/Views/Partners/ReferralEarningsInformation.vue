<template>
  <div class="referral-earnings-information">
    <div class="referral-earnings-information__content">
      <div class="referral-earnings-information__item">
        <div class="referral-earnings-information__item-title">Доход от реферралов 1 линии</div>
        <div class="referral-earnings-information__item-income blue">$ 12,987</div>
      </div>
      <div class="referral-earnings-information__item">
        <div class="referral-earnings-information__item-title">Доход от реферралов 2 линии</div>
        <div class="referral-earnings-information__item-income green">$ 12,987</div>
      </div>
      <div class="referral-earnings-information__item">
        <div class="referral-earnings-information__item-title">Доход от реферралов 3 линии</div>
        <div class="referral-earnings-information__item-income orange">$ 12,987</div>
      </div>
      <div class="referral-earnings-information__item">
        <div class="referral-earnings-information__item-title fw-700">Общий реферральный доход</div>
        <div class="referral-earnings-information__item-income turquoise">$ 120,987</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReferralEarningsInformation"
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/Views/partners/_referralEarningsInformation.scss";
</style>