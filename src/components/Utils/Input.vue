<template>
  <div
      class="input"
      :class="[{ 'with-icon': icon }, type]"
      :style="`max-width: ${width};`"
  >
    <div
        class="input__title"
        :style="`margin-bottom: ${titleIndent}; color: ${titleColor}; font-weight: ${titleWeight};`"
        v-if="title"
    >{{ title }}</div>

    <div class="input__body">
      <input
          ref="input"
          :type="type2"
          :placeholder="placeholder"
          :disabled="disabled"
          :readonly="readonly"
          :class="[{ 'pr-12': !showArrows }, { 'error': !error }, type2]"
          :style="`text-align: ${textAlign}; padding: ${padding};`"
          v-model="inputValue"
      >
      <img :src="require(`@/assets/${icon}`)" v-if="icon">

      <div class="input__icons">
        <div class="input__icon" @click="copy" v-if="canCopy">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 18" fill="none">
            <path d="M5.5 13.9998C5.04167 13.9998 4.64944 13.8368 4.32333 13.5107C3.99667 13.184 3.83333 12.7915 3.83333 12.3332V2.33317C3.83333 1.87484 3.99667 1.48234 4.32333 1.15567C4.64944 0.829559 5.04167 0.666504 5.5 0.666504H13C13.4583 0.666504 13.8508 0.829559 14.1775 1.15567C14.5036 1.48234 14.6667 1.87484 14.6667 2.33317V12.3332C14.6667 12.7915 14.5036 13.184 14.1775 13.5107C13.8508 13.8368 13.4583 13.9998 13 13.9998H5.5ZM5.5 12.3332H13V2.33317H5.5V12.3332ZM0.5 11.4998H2.16667V9.83317H0.5V11.4998ZM0.5 8.58317H2.16667V6.9165H0.5V8.58317ZM6.33333 17.3332H8V15.6665H6.33333V17.3332ZM0.5 14.4165H2.16667V12.7498H0.5V14.4165ZM2.16667 17.3332V15.6665H0.5C0.5 16.1248 0.663055 16.5173 0.989167 16.844C1.31583 17.1701 1.70833 17.3332 2.16667 17.3332ZM3.41667 17.3332H5.08333V15.6665H3.41667V17.3332ZM9.25 17.3332C9.70833 17.3332 10.1008 17.1701 10.4275 16.844C10.7536 16.5173 10.9167 16.1248 10.9167 15.6665H9.25V17.3332ZM0.5 5.6665H2.16667V3.99984C1.70833 3.99984 1.31583 4.16317 0.989167 4.48984C0.663055 4.81595 0.5 5.20817 0.5 5.6665Z" fill="#FF6100"/>
          </svg>
        </div>
        <div class="input__icon" v-if="canRefresh">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2.40078 8.00005C2.40078 4.90725 4.90799 2.40005 8.00078 2.40005C9.90283 2.40005 11.5845 3.34826 12.5972 4.80005H10.4008C9.95897 4.80005 9.60079 5.15822 9.60079 5.60005C9.60079 6.04188 9.95897 6.40005 10.4008 6.40005H14.4008C14.8426 6.40005 15.2008 6.04188 15.2008 5.60005V1.60005C15.2008 1.15822 14.8426 0.800049 14.4008 0.800049C13.959 0.800049 13.6008 1.15822 13.6008 1.60005V3.47441C12.2814 1.84385 10.2635 0.800049 8.00078 0.800049C4.02433 0.800049 0.800781 4.0236 0.800781 8.00005C0.800781 11.9765 4.02433 15.2 8.00078 15.2C11.673 15.2 14.7021 12.4515 15.1451 8.89904C15.1998 8.46061 14.8887 8.06087 14.4503 8.0062C14.0118 7.95153 13.6121 8.26262 13.5574 8.70106C13.213 11.4627 10.8559 13.6 8.00078 13.6C4.90799 13.6 2.40078 11.0928 2.40078 8.00005Z" fill="#FF6100"/>
          </svg>
        </div>
        <div class="input__icon" @click="setInputType" v-if="showPassword">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M1.5 1.5L16.5 16.5M7.75 7.8975C7.46922 8.21542 7.32022 8.62844 7.33335 9.0524C7.34649 9.47636 7.52078 9.87936 7.82071 10.1793C8.12064 10.4792 8.52364 10.6535 8.9476 10.6666C9.37156 10.6798 9.78458 10.5308 10.1025 10.25" stroke="#4B535A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.135 5.30083C3.73333 6.28333 2.56583 7.68333 1.5 9C3.07417 11.4925 5.90167 14 9 14C10.2917 14 11.5358 13.5642 12.6625 12.875M9 4C12.34 4 14.5842 6.63167 16.5 9C16.2254 9.43398 15.9254 9.85137 15.6017 10.25" stroke="#4B535A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>

      <div class="input__arrows" v-if="type2 === 'number' && !disabled && showArrows">
        <svg
            width="8"
            height="5"
            viewBox="0 0 8 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="input__arrow-plus"
            @click="++$refs.input.value"
        >
          <path d="M4.3763 0.170748C4.28135 0.0622402 4.14419 0 4.00001 0C3.85583 0 3.71866 0.0622402 3.62372 0.170748L0.12372 4.17075C-0.0054713 4.31839 -0.0363767 4.52795 0.0446916 4.70661C0.12576 4.88526 0.30382 5 0.500008 5H7.50001C7.6962 5 7.87426 4.88526 7.95532 4.70661C8.03639 4.52795 8.00549 4.31839 7.8763 4.17075L4.3763 0.170748Z" fill="#4B535A"/>
        </svg>
        <svg
            width="8"
            height="5"
            viewBox="0 0 8 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="input__arrow-minus"
            @click="--$refs.input.value"
        >
          <path d="M4.3763 0.170748C4.28135 0.0622402 4.14419 0 4.00001 0C3.85583 0 3.71866 0.0622402 3.62372 0.170748L0.12372 4.17075C-0.0054713 4.31839 -0.0363767 4.52795 0.0446916 4.70661C0.12576 4.88526 0.30382 5 0.500008 5H7.50001C7.6962 5 7.87426 4.88526 7.95532 4.70661C8.03639 4.52795 8.00549 4.31839 7.8763 4.17075L4.3763 0.170748Z" fill="#4B535A"/>
        </svg>
      </div>
    </div>

    <div class="input__error input__error_mt-8" v-if="!error">{{ errorMessage }}</div>
  </div>
