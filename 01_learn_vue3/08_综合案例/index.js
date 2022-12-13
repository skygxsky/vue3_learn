const App = {
    template:"#my-app",
    data(){
        return{
            books: [
                {
                    id:1,
                    name:"《算法导论》",
                    date:'2006-9',
                    price:85.00,
                    count:1
                },
                {
                    id:2,
                    name:"《UNIX编程艺术》",
                    date:'2006-2',
                    price:59.00,
                    count:1
                },
                {
                    id:3,
                    name:"《编程诸暨》",
                    date:'2008-10',
                    price:39.00,
                    count:1
                },
                {
                    id:4,
                    name:"《代码大全》",
                    date:'2006-3',
                    price:128.00,
                    count:1
                },
            ],

        }
    },
    methods:{
        increment(index){
            this.books[index].count ++;
        },
        decrement(index){
            this.books[index].count --;
        },
        removeBook(index){
            this.books.splice(index,1,)
        }
    },
    computed:{
        totalPrice(){
            let finalPrice = 0
            for (let book of this.books){
                finalPrice += book.count * book.price
            }
            return finalPrice;
        },
        // filterBooks(){
        //     return this.books.map(item=>{
        //         item.price = "￥" + item.price;
        //         return item
        //     })
        // }
        filterBooks(){
            return this.books.map(item=>{
                const newItem = Object.assign({},item);
                newItem.price = '￥' + item.price;
                return newItem;
            })
        }
    }
}

Vue.createApp(App).mount('#app');