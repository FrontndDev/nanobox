<template>
  <Header bg="#FFFFFF"/>
  <HeaderMobile/>
  <div class="main">
    <div class="container">
      <div class="main__content">
        <Sidebar/>
        <RouterView/>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderMobile from "@/components/HeaderMobile.vue";
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "CabinetLayout",
  components: {Sidebar, Header, HeaderMobile}
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/layouts/_cabinetLayout.scss";
</style>