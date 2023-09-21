<template>
  <div class="affiliate-program">
    <AffiliateProgramLogo/>

    <div class="affiliate-program__content">
      <h2>Партнерская программа</h2>
      <div class="affiliate-program__description affiliate-program__description_my">
        Приводя новых новых пользователей в нашу систему, Вы можете хорошо подзаработать!
      </div>
      <ReferralLink/>
    </div>
  </div>
</template>

<script>
import AffiliateProgramLogo from "@/components/Views/Partners/AffiliateProgram/AffiliateProgramLogo.vue";
import ReferralLink from "@/components/Views/Partners/AffiliateProgram/ReferralLink.vue";

export default {
  name: "AffiliateProgram",
  components: {ReferralLink, AffiliateProgramLogo},
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/Views/partners/_affiliateProgram.scss";
</style>