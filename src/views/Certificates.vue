<template>
  <main>
    <div class="certificates">
      <div class="container">
        <h1>Документы и сертификаты</h1>

        <p class="page-subtitle page-subtitle_mt-24">На этой странице вы можете изучить документы и сертификаты</p>

        <Preloader style="margin-top: 80px;" v-if="!certificates.length"/>
        <div class="certificates__content certificates__content_mt-80" v-if="certificates.length">
          <Certificate
              v-for="certificate in certificates"
              :key="certificate.id"
              :certificate="certificate"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Certificate from "@/components/Views/Certificates/Certificate.vue";
import {mapState} from "vuex";
import Preloader from "@/components/Utils/Preloader.vue";

export default {
  name: "Certificates",
  components: {Preloader, Certificate},
  computed: {
    ...mapState('certificates', ['certificates'])
  },
  mounted() {
    this.$store.dispatch('certificates/getCertificates')
  }
}
</script>

<style scoped lang="scss">
main {
  margin: 60px 0 80px;
}

@import "@/assets/scss/_certificates.scss";
</style>