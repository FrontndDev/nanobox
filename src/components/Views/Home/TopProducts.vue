<template>
  <div class="top-products">
    <div class="top-products__title top-products__title_mb-42">
      <h2>Топ наших продуктов</h2>

      <div class="top-products__title-right">
        <Button name="Вся продукция" @click="$router.push('/catalog')"/>
        <SliderButtons @prev="$refs.carousel.prev()" @next="$refs.carousel.next()"/>
      </div>
    </div>

    <Preloader style="margin-bottom: 20px;" v-if="!listTopProducts.length"/>
    <Carousel ref="carousel" :items-to-show="getCountSlides" v-show="listTopProducts.length">
      <Slide v-for="item in listTopProducts" :key="item.id">
        <Product
            :id="item.id"
            :name="item.name"
            :description="item.short_description"
            :price="item.price"
            :discountPrice="item.discount_price"
            :images="item.images"
        />
      </Slide>
    </Carousel>
  </div>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';
import Button from "@/components/Buttons/Button.vue";
import SliderButtons from "@/components/Buttons/SliderButtons.vue";
import Product from "@/components/Product.vue";
import {mapMutations, mapState} from "vuex";
import Preloader from "@/components/Utils/Preloader.vue";

export default {
  name: "TopProducts",
  components: {
    Preloader,
    Product,
    SliderButtons,
    Button,
    Carousel,
    Slide,
  },
  props: {
    pageWidth: {
      type: Number,
      default: 0,
    }
  },
  methods: {
    ...mapMutations('products', ['SET_LIST_TOP_PRODUCTS']),
  },
  computed: {
    ...mapState('products', ['listTopProducts']),

    getCountSlides() {
      if (this.pageWidth < 598) {
        return 1
      } else if (this.pageWidth < 900) {
        return 2
      } else if (this.pageWidth < 1200) {
        return 3
      }

      return this.listTopProducts.length < 4 ? this.listTopProducts.length : 4
    }
  },
  mounted() {
    this.$store.dispatch('products/getListTopProducts')
  },
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/Views/home/_topProducts.scss";
</style>