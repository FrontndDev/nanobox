<template>
  <aside class="article-sidebar">
    <div class="article-sidebar__title article-sidebar__title_mb-16">Table of contents</div>

    <div class="article-sidebar__content">
<!--      <p class="article-sidebar__text">{{ headers }}</p>-->
<!--      <p class="article-sidebar__text active article-sidebar__text_my">-->
<!--        USA er det nest verste landet når det gjelder betalte feriedager, det verste er Mikronesia.-->
<!--      </p>-->
<!--      <p class="article-sidebar__text article-sidebar__text_mb-25">Balanse mellom arbeidsliv og fritid hele året</p>-->
<!--      <p class="article-sidebar__text article-sidebar__text_mb-25">San Marino har flest offentlige helligdager i <br> Europa.</p>-->
<!--      <p class="article-sidebar__text article-sidebar__text_mb-25">Metode og kilder</p>-->
<!--      <p class="article-sidebar__text">Slik kommer du i gang  med cloud <br> mining lorem isum</p>-->
      <p
          class="article-sidebar__text"
          :class="{ 'active': activeTitle === title }"
          v-for="(title, idx) in headers"
          :key="idx"
          @click="scrollToTitle(`h2-${idx}`, title)"
      >{{ title }}</p>
    </div>

    <div class="article-sidebar__line"/>

    <div class="article-sidebar__title article-sidebar__title_mb-16 article-sidebar__title_pl-12">Понравилась статья? Поделись с <br> друзьями!</div>

    <div class="article-sidebar__networks article-sidebar__networks_mb-40">
      <Networks/>
    </div>

    <SpecialistServices
        class="specialist-services"
        button-bg="green"
        button-width="196px"
        menu-width="240px"
    />
  </aside>
</template>

<script>
import SpecialistServices from "@/components/SpecialistServices.vue";
import Networks from "@/components/Networks.vue";

export default {
  name: "ArticleSidebar",
  components: {Networks, SpecialistServices},
  props: ['headers'],
  data() {
    return {
      activeTitle: ''
    }
  },
  methods: {
    scrollToTitle(ref, title) {
      this.activeTitle = title
      this.$emit('scroll-to-title', ref)
    }
  },
  watch: {
    'headers.length'() {
      this.activeTitle = this.headers[0]
    }
  },
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/Views/article/_articleSidebar.scss";
</style>