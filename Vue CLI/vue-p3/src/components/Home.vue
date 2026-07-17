<script setup>
import { onMounted, ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import Axios from 'axios';
const newsData = ref([]);
const route = useRoute();
const isLoading = ref(true);
const getNews = () => {
    isLoading.value = true;
    let url = 'https://reanweb.com/api/teaching/get-news.php';
    Axios.get(url)
        .then(rp => {
            newsData.value = rp.data;
            isLoading.value = false;
            console.log(newsData.value);
        });
}
const mid = ref(0);
watchEffect(() => {
    mid.value = 0;
    if (route.params.mid) {
        mid.value = route.params.mid;
    }
    console.log(route.params.mid);
})
onMounted(() => {
    getNews();
})
</script>
<template>
    <div class="container">
        <div class="row">
            <div class="col-xxl-12 col-xl-12 col-lg-12" v-if="isLoading">
                <h1>Loading...</h1>
            </div>
            <div v-else class="col-xxl-3 col-xl-3 col-lg-3 item-box " v-for="(news, i) in newsData" :key="i">
                <div class="box">
                    <img :src="news.img" alt="">
                    <span>{{ news.title }}-{{ news.mid }}</span>
                </div>
            </div>
        </div>
    </div>
</template>