<template>
  <main>
    <div class="faq">
      <div class="container">
        <h5>f.a.q</h5>
        <h1 class="faq__title faq__title_mt-12">Вопрос-ответ</h1>
        <div class="page-subtitle page-subtitle_mt-24">На этой странице вы можете найти самые популярные вопросы и ответы на них</div>

        <div class="faq__body faq__body_mt-80">
          <div class="faq__content">
            <Input
                type="search"
                placeholder="Искать ответ..."
                icon="svg/search.svg"
                padding="10px 12px 10px 44px"
                width="100%"
                @custom-input="setSearch"
            />

            <div class="faq__question-cards faq__question-cards_mt-30">
              <QuestionCard
                  v-for="item in filteredData"
                  :key="item.id"
                  :title="item.title"
                  :description="item.description"
              />
            </div>
          </div>
          <aside class="faq__sidebar">
            <FeedbackForm
                title="Задайте свой вопрос"
                :name-input="{ placeholder: 'Введите свое имя', title: 'Ваше имя' }"
                :email-input="{ placeholder: 'Введите свой email', title: 'Email' }"
                :textarea="{ placeholder: 'Введите свой вопрос', title: 'Ваш вопрос', height: '102px' }"
            />
          </aside>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Input from "@/components/Utils/Input.vue";
import QuestionCard from "@/components/Views/FAQ/QuestionCard.vue";
import FeedbackForm from "@/components/FeedbackForm.vue";
import {mapState} from "vuex";

export default {
  name: "FAQ",
  components: {FeedbackForm, QuestionCard, Input},
  data() {
    return {
      search: '',
      filteredData: []
    }
  },
  mounted() {
    this.$store.dispatch('faq/getFAQ')
  },
  computed: {
    ...mapState('faq', ['faqList']),

    filteredData() {

      if (!this.search) {
        return this.faqList;
      } else {
        const lowercaseQuery = this.search.toLowerCase();
        return this.faqList.filter(item =>
            item.description.toLowerCase().includes(lowercaseQuery)
        );
      }

    }
  },
  methods: {
    setSearch(data) {
      this.search = data
    }
  }
}
</script>

<style scoped lang="scss">
main {
  margin: 60px 0 80px;
}

@import "@/assets/scss/_FAQ.scss";
</style>