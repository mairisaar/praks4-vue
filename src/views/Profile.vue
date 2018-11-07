<template>
	<div class="profile">
	<Navbar />

	<section class="page-content">

		<h1>Loom varjupaigas</h1>

		<div class="profile-container">

			<div class="profile-img-container">

				<div class="profile-img">

					<img class="profile-img" src="../assets/1.jpg" alt="An image of pet in shelter">

				</div>

			</div>

			<div class="profile-text-container">

				<h2 class="profile-name">Pontu</h2>

				<p class="profile-text">Isane tumepruun labradori meenutav
				segavereline kutsikas. Umbes nelja kuu vanune. Möödakäijad leidsid kutsika Annelinnast kortermaja hoovist. Kiibitud ja vaktsineeritud, parasiiditõrje tehtud.</p>

				<p class="profile-text found-date">Varjupaigas alates 23.09.2018</p>

			</div>

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
  name: 'home',
  components: {
    Navbar,
    Fter,
  },
};
</script>
