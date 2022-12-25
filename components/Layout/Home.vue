<template>
  <div
    class="bg-indigoBlue min-h-screen relative grid place-content-center text-center"
  >
    <div class="min-h-[50%] flex flex-col">
      <h1 class="mb-2 text-5xl">Mountain</h1>

      <p class="mb-2">WELCOME TO MOUNTAIN WEBSITE. AGENCY IN BERLIN.</p>

      <button
        class="border border-white py-4 px-4 rounded max-w-min mx-auto font-bold"
      >
        Discover
      </button>
    </div>

    <!-- <div class="absolute bottom-0">
      <img src="../assets/images/waves.svg" alt="waves" />
    </div> -->

    <div class="waves text-white">Bottom</div>
  </div>
</template>

<script>
export default {
  name: "NuxtHome",
};
</script>

<style lang="css">
.waves {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.waves svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 150px;
}

.waves .shape-fill {
  fill: #ffffff;
}
</style>
