<script setup>
    import { tmpItem } from './store'

</script>
<template>
    <div class="chat-container">
        <div class="chat-box" v-for="(item,i) in tmpItem" :key="i">
            <div class="header">
                <img :src="item.img" alt="">
                <span>{{item.name}}</span>
                <i class="fas fa-times"></i>
            </div>
        </div>
    </div>
</template>

<style scoped>
.chat-container {
    position: fixed;
    bottom: 9px;
    right: 325px;
    display: flex;
    gap: 10px;
}
.chat-box {
    width: 300px;
    height: 350px;
    background-color: white;
    box-shadow: 1px 1px 6px dimgrey;
    border-radius: 5px;
    /* padding: 10px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    
}
.chat-box .header{
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 10px;
    background-color: #eee;
    position: relative;
    box-sizing: border-box;
    width: 100%;
}
.chat-box .header i{
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translate(0, -50%);
    cursor: pointer;
    font-size: 20px;
}
.chat-box .header img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #ccc;
}
.chat-box .header span{
    font-size: 15px;
    color: black;
}
</style>