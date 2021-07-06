Vue.component('cart', {
    props: ['cartItems', 'img', 'visibility'],
    template: `
    <div class="bascet-list" v-show="visibility">
        <cart-item v-for="item of cartItems" :key="item.id_product" :img="img" :cart-item="item">
        </cart-item>
    </div>
    `
});

Vue.component('cart-item', {
    props: ['img', 'cartItem'],
    template: `
    <li class="bascet-item">
        <img class="bascet-img" :src="img" alt="Some img">
        <section class="bascet-info">
            <h3 class="bascet-title">{{ cartItem.product_name }}</h3>
            <p class="bascet-id">Артикул: {{ cartItem.id_product }}</p>
            <p class="bascet-quantity">Колличество: {{ cartItem.quantity }}</p>
            <p class="bascet-price">Цена за шт.: <span class="bascet-price-span">{{ cartItem.price }}</span>руб.</p>
            <p class="bascet-price">Сумма: <span class="bascet-price-span">{{cartItem.quantity*cartItem.price}}</span>руб.</p>
            <button class="del-btn" @click="$parent.$emit('remove', cartItem)">&times;</button>
        </section>
    </li>
    `
})