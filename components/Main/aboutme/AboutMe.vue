<template lang="pug">
section.about-me#aboutme
  include ../../../pug-mixins/header
  include ../../../pug-mixins/subheader
  +header('O mnie')

  //- about me section
  article.about-me-article(aria-label="Informacje o mnie" aria-labelledby="about-me-section__description")
    include pug-partials/about-me-article

  article.my-skills-article(aria-label="Moje umiejętności")
    +subHeader('Umiejętności')
    include pug-partials/my-skills-article

  article.my-projects-article(aria-label="Moje projekty")
    +subHeader('Projekty')
    include pug-partials/my-projects-article
    
</template>

<script lang="ts">
import { skills, setSkillPercentage } from "@/components/Main/aboutme/skills";
import {
  projects,
  setProjectStatusLabel
} from "@/components/Main/aboutme/projects";

export default {
  name: "AboutMe",
  data: () => ({
    skills,
    projects
  }),
  mounted() {
    setSkillPercentage(), setProjectStatusLabel();
  }
};
</script>

<style lang="scss" scoped>
@import "./aboutme.styles.scss";
</style>
