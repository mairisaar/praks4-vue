<template>
  <div>
    <Navbar />

    <div class="clearfix"></div>

    <section class="page-content">

    <h1>Loomad varjupaigas</h1>

    <div class="found-c">
      <router-link to="/profile">
        <div class="found-info">

          <div class="found-img-container"><img class="found-img" src="../assets/1.jpg" alt="An image of animal in shelter"></div>

          <div class="found-text">

            <h3 class="animal-name">Pontu</h3>

            <div>
            Isane tumepruun labradori meenutav
            segavereline kutsikas. Umbes nelja kuu vanune.
            Möödakäijad leidsid kutsika Annelinnast
            kortermaja hoovist. Kiibitud ja vaktsineeritud,
            parasiiditõrje tehtud.
            </div>

            <div class="found-date">
            Varjupaigas alates 23.09.2018
            </div>

          </div>

        </div>

      </router-link>

      <router-link to="/profile">
        <div class="found-info">

          <div class="found-img-container"><img class="found-img" src="../assets/1.jpg" alt="An image of animal in shelter"></div>

          <div class="found-text">

            <h3 class="animal-name">Pontu</h3>

            <div>
            Isane tumepruun labradori meenutav
            segavereline kutsikas. Umbes nelja kuu vanune.
            Möödakäijad leidsid kutsika Annelinnast
            kortermaja hoovist. Kiibitud ja vaktsineeritud,
            parasiiditõrje tehtud.
            </div>

            <div class="found-date">
            Varjupaigas alates 23.09.2018
            </div>

          </div>

        </div>

      </router-link>

      <router-link to="/profile">
        <div class="found-info">

          <div class="found-img-container"><img class="found-img" src="../assets/1.jpg" alt="An image of animal in shelter"></div>

          <div class="found-text">

            <h3 class="animal-name">Pontu</h3>

            <p>
            Isane tumepruun labradori meenutav
            segavereline kutsikas. Umbes nelja kuu vanune.
            Möödakäijad leidsid kutsika Annelinnast
            kortermaja hoovist. Kiibitud ja vaktsineeritud,
            parasiiditõrje tehtud.
            </p>

            <p class="found-date">
            Varjupaigas alates 23.09.2018
            </p>

          </div>

        </div>

      </router-link>

    </div>

  </section>

  <Fter />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import Fter from '@/components/Fter.vue';

export default {
  name: 'found',
  components: {
    Navbar,
    Fter,
  },
};
</script>

<style scoped>

  .found-c {
  display: grid;
  grid-template-columns: auto auto auto;
}

.found-info {
  height: 500px;
  width: 360px;
  display: block;
}

.found-img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.found-img-container {
  height: 300px;
  width: 300px;
  margin-left: 30px;

}

.found-text {
  margin-left: 30px;
  font-family: 'Krub', sans-serif;
  font-size: 14px;
  line-height: 18px;
}

.animal-name {
  font-family: 'Krub', sans-serif;
  font-size: 24px;
  margin-top: 10px;
  line-height: 31px;
  font-weight: normal;
}

.found-date {
  margin-top: 10px;
}

.found-c a {
  text-decoration: none;
  color: #000;
}

</style>
