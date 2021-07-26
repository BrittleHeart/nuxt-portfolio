<template lang="pug">
div
  section#newsletter.contact-section
    include ../../../pug-mixins/header
    include ../../../pug-mixins/subheader
    +header('Newsletter')

  .newsletter(aria-label="Zapisz się na newsletter" aria-labelledby="newsletter-form")
    +subHeader('Zapisz się na newsletter')
    include pug-partials/newsletter-article

</template>

<script>
import { topics } from './topics'

export default {
  name: 'Contact',
  data: () => ({
    topics,
    modalShown: false,
    chosenTopic: ''
  })
}
</script>

<style lang="scss" scoped>
@import './contact.styles.scss'
</style>