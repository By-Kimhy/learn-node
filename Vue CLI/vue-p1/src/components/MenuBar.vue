<script setup>
    import { itemList } from './store'
</script>

<template>
    
    <div class="container-fluid manu-bar">
        <div class="container">
            <div class="row g-0">
                <div class="col-xxl-12 col-xl-12 menu">
                    <ul>
                        <li>
                            <a href="#">
                                <i class="fas fa-bars"></i>
                            </a>
                        </li>
                        <li v-for="item in itemList" :key="item.id">
                            <a href="#">{{item.name}}</a>
                            <ul class="sub-menu">
                                <li v-for="sub in item.sub" :key="sub">
                                    <a href="#">{{sub}}</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="drawer-box">
        <ul>
            <li>
                <a href="#">
                    Apple
                </a>
            </li>
            <li>
                <a href="#">
                    Google
                </a>
            </li>
            <li>
                <a href="#">
                    Microsoft
                </a>
            </li>
        </ul>
    </div>


</template>

<style scoped>
    @import '../assets/style/menu.css';
</style>