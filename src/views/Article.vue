<template>
  <main>
    <div class="article-page">
      <div class="container">
        <ArrowButton name="Назад"/>

        <h1 class="article-page__title article-page__title_mt-16">{{ article.title }}</h1>
        <div class="article-page__date article-page__date_mt-24">
          <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.6667 2.16663H2.33333C1.59695 2.16663 1 2.76358 1 3.49996V12.8333C1 13.5697 1.59695 14.1666 2.33333 14.1666H11.6667C12.403 14.1666 13 13.5697 13 12.8333V3.49996C13 2.76358 12.403 2.16663 11.6667 2.16663Z" stroke="#4B535A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.66602 0.833374V3.50004" stroke="#4B535A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.33398 0.833374V3.50004" stroke="#4B535A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1 6.16663H13" stroke="#4B535A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
<!--          16 февраля 2023-->
          {{ articlePublishDate }}
        </div>
        <div class="article-page__body article-page__body_mt-60">
          <div class="article-page__content">
            <div class="article-page__image article-page__image_mt-60">
              <img alt="image" :src="article.preview">
            </div>

            <div class="article-page__info article-page__info_mt-60">
              <div ref="articleContent" v-html="article.body"/>
            </div>
          </div>
          <ArticleSidebar :headers="getHeaders" @scroll-to-title="scrollToTitle"/>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import ArrowButton from "@/components/Buttons/ArrowButton.vue";
import ArticleSidebar from "@/components/Views/Article/ArticleSidebar.vue";
import {mapGetters, mapState} from "vuex";

export default {
  name: "ArticlePage",
  components: {ArticleSidebar, ArrowButton},
  methods: {
    scrollToTitle(ref) {
      const element = document.querySelector(`#${ref}`)
      element.scrollIntoView({block: "center", behavior: "smooth"});
    }
  },
  computed: {
    ...mapState(['months']),
    ...mapGetters('articles', ['article']),

    articlePublishDate() {
      const date = this.article.publish_date

      return date ? `${date[2]} ${this.months.full[+date[1]]} ${date[0]}` : null
    },
    getHeaders() {
      let element = document.createElement('div')
      element.innerHTML = this.article.body

      const headers = element.getElementsByTagName('h2');
      console.log(headers)

      return [...headers].map(title => title.innerText);
    }
  },
  watch: {
    'article.body'() {
      setTimeout(() => [...document.querySelectorAll('h2')].forEach((el, idx) => {
        el.id = `h2-${idx}`
      }))
    }
  },
  mounted() {
    this.$store.dispatch('articles/getArticleById', this.$route.params.id)
  },
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/Views/article/_article.scss";

main {
  margin: 58px 0 80px;
}
</style>