<template>
  <div>
    <h1>{{JSON.stringify(user.profile)}}</h1>
  </div>
</template>

<script>
import authService from '../services/auth';

export default {
  data() {
    return {
      user: {},
    };
  },
  beforeMount() {
    const fetchUserInfo = async () => {
      const user = await authService.instance().getUser();
      this.user = user;
    };
    fetchUserInfo();
  },
};
</script>

<style scoped>

</style>
