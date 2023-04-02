import { useContext } from "react";
import { CartContext } from "../App";
import { Link } from "react-router-dom";

export default function Cart() {
    const [cart, setCart] = useContext(CartContext);

    const handleRemoveItem = (id) => { 
        setCart(cart.filter(item => item.id !== id)); 
    };

    const handleIncreaseQuantity = (id) => {
        setCart(cart.map(item => item.id === id && item.quantity < 99 ? {...item, quantity: item.quantity + 1} : {...item}));
    };

    const handleDecreaseQuantity = (id) => {
        setCart(cart.map(item => item.id === id && item.quantity > 1 ? {...item, quantity: item.quantity - 1} : {...item})); 
    };

    return (
        <div className="flex justify-center mt-[50px]">
            <div className="flex flex-col items-center w-[500px] min-h-[calc(100vh-329px)] border-2 rounded-lg shadow-lg">
                {cart.length > 0 ? <Link to="/checkout" className="block w-full text-center py-2 bg-amber-400 font-bold rounded-t hover:bg-amber-500">Proceed to Checkout</Link> : <></>}
                <div className="mt-7">
                    {cart.length > 0 ? cart.map(product => (
                        <div id={product.id} className="flex items-center justify-center w-[350px] mb-7 py-3 shadow">
                            <img src={require(`../img/${product.img}`)} alt="product" className="h-[85px] mr-5" />
                            <div>
                                <p className="max-w-[200px] font-bold text-ellipsis overflow-hidden whitespace-nowrap">{product.item}</p>
                                <p>${product.price}</p>
                                <button onClick={() => handleIncreaseQuantity(product.id)} className="bg-blue-600 text-white px-1 font-extrabold">+</button>
                                <input type="text" value={product.quantity} disabled className="border-2 text-center w-10 rounded mx-2"/>
                                <button onClick={() => handleDecreaseQuantity(product.id)} className="bg-blue-600 text-white px-[6px] font-extrabold">-</button>
                                <button onClick={() => handleRemoveItem(product.id)} className="ml-5 py-1 px-2 rounded text-white bg-red-600 text-sm">remove</button>
                            </div>
                        </div>
                    )) :
                    <div className="flex flex-col justify-center w-[150px] mt-[50px]">
                        <img src={require("../img/empty-cart.png")} alt="empty shopping cart icon"/>
                        <h1 className="text-center font-bold text-2xl">Empty Cart</h1>
                    </div>}
                </div>
            </div>
        </div>
    );
}