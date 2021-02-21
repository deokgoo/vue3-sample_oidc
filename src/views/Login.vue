<template>
  <div>
    <h1>login</h1>
  </div>
</template>

<script>
import authService from '../services/auth';

export default {
  setup() {
    authService.instance().signinRedirect();
  },
};
</script>

<style scoped>

</style>
