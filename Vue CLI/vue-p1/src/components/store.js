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
        isShow:true 
    },
    {
        id: 2,
        name: 'Google',
        sub: [
            'Chrome',
            'Chromebook',
            'Android'
        ],
        isShow:false
    },
    {
        id: 3,
        name: 'Microsoft',
        sub: [
            'Windows',
            'Mac',
            'Office'
        ],
        isShow:false
    }
])

export const isDrawer = ref(false)