<script setup>
    import { ref } from 'vue';
    const itemList = ref(
        [
            {
                'title': 'Zinvo Jumbo VD Blaze',
                'price': 500,
                'img': '/src/assets/img/1-1.webp',
                'img1': '/src/assets/img/1-1.webp',
                'img2': '/src/assets/img/1-2.webp',
            },
            {
                'title': 'Zinvo Jumbo VD Rose Gold',
                'price': 500,
                'img': '/src/assets/img/2-1.webp',
                'img1': '/src/assets/img/2-1.webp',
                'img2': '/src/assets/img/2-2.webp',
            },
            {
                'title': 'D1 MILANO UTBL38 Chocolush Ultra Thin 30 mm',
                'price': 395,
                'img': '/src/assets/img/3-1.webp',
                'img1': '/src/assets/img/3-1.webp',
                'img2': '/src/assets/img/3-2.webp',
            },
            {
                'title': 'Zinvo Blade 12K Amber Gem',
                'price': 420,
                'img': '/src/assets/img/4-1.webp',
                'img1': '/src/assets/img/4-1.webp',
                'img2': '/src/assets/img/4-2.webp',
            }
        ]
    );
    const newImg = (item) => {
        item.img=item.img2
    }
    const oldImg=(item)=>{
        item.img=item.img1
    }
</script>

<template>
    <div class="container">
        <div class="item-box" v-for="(item, index) in itemList" :key="index">
            <div class="img-box" @mouseover="newImg(item)" @mouseleave="oldImg(item)">
                <img :src="item.img">
            </div>
            <div class="txt-box">
                <h1>{{item.title}}</h1>
                <p>$ {{item.price}}</p>
            </div>
        </div>
    </div>
</template>

<style scope>
    .container {
        width: 81%;
        margin: auto;
        background-color: rgba(245, 245, 245, 0.664);
        display: flex;
        justify-content: space-between;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .item-box {
        width: 24.5%;
        height: 200px;
    }

    .item-box .img-box {
        width: 100%;
        height: 70%;
        border-radius: 24px;
        background-color: white;
    }

    .item-box .img-box img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .item-box .txt-box {
        width: 100%;
        height: 30%;
    }

    .item-box .txt-box h1 {
        font-size: 8px;
        text-align: center;
        color: #000;
    }

    .item-box .txt-box p {
        font-size: 10px;
        text-align: center;
        color: #000;
    }
</style>