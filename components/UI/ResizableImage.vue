<template>
  <img :src="resizedSrc" :width="width" :height="height" />
</template>

<script>
import sharp from "sharp";

export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      resizedSrc: null,
    };
  },
  async mounted() {
    const buffer = await sharp(this.src)
      .resize(this.width, this.height, { fit: "inside" })
      .jpeg({ quality: 80 })
      .toBuffer();

    const blob = new Blob([buffer], { type: "image/jpeg" });
    this.resizedSrc = URL.createObjectURL(blob);
  },
};
</script>
