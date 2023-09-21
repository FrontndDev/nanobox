<template>
  <div class="checkbox" :class="{ 'active': checked }">
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.78819 0.727644C10.0767 1.02488 10.0696 1.4997 9.77236 1.78819L4.10569 7.28819C3.96168 7.42796 3.76767 7.50419 3.56703 7.49982C3.36639 7.49546 3.17587 7.41087 3.03808 7.26497L0.204742 4.26497C-0.0796667 3.96383 -0.0661045 3.48915 0.235034 3.20474C0.536173 2.92033 1.01085 2.93389 1.29526 3.23503L3.60656 5.68228L8.72765 0.711815C9.02488 0.423325 9.4997 0.430412 9.78819 0.727644Z" fill="white"/>
    </svg>
  </div>
</template>

<script>
export default {
  name: "Checkbox",
  props: {
    checked: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style scoped lang="scss">
.checkbox {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  background: #FFFFFF;
  border: 1px solid #DFDFDF;
  border-radius: 6px;
  cursor: pointer;

  &.active {
    background: #24C8BC;
    border: none;
  }
}
</style>