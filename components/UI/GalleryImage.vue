<template>
  <img
    :src="require(`../../assets/images/tinified/${image}.jpg`)"
    alt="alt"
    class="w-[350px] h-80 rounded object-cover"
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
