<template>
  <div class="bg-aliceBlue min-h-screen mx-auto | grid place-content-center">
    <div class="container">
      <section class="max-w-5xl mb-20 | text-gray-700">
        <UIPrimaryHeading title="Testimonials" />

        <div class="grid md:grid-cols-3 gap-6 lg:gap-12 text-center">
          <UITestimonialCard
            image="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
            name="Maria Smantha"
            location="Lane Cove"
            review="I recently had a leak in my pool and was in desperate need of a repair. I called Charous Cleaning and was impressed by the prompt and professional service I received. The technicians arrived on time, assessed the issue, and had the repair completed in no time."
          />
          <UITestimonialCard
            image="https://mdbootstrap.com/img/Photos/Avatars/img%20(2).jpg"
            name="Lisa Cudrow"
            location="Chatswood"
            review="I have been using Charous Cleaning for regular pool cleaning and maintenance for the past year and I am extremely happy with their services. The team is always prompt, professional, and thorough in their cleaning."
          />
          <UITestimonialCard
            image="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
            name="John Smith"
            location="Longueville"
            review="I recently started using Charous Cleaning for all of my pool maintenance needs and I couldn't be happier. The team is knowledgeable, friendly, and always goes above and beyond to make sure my pool is in top condition."
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionTestimonial",
};
</script>

<style lang="scss" scoped></style>
