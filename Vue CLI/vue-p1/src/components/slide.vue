<script setup>
import { itemList } from './store'
import { ref } from 'vue'
const slideIndex = ref(0);
const nextSlide = () => {
    slideIndex.value++
    if (slideIndex.value == itemList.value.length) {
        slideIndex.value = 0
    }
    console.log(slideIndex.value)
}
const prevSlide = () => {
    slideIndex.value--
    if (slideIndex.value == -1) {
        slideIndex.value = itemList.value.length - 1
    }
    console.log(slideIndex.value)
}

var myAutoSlide = setInterval(nextSlide, 1000)

const stopAutoSlide = () => {
    clearInterval(myAutoSlide)
}
const startAutoSlide = () => {
    myAutoSlide = setInterval(nextSlide, 1000)
}
</script>
<template>
    <div class="col-xxl-9 col-xl-9 content slide-content">
        <div class="slide-box" @mouseover="stopAutoSlide" @mouseleave="startAutoSlide">
            <div class="slide" v-for="(item, i) in itemList" :key="i" v-show="i == slideIndex">
                <img :src="item.img" alt="">
                <span>{{slideIndex + 1}}/{{itemList.length}}</span>
            </div>
            <div class="btn-Slide btn-next" @click="nextSlide">
                Next
            </div>
            <div class="btn-Slide btn-prev" @click="prevSlide">
                Back
            </div>
            <ul class="pagination">
                <li v-for="(item, i) in itemList" :key="i" :class="{ 'active': i == slideIndex }" @click="slideIndex = i">
                    {{ i + 1 }}
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.slide-content {
    height: 500px;
}

.slide-box {
    width: 100%;
    height: 100%;
    background-color: red;
    display: flex;
    position: relative;
}
.slide-box span{
    position: absolute;
    top: 20px;
    left:20px;
    color: white;
    font-size: 18px;
    padding: 8px;
    border-radius: 6px;
    background-color: green; 
}

.slide-box ul {
    position: absolute;
    bottom: 9px;
    left: 50%;
    transform: translate(-50%, 0);
    background-color: rgba(105, 105, 105, 0.397);
    padding: 6px;
    border-radius: 5px;
    display: flex;
}

.slide-box ul li {
    padding: 3px;
    margin: 0 3px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    cursor: pointer;
    background-color: white;
    color: black;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.slide-box ul .active {
    background-color: green;
    color: white;
}

.slide-box ul li:hover {
    background-color: green;
    color: white;
}

.slide-box .slide {
    width: 100%;
    height: 100%;

}

.slide-box .slide img {
    width: 100%;
    height: 100%;
    object-fit: fill;
}

.btn-Slide {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    padding: 9px 18px;
    background-color: green;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 1px 1px 3px dimgrey;
}

.btn-next {
    right: 20px;
}

.btn-prev {
    left: 20px;
}
</style>