<template>
<div>
<Navbar />

<section class="page-content">

<h1>Toeta loomade varjupaika</h1>

<div class="content-text">

<p>Varjupaiga igapäevast tegevust saab toetada rahaliselt meie tegevuskontole:</p>
<p>MTÜ Loomade varjupaik IBAN: EE102200221011223355</p>
<p>Igapäevase tegevuse all peame silmas eelkõige loomade toitu ja igapäevaseid raviprotseduure.
Esimesed 14 varjupaigas viibimise päeva elab loom kohaliku omavalitsuse
kostil, seejärel loetakse tema omanikuks varjupaika. Vajalik ravi ja
edasine ninaesine finantseeritakse lahkete inimeste annetustest.
Igapäevase tegevuse all peame silmas eelkõige loomade toitu
ja igapäevaseid raviprotseduure.
Esimesed 14 varjupaigas viibimise päeva elab loom kohaliku
 omavalitsuse kostil, seejärel loetakse tema omanikuks varjupaika. Vajalik ravi
ja edasine ninaesine finantseeritakse lahkete inimeste annetustest.</p>
<p>Varjupaika saabuvate omanikuta vigastatud loomade vältimatut abi
saab toetada meie kiirabikontole:</p>
<p>MTÜ Loomade varjupaik IBAN: EE522200221011223355</p>

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
  name: 'donate',
  components: {
    Navbar,
    Fter,
  },
};
</script>

<style scoped>

.content-text {
font-family: 'Krub', sans-serif;
font-weight: normal;
font-size: 18px;
line-height: 150%;
width: 90%;
margin-left: auto;
margin-right: auto;
}

.content-text p {
margin-bottom: 30px;
}

@media screen and (max-width: 787px) {
	.page-content h1 {
		height: 220px;
	}
}

@media only screen and (max-width: 480px) {
	
	.menu h1 {

	}

	.page-content h1 {
		height: 280px;
	}
}

</style>
