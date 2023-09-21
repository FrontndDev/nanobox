<template>
  <div class="textarea">
    <div class="textarea__title textarea__title_mb-8" v-if="title">{{ title }}</div>
    <textarea
        :placeholder="placeholder"
        :style="`resize: ${resize}; height: ${height};`"
        v-model="textareaValue"
    />
  </div>
</template>

<script>
export default {
  name: "Textarea",
  emits: ['custom-input'],
  props: {
    title: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    resize: {
      type: String,
      default: 'none',
    },
    height: {
      type: String,
      default: '',
    },
    defaultValue: {
      type: String,
      default: '',
    }
  },
  data() {
    return {
      textareaValue: '',
    }
  },
  watch: {
    textareaValue() {
      this.$emit('custom-input', this.textareaValue)
    },
    defaultValue() {
      this.textareaValue = this.defaultValue
    }
  },
  mounted() {
    this.textareaValue = this.defaultValue
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/utils/_textarea.scss";
</style>