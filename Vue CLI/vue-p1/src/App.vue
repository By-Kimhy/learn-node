<script setup>
  import MenuBar from './components/MenuBar.vue'
  import LeftMenu from './components/LeftMenu.vue'
  import Popup from './components/Popup.vue'
  import { isDrawer } from './components/store'
</script>
<template>
  <LeftMenu />
  <MenuBar />
  <Popup v-if="isDrawer" @click="isDrawer = false" />
</template>