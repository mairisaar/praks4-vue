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

<style scoped>
	.profile-container {
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	width: 100%;
}

.profile-img-container {
	width: 50vw;
	height: 50vw;
	margin-left: auto;
	margin-right: auto;
}

.profile-img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.profile-text-container {
	width: 30vw;
	font-family: 'Krub', sans-serif;
	font-weight: normal;
	margin-left: 5vw;
	margin-right: auto;
}

.profile-name {
	font-size: 36px;
	font-weight: normal;
	margin-bottom: 5vw;
}

.profile-text {
	font-size: 18px;
	line-height: 22px;
}
</style>
