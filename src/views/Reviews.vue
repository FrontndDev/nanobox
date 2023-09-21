<template>
  <main>
    <div class="reviews">
      <div class="container">
        <h5>Что о нас думают наши счастливые клиенты</h5>
        <h1 class="reviews__title reviews__title_mt-16">Отзывы</h1>

        <Preloader style="margin-top: 60px;" v-if="!reviews.length"/>
        <div class="reviews__body reviews__body_mt-60" v-if="reviews.length">
          <Review
              v-for="review in reviews"
              :key="review.id"
              :review="review"
          />
        </div>
        <Pagination
            class="reviews__pagination reviews__pagination_mt-60"
            :count="countPages"
            @set-active-page="getOtherReviews"
            v-if="reviews.length"
        />
      </div>
    </div>
  </main>
</template>

<script>
import Review from "@/components/Views/Reviews/Review.vue";
import {mapState} from "vuex";
import Pagination from "@/components/Utils/Pagination.vue";
import Preloader from "@/components/Utils/Preloader.vue";

export default {
  name: "Reviews",
  components: {Preloader, Pagination, Review},
  methods: {
    getOtherReviews(page) {
      this.$store.dispatch('reviews/getReviews', page)
    }
  },
  computed: {
    ...mapState('reviews', ['reviews', 'countPages'])
  },
  mounted() {
    this.$store.dispatch('reviews/getReviews', 1)
  }
}
</script>

<style scoped lang="scss">
main {
  margin: 60px 0 80px;
}

@import "@/assets/scss/_reviews.scss";
</style>