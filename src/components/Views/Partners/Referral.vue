<template>
  <div class="referral" :class="{ 'active': showDropdown }">
    <div class="referral__up">
      <div class="referral__content" @click="showDropdown = !showDropdown">
        <div class="referral__user">
          <div class="referral__avatar">И</div>
          <div class="referral__user-info">
            <div class="referral__user-full-name">
              <span>{{ me.name }}</span> <span>{{ me.surname }}</span>
            </div>
            <div class="referral__user-email">{{ me.email }}</div>
          </div>
        </div>
        <div>
          <div class="referral__earned">
            <div class="referral__earned-title">Заработано</div>
            <div class="referral__earned-money">1,670.97 USD</div>
          </div>
          <div class="referral__icon" v-if="referral.length">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" v-if="!showDropdown">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.19922 12C1.19922 17.9647 6.03454 22.8 11.9992 22.8C17.9639 22.8 22.7992 17.9647 22.7992 12C22.7992 6.03534 17.9639 1.20001 11.9992 1.20001C6.03454 1.20001 1.19922 6.03534 1.19922 12ZM3.59922 12C3.59922 16.6392 7.36003 20.4 11.9992 20.4C16.6384 20.4 20.3992 16.6392 20.3992 12C20.3992 7.36082 16.6384 3.60001 11.9992 3.60001C7.36003 3.60001 3.59922 7.36082 3.59922 12Z" fill="#FFA765"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0008 6C11.338 6 10.8008 6.53726 10.8008 7.2V10.8H7.2C6.53726 10.8 6 11.3373 6 12C6 12.6627 6.53726 13.2 7.2 13.2H10.8008L10.8008 16.8C10.8008 17.4627 11.338 18 12.0008 18C12.6635 18 13.2008 17.4627 13.2008 16.8L13.2008 13.2L16.8 13.2C17.4627 13.2 18 12.6627 18 12C18 11.3373 17.4627 10.8 16.8 10.8L13.2008 10.8V7.2C13.2008 6.53726 12.6635 6 12.0008 6Z" fill="#FFA765"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" v-if="showDropdown">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.19922 12C1.19922 17.9647 6.03454 22.8 11.9992 22.8C17.9639 22.8 22.7992 17.9647 22.7992 12C22.7992 6.03534 17.9639 1.20001 11.9992 1.20001C6.03454 1.20001 1.19922 6.03534 1.19922 12ZM3.59922 12C3.59922 16.6392 7.36003 20.4 11.9992 20.4C16.6384 20.4 20.3992 16.6392 20.3992 12C20.3992 7.36082 16.6384 3.60001 11.9992 3.60001C7.36003 3.60001 3.59922 7.36082 3.59922 12Z" fill="#FFA765"/>
              <path d="M16.8 10.8C17.4627 10.8 18 11.3372 18 12C18 12.6627 17.4627 13.2 16.8 13.2L7.2 13.2C6.53726 13.2 6 12.6627 6 12C6 11.3372 6.53726 10.8 7.2 10.8L16.8 10.8Z" fill="#FFA765"/>
            </svg>
          </div>
        </div>
      </div>
    </div>


    <Transition name="dropdown">
      <div
          class="referral__dropdown"
          :class="`depth-${referral.at(-1)?.depth}`"
          v-if="showDropdown"
      >
        <TransitionGroup name="content" tag="div">
          <div
              class="referral__content referral__content_mt-17"
              :class="`depth-${item.depth}`"
              v-for="(item, index) in referral"
              v-show="item?.depth !== 3 || arrOfActiveIndexes.includes(index)"
          >
            <div class="referral__user">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="80"
                  viewBox="0 0 31 80"
                  fill="none"
                  class="referral__user-arrow big"
                  :class="`depth-${item.depth}`"
              >
                <path d="M30.8868 77L28 74.1133L25.1132 77L28 79.8867L30.8868 77ZM0.5 0V57H1.5V0H0.5ZM21 77.5H28V76.5H21V77.5ZM0.5 57C0.5 68.3218 9.67816 77.5 21 77.5V76.5C10.2304 76.5 1.5 67.7696 1.5 57H0.5Z" fill="#DBDDDF"/>
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="101" viewBox="0 0 17 101" fill="none" class="referral__user-arrow little" :class="`depth-${item.depth}`">
                <path d="M16.8868 98L14 95.1133L11.1132 98L14 100.887L16.8868 98ZM0.5 0V85H1.5V0H0.5ZM0.5 85C0.5 92.4558 6.54416 98.5 14 98.5V97.5C7.09644 97.5 1.5 91.9036 1.5 85H0.5Z" fill="#DBDDDF"/>
              </svg>

              <div class="referral__avatar red">А</div>
              <div class="referral__user-info">
                <div class="referral__user-full-name">
                  <span>{{ item.name }}</span> <span>{{ item.surname }}</span>
                </div>
                <div class="referral__user-email">{{ item.email }}</div>
              </div>
            </div>
            <div class="referral__earned">
              <div class="referral__earned-title">Заработано</div>
              <div class="referral__earned-money">{{ item.profit }}</div>
            </div>

            <div class="referral__icon" v-if="referral[index + 1]?.depth === 3">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  @click="toggleMenu(index)"
                  v-if="item.depth === 2 && activeReferral !== index"
              >
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.19922 12C1.19922 17.9647 6.03454 22.8 11.9992 22.8C17.9639 22.8 22.7992 17.9647 22.7992 12C22.7992 6.03534 17.9639 1.20001 11.9992 1.20001C6.03454 1.20001 1.19922 6.03534 1.19922 12ZM3.59922 12C3.59922 16.6392 7.36003 20.4 11.9992 20.4C16.6384 20.4 20.3992 16.6392 20.3992 12C20.3992 7.36082 16.6384 3.60001 11.9992 3.60001C7.36003 3.60001 3.59922 7.36082 3.59922 12Z" fill="#FFA765"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0008 6C11.338 6 10.8008 6.53726 10.8008 7.2V10.8H7.2C6.53726 10.8 6 11.3373 6 12C6 12.6627 6.53726 13.2 7.2 13.2H10.8008L10.8008 16.8C10.8008 17.4627 11.338 18 12.0008 18C12.6635 18 13.2008 17.4627 13.2008 16.8L13.2008 13.2L16.8 13.2C17.4627 13.2 18 12.6627 18 12C18 11.3373 17.4627 10.8 16.8 10.8L13.2008 10.8V7.2C13.2008 6.53726 12.6635 6 12.0008 6Z" fill="#FFA765"/>
              </svg>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  @click="toggleMenu(index)"
                  v-if="activeReferral === index"
              >
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.19922 12C1.19922 17.9647 6.03454 22.8 11.9992 22.8C17.9639 22.8 22.7992 17.9647 22.7992 12C22.7992 6.03534 17.9639 1.20001 11.9992 1.20001C6.03454 1.20001 1.19922 6.03534 1.19922 12ZM3.59922 12C3.59922 16.6392 7.36003 20.4 11.9992 20.4C16.6384 20.4 20.3992 16.6392 20.3992 12C20.3992 7.36082 16.6384 3.60001 11.9992 3.60001C7.36003 3.60001 3.59922 7.36082 3.59922 12Z" fill="#FFA765"/>
                <path d="M16.8 10.8C17.4627 10.8 18 11.3372 18 12C18 12.6627 17.4627 13.2 16.8 13.2L7.2 13.2C6.53726 13.2 6 12.6627 6 12C6 11.3372 6.53726 10.8 7.2 10.8L16.8 10.8Z" fill="#FFA765"/>
              </svg>
            </div>
          </div>
        </TransitionGroup>
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  name: "Referral",
  props: {
    me: {
      type: Object,
      default: Object,
    },
    referral: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      showDropdown: false,
      arrOfActiveIndexes: [],
      activeReferral: -1,
    }
  },
  methods: {
    toggleMenu(index) {
      const arr = this.referral.map(item => item?.depth)
      const indexes = this.referral.map((_, idx) => idx)

      if (this.activeReferral !== index) {
        this.activeReferral = index

        if (arr.indexOf(2, index + 1) !== -1) {
          this.arrOfActiveIndexes = indexes.splice(index, arr.indexOf(2, index + 1))
        } else if (arr.indexOf(3, index + 1) !== -1) {
          this.arrOfActiveIndexes = indexes.splice(index, arr.indexOf(3, index + 1))
        }
      } else {
        this.activeReferral = -1

        this.arrOfActiveIndexes = []
      }

    }
  },
  computed: {
    getIndexes() {
      return this.referral.map(item => item.depth).reduce((arr, e, item) => {
        if (e === 3) arr.push(item);
        return arr;
      }, [])
    },
  },
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/Views/partners/_referral.scss";
</style>