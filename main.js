const app = {
    data() {
        return {
            pictures: [
                { path: './images/1.jpg', alter: 'Ancient Bristlecone Pine Forest, United States' ,showFav: false },
                { path: './images/2.jpg', alter: 'Campese, Italy' ,showFav: false},
                { path: './images/3.jpg', alter: 'Stakkholtsgja canyon, Iceland' ,showFav: false}
            ],
            path:"./images/1.jpg"
        }
    },
    methods:{
        showFavIcon(index){
            this.pictures[index].showFav = !this.pictures[index].showFav;
        }
    },
    computed:{
        countShow(){
            return this.pictures.filter(s => s.showFav).length;
        }
    }
};
Vue.createApp(app).mount('#app');