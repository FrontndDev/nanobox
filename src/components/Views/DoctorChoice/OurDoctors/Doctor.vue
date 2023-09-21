<template>
  <div class="doctor">
    <Avatar class="doctor__avatar" :avatar="doctor.image"/>
    <h6 class="doctor__name doctor__name_mt-22">{{ doctor.full_name }}</h6>
    <div class="doctor__info doctor__info_mt-2">
      <div class="doctor__job-title">{{ doctor.specialization }}.</div>
      <div class="doctor__experience">Стаж работы: {{ doctor.experience }}.</div>
    </div>
    <div class="doctor__text doctor__text_mt-23">{{ doctor.description }}</div>
    <Button
        class="doctor__button doctor__button_mt-60"
        name="Записаться на консультацию"
        width="100%"
        @click="showModal = true"
    />
  </div>
  <MakeAnAppointmentModal v-if="showModal" @close="showModal = false"/>
</template>

<script>
import Avatar from "@/components/Avatar.vue";
import Button from "@/components/Buttons/Button.vue";
import MakeAnAppointmentModal from "@/components/Modals/MakeAnAppointmentModal.vue";

export default {
  name: "Doctor",
  components: {MakeAnAppointmentModal, Button, Avatar},
  props: {
    doctor: {
      type: Object,
      default: {}
    }
  },
  provide() {
    return {
      doctor: this.doctor,
    }
  },
  data() {
    return {
      showModal: false,
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/Views/doctor-choice/_doctor.scss";
</style>