</template>

<script>
export default {
  name: "Input",
  emits: ['custom-input'],
  props: {
    type: {
      type: String,
      default: 'text',
    },
    type3: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '',
    },
    defaultValue: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: '382px',
    },
    padding: {
      type: String,
      default: '10px 12px'
    },
    icon: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    titleColor: {
      type: String,
      default: ''
    },
    titleIndent: {
      type: String,
      default: '8px'
    },
    showArrows: {
      type: Boolean,
      default: true
    },
    textAlign: {
      type: String,
      default: 'start',
    },
    mask: {
      type: String,
      default: '',
    },
    maxLength: {
      type: Number,
      default: null,
    },
    canCopy: {
      type: Boolean,
      default: false,
    },
    canRefresh: {
      type: Boolean,
      default: false,
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
    titleWeight: {
      type: String,
      default: '600'
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: true
    },
    errorMessage: {
      type: String,
      default: ''
    },
    id: {
      type: Number,
      default: -1,
    }
  },
  data() {
    return {
      type2: '',
      inputValue: '',
    }
  },
  methods: {
    copy() {
      navigator.clipboard.writeText(this.inputValue)
    },
    setInputType() {
      switch (this.type2) {
        case 'password':
          this.type2 = 'text';
          break;
        case 'text':
          this.type2 = 'password';
          break;
      }
    }
  },
  watch: {
    inputValue() {
      this.id === -1 ? this.$emit('custom-input', this.inputValue) : this.$emit('custom-input', this.inputValue, this.id)
    },
    defaultValue() {
      this.inputValue = this.defaultValue
    }
  },
  mounted() {
    this.type2 = this.type
    this.inputValue = this.defaultValue
  },
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/utils/_input.scss";
</style>