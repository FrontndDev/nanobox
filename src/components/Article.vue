<template>
  <div class="article-item">
    <img class="article-item__image" :src="item.preview">
    <div class="article-item__info article-item__info_mt-12">
      <div class="article-item__date">
        {{ `${getDate[1]} ${months.abbreviated[+getDate[1] - 1]}. ${getDate[0]}` }}
      </div>
      <div class="article-item__tag" :style="`color: ${item.category.hex};`">#{{ item.category.name }}</div>
    </div>
    <div class="article-item__title article-item__title_mt-14" v-html="item.title"/>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "Article",
  props: {
    item: {
      type: Object,
      default: {},
    }
  },
  computed: {
    ...mapState(['months']),

    getDate() {
      return this.item.publish_date.split('-')
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/_article.scss";
</style>