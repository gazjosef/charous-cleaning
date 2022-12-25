<template>
  <div class="min-h-screen grid place-content-center text-center">
    <div class="container">
      <h1 class="primary-heading | mb-4">Services</h1>
      <div class="grid md:grid-cols-3 gap-4">
        <UICard
          title="helloWorld"
          excerpt="Some quick example text to build on the card title and make up the bulk
        of the card's content."
        />
        <UICard
          title="helloWorld2"
          excerpt="Some quick example text to build on the card title and make up the bulk
        of the card's content."
        />
        <UICard
          title="helloWorld3"
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
