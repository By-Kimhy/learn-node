<script setup>
  import MenuBar from './components/MenuBar.vue'
  import Drawer from './components/Drawer.vue'
  import Popup from './components/Popup.vue'
  import HeroSection from './components/HeroSection.vue'
  import CityList from './components/CityList.vue'
  import FriendList from './components/FriendList.vue'
  import Chat from './components/Chat.vue'
  import { isDrawer } from './components/store'
</script>
<template>
  <Drawer />
  <MenuBar />
  <HeroSection />
  <Popup v-if="isDrawer" @click="isDrawer = false" />
  <CityList />
  <FriendList />
  <Chat />
</template>