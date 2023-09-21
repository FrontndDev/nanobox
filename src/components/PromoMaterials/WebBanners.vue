<template>
  <div class="web-banners">
    <div class="web-banners__title">Веб-баннера</div>

    <div class="web-banners__content web-banners__content_mt-16">
      <div class="web-banners__banner" v-for="banner in banners" :key="banner.id">
        <div class="web-banners__title">{{ banner.title }}</div>
        <div class="web-banners__banner-content"/>
        <Input
            width="100%"
            default-value="https://nanobox.com/frfdsfs.90722"
            title="HTML-код баннера"
            title-weight="700"
            padding="10px 39px 10px 12px"
            :readonly="true"
            :can-copy="true"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Input from "@/components/Utils/Input.vue";

export default {
  name: "WebBanners",
  components: {Input},
  data() {
    return {
      banners: [
        {
          id: 1,
          title: 'Баннер 728-90',
        },
        {
          id: 2,
          title: 'Баннер 300-250',
        },
        {
          id: 3,
          title: 'Баннер 469-60',
        },
        {
          id: 4,
          title: 'Баннер 269-31',
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/Views/promo-materials/_webBanners.scss";
</style>