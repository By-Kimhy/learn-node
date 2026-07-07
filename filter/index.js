const app = Vue.createApp({
    data() {
        return {
            // itemList:[
            //     "red","green","blue","black"
            // ]

            "itemList": ["red", "green", "blue", "black"]
        }
    },
    methods: {

    },
    computed: {
        filterItem() {
            return this.itemList.filter(el => el == 'red')
        }
    }
});
app.mount('#app');
