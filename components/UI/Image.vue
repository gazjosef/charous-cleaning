<template>
  <img
    :src="require(`@/assets/images/${image}.jpg`)"
    alt="alt"
    class="max-w-md rounded"
  />
</template>

<script>
// import sharp from "sharp";

export default {
  props: {
    image: String,
    alt: String,
  },
  name: "UIImage",
  // computed: {
  //   imageUrl() {
  //     const path = `@/assets/images/${this.image}.jpg`;
  //     const buffer = sharp(path)
  //       .resize({ width: 500 })
  //       .jpeg({ quality: 80 })
  //       .toBuffer();
  //     return `data:image/jpeg;base64,${buffer.toString("base64")}`;
  //   },
  // },
};
</script>

<style lang="scss" scoped></style>
