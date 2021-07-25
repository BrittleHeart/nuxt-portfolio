<template lang="pug">
  section.wrapper(aria-label="Zawartość postu" aria-labelledby="content-wrapper")
    <Nav title="#StaySecure" />
    div.container#content-wrapper
      .content
        nav(aria-label="breadcrumb")
          ol.breadcrumb
            li.breadcrumb-item
              a(href="/") start
            li.breadcrumb-item
              a(href="/posts") wpisy
            li.breadcrumb-item.active
              | {{ getCurrentPage }}
        <slot></slot>
    footer.footer-content
      <Footer />
</template>

<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer/Footer.vue";

export default {
  components: {
    Nav,
    Footer
  },
  computed: {
    getCurrentPage() {
      return this.$router.history.current.name;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/node_modules/bootstrap/scss/bootstrap";
@import "../single_posts.styles.scss";
@import "~/assets/scss/colors.scss";

.content {
  padding: 40px 0;
  font-family: Poppins, sans-serif;
  width: 100%;
  margin: 0 auto;
  font-smoothing: antialiased;
  -webkit-font-smoothing: antialiased;
}
</style>
