import { ref } from 'vue'

export const itemList = ref([
    {
        id: 1,
        name: 'Apple',
        sub: [
            'Iphone',
            'Ipad',
            'Macbook'
        ],
        isShow:true,
        img:"src/assets/img/1-1.webp"
    },
    {
        id: 2,
        name: 'Google',
        sub: [
            'Chrome',
            'Chromebook',
            'Android'
        ],
        isShow:false,
        img:"src/assets/img/2-1.webp"
    },
    {
        id: 3,
        name: 'Microsoft',
        sub: [
            'Windows',
            'Mac',
            'Office'
        ],
        isShow:false,
        img:"src/assets/img/3-1.webp"
    }
])

export const isDrawer = ref(false)