<template lang="pug">
div
	<Header>
		<Nav />
		<Jumbotron />
	</Header>

	//- application main content
	main.main-content#content(aria-label="Treść główna" aria-labelledby="main_content_wrapper")
		section#main_content_wrapper.main-content__wrapper
			<AboutMe />
			<Contact />
			<Posts />
			<div id="fb-root"></div>

			<div id="fb-customer-chat" class="fb-customerchat"></div>
			
	footer.footer-content
		<Footer />
</template>

<script lang="ts">
import Header from "@/components/Header/Header.vue";
import Nav from "@/components/Nav.vue";
import Jumbotron from "@/components/Header/Jumbotron.vue";
import AboutMe from "@/components/Main/aboutme/AboutMe.vue";
import Contact from "@/components/Main/contact/Contact.vue";
import Posts from "@/components/Main/posts/Posts.vue";
import Footer from "@/components/Footer/Footer.vue";
import { loadAOS, loadFacebookApi } from "../load-thirdparty-lib";

export default {
  name: "App",
  components: {
    Header,
    Nav,
    Jumbotron,
    AboutMe,
    Contact,
    Posts,
    Footer
  },
  mounted() {
    loadAOS();
    loadFacebookApi();
  }
};
</script>

<style lang="scss">
@import "./assets/scss/mixins.scss";
@import "./assets/scss/colors.scss";

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  max-width: 100vw;
  background: $nav-white-color none;
}

body,
html {
  max-height: 100vh;
  scroll-behavior: smooth;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content__wrapper-header {
  @include header();

  @media screen and (min-width: 768px) {
    font-size: 27px;
  }

  @media screen and (min-width: 992px) {
    font-size: 30px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 45px;
  }
}

.content__wrapper-subheader {
  @include header("subheader");

  @media screen and (min-width: 768px) {
    font-size: 23px;
  }

  @media screen and (min-width: 992px) {
    font-size: 25px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 35px;
  }
}

.button-primary {
  @include button();
}

.button-secondary {
  @include button("secondary");
}

.button-gray {
  @include button("gray");
}

.divider {
  @include divider;
}

.footer-content {
  background: $pure-white;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
}
</style>
