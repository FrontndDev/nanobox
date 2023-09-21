<template>
  <div class="burger-menu-user-info" @click="$router.push('/cabinet')">
    <div class="burger-menu-user-info__money">
      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="14" viewBox="0 0 19 14" fill="none">
        <path d="M5 4C4.44772 4 4 4.44772 4 5C4 5.55228 4.44772 6 5 6H10C10.5523 6 11 5.55228 11 5C11 4.44772 10.5523 4 10 4H5Z" fill="#24C8BC"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M1 0C0.447715 0 0 0.447715 0 1V13C0 13.5523 0.447715 14 1 14H17C17.5523 14 18 13.5523 18 13V10C18.5523 10 19 9.55228 19 9V5C19 4.44772 18.5523 4 18 4V1C18 0.447715 17.5523 0 17 0H1ZM16 4V2H2V12H16V10C14.3431 10 13 8.65685 13 7C13 5.34315 14.3431 4 16 4ZM16 6H17V8H16C15.4477 8 15 7.55228 15 7C15 6.44772 15.4477 6 16 6Z" fill="#24C8BC"/>
      </svg>
      <span>12,987<span>.34 USD</span></span>
    </div>

    <div class="burger-menu-user-info__avatar">T</div>
  </div>
</template>

<script>
export default {
  name: "MenuUserInfo"
}
</script>

<style scoped lang="scss">
.burger-menu-user-info {
  cursor: pointer;
  display: flex;
  align-items: center;
  column-gap: 16px;
  padding: 2px 2px 2px 17px;
  background: #FFFFFF;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 20px;

  &__money {
    display: flex;
    align-items: center;
    column-gap: 8px;
    font-weight: 700;

    & > span {
      font-size: 16px;
      line-height: 22px;
      color: #24C8BC;

      & > span {
        font-size: 12px;
      }
    }
  }

  &__avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    background: #0462D0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    border-radius: 50%;

    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    color: #FFFFFF;
    cursor: pointer;
  }
}
</style>