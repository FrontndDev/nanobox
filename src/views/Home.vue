<template>
  <main>
    <div class="container">
      <ColloidalNanominerals/>
      <AboutCompany/>
      <TopProducts :page-width="pageWidth"/>
      <HowItWorks/>
      <UsefulMaterials :page-width="pageWidth"/>
    </div>
    <Reviews :page-width="pageWidth"/>
    <BenefitFromCooperation style="margin-top: 80px;"/>
  </main>
  <SetNewPasswordModal v-if="showNewPasswordModal" @close="$router.push('/')"/>
</template>

<script>
// import "@/assets/scss/home.scss";
import ColloidalNanominerals from "@/components/Views/Home/ColloidalNanominerals.vue";
import AboutCompany from "@/components/Views/Home/AboutCompany.vue";
import TopProducts from "@/components/Views/Home/TopProducts.vue";
import HowItWorks from "@/components/Views/Home/HowItWorks.vue";
import UsefulMaterials from "@/components/Views/Home/UsefulMaterials.vue";
import Reviews from "@/components/Views/Home/Reviews.vue";
import BenefitFromCooperation from "@/components/BenefitFromCooperation.vue";
import SetNewPasswordModal from "@/components/Modals/SetNewPasswordModal.vue";
import {passwordRecoveryAccessStatus} from "@/api";
import {mapMutations, mapState} from "vuex";

export default {
  name: "Home",
  components: {
    SetNewPasswordModal,
    BenefitFromCooperation,
    Reviews,
    UsefulMaterials,
    HowItWorks,
    TopProducts,
    AboutCompany,
    ColloidalNanominerals,
  },
  data() {
    return {
      pageWidth: 0,
      showNewPasswordModal: false,
    }
  },
  methods: {
    setWidth() {
      this.pageWidth = window.innerWidth
    },
    setShowNewPasswordModal() {
      const key = this.$route.fullPath.split('user=')[1]
      console.log(key)
      if (key) passwordRecoveryAccessStatus(key)
          .then(response => {
            console.log('response password recovery', response)
            this.showNewPasswordModal = !!response?.success
          })
    }
  },
  created() {
    this.setShowNewPasswordModal()
    this.setWidth()
    window.onresize = () => this.setWidth()
  }
}
</script>

<style scoped>
main {
  margin-top: 21px;
}
</style>