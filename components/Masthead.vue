<template>
  <div class="masthead" />
</template>

<style scoped>
.masthead {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 70vh; /* if you don't want it to take up the full screen, reduce this number */
  overflow: hidden;
  background-size: cover;
  background: radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 0%, rgba(48,68,85,0.65) 100%), url(../assets/laptop.webp) no-repeat center center scroll;
}
</style>
