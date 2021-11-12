<template lang="pug">
div
  <Nav title="#StaySecure" />
  section#posts.posts-list
    include ../../pug-mixins/header
    article.posts-section-jumbotron(aria-label="Sekcja nagłówkowa" aria-labelledby="jumbotron-header")
      h1#jumbotron-header.jumbotron-header Wpisy na #StaySecure
      p.jumbotron-description
        | Zadbaj o bezpieczeństwo swoje oraz bliskich
    article.posts-section-content
      +header('Zacznijmy od tego')
      .posts-section-content__wrapper
        ul.list__wrapper
          li.list-item(v-for="post in letsStartWithPosts" :key="post.id")
            span.created_at
              | {{ post.created_at }}
            <nuxt-link class="list-item__header" :title="post.badge" :to="'posts/'+post.name">
              | {{ post.title }}
            </nuxt-link>
            p.list-item__description
              | {{ post.description }}
    article.posts-section-content
      +header('Wszystkie wpisy')
      .posts-section-content__wrapper
        ul.list__wrapper
          li.list-item(v-for="post in best_posts" :key="post.id")
            span.created_at
              | {{ post.created_at }}
            <nuxt-link class="list-item__header" :title="post.badge" :to="'posts/'+post.name">
              | {{ post.title }}
            </nuxt-link>
            p.list-item__description
              | {{ post.description }}
  <Footer />
</template>

<script>
import { best_posts } from '@/components/Main/posts/best-posts'

export default {
	name: 'Posts',
  data: () => ({
    best_posts
  }),
  computed: {
    letsStartWithPosts() {
      return best_posts.slice(0, 3);
    }
  }
};
</script>

<style lang="scss" scoped>
@import './single_posts.styles.scss';
</style>
