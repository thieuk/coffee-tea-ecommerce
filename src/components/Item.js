import { useContext } from "react";
import { CartContext, CartLengthContext } from "../App";
import QuantityController from "./QuantityController";

function itemInCart(cart, id) {
    let exist = false;

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
            exist = true;
            break;
        }
    }

    return exist;
}

export default function Item(prop) {
    const [cart, setCart] = useContext(CartContext);
    const [cartLength, setCartLength] = useContext(CartLengthContext);

    const handleAddToCart = () => setCart(oldArray => [...oldArray, valueForCart]);

    let valueForCart = {
        id: prop.id,
        img: prop.img,
        price: prop.price,
        item: prop.item,
        sale: prop.sale,
        discount: prop.discount,
        quantity: 1
    };

    return (
        <div className="flex flex-col items-center border-2 border-neutral-200 shadow-lg rounded h-fit sm:p-5 py-5 md:w-[240px] sm:w-[180px] w-[150px] md:h-[330px] sm:h-[210px] h-[210px]">
            <div className="w-[80%] md:h-[160px] sm:h-[120px] h-[60px] pb-2">
                <img src={require(`../img/${prop.img}`)} alt="item" className="h-full mx-auto object-contain"/>
            </div>
            <h1 className="w-[80%] text-center sm:text-lg text-sm font-extrabold text-ellipsis overflow-hidden whitespace-nowrap">
                {`${prop.brand}`}
            </h1>
            <h2 className="w-[80%] text-center sm:text-lg text-xs text-ellipsis font-bold overflow-hidden whitespace-nowrap">{`${prop.item}`}</h2>
            {prop.sale ? 
                <p>
                    <span className="text-neutral-600 mr-2 line-through">${prop.price}</span>
                    <span>${(parseFloat(prop.price) - parseFloat(prop.price) * prop.discount).toFixed(2)}</span>
                </p>
            : <p className="sm:text-base text-sm">{`$${prop.price}`}</p>}
                                    
            {!itemInCart(cart, prop.id) ? 
            <button className="font-bold text-purple-900 border-2 border-purple-900 rounded-2xl px-2 py-0 m-2 md:px-2 md:py-1 md:text-base text-sm hover:bg-purple-900 hover:text-amber-400"
                    onClick={() => { { handleAddToCart(); setCartLength(cartLength + 1); } }} >
                Add to Cart
            </button> : <QuantityController product={valueForCart} removeButton={false} />
            }
        </div>  
    );
}