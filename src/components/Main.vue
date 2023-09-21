<template>
  <div class="content">
    <Sidebar v-if="auth"/>
    <RouterView/>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "Main",
  components: {Sidebar},
  props: {
    auth: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style scoped>
.content {
  display: flex;
  justify-content: center;
}
</style>