<template>
  <header class="doctor-header">
    <div class="container">
      <img src="@/assets/images/logo.png" class="doctor-header__logo" @click="$router.push('/')">

      <div class="doctor-header__body doctor-header__body_mt-80">
        <ArrowButton name="На главную" @click="$router.push('/')"/>

        <h1 class="doctor-header__title doctor-header__title_mt-24">Воспользуйтесь услугами наших специалистов</h1>

        <ul class="doctor-header__list doctor-header__list_mt-40">
          <li>Он-лайн консультация с врачом-терапевтом общей практики.</li>
          <li>Диагностика организма на основании Ваших анализов.</li>
          <li>Индивидуальный подбор дозировок наноминералов при различных заболеваниях.</li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import ArrowButton from "@/components/Buttons/ArrowButton.vue";

export default {
  name: "DoctorHeader",
  components: {ArrowButton}
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/Views/doctor-choice/_header.scss";
</style>