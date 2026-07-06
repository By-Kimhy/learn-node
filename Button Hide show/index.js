const app = Vue.createApp({
    data(){
        return{
            isShow: true,
            itemList:[
                "red","green","blue","yellow"
            ],
            objlist:[
                {id:1,name:"HTML",img:"img/1.png",img2:"img/2.png",img1:"img/1.png",isActive:true},
                {id:2,name:"CSS",img:"img/2.png",img2:"img/3.png",img1:"img/2.png",isActive:false},
                {id:3,name:"JS",img:"img/3.png",img2:"img/1.png",img1:"img/3.png",isActive:true},
            ],
        }
    },
    methods:{

        clickli(i){
            this.objlist[i].isActive = !this.objlist[i].isActive;
        },
        newImg(i){
            this.objlist[i].img = this.objlist[i].img2;
        },

        oldImg(i){
            this.objlist[i].img = this.objlist[i].img1;
        },
        hideShow(){
            this.isShow = !this.isShow;
        },
    },
});
app.mount('#app');
