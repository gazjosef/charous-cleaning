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
            review="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id
      officiis hic tenetur quae quaerat ad velit ab hic tenetur."
          />
          <UITestimonialCard
            image="https://mdbootstrap.com/img/Photos/Avatars/img%20(2).jpg"
            name="Lisa Cudrow"
            location="Chatswood"
            review="Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid commodi."
          />
          <UITestimonialCard
            image="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
            name="John Smith"
            location="Longueville"
            review="At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti."
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
