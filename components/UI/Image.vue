<template>
  <img
    :src="require(`../../assets/images/${image}.jpg`)"
    alt="alt"
    class="max-w-md rounded"
  />
</template>

<script>
export default {
  props: {
    image: String,
    alt: String,
  },
  name: "UIImage",
};
</script>

<style lang="scss" scoped></style>
