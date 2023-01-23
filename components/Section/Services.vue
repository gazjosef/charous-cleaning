<template>
  <div
    id="#services"
    class="bg-aliceBlue min-h-screen | grid place-content-center | text-center"
  >
    <div class="container">
      <UIPrimaryHeading title="Check out our services" />

      <div class="grid md:grid-cols-3 gap-4">
        <UICard
          image="clean"
          title="Clean"
          excerpt="Some quick example text to build on the card title and make up the bulk
        of the card's content."
        />
        <UICard
          image="repair2"
          title="Repair"
          excerpt="Some quick example text to build on the card title and make up the bulk
        of the card's content."
        />
        <UICard
          image="service"
          title="Service"
          excerpt="Some quick example text to build on the card title and make up the bulk
        of the card's content."
        />
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
