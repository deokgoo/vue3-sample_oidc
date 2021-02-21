<template>
  <div>

  </div>
</template>

<script>
import authService from '../services/auth';

export default {
  beforeMount() {
    const signinCallback = async () => {
      await authService.instance().signinCallback();
      await this.$router.push('/');
    };
    signinCallback();
  },
};
</script>

<style scoped>

</style>
