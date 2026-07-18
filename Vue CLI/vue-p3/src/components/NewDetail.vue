<script setup>
    import { newsDetail2 } from './Store.js';
</script>
<template>
    <h1>{{newsDetail2.title}}</h1>
    <div v-html="newsDetail2.des"></div>
</template>