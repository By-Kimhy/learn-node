<script setup>
const props = defineProps(["header", "body"]);
const emit=defineEmits(["close"]);
const closeForm=()=>{
  emit("close");
}
</script>
<template>
  <div class="popup">
    <div class="frm">
      <h1>{{ props.header }}</h1>
      <p>{{ props.body }}</p>
      <button @click="closeForm">Close</button>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.popup {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.116);
}
.frm {
  width: 60%;
  height: 300px;
  background-color: white;
  margin: auto;
  margin-top: 9px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
