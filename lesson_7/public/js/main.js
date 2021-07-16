const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

let app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        products: [],
        imgCatalog: './img/1.png',
        cartShown: false,
        userSearch: '',
        filtered: []
    },
    components: {cart, products, filter_el},
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
        },
        addProduct(product){
            console.log(product.id_product);
        },
        
    },
    mounted(){
        console.log (this)
    }
})