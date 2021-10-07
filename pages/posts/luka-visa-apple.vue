<template lang="pug">
<core>
  include:markdown-it ./posts_dir/luka-visa-apple.md
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
