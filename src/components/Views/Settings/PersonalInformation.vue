<template>
  <div class="personal-information">
    <CardWithSettings title="Личная информация">
      <template #dropdown>
        <div class="personal-information__content personal-information__content_mb-12">
          <div class="personal-information__surname">
            <CustomInput
                title="Имя, фамилия"
                title-color="#4B535A"
                title-indent="4px"
                width="100%"
                :default-value="user.full_name"
                :disabled="!edited"
                @custom-input="setFullName"
            />
          </div>
<!--          <div class="personal-information__name">-->
<!--            <CustomInput-->
<!--                title="Имя"-->
<!--                title-color="#4B535A"-->
<!--                title-indent="4px"-->
<!--                width="100%"-->
<!--                :default-value="userInfo.name"-->
<!--                :disabled="!edited"-->
<!--                @custom-input=""-->
<!--            />-->
<!--          </div>-->
          <div class="personal-information__email">
            <CustomInput
                title="email"
                title-color="#4B535A"
                title-indent="4px"
                width="100%"
                :default-value="user.email"
                :disabled="!edited"
                @custom-input="setEmail"
            />
          </div>
          <div class="personal-information__phone">
            <CustomInput
                title="Телефон"
                title-color="#4B535A"
                title-indent="4px"
                width="100%"
                :default-value="user.phone"
                :disabled="!edited"
                @custom-input="setPhone"
            />
          </div>
          <div class="personal-information__avatar">
            T

            <div class="personal-information__avatar-edit" @click="$refs.avatar.click()">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21.5725 2.42756C20.9776 1.8336 20.1714 1.5 19.3307 1.5C18.4901 1.5 17.6839 1.8336 17.089 2.42756L1.5 18.0166V22.5001H5.9835L21.5725 6.91106C22.1662 6.31608 22.4997 5.50986 22.4997 4.66931C22.4997 3.82875 22.1662 3.02253 21.5725 2.42756ZM5.2625 20.7501H3.25V18.7376L14.8963 7.10006L16.9088 9.11256L5.2625 20.7501ZM20.3352 5.67381L18.1416 7.86743L16.1335 5.85493L18.3263 3.66481C18.5931 3.39793 18.9551 3.248 19.3325 3.248C19.7099 3.248 20.0719 3.39793 20.3388 3.66481C20.6056 3.93168 20.7556 4.29364 20.7556 4.67106C20.7556 5.04847 20.6056 5.41043 20.3388 5.67731L20.3352 5.67381Z" fill="#4C5066"/>
              </svg>
            </div>

            <input type="file" ref="avatar">
          </div>
        </div>
        <Button type="submit" :name="getButtonName" @click="editData"/>
      </template>
    </CardWithSettings>
  </div>
</template>

<script>
import CardWithSettings from "@/components/Views/Settings/CardWithSettings.vue";
import Button from "@/components/Buttons/Button.vue";
import Input from "@/components/Utils/Input.vue";
import {mapState} from "vuex";

export default {
  name: "PersonalInformation",
  components: {CustomInput: Input, Button, CardWithSettings},
  data() {
    return {
      edited: false,
      userInfo: {
        full_name: '',
        email: '',
        phone: '',
      }
    }
  },
  methods: {
    editData() {
      if (this.edited) {
        this.$store.dispatch('auth/changeUserData', this.userInfo)
      }
      this.edited = !this.edited
    },
    setFullName(fullName) {
      this.userInfo.full_name = fullName
    },
    setEmail(email) {
      this.userInfo.email = email
    },
    setPhone(phone) {
      this.userInfo.phone = phone
    }
  },
  computed: {
    ...mapState('auth', ['user']),

    getButtonName() {
      return this.edited ? 'Сохранить' : 'Редактировать'
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/Views/settings/_personalInformation.scss";
</style>