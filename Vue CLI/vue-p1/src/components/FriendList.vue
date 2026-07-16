<script setup>
    import { ref } from 'vue';
    import { itemList } from './store'
    var hideShow = ref(false);
    const HideShowFriendBox = () => {
        hideShow.value = !hideShow.value;
    }
</script>

<template>
    <div class="friend-box" :class="{'hide':hideShow}">
        <h1 @click="HideShowFriendBox">Friend List</h1>
        <ul>
            <li v-for="(item,i) in itemList" :key="i">
                <img :src="item.img" alt="">
                <span>{{item.name}}</span>
            </li>
        </ul>
    </div>
</template>
<style scoped>
.friend-box{
    position: fixed;
    right: 9px;
    bottom: 9px;
    width: 300px;
    height: 400px;
    background-color: white;
    box-shadow: 1px 1px 6px dimgrey;
}
.friend-box h1{
    font-size: 15px;
    height: 39px;
    background-color: #eee;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    padding-left: 6px;
    cursor: pointer;
}
.friend-box h1:hover{
    background-color: #ccc;
}
.friend-box ul{
    list-style: none;
    margin: 0;
    padding: 0;
}
.friend-box ul li{
    display: flex;
    align-items: center;
    padding: 5px;
    gap: 10px;
}
.friend-box ul li:hover{
    cursor: pointer;
    background-color: #ccc;
}
.friend-box ul li img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #ccc;
    
}
.friend-box ul li span{
    font-size: 12px;
}
.hide{
    height: 39px;
}
</style>