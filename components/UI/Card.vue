<template>
  <div class="bg-white max-w-sm rounded-lg shadow-lg">
    <a href="#!">
      <img
        class="rounded-t-lg"
        :src="require(`@/assets/images/${image}.jpg`)"
        :alt="image"
      />
    </a>
    <div class="p-6">
      <UISecondaryHeading :title="title" />

      <UIParagraph :text="excerpt" />

      <UIButton />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    title: String,
    excerpt: String,
  },
  name: "UiCard",
};
</script>

<style lang="scss" scoped></style>
