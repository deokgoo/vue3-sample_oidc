<template>
  <div class="home">
    <default-layout>
      <template v-slot:content>
        <h1>Oidc Example</h1>
        <button class="btn_signin" @click="signInHandler">SignIn</button>
      </template>
    </default-layout>
  </div>
</template>

<script>
import DefaultLayout from '../components/DefaultLayout.vue';
import { signIn } from '../service/securityService';

export default {
  name: 'Home',
  components: {
    DefaultLayout,
  },
  methods: {
    async signInHandler() {
      await signIn();
    },
  },
};
</script>

<style scoped>
.btn_signin {
  width: 150px;
  margin-top: 25px;
  background-color: rgb(203, 169, 220);
  color: white;
  border: none;
  padding: 12px 16px;
  border-radius: 12px;
  font-size: 1.2rem;
  cursor: pointer;
}
</style>
