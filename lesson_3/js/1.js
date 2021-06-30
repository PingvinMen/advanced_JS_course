const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/';

class ProductList{
    constructor(container = '.products'){
        this.container = container;
        this.goods = [];
        this._getProducts().then(data => { //data - объект js
            this.goods = [...data];
            this.render()
        });
    }

    _getProducts(){
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }

    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend",item.render());
        }
    }
}

class ProductItem{
    constructor(product){
        this.product_name = product.product_name;
        this.id_product = product.id_product;
        this.price = product.price;
        this.img = product.img;
    }
    render(){
        return `<div class="product_item">
        <img class="product_img" src="./img/1.jpg">
        <h3 class="product_title">${this.product_name}</h3>
        <p class="product_id">Артикул: ${this.id_product}</p>
        <p class="product_price">Цена: ${this.price}</p>
        <button class="but-btn" onclick="Test(${this.id_product})">Купить</button>
    </div>`
    }
}

class BasketProductList{
    constructor(container = '.bascet-list'){
        
        this.container = container;
        this.goodsBasket = [];
        this.itemData = [];
        this._getProductsBasket().then(dataBasket => { //data - объект js
            this.goodsBasket = [...dataBasket.contents];
            this.renderBasket()
        });
    }
    
    _getProductsBasket(){
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
    }

    renderBasket(){
        const block = document.querySelector(this.container);
        for(let product of this.goodsBasket){
            const item = new BasketProductItem(product);
            block.insertAdjacentHTML("beforeend",item.renderBasket());
        }
    }
}

class BasketProductItem{
    constructor(product){
        this.product_name = product.product_name;
        this.id_product = product.id_product;
        this.price = product.price;
        this.quantity = product.quantity;
    }

    renderBasket(){
        return `<li class="bascet-item">
            <img class="bascet-img" src="./img/1.jpg">
            <section class="bascet-info">
                <h3 class="bascet-title">${this.product_name}</h3>
                <p class="bascet-id">Артикул: ${this.id_product}</p>
                <p class="bascet-quantity">Колличество: ${this.quantity}</p>
                <p class="bascet-price">Цена: <span class="bascet-price-span">${this.price}</span>руб.</p>
            </section>
        </li>`
    }
}

let list = new ProductList();
let listBasket = new BasketProductList();