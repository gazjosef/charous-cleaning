<template>
  <div class="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!">
      <img
        class="rounded-t-lg"
        src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
        alt=""
      />
    </a>
    <div class="p-6">
      <h5 class="text-xl font-medium mb-2">{{ title }}</h5>
      <p class="text-base mb-4">{{ excerpt }}</p>

      <UIButton />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    excerpt: String,
  },
  name: "UiCard",
};
</script>

<style lang="scss" scoped></style>
