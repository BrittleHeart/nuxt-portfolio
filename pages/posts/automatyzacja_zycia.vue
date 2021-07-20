<template lang="pug">
  section.wrapper(aria-label="Zawartość postu" aria-labelledby="content-wrapper")
    div.container#content-wrapper
      <Nav title="#StaySecure" />

      .content
        include:markdown-it ./posts_dir/automatyzacja-zycia.md
      
      <Footer />
</template>

<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer/Footer.vue";

export default {
  components: {
    Nav,
    Footer
  }
};
</script>

<style lang="scss" scoped>
@import "~/node_modules/bootstrap/scss/bootstrap";
@import "~/assets/scss/colors.scss";

.main-header__navbar {
  background: none;
  box-shadow: none;
  padding: 0;
  margin-bottom: 10px;
}

.content {
  padding: 40px 0;
  font-family: Poppins, sans-serif;
  width: 80%;
  margin: 0 auto;
}
</style>
