<template>
  <div class="nanominerals">
    <Preloader v-if="!carousel.length"/>
    <Carousel
        ref="carousel"
        :items-to-show="1"
        :autoplay="3000"
        :wrap-around="true"
        :transition="500"
        v-if="carousel.length"
    >
      <Slide v-for="item in carousel" :key="item.id">
        <div class="nanominerals__body">
          <div class="nanominerals__left">
            <div class="nanominerals__title">здоровая клетка - здоровый организм</div>
            <div class="nanominerals__name nanominerals__name_mt-15">{{ item.title }}</div>
            <div class="nanominerals__by">{{ item.slogan }}</div>
            <div class="nanominerals__subtitle nanominerals__subtitle_mt-36">
              {{ item.description }}
            </div>
            <div class="nanominerals__buttons nanominerals__buttons_mt-56" v-if="!!item.has_buttons">
              <Button bg="green" name="Наша продукция" @click="$router.push('/catalog')"/>
              <Button bg="white" name="О компании" @click="$router.push('/about-us')"/>
            </div>
          </div>
          <div class="nanominerals__right">
            <div class="nanominerals__elements left">
              <ChemicalElement title="Цинк" name="Zn" color="#D16F4F"/>
              <ChemicalElement title="Золото" name="Au" color="#DFAE00"/>
              <ChemicalElement/>
            </div>
            <img class="nanominerals__img" :src="item.image">
            <div class="nanominerals__elements right">
              <ChemicalElement title="Серебро" name="Ag" color="#A4D2EC"/>
              <ChemicalElement title="Медь" name="Cu" color="#97CF76"/>
              <ChemicalElement title="Магний" name="Mg" color="#029287"/>
            </div>
          </div>
        </div>
      </Slide>

      <template #addons>
        <Pagination/>
      </template>
    </Carousel>

    <SliderButtons2
        classes="big"
        top="calc(50% - 55px)"
        @prev="$refs.carousel.prev()"
        @next="$refs.carousel.next()"
    />
  </div>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination } from 'vue3-carousel';
import Button from "@/components/Buttons/Button.vue";
import ChemicalElement from "@/components/ChemicalElement.vue";
import Preloader from "@/components/Utils/Preloader.vue";
import {mapState} from "vuex";
import SliderButtons2 from "@/components/Buttons/SliderButtons2.vue";

export default {
  name: "ColloidalNanominerals",
  components: {
    SliderButtons2,
    Preloader,
    ChemicalElement,
    Button,
    Carousel,
    Slide,
    Pagination,
  },
  computed: {
    ...mapState('carousel', ['carousel']),
  },
  mounted() {
    this.$store.dispatch('carousel/getCarousel')
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/Views/home/_colloidalNanominerals.scss";
</style>