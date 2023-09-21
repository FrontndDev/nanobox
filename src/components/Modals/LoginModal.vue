<template>
  <Teleport to="body">
    <div id="backdrop" @click="close(null)"/>
    <div
        class="modal"
        ref="modal"
        :style="`top: calc(50% - (${modal.height}px / 2)); left: calc(50% - (${modal.width}px / 2));`"
        @click.prevent="close($event)"
    >
      <div class="modal__body">
        <template v-if="typeModal === 'reg' || typeModal === 'auth'">
          <div class="modal__title little">Войти через соцсети</div>

          <div class="modal__content modal__content_mt-12">
            <LoginViaSocialNetwork :without-active="typeModal === 'auth'"/>

            <Registration @close-modal="close(null)" v-show="typeModal === 'reg'"/>
            <Authorization
                @remind-password="typeModal = 'remind-password'"
                @close-modal="close(null)"
                v-show="typeModal === 'auth'"
            />

            <!--          <div class="modal__buttons modal__buttons_mt-20">-->
            <!--            <Button :name="getNameButton" @click="login"/>-->
            <ArrowButton
                class="modal__button modal__button_mt-20"
                type="right"
                :name="getNameArrowButton"
                @click="switchModalType"
            />
            <!--          </div>-->
          </div>
        </template>

        <RemindPassword
            @change-password="typeModal = 'change-password'"
            @auth="typeModal = 'auth'"
            v-if="typeModal === 'remind-password'"
        />
        <ChangePassword v-if="typeModal === 'change-password'"/>

        <div data-close class="modal__close" @click="close($event)">
          <svg data-close width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path data-close d="M6.78408 6L11.3896 1.39444C11.4807 1.28816 11.5282 1.15145 11.5228 1.01163C11.5174 0.871815 11.4594 0.739182 11.3605 0.640241C11.2616 0.541299 11.1289 0.483337 10.9891 0.477936C10.8493 0.472535 10.7126 0.520095 10.6063 0.611109L6.00075 5.21666L1.39519 0.605553C1.29058 0.50094 1.14869 0.442169 1.00074 0.442169C0.852799 0.442169 0.710913 0.50094 0.6063 0.605553C0.501687 0.710167 0.442916 0.852053 0.442916 0.999998C0.442916 1.14794 0.501687 1.28983 0.6063 1.39444L5.21741 6L0.6063 10.6056C0.548144 10.6554 0.50091 10.7166 0.467564 10.7856C0.434218 10.8545 0.415479 10.9296 0.412523 11.0061C0.409568 11.0826 0.42246 11.1589 0.45039 11.2302C0.478321 11.3015 0.520686 11.3662 0.574828 11.4204C0.628969 11.4745 0.693718 11.5169 0.76501 11.5448C0.836301 11.5727 0.912597 11.5856 0.989108 11.5827C1.06562 11.5797 1.14069 11.561 1.20962 11.5276C1.27854 11.4943 1.33983 11.447 1.38963 11.3889L6.00075 6.78333L10.6063 11.3889C10.7126 11.4799 10.8493 11.5275 10.9891 11.5221C11.1289 11.5167 11.2616 11.4587 11.3605 11.3598C11.4594 11.2608 11.5174 11.1282 11.5228 10.9884C11.5282 10.8485 11.4807 10.7118 11.3896 10.6056L6.78408 6Z" fill="#4B535A"/>
          </svg>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script>
import LoginViaSocialNetwork from "@/components/Modals/Login/LoginViaSocialNetwork.vue";
import Registration from "@/components/Modals/Login/Registration.vue";
import ArrowButton from "@/components/Buttons/ArrowButton.vue";
import Button from "@/components/Buttons/Button.vue";
import Authorization from "@/components/Modals/Login/Authorization.vue";
import RemindPassword from "@/components/Modals/Login/RemindPassword.vue";
import ChangePassword from "@/components/Modals/Login/ChangePassword.vue";

export default {
  name: "LoginModal",
  components: {ChangePassword, RemindPassword, Authorization, Button, ArrowButton, Registration, LoginViaSocialNetwork},
  emits: ['close'],
  data() {
    return {
      typeModal: 'auth',
      //reg, auth, remind-password, new-password, change-password

      modal: {
        width: 0,
        height: 0,
      },
    }
  },
  methods: {
    close(e) {
      this.$router.push(this.$route.path)
      if (!e || e.target.classList.contains('modal') || e.target.hasAttribute('data-close')) {
        document.body.style.overflow = null;
        this.$emit('close')
      }
    },
    setModalPosition() {
      this.modal = {
        width: this.$refs.modal?.offsetWidth,
        height: this.$refs.modal?.offsetHeight,
      }
    },
    switchModalType() {
      switch (this.typeModal) {
        case 'reg':
          this.typeModal = 'auth';
          break;
        case 'auth':
          this.typeModal = 'reg';
          break;
      }
    },
    // login() {
    //   switch (this.typeModal) {
    //     case 'reg':
    //       // this.typeModal = 'auth';
    //       break;
    //     case 'auth':
    //       this.close()
    //       this.$router.push('/cabinet')
    //       break;
    //   }
    // }
  },
  computed: {
    getNameButton() {
      switch (this.typeModal) {
        case 'reg':
          return 'Зарегистрироваться';
        case 'auth':
          return 'Войти';
      }
    },
    getNameArrowButton() {
      switch (this.typeModal) {
        case 'reg':
          return 'У меня есть аккаунт';
        case 'auth':
          return 'У меня еще нет аккаунта';
      }
    },
  },
  watch: {
    '$route.path'() {
      this.close(null)
    },
    typeModal() {
      setTimeout(() => this.setModalPosition(), 0)
    }
  },
  mounted() {
    if (this.$route.fullPath.split('?referral_token=')[1]) this.typeModal = 'reg'
    this.setModalPosition()
    setTimeout(() => this.setModalPosition(), 0)
    window.onorientationchange = () => setTimeout(() => this.setModalPosition(), 150)
    window.onresize = () => this.setModalPosition()
    document.body.style.overflow = 'hidden';
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/modals/_modal.scss";
@import "@/assets/scss/modals/_login.scss";

.modal {
  &__body {
    max-width: 430px;
  }

  &__title {
    line-height: 20px;
  }
}

@media screen and (max-width: 394px) {
  .modal {
    &__body {
      padding: 20px;
    }
  }
}
</style>