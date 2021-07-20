<template lang="pug">
section#posts.posts-section
  include ../../../pug-mixins/header

  .posts_heading
    .left_side
      +header('Wpisy')
    .right-side
      button.button-gray(href="posts.html") Zobacz więcej
  .single-post(v-for='post in best_posts' :key='post.id')
    span.created_at
      //- TODO: Po kliknięciu na wpis w portfolio, przekierować do mojego bloga, którego musze stworzyć!!!!
      | {{ post.created_at }}
    a.single-post__header(:title='post.badge' href='')
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
  })
};
</script>

<style lang="scss" scoped>
@import './posts.styles.scss';
</style>
