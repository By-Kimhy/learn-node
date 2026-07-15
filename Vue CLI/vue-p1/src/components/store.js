import {ref} from 'vue'


export const itemList = ref([
    {
        id: 1,
        name: 'apple',
        sub: [
            'iphone',
            'ipad',
            'mac'
        ]

    },
    {
        id: 2,
        name: 'google',
        sub: [
            'chrome',
            'chromebook',
            'android'
        ]
    },
    {
        id: 3,
        name: 'microsoft',
        sub: [
            'windows',
            'mac',
            'office'
        ]
    }
])