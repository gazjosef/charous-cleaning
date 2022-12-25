<template>
  <div class="min-h-screen mx-auto grid place-content-center text-center">
    <div class="container">
      <section class="mb-20 text-gray-700">
        <div class="text-center md:max-w-xl lg:max-w-3xl mx-auto">
          <h3 class="text-3xl font-bold mb-6 text-gray-800">Testimonials</h3>
        </div>

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
