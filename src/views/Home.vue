<template>
<div class="home">
<Homenavbar />
<section class="page-content">

<div id="contact">

<h1>Kontakt</h1>

<div class="content">
<div class="info">

<p>Oleme avatud iga päev 10 - 18.</p>

<div class="address">
<p>555 12 345</p>
<p>info@varjupaik.ee</p>
<p>Kopli 1a, Tartu</p>
</div>
<p>Bussid 4, 9, 11 ja 12, peatus Alasi.</p>
</div>

<div class="map">
<iframe class="map-content" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8374.241807210394!2d26.705566160572864!3d58.35021658953723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eb3747e8c9e947%3A0xcbc461423c9d99c8!2sKopli+1a%2C+50115+Tartu!5e0!3m2!1sen!2see!4v1539801881809"  allowfullscreen></iframe>
</div>

</div>

</div>

</section>

<div class="clearfix"></div>

<Fter />
</div>
</template>

<script>
// @ is an alias to /src
import Homenavbar from '@/components/Homenavbar.vue';
import Fter from '@/components/Fter.vue';

export default {
  name: 'home',
  components: {
    Homenavbar,
    Fter,
  },
};
</script>

<style scoped>
	.content p {
	font-family: 'Krub', sans-serif;
	font-size: 18px;
	margin-left: auto;
	margin-right: auto;
}

.adress {
	padding-top: 10px;
	padding-bottom: 10px;
}

.info {
	float: left;
	width: 30%;
	line-height: 200%;
}

.map {
	float: right;
	width: 60%;
	border: 0;
}

.map-content {
	width: 60vw;
	height: 60vw;
	max-width: 580px;
	max-height: 580px;
}
</style>
