<script setup>
import ImgList from "./components/ImgList.vue";
import Popup from "./components/Popup.vue";
import { ref } from 'vue'
const isShow = ref(false);

const showForm = () => {
  isShow.value = !isShow.value;
};
</script>

<template>
  <ImgList />
  <!-- <button @click="showForm">Show Form</button>
  <Popup v-if="isShow" header="Prop Header" body="Prop Body" @close="showForm"/> -->

</template>
