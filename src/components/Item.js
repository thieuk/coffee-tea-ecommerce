import { useContext } from "react";
import { CartContext, CartLengthContext } from "../App";
import toast from 'react-hot-toast';

function itemInCart(cart, id) {
    let exist = false;

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
            exist = true;
            break;
        }
    }

    exist ? toast("Item Already in Cart.") : toast.success("Item Added to Cart.");

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
        quantity: 1
    };

    return (
        <div className="flex flex-col items-center border-2 border-neutral-200 shadow-lg rounded h-fit sm:p-5 py-5 md:w-[240px] sm:w-[180px] w-[150px]">
            <div className="w-[80%] md:h-[160px] sm:h-[120px] h-[60px] pb-2">
                <img src={require(`../img/${prop.img}`)} alt="item" className="h-full mx-auto object-contain"/>
            </div>
            <h1 className="w-[80%] text-center sm:text-lg text-sm font-extrabold text-ellipsis overflow-hidden whitespace-nowrap">
                {`${prop.brand}`}
            </h1>
            <h2 className="w-[80%] text-center sm:text-lg text-xs text-ellipsis font-bold overflow-hidden whitespace-nowrap">{`${prop.item}`}</h2>
            <p className="sm:text-md text-xs ">{`$${prop.price}`}</p>
            <button className="font-bold text-purple-900 border-2 border-purple-900 rounded-2xl px-2 py-0 m-2 md:px-2 md:py-1 md:text-base text-sm hover:bg-purple-900 hover:text-amber-400"
                    onClick={() => { if (!itemInCart(cart, prop.id)) { handleAddToCart(); setCartLength(cartLength + 1); } }} >
                Add to Cart
            </button>
        </div>  
    );
}