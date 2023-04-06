export default function itemInCart(cart, id) {
    let exist = false;

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
            exist = true;
            break;
        }
    }

    return exist;
}