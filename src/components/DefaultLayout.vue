<template>
  <div class="layout"
       :style="{'background-image': `url(${require('../assets/bg.jpeg')})`}">
    <div class="layout__container">
      <div class="layout__wrapper">
        <slot name="content"></slot>
      </div>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped>
.layout {
  width: 100vw;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.layout__container {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.layout__wrapper {
  height: 60vh;
  min-height: 400px;
  max-height: 60vh;
  width: 450px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  background-color: white;
  border-radius: 12px;
  overflow-y: scroll;
  overflow-x: hidden;
}
@media screen and (max-width: 500px) {
  .layout__wrapper {
    width: 350px;
  }
}
</style>
