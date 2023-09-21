<template>
  <div class="review">
    <Avatar :avatar="review.image"/>

    <div class="review__name review__name_mt-24">{{ review.full_name }}</div>
    <div class="review__job-title review__job-title_mt-2">{{ review.job }}</div>
    <div class="review__text review__text_mt-24" v-html="review.description"/>

    <Button
        class="review__button"
        name="Смотреть видеоотзыв"
        width="100%"
        @click="goToVideo"
    />
  </div>
</template>

<script>
import Avatar from "@/components/Avatar.vue";
import Button from "@/components/Buttons/Button.vue";

export default {
  name: "Review",
  components: {Button, Avatar},
  props: {
    review: {
      type: Object,
      default: {}
    }
  },
  methods: {
    goToVideo() {
      window.location.href = this.review.video
    }
  }
}
</script>

<style scoped lang="scss">
.review {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 370px;
  padding: 35px 24px 24px;
  background: #FFFFFF;
  border-radius: 12px;
  text-align: center;
  position: relative;

  &__name {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    //text-align: center;
    color: #011226;

    &_mt-24 {
      margin-top: 24px;
    }
  }

  &__job-title {
    font-weight: 600;
    line-height: 16px;
    color: #4B535A;

    &_mt-2 {
      margin-top: 2px;
    }
  }

  &__text {
    padding-bottom: 15px;
    font-weight: 600;
    line-height: 18px;
    color: #4B535A;
    text-overflow: ellipsis;

    &_mt-24 {
      margin-top: 24px;
    }
  }

  &__button {
    margin-top: auto;
  }
}
</style>