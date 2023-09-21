<template>
  <main>
    <Product :detailProduct="detailProduct.product || detailProduct"/>
    <div class="container">
      <BuyMorePayLess :moreProducts="detailProduct.products || detailProduct" />
    </div>
  </main>
</template>

<script>
// import "@/assets/scss/commodity.scss";
import Product from "@/components/Views/Commodity/Product.vue";
import BuyMorePayLess from "@/components/Views/Commodity/BuyMorePayLess.vue";
import {mapState} from "vuex";

export default {
  name: "Commodity",
  components: {BuyMorePayLess, Product},
  computed: {
    ...mapState('products', ['detailProduct']),
  },
  mounted() {
    switch (this.$route.meta.type) {
      case 'nanobox':
        this.$store.dispatch('products/getDetailsNanobox', this.$route.params.id)
        break
      case 'product':
        this.$store.dispatch('products/getDetailsProduct', { id: this.$route.params.id })
        break
    }
  },
}
</script>

<style scoped>

</style>