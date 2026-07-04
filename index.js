const app = Vue.createApp({
    data(){
        return{
            txt:"Hello VueJS",

            colorLish:[
                "Green","Yellow","Grey"
            ],
            obj:{
                "id":1,"name":"HTML",
            }
        }
    },
    methods:{
        setText(){
            this.txt="Hello Settext"
        }

    }
});
app.mount('#app');