<template lang="pug">
  <core>
    include:markdown-it ./posts_dir/bezpieczenstwo_hasel.md
  </core>
</template>

<script>
import Core from "./templates/core.template.vue";
export default {
  components: {
    Core
  }
};
</script>

<style></style>
