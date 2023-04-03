import { useContext } from "react";
import { CartContext } from "../App";
import { Link } from "react-router-dom";
import QuantityController from "../components/QuantityController";

export default function Cart() {
    const [cart, setCart] = useContext(CartContext);

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
                                <QuantityController product={product} removeButton={true} />
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