<template>
  <main>
    <div class="blog">
      <div class="container">
        <div class="blog__body">
          <div class="page-title">
            <h1>Полезные материалы</h1>
            <Input
                placeholder="Искать в блоге..."
                icon="svg/search.svg"
                width="400px"
                padding="10px 12px 10px 44px"
            />
          </div>

          <Preloader style="margin: 60px 0 50px;" v-if="!listArticles.length"/>
          <template v-if="listArticles.length">
            <div class="blog__header blog__header_mt-40">
              <div class="blog__header-left">
                <img alt="img" :src="listArticles[0]?.preview">
              </div>
              <div class="blog__header-right">
                <div class="blog__header-right-header">
                  <div class="blog__date">{{ getDate }}</div>
                  <div class="blog__tag" :style="`color: ${listArticles[0]?.category?.hex}`">#{{ listArticles[0]?.category?.name }}</div>
                </div>
                <h3 class="blog__subtitle blog__subtitle_mt-10" @click="$router.push(`/article/${listArticles[0].id}`)">{{ listArticles[0]?.title }}</h3>
                <p class="blog__description blog__description_mt-30">{{ listArticles[0]?.short_body }}</p>
              </div>
            </div>
            <div class="blog__articles blog__articles_my">
              <Article
                  class="blog__article"
                  v-for="article in [...listArticles].splice(1)"
                  :key="article.id"
                  :item="article"
                  @click="$router.push(`/article/${article.id}`)"
              />
            </div>
            <div class="blog__pagination">
              <Pagination :count="countPages" @set-active-page="setArticlesPage"/>
            </div>
          </template>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Input from "@/components/Utils/Input.vue";
import Article from "@/components/Article.vue";
import Pagination from "@/components/Utils/Pagination.vue";
import {mapActions, mapState} from "vuex";
import Preloader from "@/components/Utils/Preloader.vue";

export default {
  name: "Blog",
  components: {Preloader, Pagination, Article, Input},
  methods: {
    ...mapActions('articles', ['getListArticles']),

    setArticlesPage(page) {
      this.getListArticles(page)
    },
  },
  computed: {
    ...mapState(['months']),
    ...mapState('articles', ['listArticles', 'countPages']),

    getDate() {
      const dateArray = this.listArticles[0]?.publish_date?.split('-')

      return dateArray ? `${dateArray[1]} ${this.months.abbreviated[+dateArray[1] - 1]}. ${dateArray[0]}` : null
    }
  },
  mounted() {
    this.getListArticles(1)
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/Views/blog/_blog.scss";

main {
  margin: 80px 0;
}
</style>