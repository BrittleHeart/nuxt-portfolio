<template lang="pug">
div
  section#contact.contact-section
    include ../../../pug-mixins/header
    include ../../../pug-mixins/subheader
    +header('Kontakt')

    #contact_form.contact-section-form(aria-label="Wypełnij ponizszy formularz" aria-labelledby="contact_form_header")
      +subHeader('Wypełnij ponizszy formularz')
      include pug-partials/form-article

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
    modalShown: false
  })
}
</script>

<style lang="scss" scoped>
@import './contact.styles.scss'
</style>