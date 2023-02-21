<template>
  <nav class="relative container bg-white mx-auto p-6">
    <!-- FLEX CONTAINER -->
    <div class="flex items-center justify-between">
      <!-- LOGO -->
      <div class="pt-2">
        <h1 class="font-medium text-3xl uppercase">Charous Cleaning</h1>
      </div>

      <!-- MENU ITEMS -->
      <div class="hidden md:flex space-x-6">
        <a href="#home" class="hover:text-indigoBlue">Home</a>
        <a href="#services">Services</a>
        <a href="#story">Story</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NuxtNavbar",
};
</script>

<style lang="scss" scoped></style>
