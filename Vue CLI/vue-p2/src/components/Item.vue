<script setup>
import { watchEffect, onMounted, computed, ref } from 'vue';
import { itemList } from './store.js'
import { useRouter } from 'vue-router';
const router = useRouter();
const props = defineProps(['id']);
const data = ref([]);
const isLoading = ref(true);

//watchEffect used to watch for changes in props console

// watchEffect(() => {
//     console.log(props.id);
//     console.log(itemList.value);
// });

const getMenuName = computed(() => {
    return itemList.value.filter(e => e.id == props.id);
});

const backHome = () => {
    router.push('/');
}

const fetchApi = async () => {
    isLoading.value = true;
    let url = 'https://reanweb.com/api/teaching/get-menu.php';
    let rp = await fetch(url);
    let rs = await rp.json();
    data.value = rs;
    console.log(data.value);
    isLoading.value = false;
}

onMounted(() => {
    fetchApi();
})

</script>

<template>
    <div>
        <!-- <h1>Item {{ $route.params.id }}</h1>
        <h2>Item Props {{ props.id }}</h2>
        <h2>Menu Item {{ getMenuName[0].name }}</h2>
        <button @click="backHome">Back Home</button> -->
        <div>
            <h1>Fetch API</h1>
            <h1 v-if="isLoading">loading...</h1>
            <h2 v-else v-for="(d,i) in data" :key="i">
                {{ d.name }}
            </h2>
        </div>
    </div>


</template>