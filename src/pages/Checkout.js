import { useContext } from "react";
import { CartContext, CartLengthContext } from "../App";
import calculateCost from "../utilities/calculateCost";
import Cart from "./Cart";
import { toast } from "react-hot-toast";

export default function Checkout() {
    const [cart, setCart] = useContext(CartContext);
    const [, setcartLength] = useContext(CartLengthContext);

    const cost = calculateCost(cart);
    const inputStyle = "block w-full border-2 border-purple-900 rounded p-1 mb-1 shadow-lg shadow-purple-200";

    return (
        <div className="flex md:flex-row flex-col md:justify-center max-md:items-center pt-[50px] min-h-[424px]">
            {cart.length > 0 ? 
            <>
            <div>
                <div className="md:w-[300px] w-[350px] h-fit flex flex-col justify-center items-center border-2 rounded-lg p-7 mb-5 shadow-[0_0_15px_rgb(233,213,255)]">
                    <div className="w-fit">
                        <p>Items: ${cost.items.toFixed(2)}</p>
                        <p>Shipping: ${cost.shipping.toFixed(2)}</p>
                        <p className="italic text-sm text-neutral-500">*Free Shipping on Order Over $75</p>
                        <p>Tax: ${cost.tax.toFixed(2)}</p>
                        <hr className="border-t-2 my-3" />
                        <p className="font-bold">Order Total: ${cost.total.toFixed(2)}</p>
                    </div>
                </div>
                <div className="relative md:w-[300px] w-[350px] h-[368px] overflow-auto border-2 border-white rounded-lg md:mr-5 px-7 shadow-[0_0_15px_rgb(233,213,255)]">
                    <h1 className="sticky top-0 w-full leading-10 bg-white text-center font-bold text-lg pb-2 pt-4">Your Order</h1>
                    <hr className="sticky top-[64px] border-t-2"/>
                    <div className="pt-2 pb-7">
                        {cart.map(product => (
                                <p><span className="flex leading-8">
                                    <span className="block max-w-[205px] text-ellipsis overflow-hidden whitespace-nowrap">{product.item}</span> 
                                    <span className="ml-[5px] font-bold"> x {product.quantity}</span>
                                </span></p>
                        ))}
                    </div>
                </div>
            </div>
            <form onSubmit={(event) => { event.preventDefault(); toast.success("Thank You for Purchasing!"); setCart([]); setcartLength(0)} } className="md:w-[400px] w-[350px] h-fit border-2 rounded-lg p-10 md:mt-0 mt-5 shadow-[0_0_15px_rgb(233,213,255)]">
                <input className={inputStyle} type="text" placeholder="Name" required/>
                <input className={inputStyle} type="mail" placeholder="Email"/>
                <p className="italic text-sm text-neutral-500">*Email Optional</p>
                <p className="text-lg mt-6 font-bold">Mailling Address</p>
                <input className={inputStyle}  type="text" placeholder="Street Adress" required/>
                <div className="flex">
                    <input className={`${inputStyle} w-[40%]`} type="text" placeholder="City" required/>
                    <input className={`${inputStyle} w-[25%] ml-[5%]`} type="text" placeholder="State" required/>
                    <input className={`${inputStyle} w-[25%] ml-[5%]`} type="text" placeholder="Zip" required/>
                </div>
                <div className="flex my-6">
                    <input className="w-[55%] border-2 border-purple-900 shadow-lg shadow-purple-200 rounded p-1" type="text" placeholder="Discount Code" />
                    <button onClick={() => toast.error("Invalid Code.")} className="w-[40%] ml-[5%] md:font-bold font-base bg-purple-700 text-white rounded shadow-lg">Apply Code</button>
                </div>
                <p className="text-lg font-bold">Credit Card Information</p>
                <input className={inputStyle} type="tel" inputmode="numeric" pattern="[0-9\s]{13,19}" autoComplete="cc-number" placeholder="Card Number" required />
                <input className={inputStyle} type="tel" inputmode="numeric" pattern="[0-9]{2}[\s]?[//]?[\s]?[0-9]{2}" placeholder="MM / YY" required />
                <input className={inputStyle} type="tel" inputmode="numeric" pattern="[0-9]{3}" placeholder="CVC" required />
                <button className="w-full rounded py-2 mt-2 md:font-extrabold font-bold bg-amber-400 hover:bg-amber-500 shadow-lg" type="submit">Place Order</button>
            </form>
            </>
            : <div className="mt-[-50px]"><Cart /></div>}
        </div>
    );
;}