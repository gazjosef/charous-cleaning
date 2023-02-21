<template>
  <div class="bg-white max-w-sm rounded-lg shadow-lg">
    <a href="#!">
      <img
        class="rounded-t-lg w-full h-64 object-cover"
        :src="require(`@/assets/images/${image}.jpg`)"
        :alt="image"
      />
    </a>
    <div class="h-72 | flex flex-col justify-between">
      <div class="pt-6 px-6">
        <UISecondaryHeading :title="title" />

        <UIParagraph :text="excerpt" />
      </div>
      <div class="p-6">
        <UIButton />
      </div>
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
