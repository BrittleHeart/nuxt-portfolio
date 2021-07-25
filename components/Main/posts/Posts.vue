<template lang="pug">
section#posts.posts-section(data-aos="zoom-in-up" data-aos-delay="70")
  include ../../../pug-mixins/header

  .posts_heading
    .left_side
      +header('Wpisy')
    .right-side
      <nuxt-link to="/posts" class="button-gray" title="zobacz więcej">
        | Zobacz więcej
      </nuxt-link>
  .single-post(v-for='post in trimPostsLength' :key='post.id')
    span.created_at
      | {{ post.created_at }}
    <nuxt-link class="single-post__header" :title="post.badge" :to="'posts/'+post.name">
      | {{ post.title }}
    </nuxt-link>
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
