export default function calculateCost(cart) {
    const tax = 0.04;
    const freeShipping = 75;
    const shipping = 5;
    let cost = {
        items: 0,
        shipping: 0,
        tax: 0,
        total: 0
    }

    cart.map(item => cost.items += (item.price - item.price * item.discount) * item.quantity);
    cost.items >= freeShipping ? cost.shipping = 0 : cost.shipping = shipping;
    cost.tax = cost.items * tax;
    cost.total = cost.items + cost.shipping + cost.tax;

    return cost;
}