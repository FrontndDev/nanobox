<template>
  <button
      class="button"
      :type="type"
      :class="bg"
      :style="`max-width: ${width}; padding: ${padding};`"
      @click.prevent="$emit('click')"
  >
    <img
        alt="icon"
        :src="require(`@/assets/${icon}`)"
        :style="`width: ${iconWidth};`"
        v-if="icon"
    >
    {{ name }}
  </button>
</template>

<script>
export default {
  name: "Button",
  emits: ['click'],
  props: {
    type: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: 'Кнопка'
    },
    bg: {
      type: String,
      default: 'green'
      //green, orange, white
    },
    width: {
      type: String,
      default: 'fit-content'
    },
    icon: {
      type: String,
      default: ''
    },
    iconWidth: {
      type: String,
      default: ''
    },
    padding: {
      type: String,
      default: '11px 16px'
    },
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/buttons/_button.scss";
</style>