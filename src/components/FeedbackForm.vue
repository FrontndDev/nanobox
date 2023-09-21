<template>
  <div class="aks-your-question">
    <h3>{{ title }}</h3>

    <div class="aks-your-question__content" :style="`margin: ${formIndent};`">
      <Input
          width="100%"
          :placeholder="nameInput.placeholder"
          :title="nameInput.title"
          :default-value="question.name"
          @custom-input="setName"
      />
      <Input
          type="email"
          width="100%"
          :placeholder="emailInput.placeholder"
          :title="emailInput.title"
          :default-value="question.email"
          @custom-input="setEmail"
      />
      <Textarea
          :placeholder="textarea.placeholder"
          :title="textarea.title"
          :height="textarea.height"
          :default-value="question.message"
          @custom-input="setMessage"
      />
    </div>

    <Button width="100%" :name="buttonName" @click="sendForm"/>
  </div>
</template>

<script>
import Button from "@/components/Buttons/Button.vue";
import Input from "@/components/Utils/Input.vue";
import Textarea from "@/components/Utils/Textarea.vue";
import * as API from '@/api';

export default {
  name: "FeedbackForm",
  components: {Textarea, Input, Button},
  props: {
    title: {
      type: String,
      default: ''
    },
    nameInput: {
      type: Object,
      default: {
        title: '',
        placeholder: ''
      }
    },
    emailInput: {
      type: Object,
      default: {
        title: '',
        placeholder: ''
      }
    },
    textarea: {
      type: Object,
      default: {
        title: '',
        placeholder: '',
        height: ''
      }
    },
    buttonName: {
      type: String,
      default: 'Отправить вопрос'
    },
    formIndent: {
      type: String,
      default: '30px 0 20px'
    }
  },
  data() {
    return {
      question: {
        name: '',
        email: '',
        message: '',
      }
    }
  },
  methods: {
    setName(name) {
      this.question.name = name
    },
    setEmail(email) {
      this.question.email = email
    },
    setMessage(message) {
      this.question.message = message
    },
    sendForm() {
      API.sendFeedbackForm(this.question).then(() => this.question = {
        name: '',
        email: '',
        message: '',
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/_feedbackForm.scss";
</style>