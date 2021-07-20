<template lang="pug">
//- Main header of the page
header#header.main-header(aria-label="Nagłówek strony" aria-labelledby="start")
  <slot></slot>
</template>

<script>
export default {
	name: 'Header',
}
</script>

<style lang="scss">
  @import "./header.styles.scss"
</style>
