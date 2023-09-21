<template>
  <form class="appointment-form">
    <div class="appointment-form__blocks appointment-form__blocks_mt-28">
      <ChoiceOfSpecialist @select-doctor="selectDoctor"/>
      <div class="appointment-form__block">
        <Input
            type="email"
            placeholder="Введите свой email"
            width="100%"
            title="Ваш Email"
            error-message="Некорректный эмайл"
            :error="emailValid"
            @custom-input="setEmail"
        />
      </div>
      <div class="appointment-form__block">
        <Select :dropdown="daysOfTheWeek" placeholder="Не выбрано" title="Выберите желаемый день недели" max-width="100%" @custom-select="selectDay"/>
      </div>
      <div class="appointment-form__block">
        <Select :dropdown="time" placeholder="Не выбрано" title="Желаемое время консультации" max-width="100%" @custom-select="selectTime"/>
      </div>
    </div>

    <div class="appointment-form__buttons appointment-form__buttons_mt-30">
      <Button
          class="appointment-form__button"
          name="Записаться на прием"
          width="100%"
          @click="sendForm"
      />
      <Button
          class="appointment-form__button"
          name="Выбрать другого специалиста"
          width="100%"
          bg="white"
          @click="$router.push('/doctor')"
      />
    </div>
  </form>
</template>

<script>
import Input from "@/components/Utils/Input.vue";
import Select from "@/components/Utils/Select.vue";
import Button from "@/components/Buttons/Button.vue";
import ChoiceOfSpecialist from "@/components/Modals/MakeAnAppointment/ChoiceOfSpecialist.vue";
import {mapState} from "vuex";

export default {
  name: "DoctorAppointmentForm",
  components: {ChoiceOfSpecialist, Button, Select, Input},
  data() {
    return {
      daysOfTheWeek: [
        {
          id: 0,
          value: 'Понедельник'
        },
        {
          id: 1,
          value: 'Вторник'
        },
        {
          id: 2,
          value: 'Среда'
        },
        {
          id: 3,
          value: 'Четверг'
        },
        {
          id: 4,
          value: 'Пятница'
        },
        {
          id: 5,
          value: 'Суббота'
        },
        {
          id: 6,
          value: 'Воскресенье'
        },
      ],
      time: [
        {
          id: 0,
          value: 'с 9 до 10'
        },
        {
          id: 1,
          value: 'с 11 до 12'
        },
        {
          id: 2,
          value: 'с 13 до 14'
        },
        {
          id: 3,
          value: 'с 15 до 16'
        },
        {
          id: 4,
          value: 'с 17 до 18'
        },
        {
          id: 5,
          value: 'с 18 до 19'
        },
        {
          id: 6,
          value: 'с 20 до 21'
        },
      ],
      form: {
        email: '',
        day: '',
        time: '',
        doctor_id: 0
      },
      emailValid: true,
    }
  },
  methods: {
    setEmail(email) {
      const regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      this.emailValid = regExp.test(String(email).toLowerCase())

      this.form.email = email
    },
    selectDay(day) {
      this.form.day = day.value
    },
    selectTime(time) {
      this.form.time = time.value
    },
    selectDoctor(doctor) {
      this.form.doctor_id = doctor.id
    },
    sendForm() {
      const formArray = Object.values(this.form)
      const checkValid = (arg) => {
        return !formArray.includes(arg)
      }

      console.log(checkValid(''), checkValid(0), this.emailValid)

      if (checkValid('') && checkValid(0) && this.emailValid) {
        this.$store.dispatch('doctors/toMakeAppointmentWithADoctor', this.form)
            .then(() => this.$emit('close-modal'))
      }
    }
  },
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/modals/_doctorAppointmentForm.scss";
</style>