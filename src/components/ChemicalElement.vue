<template>
  <div class="chemical-element">
    <svg width="73" height="79" viewBox="0 0 73 79" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.64778 0.904234L62.7186 0.904234C67.5481 0.904234 71.4632 4.81933 71.4632 9.64885V59.5534H20.2599L8.45365 77.4141C4.18906 76.8318 0.903151 73.1748 0.903151 68.7504L0.903151 9.64885C0.903151 4.81933 4.81825 0.904234 9.64778 0.904234ZM9.48557 77.4935C9.53952 77.4945 9.59359 77.495 9.64777 77.495H62.7186C67.5481 77.495 71.4632 73.5799 71.4632 68.7504V60.458H20.7464L9.48557 77.4935ZM-0.00146484 9.64885C-0.00146484 4.31973 4.31865 -0.00038147 9.64778 -0.00038147L62.7186 -0.00038147C68.0477 -0.00038147 72.3678 4.31973 72.3678 9.64885V68.7504C72.3678 74.0795 68.0477 78.3996 62.7186 78.3996H9.64777C4.31865 78.3996 -0.00146484 74.0795 -0.00146484 68.7504L-0.00146484 9.64885Z" :fill="color"/>
    </svg>
    <div class="chemical-element__info" :style="`color: ${color};`">
      <div class="chemical-element__title" v-html="title"/>
      <div class="chemical-element__name" v-html="name"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChemicalElement",
  props: {
    title: {
      type: String,
      default: 'Селен',
    },
    name: {
      type: String,
      default: 'Se',
    },
    color: {
      type: String,
      default: '#074B9B',
    },
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/_chemicalElement.scss";
</style>