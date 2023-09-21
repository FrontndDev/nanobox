<template>
  <div class="our-doctors">
    <h1 class="our-doctors__title">Наши врачи</h1>

    <Preloader style="margin-top: 82px;" v-if="!doctors.length"/>
    <div class="our-doctors__body our-doctors__body_mt-82" v-if="doctors.length">
      <Doctor
          v-for="doctor in doctors"
          :key="doctor.id"
          :doctor="doctor"
      />
    </div>
  </div>
</template>

<script>
import Doctor from "@/components/Views/DoctorChoice/OurDoctors/Doctor.vue";
import {mapState} from "vuex";
import Preloader from "@/components/Utils/Preloader.vue";

export default {
  name: "OurDoctors",
  components: {Preloader, Doctor},
  computed: {
    ...mapState('doctors', ['doctors'])
  },
  mounted() {
    this.$store.dispatch('doctors/getDoctorsList')
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/Views/doctor-choice/_ourDoctors.scss";
</style>