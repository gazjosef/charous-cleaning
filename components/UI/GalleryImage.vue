<template>
  <img
    :src="require(`../../assets/images/${image}.jpg`)"
    alt="alt"
    class="w-full h-64 rounded object-cover"
  />
</template>

<script>
export default {
  props: {
    image: String,
    alt: String,
  },
  name: "UIGalleryImage",
};
</script>

<style lang="scss" scoped></style>
