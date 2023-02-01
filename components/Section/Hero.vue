<template>
  <div>
    <div class="bg-image min-h-screen">
      <div class="bg-opacity"></div>
    </div>
    <!-- <div
      class="bg-indigoBlue | | min-h-screen relative grid place-content-center text-center text-white"
    >
      <div class="min-h-[50%] flex flex-col">
        <p class="mb-2">WELCOME TO CHAROUS CLEANING. AGENCY IN BERLIN.</p>

        <button
          class="border border-white py-4 px-4 rounded max-w-min mx-auto font-bold"
        >
          Discover
        </button>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "SectionHome",
};
</script>

<style lang="css">
.bg-image {
  background-size: cover;
  background-image: url("../../assets/images/heroBkgd.jpg");
  background-repeat: no-repeat, repeat;
}

.bg-opacity {
  background-color: rgba(0, 0, 0, 0.8);
  background-size: cover;
}
</style>
