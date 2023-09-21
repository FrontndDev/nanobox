<template>
    <div class="question-card">
      <div class="question-card__up" @click="cardIsOpen = !cardIsOpen">
        <div class="question-card__question">{{ title }}</div>
        <div class="question-card__icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" v-if="!cardIsOpen">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.19922 12C1.19922 17.9647 6.03454 22.8 11.9992 22.8C17.9639 22.8 22.7992 17.9647 22.7992 12C22.7992 6.03532 17.9639 1.2 11.9992 1.2C6.03454 1.2 1.19922 6.03532 1.19922 12ZM3.59922 12C3.59922 16.6392 7.36003 20.4 11.9992 20.4C16.6384 20.4 20.3992 16.6392 20.3992 12C20.3992 7.36081 16.6384 3.6 11.9992 3.6C7.36003 3.6 3.59922 7.36081 3.59922 12Z" fill="#FF6100"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6C11.3373 6 10.8 6.53726 10.8 7.2V10.8H7.2C6.53726 10.8 6 11.3373 6 12C6 12.6627 6.53726 13.2 7.2 13.2H10.8L10.8 16.8C10.8 17.4627 11.3373 18 12 18C12.6627 18 13.2 17.4627 13.2 16.8L13.2 13.2L16.8 13.2C17.4627 13.2 18 12.6627 18 12C18 11.3373 17.4627 10.8 16.8 10.8L13.2 10.8V7.2C13.2 6.53726 12.6627 6 12 6Z" fill="#FF6100"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" v-if="cardIsOpen">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.19922 12C1.19922 17.9647 6.03454 22.8 11.9992 22.8C17.9639 22.8 22.7992 17.9647 22.7992 12C22.7992 6.03532 17.9639 1.2 11.9992 1.2C6.03454 1.2 1.19922 6.03532 1.19922 12ZM3.59922 12C3.59922 16.6392 7.36003 20.4 11.9992 20.4C16.6384 20.4 20.3992 16.6392 20.3992 12C20.3992 7.36081 16.6384 3.6 11.9992 3.6C7.36003 3.6 3.59922 7.36081 3.59922 12Z" fill="#FF6100"/>
            <path d="M16.8 10.8C17.4627 10.8 18 11.3373 18 12C18 12.6627 17.4627 13.2 16.8 13.2L7.2 13.2C6.53726 13.2 6 12.6627 6 12C6 11.3373 6.53726 10.8 7.2 10.8L16.8 10.8Z" fill="#FF6100"/>
          </svg>
        </div>
      </div>
      <Transition name="question-answer">
        <div class="question-card__answer" v-if="cardIsOpen">{{ description }}</div>
      </Transition>
    </div>
</template>

<script>
export default {
  name: "QuestionCard",
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    }
  },
  data() {
    return {
      cardIsOpen: false,
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/Views/FAQ/_questionCard.scss";
</style>