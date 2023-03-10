<template>
  <p class="max-w-lg mb-4 | text-left text-neutral-500 text-lg tracking-wider">
    {{ text }}
  </p>
</template>

<script>
export default {
  props: {
    text: String,
  },
  name: "UIParagraph",
};
</script>

<style lang="scss" scoped></style>
