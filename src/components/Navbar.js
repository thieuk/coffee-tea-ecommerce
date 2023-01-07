import { Link } from 'react-router-dom';

function dropdown() {
    const dropdownBttn = document.querySelector(".dropdown-bttn");
    const dropdownItems = document.querySelector(".dropdown-items");

    dropdownBttn.addEventListener("mouseover", () => { dropdownItems.style.display = "block" });
    dropdownBttn.addEventListener("click", () => { dropdownItems.style.display = "block" });
    dropdownItems.addEventListener("mouseover", () => { dropdownItems.style.display = "block" });

    dropdownBttn.addEventListener("mouseout", () => { dropdownItems.style.display = "none" });
    dropdownItems.addEventListener("mouseout", () => { dropdownItems.style.display = "none" });
}

export default function Navbar() {
    return (
        <nav className="sticky top-0 flex items-center h-[65px] shadow-lg pl-5 bg-white">
            <Link to="/"><img src={require("../img/logo.png")} alt="logo" className="md:w-[50px] w-[35px]"/></Link>
            <Link to="/" className="lg:text-xl text-lg font-bold md:block hidden">CAFFINE DRINKS</Link>
            <div className="flex items-center ml-auto sm:gap-9 md:gap-5 gap-2 font-bold sm:text-base text-xs">
                <Link to="/" className="hover:border-b-4 border-black sm:mr-4 mr-3">Home</Link>
                <Link to="/" className="hover:border-b-4 border-black sm:mr-4 mr-3">About</Link>
                <div className="cursor-pointer">
                    <div className="dropdown-bttn flex items-center" onMouseEnter={dropdown} onMouseOut={dropdown} onClick={dropdown}>
                        Products<span className="material-symbols-outlined">expand_more</span>
                    </div>
                    <div className="dropdown-items absolute hidden font-normal z-[1] bg-white shadow-lg bg-neutral-100 ml-[-35px] p-3"
                        onMouseEnter={dropdown} onMouseOut={dropdown}>
                        <Link to="/coffee" className="block mt-3 py-2 text-center hover:bg-neutral-200 p-3">Coffee</Link>
                        <Link to="/" className="block mt-3 py-2 text-center hover:bg-neutral-200 p-3">Tea</Link>
                        <Link to="/" className="block my-3 py-2 text-center hover:bg-neutral-200 p-3">Energy Drinks</Link>
                    </div>
                </div>
                <Link to="/" className="hover:border-b-4 border-black">Contract</Link>
                <Link to="/" title="Checkout" className="material-symbols-outlined">shopping_cart_checkout</Link>
                <Link to="/" title="Account" className="material-symbols-outlined md:text-3xl text-md mr-7">account_circle</Link>
            </div>
        </nav>
    );
}