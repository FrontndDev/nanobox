<template>
  <div class="password">
    <CardWithSettings title="Пароль">
      <template #dropdown>
        <Button type="submit" name="Изменить пароль" @click="showModal = true"/>
      </template>
    </CardWithSettings>
  </div>
  <ChangePasswordModal v-if="showModal" @close="showModal = false"/>
</template>

<script>
import CardWithSettings from "@/components/Views/Settings/CardWithSettings.vue";
import Button from "@/components/Buttons/Button.vue";
import ChangePasswordModal from "@/components/Modals/ChangePasswordModal.vue";

export default {
  name: "Password",
  components: {ChangePasswordModal, Button, CardWithSettings},
  data() {
    return {
      showModal: false,
    }
  }
}
</script>

<style scoped>

</style>