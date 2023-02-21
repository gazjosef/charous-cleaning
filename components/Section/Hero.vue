<template>
  <div>
    <div class="bg-image min-h-screen">
      <div class="bg-opacity | grid place-content-center">
        <div class="min-h-[50%] | text-center text-white">
          <h1 class="mb-3 | text-4xl">WELCOME TO CHAROUS CLEANING.</h1>
          <p class="mb-3">
            Expert Pool Cleaning, Repairs, and Service in Lane Cove and
            Surrounding Suburbs.
          </p>

          <button
            class="border border-white py-2 px-4 rounded mx-auto font-bold"
          >
            Enquire Now
          </button>
        </div>
      </div>
    </div>
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
  position: relative;
}

.bg-opacity {
  background-color: rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 100%;

  top: 0;
  left: 0;
  position: absolute;
}
</style>
