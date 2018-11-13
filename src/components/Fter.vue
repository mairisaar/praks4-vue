<template>
  <div class="hello">
    <footer>

    <ul>

      <li><a href=""><i class="fas fa-envelope-square"></i> info@varjupaik.ee</a></li>
      <li class="logo"><a href="">Loomade varjupaik</a></li>
      <li><a href=""><i class="fas fa-phone-square"></i> 555 12 345</a></li>

    </ul>

  </footer>

  </div>
</template>

<script>
export default {
  name: 'fter',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

footer {
  height: 100px;
  width: 100vw;
  text-align: center;
  margin-top: 110px;
}

footer li {
  padding-top: 20px;
  display: inline-block;
  text-align: center;
  height: 60px;
  width: 200px;
}

footer a {
  text-decoration: none;
  color: #000;
  font-size: 18px;
  font-family: 'Krub', sans-serif;
  text-align: center;
}

.logo a {
  font-family: 'Merienda', cursive;
  font-weight: bold;
}

</style>
