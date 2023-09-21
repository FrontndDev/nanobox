<template>
  <div class="input-tel">
    <div class="input-tel__select" :tabindex="1" @blur="dropdownOpen = false">
      <div class="input-tel__select-selected" @click="dropdownOpen = !dropdownOpen">
        <span>{{ selectedCode }}</span>
        <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="input-tel__select-arrow"
            :class="{ 'active': dropdownOpen }"
        >
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.235034 0.204742C0.536173 -0.0796667 1.01085 -0.0661045 1.29526 0.235034L5 4.1577L8.70474 0.235034C8.98915 -0.0661045 9.46383 -0.0796667 9.76497 0.204742C10.0661 0.489151 10.0797 0.963831 9.79526 1.26497L5.54526 5.76497C5.40358 5.91499 5.20635 6 5 6C4.79366 6 4.59642 5.91499 4.45474 5.76497L0.204742 1.26497C-0.0796667 0.963831 -0.0661045 0.489151 0.235034 0.204742Z" fill="#4B535A"/>
        </svg>
      </div>
      <div class="input-tel__select-dropdown" v-if="dropdownOpen">
        <div
            class="input-tel__select-dropdown-item"
            :class="{ 'active': selectedCode === key }"
            v-for="(_, key) in codes"
            :key="key"
            @click="selectCode(key)"
        >{{ key }}</div>
      </div>
    </div>

    <Input
        title="Телефон"
        width="100%"
        :padding="`10px 12px 10px ${codes[selectedCode].length * 6.5}px`"
        :placeholder="getPlaceholder"
        :class="{ 'active': dropdownOpen }"
        v-mask="codes[selectedCode]"
        @custom-input="setPhoneNumber"
    />
  </div>
</template>

<script>
import Input from "@/components/Utils/Input.vue";
import { mask } from 'vue-the-mask';

export default {
  name: "InputTel",
  components: {Input},
  data() {
    return {
      dropdownOpen: false,
      selectedCode: '+33',
      codes: {
        '+33': '### ### ###',
        '+375': '## ### ## ##',
      },
    }
  },
  methods: {
    selectCode(key) {
      this.selectedCode = key
      this.dropdownOpen = false
      this.$emit('set-code', this.selectedCode.replace('+', ''))
    },
    setPhoneNumber(number) {
      this.$emit('custom-input', number)
    },
  },
  computed: {
    getPlaceholder() {
      return this.codes[this.selectedCode]
          .split('')
          .map(code => code.replace('#', '0'))
          .join('')
    }
  },
  directives: {
    mask,
  },
  mounted() {
    this.$emit('set-code', this.selectedCode.replace('+', ''))
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/utils/_inputTel.scss";
</style>