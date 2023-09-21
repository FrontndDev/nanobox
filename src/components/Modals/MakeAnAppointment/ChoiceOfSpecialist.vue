<template>
  <div class="choice-of-specialist">
    <div class="choice-of-specialist__title">Вы выбрали специалиста</div>
    <div class="choice-of-specialist__specialist" :tabindex="1" @blur="closeDropdown">
      <div @click="open = !open">
        <div class="choice-of-specialist__specialist-left">
          <img alt="avatar" class="choice-of-specialist__specialist-img" :src="selectedDoctor?.image">

          <div class="choice-of-specialist__specialist-info">
            <div class="choice-of-specialist__specialist-name">{{ selectedDoctor?.full_name }}</div>
            <div class="choice-of-specialist__specialist-job-title">{{ selectedDoctor?.specialization }}</div>
          </div>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.235034 0.204742C0.536173 -0.0796667 1.01085 -0.0661045 1.29526 0.235034L5 4.1577L8.70474 0.235034C8.98915 -0.0661045 9.46383 -0.0796667 9.76497 0.204742C10.0661 0.489151 10.0797 0.963831 9.79526 1.26497L5.54526 5.76497C5.40358 5.91499 5.20635 6 5 6C4.79366 6 4.59642 5.91499 4.45474 5.76497L0.204742 1.26497C-0.0796667 0.963831 -0.0661045 0.489151 0.235034 0.204742Z" fill="#4B535A"/>
        </svg>
      </div>
    </div>

    <div class="choice-of-specialist__dropdown" v-if="open">
      <div class="choice-of-specialist__dropdown-item" v-for="doctor in doctors" :key="doctor.id" @click="selectDoctor(doctor)">
        <img alt="avatar" class="choice-of-specialist__specialist-img" :src="doctor.image">
        <div class="choice-of-specialist__specialist-info">
          <div class="choice-of-specialist__specialist-name">{{ doctor.full_name }}</div>
          <div class="choice-of-specialist__specialist-job-title">{{ doctor.specialization }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "ChoiceOfSpecialist",
  inject: {
    doctor: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      open: false,
      selectedDoctor: {},
    }
  },
  methods: {
    closeDropdown() {
      setTimeout(() => this.open = false, 100)
    },
    selectDoctor(doctor) {
      this.selectedDoctor = doctor
      this.open = false
    }
  },
  computed: {
    ...mapState('doctors', ['doctors'])
  },
  watch: {
    'doctors.length'() {
      this.doctor ? this.selectedDoctor = this.doctor : this.selectedDoctor = this.doctors[0]
    },
    'selectedDoctor.id'() {
      this.$emit('select-doctor', this.selectedDoctor)
    }
  },
  mounted() {
    this.$store.dispatch('doctors/getDoctorsList')
    this.doctor ? this.selectedDoctor = this.doctor : this.selectedDoctor = this.doctors[0]
  }
}
</script>

<style scoped lang="scss">
.choice-of-specialist {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  position: relative;

  &__title {
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
  }

  &__specialist {
    & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 12px;
      background: #F5F5F5;
      border-radius: 20px;
      cursor: pointer;
    }

    &-left {
      display: flex;
      column-gap: 12px;
    }

    &-img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      object-fit: cover;
    }

    &-info {
      display: flex;
      flex-direction: column;
      row-gap: 2px;
    }

    &-name {
      font-weight: 700;
      font-size: 14px;
      line-height: 20px;
      color: #262626;
    }

    &-job-title {
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
      color: #FF6100;
    }
  }

  &__dropdown {
    display: flex;
    flex-direction: column;
    row-gap: 4px;
    padding: 4px;
    width: 100%;
    max-height: 168px;
    overflow: auto;
    background: #FFFFFF;
    box-shadow: 0 16px 24px rgba(20, 23, 37, 0.16);
    border-radius: 12px;
    position: absolute;
    top: 90px;
    left: 0;
    right: 0;
    z-index: 3;

    &-item {
      display: flex;
      align-items: center;
      column-gap: 12px;
      padding: 8px 12px;
      border-radius: 8px;
      font-weight: 600;
      line-height: 20px;
      color: #262626;
      transition: .25s;
      cursor: pointer;

      &:hover,
      &.active {
        background: #F5F5F5;
        transition: .25s;
      }
    }
  }
}
</style>