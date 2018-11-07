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

      <a href="">
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

      </a>

      <a href="" class="animal-profile">
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

      </a>

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
