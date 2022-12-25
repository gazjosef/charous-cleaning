<template>
  <div class="min-h-screen grid place-content-center text-center">
    <div class="container">
      <h1 class="mb-4 text-center text-4xl font-bold">Services</h1>
      <div class="grid md:grid-cols-3 gap-4">
        <UICard />
        <UICard />
        <UICard />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionServices",
};
</script>

<style lang="scss" scoped></style>
