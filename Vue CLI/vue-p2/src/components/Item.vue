<script setup>
import { watchEffect, computed } from 'vue';
import { itemList } from './store.js'
import { useRouter } from 'vue-router';
const router = useRouter();

const props = defineProps(['id']);
// watchEffect used to watch for changes in props console

// watchEffect(() => {
//      console.log(props.id);
//      console.log(itemList.value);
//  });

const getMenuName = computed(() => {
    return itemList.value.filter(e => e.id == props.id);
});

const backHome = () => {
    router.push('/');
}
</script>

<template>
    <div>
        <h1>Item {{ $route.params.id }}</h1>
        <h2>Item Props {{ props.id }}</h2>
        <h2>Menu Item {{ getMenuName[0].name }}</h2>
        <button @click="backHome">Back Home</button>
    </div>

</template>