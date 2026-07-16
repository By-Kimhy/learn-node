import { ref } from 'vue';
export const isDrawer = ref(false);
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
]);

export const cityList = ref([
    {
        name: 'Phnom Penh',
        sub: [
            {
                name: 'TK',
                sub: [
                    'TK1',
                    'TK2',
                    'TK3'
                ]
            },{
                name:'BKK',
                sub:[
                    'BKK1',
                    'BKK2',
                    'BKK3'
                ]
            },{
                name:'TTP',
                sub:[
                    'TTP1',
                    'TTP2',
                    'TTP3'
                ]
            }
        ],
    },{
        name: 'Siem Reap',
        sub: [
            {
                name: 'SR1',
                sub: [
                    'SR1-1',
                    'SR1-2',
                    'SR1-3'
                ]
            },{
                name:'SR2',
                sub:[
                    'SR2-1',
                    'SR2-2',
                    'SR2-3'
                ]
            },{
                name:'SR3',
                sub:[
                    'SR3-1',
                    'SR3-2',
                    'SR3-3'
                ]
            }
        ],
    }
]);