<template>
  <div class="hello">
    <header class="other-page">
    <div class="menu">
      <h1>Loomade varjupaik</h1>
      <nav>
        <label class="burger" for="toggle">&#9776;</label>
        <input type="checkbox" id="toggle"/>

        <div class="menu-links">

          <ul>
            <li><router-link exact-active-class="active" 
            to="/">Avaleht</router-link></li>
            <li><router-link exact-active-class="active" 
            to="/found">Loomad varjupaigas</router-link></li>
            <li><router-link exact-active-class="active" 
            to="/lost">Kaotatud loomad</router-link></li>
            <li><router-link exact-active-class="active" 
            to="/donate">Toeta varjupaika</router-link></li>
            <li><router-link exact-active-class="active" 
            to="/about">Loomade varjupaigast</router-link></li>
            <li><router-link exact-active-class="active" 
            to="/">Kontakt</router-link></li>
          </ul>
        </div>
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

.other-page {
  position: relative;
  height: 60px;
  background-color: #5b7851;
}

nav {
  height: 60px;
  max-width: 60%;
}

@media only screen and (max-width: 480px) {
  
  .menu h1 {
    max-width: 80%;
  }

  nav {
    max-width: 15%;
  }
}

</style>