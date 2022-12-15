<template>
  <div>
    <Test />
    <Header />
    <Tutorial />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "IndexPage",
});
</script>

<styles>
@tailwind base;
@tailwind components;
@tailwind utilities;
</styles>
