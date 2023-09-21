<template>
  <div class="language">
    <div class="language__content">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="language__flag">
        <path d="M0 7.8125H20V12.1875H0V7.8125Z" fill="#1B75BB"/>
        <path d="M16.875 3.125H3.125C1.05406 3.125 0 4.66406 0 6.5625V7.8125H20V6.5625C20 4.66406 18.9459 3.125 16.875 3.125Z" fill="#E6E7E8"/>
        <path d="M0 13.4375C0 15.3359 1.05406 16.875 3.125 16.875H16.875C18.9459 16.875 20 15.3359 20 13.4375V12.1875H0V13.4375Z" fill="#EC1C24"/>
      </svg>
      <div class="language__selected language__selected_mx">Ру</div>
      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" class="language__selected">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.235034 0.204742C0.536173 -0.0796667 1.01085 -0.0661045 1.29526 0.235034L5 4.1577L8.70474 0.235034C8.98915 -0.0661045 9.46383 -0.0796667 9.76497 0.204742C10.0661 0.489151 10.0797 0.963831 9.79526 1.26497L5.54526 5.76497C5.40358 5.91499 5.20635 6 5 6C4.79366 6 4.59642 5.91499 4.45474 5.76497L0.204742 1.26497C-0.0796667 0.963831 -0.0661045 0.489151 0.235034 0.204742Z" fill="#4B535A"/>
      </svg>
    </div>
    <div class="language__dropdown">

    </div>
  </div>
</template>

<script>
export default {
  name: "SelectLanguage"
}
</script>

<style scoped lang="scss">
.language {
  &__content {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  &__flag {}

  &__selected {
    font-weight: 600;

    &_mx {
      margin: 0 11px 0 12px;
    }
  }

  &__dropdown {
    display: none;
  }
}
</style>