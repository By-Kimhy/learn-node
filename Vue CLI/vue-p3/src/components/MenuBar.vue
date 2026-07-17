<script setup>
import { onMounted, ref } from 'vue';
import Axios from 'axios';
const dataList = ref([]);
const isLoading = ref(true);
const getMenu = () => {
    isLoading.value = true;
    let url = 'https://reanweb.com/api/teaching/get-menu.php';
    Axios.get(url)
        .then(rp => {
            dataList.value = rp.data;
            isLoading.value = false;
            console.log(dataList.value);
        });
}
onMounted(() => {
    getMenu();
})
</script>
<template>
    <div class="container-fluid menu-bar">
        <div class="container">
            <div class="row">
                
                <div class="col-xxl-12">
                    <ul>
                        <li v-if="isLoading" style="font-size: 30px;">Loading...</li>
                        <li v-else>
                            <router-link to="/"><i class="fa-solid fa-house"></i></router-link>
                        </li>
                        <li v-for="(data, i) in dataList" :key="i">
                            <router-link :to="{name:'Home2',params:{mid:data.id}}">{{ data.name }}-{{ data.id }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>