<template>
  <div class="small-product">
    <img
        :src="image.split('/')[0] === 'images' ? require(`@/assets/${image}`) : image"
        :alt="image"
    >
  </div>
</template>

<script>
export default {
  name: "SmallProduct",
  props: {
    image: {
      type: String,
      default: 'images/home/top-products/top-product-item.png'
    }
  }
}
</script>

<style scoped lang="scss">
.small-product {
  flex-shrink: 0;
  padding: 6px 10px;
  width: 56px;
  height: 56px;
  background: #FFFFFF;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  cursor: pointer;

  & > img {
    margin: auto;
    height: 100%;
    object-fit: cover;
  }
}
</style>