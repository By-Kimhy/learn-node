<script setup>
import { ref } from "vue";
import { itemList } from "./store";
const HideShowItem = (item) => {
    item.isShow = !item.isShow;
};
</script>
<template>
    <div class="col-xxl-3 col-xl-3 left-menu">
        <ul>
            <li v-for="item  in itemList" :key="item">
                <a @click="HideShowItem(item)">
                    <span>{{item.name}}</span>
                    <i class="fas " :class="{'fa-plus':!item.isShow,'fa-minus':item.isShow}"></i>
                </a>
                <ul class="sub-menu" v-if="item.isShow">
                    <li v-for="sub in item.sub" :key="sub">
                        <a>{{ sub }}</a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.left-menu {
    height: 450px;
}

.left-menu ul {
    background-color: red;
    list-style: none;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    width: 100%;
}

.left-menu ul li {
    width: 100%;
}

.left-menu ul li a {
    margin: 0;
    width: 100%;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
}

.left-menu ul li a:hover {
    background-color: white;
    color: black;
}

.left-menu ul li .sub-menu {
    width: 90%;
    margin-left: 5%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.669);
}
.left-menu ul li .sub-menu li a:hover{
    background-color: white;
    color: black;
}
</style>