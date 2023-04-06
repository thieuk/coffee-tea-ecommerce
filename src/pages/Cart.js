import { useContext } from "react";
import { CartContext } from "../App";
import { Link } from "react-router-dom";
import QuantityController from "../components/QuantityController";

export default function Cart() {
    const [cart, setCart] = useContext(CartContext);

    return (
        <div className="flex justify-center mt-[50px]">
            <div className="flex flex-col items-center md:w-[500px] sm:w-[400px] w-[300px] min-h-[calc(100vh-328px)] border-2 rounded-lg shadow-lg">
                {cart.length > 0 ? <Link to="/checkout" className="block w-full text-center py-2 bg-amber-400 font-bold rounded-t hover:bg-amber-500">Proceed to Checkout</Link> : <></>}
                <div className="w-[80%] mt-7">
                    {cart.length > 0 ? cart.map(product => (
                        <div key={product.id} className="flex items-center justify-center mb-7 py-3 shadow">
                            <img src={require(`../img/${product.img}`)} alt="product" className="h-[85px] mr-5" />
                            <div>
                                <p className="max-w-[200px] max-md:w-[150px] max-sm:w-[100px] font-bold text-ellipsis overflow-hidden whitespace-nowrap">{product.item}</p>
                                <p className="max-sm:text-sm">${(parseFloat(product.price) - parseFloat(product.price) * product.discount).toFixed(2)}</p>
                                <QuantityController product={product} removeButton={true} />
                            </div>
                        </div>
                    )) :
                    <div className="flex flex-col items-center mt-[50px]">
                        <img src={require("../img/empty-cart.png")} alt="empty shopping cart icon" className="w-[120px]" />
                        <h1 className="w-fit text-center font-bold text-2xl">Empty Cart</h1>
                    </div>}
                </div>
            </div>
        </div>
    );
}