<template>
  <main>
    <div class="cabinet">
      <IncomeInformation/>
      <IncomeChart/>
      <LastOperations/>
    </div>
  </main>
</template>

<script>
import IncomeChart from "@/components/Views/Cabinet/IncomeChart.vue";
import IncomeInformation from "@/components/Views/Cabinet/IncomeInformation.vue";
import LastOperations from "@/components/Views/Cabinet/LastOperations.vue";
import {mapActions, mapState} from "vuex";

export default {
  name: "Cabinet",
  components: {LastOperations, IncomeInformation, IncomeChart},
  methods: {
    ...mapActions('auth', ['getTokenForGoogleAndFacebookAuth'])
  },
  computed: {
    ...mapState('auth', ['token']),

    getToken() {
      return this.$route.fullPath.split('?token=')[1]
    }
  },
  mounted() {
    if (this.getToken) this.getTokenForGoogleAndFacebookAuth(this.getToken)
    if (!this.getToken && !this.token) this.$router.push('/')


    // !this.getToken || !this.token ? this.$router.push('/') : this.getTokenForGoogleAndFacebookAuth(this.getToken)
  }
}
</script>