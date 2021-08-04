<template>
  <div>
    <!-- Messenger Wtyczka czatu Code -->
    <div id="fb-root"></div>

    <!-- Your Wtyczka czatu code -->
    <div id="fb-customer-chat" class="fb-customerchat"></div>
  </div>
</template>

<script>
import { loadFacebookApi } from "@/load-thirdparty-lib";

export default {
  mounted() {
    loadFacebookApi();
  }
};
</script>

<style></style>
