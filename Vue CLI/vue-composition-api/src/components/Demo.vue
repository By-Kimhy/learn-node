<script setup>
import { ref } from 'vue';
const txt = ref("JavaScript");
const isShow = ref(true);
const isActive = ref(false);
const img = ref('/src/assets/img/1.png');
const img1 = '/src/assets/img/1.png';
const img2 = '/src/assets/img/2.png';

const newImg = () => {
    img.value = img2;
}
const oldImg = () => {
    img.value = img1;
}

function DemoShow() {
    isShow.value = !isShow.value
};
const itemList = ref(["HTML", "CSS", "JS"]);
const SetText = () => {
    txt.value = "VueJS3";
    console.log(txt)
}
const setActive = () => {
    isActive.value = !isActive.value;
}
</script>

<template>
    <div>
        <img :src="img" @mouseover="newImg" @mouseleave="oldImg">
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
img {
    height: 200px;
}

.demo {
    width: 600px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 60px;
    background-color: aqua;
}

.active {
    background-color: pink;
}
</style>