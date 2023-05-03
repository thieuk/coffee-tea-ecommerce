import { useContext } from "react";
import { CartContext, CartLengthContext } from "../App";
import QuantityController from "./QuantityController";
import itemInCart from "../utilities/ItemInCart";

export default function Item(props) {
    const [cart, setCart] = useContext(CartContext);
    const [cartLength, setCartLength] = useContext(CartLengthContext);
    let valueForCart = {
        id: props.id,
        img: props.img,
        price: props.price,
        item: props.item,
        sale: props.sale,
        discount: props.discount,
        quantity: 1
    };

    const handleAddToCart = () => setCart(oldArray => [...oldArray, valueForCart]);


    return (
        <div className="flex flex-col items-center bg-white border-2 border-neutral-200 shadow-lg rounded h-fit sm:p-5 py-5 md:w-[240px] sm:w-[180px] w-[150px] md:h-[330px]">
            <div className="w-[80%] md:h-[160px] sm:h-[120px] h-[60px] pb-2">
                <img src={require(`../img/${props.img}`)} alt="item" className="h-full mx-auto object-contain"/>
            </div>
            <h1 className="w-[80%] text-center sm:text-lg text-sm font-extrabold text-ellipsis overflow-hidden whitespace-nowrap">
                {`${props.brand}`}
            </h1>
            <h2 className="w-[80%] text-center sm:text-lg text-xs text-ellipsis font-bold overflow-hidden whitespace-nowrap">{`${props.item}`}</h2>
            {props.sale ? 
                <p>
                    <span className="text-neutral-600 mr-2 line-through">${props.price}</span>
                    <span>${(parseFloat(props.price) - parseFloat(props.price) * props.discount).toFixed(2)}</span>
                </p>
            : <p className="sm:text-base text-sm">{`$${props.price}`}</p>}
                                    
            {!itemInCart(cart, props.id) ? 
            <button className="font-bold text-purple-900 border-2 border-purple-900 rounded-2xl px-2 py-0 m-2 md:px-2 md:py-1 md:text-base text-sm hover:bg-purple-900 hover:text-amber-400"
                    onClick={() => { handleAddToCart(); setCartLength(cartLength + 1); }} >
                Add to Cart
            </button> : <QuantityController product={valueForCart} removeButton={false} />}
        </div>  
    );
}