<script setup>
import { ref } from "vue";
import { itemList,isDrawer } from "./store";
</script>
<template>
  <div class="drawer-box" :class="{ isDrawer:isDrawer }">
    <ul>
      <li v-for="item in itemList" :key="item.id">
        <a>
          {{ item.name }}
        </a>
      </li>
    </ul>
  </div>
</template>
<style scoped>
@import "../assets/style/menu.css";
</style>
