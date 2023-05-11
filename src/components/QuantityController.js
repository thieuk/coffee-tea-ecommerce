import { useContext } from "react";
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
        <div className="flex max-sm:flex-col mt-2">
            <div className="flex w-[75px] h-full border-y-4 border-blue-600 bg-blue-600 rounded">
                <button onClick={() => handleDecreaseQuantity(props.product.id)} className="w-[30%] text-white font-extrabold">-</button>
                <p className="bg-white text-center w-[40%] rounded">{handleQuantityChange(props.product.id)}</p>
                <button onClick={() => handleIncreaseQuantity(props.product.id)} className="w-[30%] text-white font-extrabold">+</button>
            </div>
            { props.removeButton ? <button onClick={() => handleRemoveItem(props.product.id)} className="max-sm:w-[68px] h-[30px] sm:ml-5 mt-2 px-2 rounded text-white bg-red-600 text-sm">remove</button> : <></> }
        </div>
    );
}