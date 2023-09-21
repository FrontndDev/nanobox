<template>
  <main>
    <div class="contacts">
      <div class="container">
        <h5>звоните, пишите - с радостью ответим</h5>

        <h1 class="contacts__title contacts__title_mt-16">Наши контакты</h1>

        <div class="contacts__body">
          <div class="contacts__content contacts__content_mt-60">
            <div class="contacts__left">
              <div class="contacts__contacts">
                <Contact
                    v-for="contact in contacts"
                    :key="contact.id"
                    :title="contact.title"
                    :phone="contact.phone"
                    :email="contact.email"
                    :max-width="contact.maxWidth"
                />
              </div>
              <CompanyInfo/>
            </div>

            <div class="contacts__form">
              <FeedbackForm
                  title="Написать нам"
                  button-name="Написать нам"
                  form-indent="30px 0"
                  :name-input="{ placeholder: 'Введите свое имя', title: 'Ваше имя' }"
                  :email-input="{ placeholder: 'Введите свой email', title: 'Email' }"
                  :textarea="{ placeholder: 'Напишите что-нибудь...', title: 'Ваше сообщение', height: '162px' }"
              />

              <div class="contacts__form-messengers contacts__form-messengers_mt-60">
                <div class="contacts__form-messengers-text">
                  Или же вы можете написать нам в один нам в один из мессенджеров:
                </div>
                <div class="contacts__form-messengers-icons">
                  <TelegramIcon/>
                  <WhatsAppIcon/>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </main>
</template>

<script>
import Contact from "@/components/Views/Contacts/Contact.vue";
import FeedbackForm from "@/components/FeedbackForm.vue";
import CompanyInfo from "@/components/CompanyInfo.vue";
import TelegramIcon from "@/components/Networks/TelegramIcon.vue";
import WhatsAppIcon from "@/components/Networks/WhatsAppIcon.vue";

export default {
  name: "Contacts",
  components: {WhatsAppIcon, TelegramIcon, CompanyInfo, FeedbackForm, Contact},
  data() {
    return {
      contacts: [
        {
          id: 1,
          title: 'Оптовым покупателям и покупка сырья',
          phone: '+7 (919) 626-00-79',
          email: 'opt@nanobox.bio',
          maxWidth: '176px',
        },
        {
          id: 2,
          title: 'По общим вопросам и сотрудничеству',
          phone: '+7 (919) 626-00-79',
          email: 'support@nanobox.bio',
          maxWidth: '162px',
        },
        {
          id: 3,
          title: 'Для врачей и нутрицологов',
          phone: '+7 (919) 626-00-79',
          email: 'partner@nanobox.bio',
          maxWidth: '198px',
        },
        {
          id: 4,
          title: 'Розничный отдел',
          phone: '+7 (919) 626-00-79',
          email: 'sale@nanobox.bio',
          maxWidth: '126px',
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
main {
  margin: 60px 0 80px;
}

@import "@/assets/scss/Views/contacts/_contacts.scss";
</style>