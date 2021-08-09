<template>
  <div class="user">
    <default-layout>
      <template v-slot:content>
        <h1 class="user__title">Oidc Example</h1>
        <div class="user__info">
          <p><b>profile:</b> {{user?.profile}}</p>
          <p><b>scope:</b> {{user?.scope}}</p>
          <p><b>token_type:</b> {{user?.token_type}}</p>
          <p><b>id_token</b>: {{user?.id_token}}</p>
          <p><b>access_token:</b> {{user?.access_token}}</p>
          <p><b>refresh_token:</b> {{user?.refresh_token}}</p>
          <p><b>session_state:</b> {{user?.session_state}}</p>
        </div>
      </template>
      <template v-slot:footer>

      </template>
    </default-layout>
  </div>
</template>

<script>
import DefaultLayout from '../components/DefaultLayout.vue';
import { signOut, getUser } from '../service/securityService';

export default {
  name: 'User',
  components: {
    DefaultLayout,
  },
  data() {
    return {
      user: null,
    };
  },
  created() {
    this.userDataFetch();
  },
  methods: {
    async signOutHandler() {
      await signOut();
    },
    async userDataFetch() {
      try {
        const user = await getUser();
        this.user = user;
        console.log(this.user);
      } catch (err) {
        console.warn(err);
      }
    },
  },
};
</script>

<style scoped>
.user__title {
  width: 100%;
  text-align: center;
}
.user__info {
  width: 100%;
}
.user__info>p {
  width: 100%;
  white-space: pre-wrap;
  text-overflow: ellipsis;
  word-wrap: break-word;
}
</style>
