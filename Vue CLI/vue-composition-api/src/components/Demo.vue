<script setup>
    import { ref } from 'vue';
    const txt = ref("JavaScript");
    const isShow = ref(true);
    const isActive = ref(false);
    function DemoShow() {
        isShow.value = !isShow.value
    };
    const itemList = ref(["HTML", "CSS", "JS"]);
    const SetText = () => {
        txt.value = "VueJS3";
        console.log(txt)
    }
    const setActive=()=>{
        isActive.value=!isActive.value;
    }
</script>

<template>
    <div>
        <button @click="SetText">SetText</button>
        <button @click="DemoShow">Hide/Show</button>
        <button @click="setActive">Set CSS</button>
        <div class="demo" v-if="isShow" :class="{ 'active': isActive }">
            {{ txt }}
        </div>
        <ul>
            <li v-for="(item, i) in itemList" :key="i">{{ item }}</li>
        </ul>
    </div>

</template>


<style scoped>
    .demo {
        width: 600px;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 60px;
        background-color: aqua;
    }
    .active{
        background-color: pink;
    }
</style>