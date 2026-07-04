const app = Vue.createApp({
    data(){
        return{
            txt:"b",

            colorLish:[
                "Green","Yellow","Grey"
            ],
            obj:{
                "id":1,"name":"HTML",
            },
            price:30,
            itemList:[
                {"id":1,"name":"HTML"},
                {"id":2,"name":"CSS"},
                {"id":3,"name":"JS"},
            ],
            isActive:true,
        }
    },
    methods:{
        setText(){
            this.txt="Hello Settext";
        },
        setVal(){
            this.price=100;
        },

    }
});
app.mount('#app');