<template>
  <header class="header">
    <div class="header__logo">
      <h1>Header</h1>
    </div>
    <nav class="header__nav">
      <ul>
        <li>Home</li>
        <li>Services</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
.header {
  background: red;

  display: flex;
  justify-content: space-between;
}

ul {
  display: flex;
}

li {
  padding-left: 10px;
  padding-right: 10px;
}
</style>
