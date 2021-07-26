<template lang="pug">
#header_jumbotron.header-jumbotron(aria-label="Jumbotron dla głównego nagłówka" aria-labelledby="header")
  #header_jumbotron_modal.header-jumbotron__modal(style={display: 'none'})
    h1.jumbotron__modal-header Poczekaj chwilkę
    p.jumbotron__modal-description
      | Jezeli chcesz pobrać moje CV, proszę skontaktuj się ze mną.
      | Ponizej znajdziesz niezbędny formularz. 
      | Serdecznie dziękuję za okazane zainteresowanie!

  .header-jumbotron__wrapper
    h1.header-jumbotron__header
      | Bartosz
      span  Pazdur
    p.header-jumbotron__description
      | Programista stron internetowych, pasjonat dobrej kuchni, książek, 
      | filmów oraz stałego doskonalania samego siebie. 
      | Obecnie zatrudniony w przedsiębiorstwie Encode IT Rafał Jaseniuk
    .download-my-cv-action
      a.button-primary(href="mailto:b.pazdur@yahoo.com") Skontaktuj się
    .move-down
  span.material-icons
    | keyboard_arrow_down
</template>

<script>
export default {
	name: 'Jumbotron'
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixins.scss';
@import '@/assets/scss/colors.scss';

.header-jumbotron {
	@include flex-with-direction(center);
	@include setPosition;

	height: 80%;
}

.header-jumbotron__wrapper {
	padding: 0 5px;
}

.header-jumbotron__wrapper .header-jumbotron__header {
	@include header;

	font-weight: 300;
	font-size: 43px;
	line-height: 210.5%;
	letter-spacing: -0.01em;
	color: $pure-white;
	text-align: center;

	span {
		color: $main-accent-color;
	}
}

.header-jumbotron__description {
	@include description;

	line-height: 170%;
	letter-spacing: 0.005em;
	color: $little-darken-white;
}

.download-my-cv-action {
	@include flex-with-direction(center);

	align-items: center;
	margin-top: 70px;

	.button-primary {
		font-size: 14px;

		@media screen and (min-width: 768px) {
			font-size: 17px;
		}
		@media screen and (min-width: 1200px) {
			font-size: 20px;
		}
	}
	
}

.header-jumbotron .material-icons {
	@include setPosition(absolute, initial, initial, 50%, 0);

	transform: translate(-50%, 30%);
	font-size: 3rem;
	color: $pure-white;
}

@media screen and (min-width: 768px) {
	.header-jumbotron__wrapper .header-jumbotron__header {
		font-size: 60px;
		line-height: 190%;
	}

	.header-jumbotron__description {
		font-size: 19px;
	}

	.header-jumbotron .material-icons {
		@include setPosition(absolute, initial, initial, 50%, 0);

		transform: translate(-50%, 100%);
		font-size: 4rem;
	}

	 .download-my-cv-action button {
		 font-size: 20px;
	 }
}

@media screen and (min-width: 992px) {
	.header-jumbotron__wrapper .header-jumbotron__header {
		font-size: 70px;
		line-height: 130%;
		padding-top: 30px;
	}

	.header-jumbotron__description {
		font-size: 25px;
	}
}

@media screen and (min-width: 1200px) {
	.header-jumbotron__wrapper .header-jumbotron__header {
		font-size: 91px;
	}

	.header-jumbotron__description {
		font-size: 25px;
		width: 75%;
		margin: 0 auto;
	}
}

@media screen and (min-width: 1800px){
	.header-jumbotron__wrapper .header-jumbotron__header {
		font-size: 96px;
	}

	.header-jumbotron__description {
		font-size: 28px;
		width: 75%;
		margin: 0 auto;
	}
}
</style>
