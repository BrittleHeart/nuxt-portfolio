<template lang="pug">
section#posts.posts-section(data-aos="zoom-in-up" data-aos-delay="70")
  include ../../../pug-mixins/header

  .posts_heading
    .left_side
      +header('Wpisy')
    .right-side
      nuxt-link.button-gray(to="/posts" title="zobacz więcej")
        | Zobacz więcej
  .single-post(v-for='post in trimPostsLength' :key='post.id')
    span.created_at
      | {{ post.created_at }}
    nuxt-link.single-post__header(:title="post.badge" :to="'posts/'+post.name")
      | {{ post.title }}
    p.single-post__description
      | {{ post.description }}
</template>

<script>
import { best_posts } from './best-posts'

export default {
	name: 'Posts',
  data: () => ({
    best_posts,
  }),
  computed: {
    trimPostsLength() {
      return this.best_posts = this.best_posts.slice(0, 3)
    }
  }
};
</script>

<style lang="scss" scoped>
@import './posts.styles.scss';
</style>
