<template>
  <div class="specialist-services">
    <div class="specialist-services__body">
      <div class="specialist-services__content">
        <h3>Воспользуйтесь услугами наших специалистов</h3>

        <ul class="specialist-services__list specialist-services__list_my" :style="`max-width: ${menuWidth};`">
          <li>Он-лайн консультация с врачом-терапевтом общей практики.</li>
          <li>Диагностика организма на основании Ваших анализов.</li>
          <li>Индивидуальный подбор дозировок наноминералов при различных заболеваниях.</li>
        </ul>
        <Button
            name="Заказать бесплатную консультацию"
            :bg="buttonBg"
            :width="buttonWidth"
            @click="showModal = true"
        />
      </div>
    </div>
  </div>
  <MakeAnAppointmentModal v-if="showModal" @close="showModal = false"/>
</template>

<script>
import Button from "@/components/Buttons/Button.vue";
import MakeAnAppointmentModal from "@/components/Modals/MakeAnAppointmentModal.vue";

export default {
  name: "SpecialistServices",
  components: {MakeAnAppointmentModal, Button},
  props: {
    buttonBg: {
      type: String,
      default: 'orange'
      //orange, green, white
    },
    buttonWidth: {
      type: String,
      default: 'fit-content'
    },
    menuWidth: {
      type: String,
      default: ''
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
@import "@/assets/scss/_specialistServices.scss";
</style>