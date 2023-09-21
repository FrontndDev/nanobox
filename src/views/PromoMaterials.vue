<template>
  <main>
    <div class="promo-materials">
      <PresentationMaterials/>
      <WebBanners/>
    </div>
  </main>
</template>

<script>
import PresentationMaterials from "@/components/PromoMaterials/PresentationMaterials.vue";
import WebBanners from "@/components/PromoMaterials/WebBanners.vue";

export default {
  name: "PromoMaterials",
  components: {WebBanners, PresentationMaterials}
}
</script>