<template>
  <main>
    <div class="container">
      <div class="page-title">
        <h1>Каталог</h1>
        <Input
            type="search"
            placeholder="Искать продукт по ключевым словам..."
            icon="svg/search.svg"
            @custom-input="setSearch"
            padding="10px 12px 10px 44px"
        />
      </div>
      <RecommendedProducts
          :page-width="pageWidth"
          :listRecommendProducts="filteredNanoboxes"
      />
      <AllProducts :listAllProducts="filteredProducts" />
    </div>
    <BenefitFromCooperation style="margin-top: 94px;"/>
  </main>
</template>

<script>
import BenefitFromCooperation from "@/components/BenefitFromCooperation.vue";
import Input from "@/components/Utils/Input.vue";
import RecommendedProducts from "@/components/Views/Catalog/RecommendedProducts.vue";
import AllProducts from "@/components/Views/Catalog/AllProducts.vue";
import {mapState} from "vuex";

export default {
  name: "Catalog",
  components: {AllProducts, RecommendedProducts, Input, BenefitFromCooperation},
  data() {
    return {
      pageWidth: 0,
      search: ''
    }
  },
  methods: {
    setWidth() {
      this.pageWidth = window.innerWidth
    },
    setSearch(data) {
      this.search = data
    }
  },
  created() {
    this.setWidth()
    window.onresize = () => this.setWidth()
  },
  computed: {
    ...mapState('products', ['listRecommendProducts']),
    ...mapState('products', ['listAllProducts']),

    filteredNanoboxes() {
      if (this.search === '') {
        return this.listRecommendProducts;
      } else {
        const lowercaseQuery = this.search.toLowerCase();
        return this.listRecommendProducts.filter(item =>
            item.description.toLowerCase().includes(lowercaseQuery)
        );
      }
    },

    filteredProducts() {
      if (this.search === '') {
        return this.listAllProducts;
      } else {
        const lowercaseQuery = this.search.toLowerCase();
        return this.listAllProducts.filter(item =>
            item.description.toLowerCase().includes(lowercaseQuery) || item.name.toLowerCase().includes(lowercaseQuery)
        );
      }
    },
  },
  mounted() {
    this.$store.dispatch('products/getListRecommendProducts')
    this.$store.dispatch('products/getListAllProducts')
  },
}
</script>

<style scoped>
main {
  margin-top: 60px;
}
</style>