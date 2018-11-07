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
