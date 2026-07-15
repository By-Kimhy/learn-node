import { ref } from 'vue'
export const itemList = ref([
    {
        id: 1,
        name: 'Apple',
        sub: [
            'Iphone',
            'Ipad',
            'Macbook'
        ]
    },
    {
        id: 2,
        name: 'Google',
        sub: [
            'Chrome',
            'Chromebook',
            'Android'
        ]
    },
    {
        id: 3,
        name: 'Microsoft',
        sub: [
            'Windows',
            'Mac',
            'Office'
        ]
    }
])

export const isDrawer = ref(false)