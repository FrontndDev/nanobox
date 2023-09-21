<template>
  <button class="icon-button" :class="bg">
    <slot/>
  </button>
</template>

<script>
export default {
  name: "IconButton",
  props: {
    bg: {
      type: String,
      default: 'green',
      //white, green
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/buttons/_iconButton.scss";
</style>