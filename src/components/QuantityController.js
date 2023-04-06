import { useContext, useState } from "react";
import { CartContext, CartLengthContext } from "../App";

export default function QuantityController(props) {
    const [cart, setCart] = useContext(CartContext);
    const [cartLength, setCartLength] = useContext(CartLengthContext);

    const handleQuantityChange = (id) => {
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id === id) {
                return cart[i].quantity;
            }
        }
    };

    const handleRemoveItem = (id) => { 
        setCart(cart.filter(item => item.id !== id)); 
        setCartLength(cartLength - 1);
    };

    const handleIncreaseQuantity = (id) => {
        setCart(cart.map(item => item.id === id && item.quantity < 99 ? {...item, quantity: item.quantity + 1} : {...item}));
        handleQuantityChange(id);
    };

    const handleDecreaseQuantity = (id) => {
        setCart(cart.map(item => item.id === id ? {...item, quantity: item.quantity - 1} : {...item}));
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id === id && cart[i].quantity === 1) {
                handleRemoveItem(id);
            }
        }
        handleQuantityChange(id);
    };

    return (
        <div className="flex max-sm:flex-col">
            <div className="w-[65px] border-y-4 border-blue-600 bg-blue-600 rounded mt-2">
                <button onClick={() => handleDecreaseQuantity(props.product.id)} className="text-white px-[6px] font-extrabold">-</button>
                <input type="text" value={handleQuantityChange(props.product.id)} disabled className="bg-white text-center w-7"/>
                <button onClick={() => handleIncreaseQuantity(props.product.id)} className="text-white px-1 font-extrabold">+</button>
            </div>
            { props.removeButton ? <button onClick={() => handleRemoveItem(props.product.id)} className="max-sm:w-[68px] h-[30px] sm:ml-5 mt-2 px-2 rounded text-white bg-red-600 text-sm">remove</button> : <></> }
        </div>
    );
}