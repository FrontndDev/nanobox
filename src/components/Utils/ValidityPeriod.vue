<template>
  <div class="validity-period">
    <div class="validity-period__title validity-period__title_mb-8" v-if="title">{{ title }}</div>

    <div class="validity-period__body">
      <input type="number" placeholder="00" ref="month" @input="setMonth($event.target.value)">
      <span>/</span>
      <input type="number" placeholder="00" ref="year" :value="year" @input="setYear($event.target.value)">
    </div>
  </div>
</template>

<script>
export default {
  name: "ValidityPeriod",
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      month: '',
      year: '',
    }
  },
  methods: {
    setMonth(value) {
      if (value.length === 2) this.$refs.year.focus()

      if (value.length <= 2) {
        this.month = value
      } else {
        this.$refs.month.value = value.slice(0, 2)
      }
    },
    setYear(value) {
      if (!value.length) this.$refs.month.focus()

      if (value.length <= 2) {
        this.year = value
      } else {
        this.$refs.year.value = value.slice(0, 2)
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/utils/_validityPeriod.scss";
</style>