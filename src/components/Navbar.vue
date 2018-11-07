<template>
  <div class="hello">
    <header class="other-page">
    <div class="menu">
      <h1>Loomade varjupaik</h1>
      <nav>
        <ul>
          <li><router-link to="/">Avaleht</router-link>
          <li><router-link to="/found">Loomad varjupaigas</router-link></li>
          <li><router-link to="/lost">Kaotatud loomad</router-link></li>
          <li><router-link to="/">Toeta varjupaika</router-link></li>
          <li><router-link to="/">Varjupaigast</router-link></li>
          <li><router-link to="/">Kontakt</router-link></li>
        </ul>
      </nav>
    </div>

  </header>
  </div>
</template>

<script>
export default {
  name: 'navbar',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
