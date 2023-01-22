<template>
  <div class="min-h-screen | grid place-content-center | text-center">
    <UIPrimaryHeading title="About us" />

    <div class="grid md:grid-cols-2 gap-4">
      <div class="grid place-content-center">
        <UIParagraph
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. In at enim
          ut, explicabo sequi eligendi."
        />
      </div>
      <div class="grid place-content-center">
        <!-- <img
          src="../../assets/images/jubeo-hernandez-ZmWLGkPe1Sg-unsplash.jpg"
          class="p-1 bg-white border rounded max-w-sm"
          alt="..."
        /> -->

        <UIImage image="repair2" alt="Hello World" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionStory",
};
</script>

<style lang="scss" scoped></style>
