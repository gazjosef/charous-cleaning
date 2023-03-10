<template>
  <div class="min-h-screen | grid place-content-center | text-center">
    <UIPrimaryHeading title="About us" />

    <div class="grid md:grid-cols-2 gap-16">
      <div class="grid place-content-center">
        <UIParagraph
          text="Welcome to our pool cleaning business! We are a team
        of experienced and highly skilled professionals, dedicated to providing
        top-notch pool cleaning services to our valued clients. Our goal is to
        make sure that every pool we clean is sparkling clean, safe, and ready
        for use."
        />
        <UIParagraph
          text="With years of experience in the pool cleaning
        industry, we have the knowledge and expertise to tackle even the
        toughest cleaning tasks. We understand the importance of
        keeping your pool in top condition, and that's why we strive to provide
        you with the best possible service."
        />
      </div>
      <div class="grid place-content-center">
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
