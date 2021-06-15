const products = [
    {id: 1, title: 'Продукт 1', price: 2000, img:'./img/1.jpg'},
    {id: 2, title: 'Продукт 2', price: 3000, img:'./img/1.jpg'},
    {id: 3, title: 'Продукт 3', price: 2500, img:'./img/1.jpg'},
    {id: 4, title: 'Продукт 4', price: 3500, img:'./img/1.jpg'},
];

const renderProduct = (title, price, img) =>
    `<div class="product_item">
        <img class="product_img" src="${img}">
        <h3 class="product_title">${title}</h3>
        <p class="product_price">${price}</p>
        
        <button class="but-btn">Купить</button>
    </div>`

const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title, item.price, item.img));
    //console.log(productsList.join(''));
    document.querySelector('.products').innerHTML = productsList.join('');
};

renderPage(products);