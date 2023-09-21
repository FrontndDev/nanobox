<template>
  <div class="useful-materials">
    <div class="useful-materials__title useful-materials__title_mb-42">
      <h2>Полезные материалы</h2>

      <div class="useful-materials__title-right">
        <Button name="Больше материалов" @click="$router.push('/blog')"/>
        <SliderButtons @prev="$refs.carousel.prev()" @next="$refs.carousel.next()"/>
      </div>
    </div>

    <Preloader v-if="!listArticles.length"/>
    <Carousel ref="carousel" :items-to-show="getCountSlides" v-if="listArticles.length">
      <Slide v-for="article in listArticles" :key="article.id">
        <Article
            :item="article"
            @click="$router.push(`/article/${article.id}`)"
        />
      </Slide>
    </Carousel>
  </div>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';
import SliderButtons from "@/components/Buttons/SliderButtons.vue";
import Button from "@/components/Buttons/Button.vue";
import Article from "@/components/Article.vue";
import {mapState} from "vuex";
import Preloader from "@/components/Utils/Preloader.vue";

export default {
  name: "UsefulMaterials",
  components: {
    Preloader,
    Article,
    Button,
    SliderButtons,
    Carousel,
    Slide,
  },
  props: {
    pageWidth: {
      type: Number,
      default: 0,
    }
  },
  computed: {
    ...mapState('articles', ['listArticles']),

    getCountSlides() {
      if (this.pageWidth < 598) {
        return 1
      } else if (this.pageWidth < 900) {
        return 2
      } else if (this.pageWidth < 1200) {
        return 3
      }

      return 4
    }
  },
  mounted() {
    this.$store.dispatch('articles/getListArticles', 1)
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/Views/home/_usefulMaterials.scss";
</style>