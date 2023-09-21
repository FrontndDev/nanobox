<template>
  <div class="wrapper" :class="$route.meta?.bg">
    <Header bg="#FFFFFF"/>
    <HeaderMobile/>
    <RouterView/>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import HeaderMobile from "@/components/HeaderMobile.vue";

export default {
  name: "MainLayout2",
  components: {HeaderMobile, Footer, Header}
}
</script>

<style scoped>

</style>