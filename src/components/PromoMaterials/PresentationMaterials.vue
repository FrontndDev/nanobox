<template>
  <div class="presentation-materials">
    <div class="presentation-materials__left">
      <h2 class="presentation-materials__title">Презентационные материалы</h2>

      <p class="presentation-materials__text presentation-materials__text_mt-8">
        Lorem ipsum dolor sit amet consectetur.
        Erat ut interdum maecenas morbi id.
        Molestie amet a rhoncus eget sed molestie volutpat penatibus auctor.
      </p>
    </div>

    <Button class="presentation-materials__button" name="Скачать материалы"/>
  </div>
</template>

<script>
import Button from "@/components/Buttons/Button.vue";

export default {
  name: "PresentationMaterials",
  components: {Button}
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/Views/promo-materials/_presentationMaterials.scss";
</style>