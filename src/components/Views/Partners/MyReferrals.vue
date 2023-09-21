<template>
  <div class="my-referrals">
    <div class="my-referrals__title">Мои реферралы</div>

    <div class="my-referrals__content my-referrals__content_mt-12" v-if="referrals.length">
      <Referral
          v-for="(referral, idx) in referrals"
          :key="idx"
          :me="referral.splice(0, 1)[0]"
          :referral="referral.splice(0)"
      />
    </div>
    <NoData class="my-referrals__icon" name="У вас все еще нету ни одного реферрала" v-else/>
  </div>
</template>

<script>
import Referral from "@/components/Views/Partners/Referral.vue";
import NoData from "@/components/Operations/NoData.vue";

export default {
  name: "MyReferrals",
  components: {NoData, Referral},
  data() {
    return {
      referrals: [
        [
          {
            id: 1,
            name: 'Иван',
            surname: 'Иванов',
            email: 'email@email.com',
            profit: '1,670.97 USD',
            depth: 1,
          },
          {
            id: 2,
            name: 'Александр',
            surname: 'Александров',
            email: 'email@email.com',
            profit: '1,670.97 USD',
            depth: 2,
          },
          {
            id: 2,
            name: 'Александр',
            surname: 'Александров',
            email: 'email@email.com',
            profit: '1,670.97 USD',
            depth: 2,
          },
          {
            id: 3,
            name: 'Александр',
            surname: 'Александров',
            email: 'email@email.com',
            profit: '1,670.97 USD',
            depth: 2,
          },
          {
            id: 4,
            name: 'Александр',
            surname: 'Александров',
            email: 'email@email.com',
            profit: '1,670.97 USD',
            depth: 3,
          },
          {
            id: 5,
            name: 'Александр',
            surname: 'Александров',
            email: 'email@email.com',
            profit: '1,670.97 USD',
            depth: 3,
          },
          {
            id: 6,
            name: 'Александр',
            surname: 'Александров',
            email: 'email@email.com',
            profit: '1,670.97 USD',
            depth: 2,
          },
        ],
        [
          {
            id: 1,
            name: 'Иван',
            surname: 'Иванов',
            email: 'email@email.com',
            profit: '1,670.97 USD',
            depth: 1,
          },
          {
            id: 2,
            name: 'Александр',
            surname: 'Алекснадров',
            email: 'email@email.com',
            profit: '1,670.97 USD',
            depth: 1,
          },
          {
            id: 3,
            name: 'Александр',
            surname: 'Александров',
            email: 'email@email.com',
            profit: '1,670.97 USD',
            depth: 2,
          },
        ],
        [
          {
            id: 1,
            name: 'Иван',
            surname: 'Иванов',
            email: 'email@email.com',
            profit: '1,670.97 USD',
            depth: 1,
          },
          {
            id: 2,
            name: 'Александр',
            surname: 'Александров',
            email: 'email@email.com',
            profit: '1,670.97 USD',
            depth: 2,
          },
        ],
        [
          {
            id: 1,
            name: 'Иван',
            surname: 'Иванов',
            email: 'email@email.com',
            profit: '1,670.97 USD',
            depth: 1,
          },
        ],
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/Views/partners/_myReferrals.scss";
</style>