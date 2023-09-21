<template>
  <div class="products">
    <h2>Покупай больше - плати меньше </h2>

    <div class="products__body products__body_mt-56">
      <Product
          v-for="item in moreProducts"
          :key="item.id"
          :id="item.id"
          :name="item.name"
          :description="item.short_description"
          :price="item.price"
          :discountPrice="item.discount_price"
          :images="item.images"
          :show-buttons="false"
      />
    </div>
  </div>
</template>

<script>
import Product from "@/components/Product.vue";

export default {
  props: {
    moreProducts: {
      type: Object
    }
  },
  name: "BuyMorePayLess",
  components: {Product}
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/Views/commodity/_buyMorePayLess.scss";
</style>