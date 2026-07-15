<script setup>
import { itemList, isDrawer } from './store'

const ShowDrawer = () => {
    isDrawer.value = !isDrawer.value
}
</script>

<template>
    <div>
        <div class="container-fluid manu-bar">
            <div class="container">
                <div class="row g-0">
                    <div class="col-xxl-12 col-xl-12 menu">
                        <ul>
                            <li>
                                <a>
                                    <i class="fas fa-bars" @click="ShowDrawer"></i>
                                </a>
                            </li>
                            <li v-for="item in itemList" :key="item.id">
                                <a href="#">{{ item.name }}</a>
                                <ul class="sub-menu">
                                    <li v-for="sub in item.sub" :key="sub">
                                        <a href="#">{{ sub }}</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import '../assets/style/menu.css';
</style>