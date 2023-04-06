import { useContext } from "react";
import { CartContext, CartLengthContext } from "../App";

export default function QuantityController(prop) {
    const [cart, setCart] = useContext(CartContext);
    const [cartLength, setCartLength] = useContext(CartLengthContext);

    const handleQuantityChange = (id) => {
        cart.map(item => { if (item.id === id) return item.quantity; });
    }

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
        cart.map(item => { if (item.id === id && item.quantity === 1) handleRemoveItem(id); });
        handleQuantityChange(id);
    };

    return (
        <div className="flex max-sm:flex-col">
            <div className="w-[68px] border-2 border-b-[3px] border-blue-600 bg-blue-600 rounded mt-2">
                <button onClick={() => handleDecreaseQuantity(prop.product.id)} className="h-full rounded-r-xs bg-blue-600 text-white px-[6px] font-extrabold">-</button>
                <input type="text" value={cart.map(item => { if (item.id === prop.product.id) return item.quantity; })} disabled className="bg-white text-center w-7"/>
                <button onClick={() => handleIncreaseQuantity(prop.product.id)} className="h-full rounded-l-xs bg-blue-600 text-white px-1 font-extrabold">+</button>
            </div>
            { prop.removeButton ? <button onClick={() => handleRemoveItem(prop.product.id)} className="max-sm:w-[68px] h-[30px] sm:ml-5 mt-2 px-2 rounded text-white bg-red-600 text-sm">remove</button> : <></> }
        </div>
    );
}