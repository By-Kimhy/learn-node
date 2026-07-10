<template>
  <div class="container">
    <div class="item-box">
      1
    </div>
    <div class="item-box">
      1
    </div>
    <div class="item-box">
      1
    </div>
    <div class="item-box">
      1
    </div>

  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: blue;
}
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  background-color: black;
}

.item-box {
  flex: 1 1 24.5%; /* each takes half width */
  height: 50%;   /* each takes half height */
  background-color: aqua;
}



</style>