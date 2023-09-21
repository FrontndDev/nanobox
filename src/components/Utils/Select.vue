<template>
  <div class="select" :class="{ 'active': open }" :style="`max-width: ${maxWidth};`">
    <div class="select__title select__title_mb-8" :style="`color: ${titleColor};`" v-if="title">
      {{ title }}
    </div>

    <div class="select__body" :tabindex="tabIndex" @blur="closeDropdown">
      <div class="select__up" @click="toggleSelect">
        <div class="select__value" :title="value.value" :class="{ 'placeholder': !value.value }">
          {{ value.value ? value.value : placeholder }}
        </div>
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" class="select__arrow">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.235034 0.204742C0.536173 -0.0796667 1.01085 -0.0661045 1.29526 0.235034L5 4.1577L8.70474 0.235034C8.98915 -0.0661045 9.46383 -0.0796667 9.76497 0.204742C10.0661 0.489151 10.0797 0.963831 9.79526 1.26497L5.54526 5.76497C5.40358 5.91499 5.20635 6 5 6C4.79366 6 4.59642 5.91499 4.45474 5.76497L0.204742 1.26497C-0.0796667 0.963831 -0.0661045 0.489151 0.235034 0.204742Z" fill="#4B535A"/>
        </svg>
      </div>
      <div class="select__dropdown" v-if="open && !disabled">
        <div
            class="select__dropdown-item"
            :class="{ 'active': item.id === value.id }"
            v-for="(item, idx) in dropdown"
            :key="idx"
            @click="setValue(item)"
        >{{ item.value }}</div>
        <Button
            class="select__dropdown-button"
            width="100%"
            bg="white"
            :name="buttonText"
            @click="$emit('select-button')"
            v-if="buttonText"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Buttons/Button.vue";

export default {
  name: "Select",
  components: {Button},
  emits: ['custom-select', 'select-button', 'select-opened'],
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    defaultValue: {
      type: Object,
      default: {
        id: -1,
        value: ''
      }
    },
    tabIndex: {
      type: Number,
      default: 1
    },
    dropdown: {
      type: Array,
      default: []
    },
    title: {
      type: String,
      default: ''
    },
    titleColor: {
      type: String,
      default: ''
    },
    buttonText: {
      type: String,
      default: '',
    },
    maxWidth: {
      type: String,
      default: 'fit-content',
    },
    disabled: {
      type: Boolean,
      default: false
    },
    updateDefaultValue: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      open: false,
      value: {
        id: 0,
        value: ''
      },
    }
  },
  methods: {
    setValue(item) {
      this.value = item
      this.open = false

      this.$emit('custom-select', this.value)
    },
    closeDropdown() {
      setTimeout(() => this.open = false, 250)
    },
    toggleSelect() {
      if (!this.open) this.$emit('select-opened')
      this.open = !this.open
    }
  },
  watch: {
    'defaultValue.id'() {
      if (this.updateDefaultValue) this.value = this.defaultValue
    }
  },
  mounted() {
    this.value = this.defaultValue
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/utils/_select.scss";
</style>