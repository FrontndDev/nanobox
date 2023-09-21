<template>
  <DoctorHeader/>
  <RouterView/>
  <Footer/>
</template>

<script>
import Footer from "@/components/Footer.vue";
import DoctorHeader from "@/components/Views/DoctorChoice/DoctorHeader.vue";

export default {
  name: "DoctorChoiceLayout",
  components: {DoctorHeader, Footer}
}
</script>

<style scoped>

</style>