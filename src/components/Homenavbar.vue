<template>
  <div class="hello">
    <header class="front-page">
    <div class="menu">
      <h1>Loomade varjupaik</h1>
      <nav>
        <label class="burger" for="toggle">&#9776;</label>
        <input type="checkbox" id="toggle"/>

        <div class="menu-links">

          <ul>
            <li><router-link to="/">Avaleht</router-link></li>
            <li><router-link to="/found">Loomad varjupaigas</router-link></li>
            <li><router-link to="/lost">Kaotatud loomad</router-link></li>
            <li><router-link to="/donate">Toeta varjupaika</router-link></li>
            <li><router-link to="/about">Loomade varjupaigast</router-link></li>
            <li><router-link to="/">Kontakt</router-link></li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
  <div class="top"></div>
  </div>
</template>

<script>
export default {
  name: 'homenavbar',

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.front-page {
  position: absolute;
  background-color: #4D3F35;
  background-image:
    linear-gradient(
      rgba(77, 63, 53, 0.4),
      rgba(77, 63, 53, 0.4)
      ),
    url("../assets/hero2.jpg");
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  background-size: cover;
}

</style>
