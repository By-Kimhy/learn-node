<script setup>
import { onMounted, ref, watchEffect, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Axios from 'axios';
import { newsDetail2 } from './Store.js';
const newsData = ref([]);
const route = useRoute();
const router = useRouter();
const isLoading = ref(true);
const displayData = computed(() => {
    if (mid.value == 0) {
        return newsData.value;
    } else {
        return newsData.value.filter(el => el.mid == mid.value);
    }
})
const getNews = () => {
    isLoading.value = true;
    let url = 'https://reanweb.com/api/teaching/get-news.php';
    Axios.get(url)
        .then(rp => {
            newsData.value = rp.data;
            isLoading.value = false;
            // console.log(newsData.value);
        });
}
const mid = ref(0);
watchEffect(() => {
    mid.value = 0;
    if (route.params.mid) {
        mid.value = route.params.mid;
    }
    // console.log(mid.value);
})
onMounted(() => {
    getNews();
})

const newsDetail = (mid, nid, news) => {
    newsDetail2.value.title = news.title;
    newsDetail2.value.des = news.des;
    router.push({
        name: 'newDetail',
        params: {
            mid: mid,
            nid: nid
        }
    });
}
</script>
<template>
    <div class="container">
        <div class="row">
            <div class="col-xxl-12 col-xl-12 col-lg-12" v-if="isLoading">
                <h1>Loading...</h1>
            </div>
            <div v-else class="col-xxl-3 col-xl-3 col-lg-3 item-box " v-for="(news, i) in displayData" :key="i">
                <div class="box" @click="newsDetail(news.mid, news.id, news)">
                    <img :src="news.img" alt="">
                    <span>{{ news.title }}-{{ news.mid }}</span>
                </div>
            </div>
        </div>
    </div>
</template>