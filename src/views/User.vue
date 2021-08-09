<template>
  <div class="user"
       :style="{'background-image': `url(${require('../assets/bg.jpeg')})`}">
    <div class="home__container">
      <div class="home__wrapper">
        <h1>Oidc Example</h1>
        {{JSON.stringify(user)}}
        <button @click="login">SignOut</button>
      </div>
    </div>
  </div>
</template>

<script>
import { getUser, signOut } from '../service/securityService';

export default {
  name: 'User',
  data() {
    return {
      user: null,
    };
  },
  methods: {
    async getUser() {
      const user = await getUser();
      return user;
    },
    async signOutHandler() {
      await signOut();
    },
  },
  created() {
    (async () => {
      this.user = await getUser();
    })();
  },
};
</script>

<style>
.user {
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
}
.home__container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.home__wrapper {
  height: 800px;
  width: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: white;
  border-radius: 12px;
  white-space: pre-line;
  overflow: hidden;
  text-overflow: ellipsis;
}
.home__wrapper>button {
  width: 200px;
  margin-top: 25px;
  background-color: rgb(203, 169, 220);
  color: white;
  border: none;
  padding: 16px;
  border-radius: 12px;
  font-size: 1.2rem;
  cursor: pointer;
}
</style>
