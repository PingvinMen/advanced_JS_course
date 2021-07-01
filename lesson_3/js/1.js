const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/';

class ProductList{
    constructor(container = '.products'){
        this.container = container;
        this.goods = [];
        this._getProducts().then(data => {
            this.goods = [...data];
            this.render();
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
        <button class="but-btn" onclick="listSearch(${this.id_product})">Добавить в корзину</button>
    </div>`
    }    
}

class BasketProductList{
    constructor(container = '.bascet-list'){
        
        this.container = container;
        this.goodsBasket = [];
        this._getProductsBasket().then(dataBasket => {
            this.goodsBasket = [...dataBasket.contents];
            this.renderBasket();
            //для итога в корзину, мне кажется это можно было сделать проще
            this.countGoods = dataBasket.countGoods;
            this.amount = dataBasket.amount;
            this.renderResult();
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

    renderResult(){
        const block = document.querySelector(this.container);
        let x = `<li class="bascet-item-end">
            <p class="bascet-end-sum">Колличество: ${this.countGoods}шт.</p>
            <p class="bascet-end-sum">Сумма: ${this.amount}руб.</p>
        </li>`;
        block.insertAdjacentHTML("beforeend",x);
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

/*Добаить в корзину*/

    /*Функция поска в каталоге*/
    function listSearch(id){
        let checkList = 0;
        for(let product of list.goods){
            if(id == product.id_product){
                console.log('В БД товаров существует: ' + product.product_name);
                checkList++;
                basketSearch(id, product);
                break;
            }
        }
        if(checkList == 0){
            console.log('Товар отсутствует в БД');
        }
    }

    /*Функция поиска в корзине*/
    function basketSearch(id, arrProduct){
        let checkBasket = 0;
        let product = listBasket.goodsBasket;
        let key = ''; 
        for(let i = 0,  len = product.length; i < len; i++){
            if(id == product[i].id_product){
                key = i;
                console.log('Товар в корзине существует: ' + product[i].product_name + ', ключ :' + key);
                checkBasket++;
                AddToBasket(checkBasket, product, key);
                break;
            }
        }
        if(checkBasket == 0){
            console.log('Товар в корзине отсутствует');
            AddToBasket(checkBasket, arrProduct, key);
        }
    }

    /*Функция добавления в корзину*/
    function AddToBasket(checkBasket, item, key){
        if(checkBasket == 0){
            console.log('Добавить целиком товар. Проверка: checkBasket = ' + checkBasket);
            listBasket.goodsBasket.push({
                "id_product" : item.id_product,
                "product_name" : item.product_name,
                "price" : item.price,
                "quantity" : 1
              });
        }else if(checkBasket == 1){
            let x = listBasket.goodsBasket[key];
            let xQuantity = x.quantity+1;
            listBasket.goodsBasket.splice(key, 1);
            listBasket.goodsBasket.push({
                "id_product" : x.id_product,
                "product_name" : x.product_name,
                "price" : x.price,
                "quantity" : xQuantity
            });
            console.log(listBasket.goodsBasket);
        }else{
            console.log('Error, AddToBasket.');
        }
    } 