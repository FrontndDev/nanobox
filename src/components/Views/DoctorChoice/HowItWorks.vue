<template>
  <div class="doctor-how-it-works">
    <h1>Как это работает?</h1>
    <p class="doctor-how-it-works__text doctor-how-it-works__text_mt-24">
      Lorem ipsum dolor sit amet consectetur. Facilisi amet proin est velit sed pellentesque scelerisque nisi.
      Pharetra odio nam ut ligula vitae ullamcorper. Id nibh sit non imperdiet nullam blandit eu posuere gravida.
    </p>

    <div class="doctor-how-it-works__info doctor-how-it-works__info_mt-60">
      <div class="doctor-how-it-works__info-item">
        <div class="doctor-how-it-works__info-item-circle">
          <InfoItemIcon/>
        </div>
        <div class="doctor-how-it-works__info-item-title doctor-how-it-works__info-item-title_mt-20">Выбрать врача</div>
        <p class="doctor-how-it-works__info-item-text doctor-how-it-works__info-item-text_mt-8">
          Это займет от 5 до 10 минут в зависимости от возраста, пола и дополнительных факторов
        </p>
      </div>
      <div class="doctor-how-it-works__info-item">
        <div class="doctor-how-it-works__info-item-circle">
          <InfoItemIcon/>
        </div>
        <div class="doctor-how-it-works__info-item-title doctor-how-it-works__info-item-title_mt-20">Запишитесь на бесплатную консультацию</div>
        <p class="doctor-how-it-works__info-item-text doctor-how-it-works__info-item-text_mt-8">
          Это займет от 5 до 10 минут в зависимости от возраста, пола и дополнительных факторов
        </p>
      </div>
      <div class="doctor-how-it-works__info-item">
        <div class="doctor-how-it-works__info-item-circle">
          <InfoItemIcon/>
        </div>
        <div class="doctor-how-it-works__info-item-title doctor-how-it-works__info-item-title_mt-20">Принимайте наноминералы</div>
        <p class="doctor-how-it-works__info-item-text doctor-how-it-works__info-item-text_mt-8">
          Это займет от 5 до 10 минут в зависимости от возраста, пола и дополнительных факторов
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import InfoItemIcon from "@/components/Views/DoctorChoice/HowItWorks/InfoItemIcon.vue";

export default {
  name: "HowItWorks",
  components: {InfoItemIcon}
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/Views/doctor-choice/_howItWorks.scss";
</style>