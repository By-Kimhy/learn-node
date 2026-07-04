const app = Vue.createApp({
    data(){
        return{
            txt:"Hello VueJS"
        }
    },
    methods:{
        setText(){
            this.txt="Hello Settext"
        }

    }
});
app.mount('#app');