<template lang="pug">
nav#start.main-header__navbar(aria-label="Główna nawigacja" aria-labelledby="main_navbar")
  #main_navbar.navbar__wrapper
    a.navbar__wrapper-header {{title}}
    ul.navbar__wrapper-link-list
      li.link-list__item(v-for="route in routes")
        a(:href="route.url" :key="route.id") {{route.name}}
</template>

<script>
import { routes } from '@/routes'

export default {
	name: 'Nav',
	props: ['title'],
	data: () => ({
		routes
	}),
};
</script>

<style lang="scss">
@import '@/assets/scss/mixins.scss';
@import '@/assets/scss/colors.scss';

.main-header__navbar {
	width: 100%;
	padding: 15px;
	background-color: #fafafa;
	box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.25);

	.navbar__wrapper {
		@include flex-with-direction(center);

		align-items: center;
	}

	.navbar__wrapper-header {
		color: #80deea;
		font-family: 'Poppins', sans-serif;
		font-weight: 600;
		font-size: 30px;
		line-height: 150.5%;
		letter-spacing: -0.01em;
	}

	.navbar__wrapper-link-list {
		list-style: none;
	}

	.link-list__item {
		display: inline-block;
    margin-right: 20px;
    padding-top: 10px;

    &:last-child {
      margin-right: 0;
    }
	}

  .link-list__item:first-child a {
    font-weight: 600;
    color: #37474F;
  }

	a {
		text-decoration: none;
		font-family: 'Poppins', sans-serif;
		font-weight: 300;
    color: #000000;
    font-size: 14px;
	}
}

@media screen and(min-width: 768px) {
	.main-header__navbar {
		.navbar__wrapper{
			@include flex-with-direction(space-between, row);
		}

		.navbar__wrapper-header {
			font-size: 35px;
		}

		.link-list__item {
			padding-top: 0;
			margin-right: 30px;

			&:last-child {
				padding-right: 10px;
			}
		}

		.link-list__item a {
			font-size: 17px;
		}
	}
}

@media screen and(min-width: 1200px) {
	.main-header__navbar {
		.navbar__wrapper-header {
			font-size: 40px;
		}

		.link-list__item {
			padding-top: 0;
			margin-right: 30px;

			&:last-child {
				padding-right: 10px;
			}
		}

		.link-list__item a {
			font-size: 20px;
		}
	}
}
</style>
