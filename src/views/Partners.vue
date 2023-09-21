<template>
  <main>
    <div class="partners">
      <ReferralEarningsInformation/>
      <AffiliateProgram/>
      <MyReferrals/>
    </div>
  </main>
</template>

<script>
import ReferralEarningsInformation from "@/components/Views/Partners/ReferralEarningsInformation.vue";
import AffiliateProgram from "@/components/Views/Partners/AffiliateProgram.vue";
import MyReferrals from "@/components/Views/Partners/MyReferrals.vue";

export default {
  name: "Partners",
  components: {MyReferrals, AffiliateProgram, ReferralEarningsInformation}
}
</script>

<style scoped>

</style>