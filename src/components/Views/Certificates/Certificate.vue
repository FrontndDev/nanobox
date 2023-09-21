<template>
  <div class="certificate">
    <img alt="certificate" class="certificate__img" ref="certificate" :src="certificate.image">
    <div class="certificate__name">{{ certificate.title }}</div>

    <div class="certificate__increase" @click="openImg">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M12.9295 8.3828H10.1639V5.24218C10.1639 5.13905 10.0795 5.05468 9.97637 5.05468H8.57012C8.467 5.05468 8.38262 5.13905 8.38262 5.24218V8.3828H5.61699C5.51387 8.3828 5.42949 8.46718 5.42949 8.5703V9.97655C5.42949 10.0797 5.51387 10.1641 5.61699 10.1641H8.38262V13.3047C8.38262 13.4078 8.467 13.4922 8.57012 13.4922H9.97637C10.0795 13.4922 10.1639 13.4078 10.1639 13.3047V10.1641H12.9295C13.0326 10.1641 13.117 10.0797 13.117 9.97655V8.5703C13.117 8.46718 13.0326 8.3828 12.9295 8.3828ZM19.5858 18.3203L16.1639 14.8984C19.0256 11.4086 18.8264 6.23827 15.5545 2.96874C12.0857 -0.502356 6.45137 -0.502356 2.96856 2.96874C-0.502539 6.45155 -0.502539 12.0859 2.96856 15.5547C6.23809 18.8266 11.4084 19.0258 14.8982 16.1641L18.3201 19.5859C18.3951 19.6516 18.5147 19.6516 18.5779 19.5859L19.5858 18.5781C19.6514 18.5148 19.6514 18.3953 19.5858 18.3203ZM14.3123 14.3125C11.5279 17.0945 7.01856 17.0945 4.23418 14.3125C1.45215 11.5281 1.45215 7.01874 4.23418 4.23436C7.01856 1.45233 11.5279 1.45233 14.3123 4.23436C17.0943 7.01874 17.0943 11.5281 14.3123 14.3125Z" fill="white"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "Certificate",
  props: {
    certificate: {
      type: Object,
      default: {},
    }
  },
  methods: {
    openImg() {
      window.open(this.certificate.file, "_blank")
    }
  }
}
</script>

<style scoped lang="scss">
.certificate {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  position: relative;

  &__img {
    max-width: 370px;
    width: 100%;

    & > img {
      object-fit: cover;
    }
  }

  &__name {
    font-weight: 700;
    line-height: 19px;
    text-align: center;
    color: #011226;
  }

  &__increase {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 44px;
    height: 44px;
    background: #FF6100;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    opacity: 0;
    transition: .25s;
    cursor: pointer;
    position: absolute;
    inset: 0;
  }

  &:hover {

    & .certificate {
      &__increase {
        opacity: 1;
        transition: .25s;
      }
    }
  }
}
</style>