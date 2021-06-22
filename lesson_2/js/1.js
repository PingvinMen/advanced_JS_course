class ProductList{
    constructor(container = '.products'){
        this.container = container;
        this.goods = [];
        this._featProducts();
        this.render();
    }
    _featProducts(){
        this.goods = [
        {id: 1, title: 'Продукт 1', price: 2000, img:'./img/1.jpg'},
        {id: 2, title: 'Продукт 2', price: 3000, img:'./img/1.jpg'},
        {id: 3, title: 'Продукт 3', price: 2500, img:'./img/1.jpg'},
        {id: 4, title: 'Продукт 4', price: 3500, img:'./img/1.jpg'}
        ];
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
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = product.img;
    }
    render(){
        return `<div class="product_item">
        <img class="product_img" src="${this.img}">
        <h3 class="product_title">${this.title}</h3>
        <p class="product_price">Цена: ${this.price}</p>
        
        <button class="but-btn">Купить</button>
    </div>`
    }
}

class BasketProductList{
    constructor(container = '.bascet-list'){
        this.container = container;
        this.goods = [];
        this._featProductsBasket();
        this.renderBasket();
    }
    _featProductsBasket(){
        this.goods = [
        {id: 1, title: 'Продукт 0', price: 2550, img:'./img/1.jpg'},
        {id: 1, title: 'Продукт 0', price: 2550, img:'./img/1.jpg'},
        {id: 1, title: 'Продукт 0', price: 2550, img:'./img/1.jpg'},
        {id: 1, title: 'Продукт 0', price: 2550, img:'./img/1.jpg'},
        {id: 1, title: 'Продукт 0', price: 2550, img:'./img/1.jpg'}
        ];
    }
    renderBasket(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const item = new BasketProductItem(product);
            block.insertAdjacentHTML("beforeend",item.renderBasket());   
        }
    }
}

class BasketProductItem{
    constructor(product){
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = product.img;
    }
    renderBasket(){
        return `<li class="bascet-item">
            <img class="bascet-img" src="${this.img}">
            <section class="bascet-info">
                <p class="bascet-title">${this.title}</p>
                <p class="bascet-id">Артикул: ${this.id}</p>
                <p class="bascet-quantity">Колличество: <span class="bascet-quantity-span">${this.quantity}</span></p>
                <p class="bascet-price">Цена: <span class="bascet-price-span">${this.price}</span>руб.</p>
            </section>
        </li>`
    }

}

let list = new ProductList();
let listBasket = new BasketProductList();