import { Link } from 'react-router-dom';
import { useContext } from "react";
import { CartLengthContext } from "../App";

function dropdown() {
    const dropdownBttn = document.querySelector(".dropdown-bttn");
    const dropdownItems = document.querySelector(".dropdown-items");

    dropdownBttn.addEventListener("mouseover", () => { dropdownItems.style.display = "block"; });
    dropdownBttn.addEventListener("click", () => { dropdownItems.style.display = "block" });
    dropdownItems.addEventListener("mouseover", () => { dropdownItems.style.display = "block"; });

    dropdownBttn.addEventListener("mouseout", () => { dropdownItems.style.display = "none"; });
    dropdownItems.addEventListener("mouseout", () => { dropdownItems.style.display = "none"; });
}

function handleClick() {
    const dropdownItems = document.querySelector(".dropdown-items");
    dropdownItems.style.display = "none";
}

export default function Navbar() {
    const [cartLength, setcartLength] = useContext(CartLengthContext);

    return (
        <nav className="sticky top-0 flex items-center h-[65px] shadow-lg bg-white z-[99]">
            <Link to="/"><img src={require("../img/logo.png")} alt="logo" className="md:w-[50px] w-[35px] ml-5 mr-3"/></Link>
            <Link to="/" className="lg:text-xl text-lg font-bold md:block hidden">COFFEE & TEA</Link>
            <div className="flex items-center ml-auto sm:gap-9 md:gap-5 gap-2 font-bold sm:text-base text-xs">
                <Link to="/" className="hover:border-b-4 border-black sm:mr-4 mr-3">Home</Link>
                <Link to="/about" className="hover:border-b-4 border-black sm:mr-4 mr-3">About</Link>
                <div className="cursor-pointer">
                    <div className="dropdown-bttn flex items-center py-5" onMouseEnter={dropdown} onMouseOut={dropdown} onClick={dropdown}>
                        Products<span className="material-symbols-outlined">expand_more</span>
                    </div>
                    <div className="dropdown-items absolute hidden font-normal shadow-xl bg-neutral-100 p-5 ml-[-20px]"
                        onMouseEnter={dropdown} onMouseOut={dropdown}>
                        <Link to="/product/coffee" className="block py-2 text-center hover:bg-neutral-200 p-5" onClick={handleClick}>Coffee</Link>
                        <Link to="/product/tea" className="block mt-3 py-2 text-center hover:bg-neutral-200 p-5" onClick={handleClick}>Tea</Link>
                    </div>
                </div>
                <Link to="/contact" className="hover:border-b-4 border-black">Contact</Link>
                <div className="relative">
                    <Link to="/cart" title="Checkout" className="material-symbols-outlined">shopping_cart_checkout</Link>
                    <Link to="/cart" className="absolute top-[-12px] right-[-12px] flex justify-center items-center scale-[0.65] bg-red-700 rounded-full text-white aspect-square w-7">{cartLength}</Link>
                </div>
                <Link to="/account" title="Account">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7 mr-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </Link>
            </div>
        </nav>
    );
}