<template>
  <main>
    <div class="container">
      <HowItWorks/>
      <OurDoctors/>
    </div>
  </main>
</template>

<script>
import HowItWorks from "@/components/Views/DoctorChoice/HowItWorks.vue";
import OurDoctors from "@/components/Views/DoctorChoice/OurDoctors.vue";
import MakeAnAppointmentModal from "@/components/Modals/MakeAnAppointmentModal.vue";

export default {
  name: "DoctorChoice",
  components: {OurDoctors, HowItWorks},
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/Views/doctor-choice/_doctorChoice.scss";

main {
  margin: 80px 0;
}
</style>