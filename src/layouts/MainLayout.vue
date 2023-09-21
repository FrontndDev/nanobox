<template>
  <div class="wrapper" :class="$route.meta?.bg">
    <Header/>
    <HeaderMobile/>
    <RouterView/>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer.vue";
import HeaderMobile from "@/components/HeaderMobile.vue";

export default {
  name: "MainLayout",
  components: {
    HeaderMobile,
    Footer,
    Header,
  }
}
</script>

<style scoped>

</style>