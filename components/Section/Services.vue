<template>
  <div
    id="#services"
    class="bg-aliceBlue min-h-screen | grid place-content-center | text-center"
  >
    <div class="container | my-20">
      <UIPrimaryHeading title="Check out our services" />

      <div class="grid md:grid-cols-3 gap-4">
        <UICard
          image="clean"
          title="Clean"
          excerpt="Maintain and preserve the cleanliness, hygiene, and overall appearance of a swimming pool"
        />
        <UICard
          image="repair2"
          title="Repair"
          excerpt="Fix any problems or issues that arise with a swimming pool, including its structure, equipment, and features."
        />
        <UICard
          image="service"
          title="Service"
          excerpt="Regular maintenance and upkeep of a swimming pool to ensure its cleanliness, safety, and proper operation. "
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
