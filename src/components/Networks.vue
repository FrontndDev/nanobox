<template>
  <InstagramIcon :type="type"/>
  <VKIcon :type="type"/>
</template>

<script>
import InstagramIcon from "@/components/Networks/InstagramIcon.vue";
import VKIcon from "@/components/Networks/VKIcon.vue";

export default {
  name: "Networks",
  props: ['type'],
  components: { VKIcon, InstagramIcon }
}
</script>

<style scoped>

</style>