<template>
  <div class="recommended-products">
    <h6>Рекомендуемые товары</h6>

    <Preloader style="margin-top: 16px;" v-if="!listRecommendProducts.length"/>
    <Carousel
        class="recommended-products__carousel recommended-products__carousel_mt-16"
        ref="carousel"
        :items-to-show="getCountSlides"
        v-if="listRecommendProducts.length"
    >
      <Slide v-for="item in listRecommendProducts" :key="item.id">
        <router-link :to="`/catalog/nanobox/${item.id}`" class="recommended-products__item"
        >
          <div class="recommended-products__item-up">
            <div class="recommended-products__item-up-left">
              <div class="recommended-products__item-title">Нанобокс</div>
              <p class="recommended-products__item-description recommended-products__item-description_mt-12">
                {{ item.description }}
              </p>
              <div class="recommended-products__elements recommended-products__elements_mt-87">
                <template v-for="(element, idx) in item.elements">
                  <div class="recommended-products__element">
                    <svg width="52" height="56" viewBox="0 0 73 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path :fill="element.hex" fill-rule="evenodd" clip-rule="evenodd" d="M9.64778 0.904234L62.7186 0.904234C67.5481 0.904234 71.4632 4.81933 71.4632 9.64885V59.5534H20.2599L8.45365 77.4141C4.18906 76.8318 0.903151 73.1748 0.903151 68.7504L0.903151 9.64885C0.903151 4.81933 4.81825 0.904234 9.64778 0.904234ZM9.48557 77.4935C9.53952 77.4945 9.59359 77.495 9.64777 77.495H62.7186C67.5481 77.495 71.4632 73.5799 71.4632 68.7504V60.458H20.7464L9.48557 77.4935ZM-0.00146484 9.64885C-0.00146484 4.31973 4.31865 -0.00038147 9.64778 -0.00038147L62.7186 -0.00038147C68.0477 -0.00038147 72.3678 4.31973 72.3678 9.64885V68.7504C72.3678 74.0795 68.0477 78.3996 62.7186 78.3996H9.64777C4.31865 78.3996 -0.00146484 74.0795 -0.00146484 68.7504L-0.00146484 9.64885Z" fill="#D16F4F"/>
                    </svg>
                    <div class="recommended-products__element-info" :style="'color: ' + element.hex">
                      <div class="recommended-products__element-title">{{ element.title }}</div>
                      <div class="recommended-products__element-name">{{ element.subtitle }}</div>
                    </div>
                  </div>
                  <span v-if="(idx + 1) !== item.elements.length" class="recommended-products__item-plus">+</span>
                </template>
              </div>
            </div>
            <div class="recommended-products__item-up-right" v-if="item?.images && item?.images.length > 0">
              <img :src="item?.images[0]" alt="image">
            </div>
          </div>
          <ProductPrice :detailProduct="item" />
        </router-link>
      </Slide>
    </Carousel>

    <SliderButtons2
        top="calc(50% - 4px)"
        @prev="$refs.carousel.prev()"
        @next="$refs.carousel.next()"
    />
  </div>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';
import Button from "@/components/Buttons/Button.vue";
import SliderButtons2 from "@/components/Buttons/SliderButtons2.vue";
import ProductPrice from "@/components/Views/Product/ProductPrice.vue";
import {mapState} from "vuex";
import Preloader from "@/components/Utils/Preloader.vue";

export default {
  name: "RecommendedProducts",
  components: {
    Preloader,
    ProductPrice,
    SliderButtons2,
    Button,
    Carousel,
    Slide,
  },
  props: {
    pageWidth: {
      type: Number,
      default: 0,
    },
    listRecommendProducts: {
      type: Array,
      default: []
    }
  },
  computed: {
    getCountSlides() {
      if (this.pageWidth < 755) {
        return 1
      }

      return 2
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/Views/catalog/_recommendedProducts.scss";
</style>