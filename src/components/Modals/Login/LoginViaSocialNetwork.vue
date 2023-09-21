<template>
  <div class="networks" :class="{ 'without-active': withoutActive }">
    <div class="networks__content">
      <div class="networks__network" @click="goToAuth('google')">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" fill="white"/>
          <path d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#FFC107"/>
          <path d="M3.15332 7.3455L6.43882 9.755C7.32782 7.554 9.48082 6 12.0003 6C13.5298 6 14.9213 6.577 15.9808 7.5195L18.8093 4.691C17.0233 3.0265 14.6343 2 12.0003 2C8.15932 2 4.82832 4.1685 3.15332 7.3455Z" fill="#FF3D00"/>
          <path d="M12.0002 22C14.5832 22 16.9302 21.0115 18.7047 19.404L15.6097 16.785C14.5719 17.5742 13.3039 18.001 12.0002 18C9.39916 18 7.19066 16.3415 6.35866 14.027L3.09766 16.5395C4.75266 19.778 8.11366 22 12.0002 22Z" fill="#4CAF50"/>
          <path d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#4285F4"/>
        </svg>

        <div class="networks__network-info">
          <div class="networks__network-title">Войти с помощью</div>
          <div class="networks__network-name">Google</div>
        </div>
      </div>
      <div class="networks__network active" @click="goToAuth('facebook')">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <g clip-path="url(#clip0_179_4711)">
            <path d="M9.99821 23.8675C4.33309 22.8696 0 17.9335 0 12.0005C0 5.40002 5.40002 0 12.0005 0C18.6009 0 24 5.40002 24 12.0005C24 17.9335 19.6669 22.8677 13.9999 23.8675L13.3334 23.3363H10.6666L9.99821 23.8675Z" fill="url(#paint0_linear_179_4711)"/>
            <path d="M16.6668 15.3338L17.1998 12.0005H14V9.66684C14 8.73339 14.3332 7.99969 15.7997 7.99969H17.3333V4.9333C16.4661 4.79981 15.5336 4.66727 14.6655 4.66727C11.9324 4.66727 9.99825 6.33441 9.99825 9.33453V12.0014H7V15.3348H9.99825V23.803C11.3182 24.0697 12.6781 24.0697 13.9981 23.803V15.3366L16.6668 15.3338Z" fill="white"/>
          </g>
          <defs>
            <linearGradient id="paint0_linear_179_4711" x1="12.0145" y1="22.946" x2="12.0145" y2="-0.224832" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0062E0"/>
              <stop offset="1" stop-color="#19AFFF"/>
            </linearGradient>
            <clipPath id="clip0_179_4711">
              <rect width="24" height="24" fill="white"/>
            </clipPath>
          </defs>
        </svg>

        <div class="networks__network-info">
          <div class="networks__network-title">Войти через</div>
          <div class="networks__network-name">Facebook</div>
        </div>
      </div>
    </div>

    <div class="networks__line networks__line_mt-18"/>
  </div>
</template>

<script>
export default {
  name: "LoginViaSocialNetwork",
  props: {
    withoutActive: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    goToAuth(network) {
      window.location.href = `https://api.nanobox.bio/api/v1/auth/${network}`
    }
  },
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/Views/login/_loginViaSocialNetwork.scss";
</style>