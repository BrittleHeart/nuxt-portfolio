<template lang="pug">
  section.wrapper(aria-label="Zawartość postu" aria-labelledby="content-wrapper")
    div.container#content-wrapper
      <Nav title="#StaySecure" />

      .content
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">start</a></li>
            <li class="breadcrumb-item"><a href="/posts">wpisy</a></li>
            <li class="breadcrumb-item active" aria-current="page">{{getCurrentPage}}</li>
          </ol>
        </nav>
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
  },
  computed: {
    getCurrentPage() {
      return this.$router.history.current.name
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/node_modules/bootstrap/scss/bootstrap";
@import "./single_posts.styles.scss";
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
  font-smoothing: antialiased;
  -webkit-font-smoothing: antialiased;
}
</style>
