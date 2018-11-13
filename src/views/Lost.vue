<template>
<div class="lost">
	<Navbar />

	<section class="page-content">

		<h1>Kadunud loomad</h1>

		<div class="lost-container">

			<div class="ads">
				<table id="output">
                    <tr>
                        <td class="lost-img-container"><img class="lost-img" src="../assets/1.jpg" alt="An image of lost pet."></td>
                        <td id="add-text">
	                        <div class="add-date">
								<p>28.09.2018</p>
							</div>

							<div class="add-contact">
								<p>Leidmisest teata: </p>
								<p>koer.kadunud@gmail.com</p>
							</div>

							<div class="add-info">
								<p>Tartus Tammelinnas kadunud isane tumepruun labradori tõugu kutsikas.</p>
							</div>
                        </td>
                    </tr>

                    <tr>
                        <td class="lost-img-container"><img class="lost-img" src="../assets/1.jpg" alt="An image of lost pet."></td>
                        <td id="add-text">
	                        <div class="add-date">
								<p>28.09.2018</p>
							</div>

							<div class="add-contact">
								<p>Leidmisest teata: </p>
								<p>koer.kadunud@gmail.com</p>
							</div>

							<div class="add-info">
								<p>Tartus Tammelinnas kadunud isane tumepruun labradori tõugu kutsikas.</p>
							</div>
                        </td>
                    </tr>

                    <tr>
                        <td class="lost-img-container"><img class="lost-img" src="../assets/1.jpg" alt="An image of lost pet."></td>
                        <td id="add-text">
	                        <div class="add-date">
								<p>28.09.2018</p>
							</div>

							<div class="add-contact">
								<p>Leidmisest teata: </p>
								<p>koer.kadunud@gmail.com</p>
							</div>

							<div class="add-info">
								<p>Tartus Tammelinnas kadunud isane tumepruun labradori tõugu kutsikas.</p>
							</div>
                        </td>
                    </tr>
                </table>

			</div>

			<div class="announce">

				<div class="add-heading">

					<h2>Kuulutuse lisamine</h2>

				</div>

				<div class="add-fields">

					<div class="date">

						<label for="date-input">Kadumise aeg</label>

						<input class="date-input" type="date"  name="lost-date" placeholder="Looma kadumise kuupäev...">

					</div>

					<div class="owner-contact">

						<label for="owner-contact-input">Loomaomaniku telefon või e-post</label>

						<input class="owner-contact-input" type="text" name="owner-contact" placeholder="Loomaomaniku kontaktivahend...">


					</div>


					<div class="add-info">

						<label for="add-info-input">Kadunud looma kirjeldus</label>

						<input class="add-info-input" type="text-area" name="add-info" placeholder="Kirjelda kadunud looma...">

					</div>

					<div class="add-img">

						<label for="add-img-input">Pilt kadunud loomast</label>

						<input class="add-img-input" type="file" name="add-img" placeholder="Lisa pilt...">

					</div>

					<div class="add-button-container">

						<a href=""><div class="add-button">

							<p>Lisa kuulutus</p>

						</div></a>

					</div>

				</div>

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
  name: 'lost',
  components: {
    Navbar,
    Fter,
  },
};
</script>

<style scoped>

	.lost-container {
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	width: 100%;
	margin-right: auto;
	margin-left: 0;
}

.ads {
	margin-top: 30px;
}

.lost-add-container {
	width: 360px;
	height: 180px;
	display: flex;
	justify-content: space-between;
	margin-bottom: 30px;
}

.add-text {
	width: 180px;
}

.add-date, .add-contact {
	margin-bottom: 15px;
}

.add-date, .add-contact, .add-info-t{
	font-family: 'Krub', sans-serif;
	font-size: 14px;
	font-weight: normal;
	line-height: 18px;
	margin-left: 10px;
}

.lost-img-container {
	height: 180px;
	width: 180px;
}

.lost-img {
	height: 100%;
	width: 100%;
	object-fit: cover;
}

.announce {
	height: 1250px;
	width: 60%;
	margin-right: 0;
	margin-left: auto;
}

.add-heading {
	width: 100%;
	height: 110px;
	display: flex;
	align-items: center;
}

.add-heading h2 {
	font-family: 'Krub', sans-serif;
	font-size: 36px;
	font-weight: normal;
	margin-left: 34px;
}

.add-fields {
	width: 100%;
	height: 1100px;
	background-color: #F3F2F2;
}

.date, .owner-contact, .add-info, .add-img {
	display: flex;
	flex-direction: column;
	width: 80%;
	justify-content: space-around;
	margin-right: auto;
	margin-left: auto;
	font-family: 'Krub', sans-serif;
	font-weight: normal;
}

.date label, .owner-contact label, .add-info label, .add-img label {
	font-size: 18px;
	margin-top: 60px;
	padding-bottom: 10px;
	color: #000;
	width: 100%;
	display: block;
}

.date input, .owner-contact input {
	line-height: 23px;
	height: 65px;
	border: solid 1px #5A5A5A;
}

.add-info input {
	line-height: 23px;
	height: 260px;
	border: solid 1px #5A5A5A;
}

.add-button-container {
	margin-top: 60px;
	margin-left: auto;
	margin-right: auto;
	width: 80%;
	display: flex;
	justify-content: flex-end;
}

.add-button {
	max-width: 30vw;
	min-width: 200px;
	height: 65px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #5b7851;
	font-family: 'Krub', sans-serif;
	font-weight: normal;
	font-size: 24px;
	border: solid 1px #ffffff;
	filter: drop-shadow(0px 4px 4px #909090);
}

.add-button-container a{
	text-decoration: none;
	color: #fff;
}

</style>
