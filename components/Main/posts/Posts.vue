<template lang="pug">
section#posts.posts-section
  include ../../../pug-mixins/header

  .posts_heading
    .left_side
      +header('Wpisy')
    .right-side
      <nuxt-link to="/posts" class="button-gray" title="zobacz więcej">
        | Zobacz więcej
      </nuxt-link>
  .single-post(v-for='post in best_posts' :key='post.id')
    span.created_at
      | {{ post.created_at }}
    <nuxt-link class="single-post__header" :title="post.badge" :to="'posts/'+post.id">
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
  })
};
</script>

<style lang="scss" scoped>
@import './posts.styles.scss';
</style>
