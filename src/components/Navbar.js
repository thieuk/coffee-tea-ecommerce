import { Link } from 'react-router-dom';

function dropdown() {
    const dropdownItems = document.querySelector(".dropdown-items")

    if (dropdownItems.style.display === "block")
        dropdownItems.style.display = "none";
    else
        dropdownItems.style.display = "block";
}

//onMouseEnter={dropdown} onMouseOut={dropdown} onClick={dropdown}
//onMouseEnter={dropdown} onMouseLeave={dropdown}

export default function Navbar() {
    return (
        <nav className="sticky top-0 flex items-center h-[65px] shadow-lg pl-5 bg-white">
            <Link to="/"><img src={require("../img/logo.png")} alt="logo" className="md:w-[50px] w-[35px]"/></Link>
            <Link to="/" className="lg:text-xl text-lg font-bold md:block hidden">CAFFINE DRINKS</Link>
            <div className="flex items-center ml-auto sm:gap-9 md:gap-5 gap-2 font-bold sm:text-base text-xs">
                <Link to="/" className="hover:border-b-4 border-black sm:mr-4 mr-3">Home</Link>
                <Link to="/" className="hover:border-b-4 border-black sm:mr-4 mr-3">About</Link>
                <div className="cursor-pointer">
                    <div className="dropdown-bttn flex items-center" 
                        >
                        Products<span className="material-symbols-outlined">expand_more</span>
                    </div>
                    <div 
                        className="dropdown-items font-normal z-[1] bg-white shadow-lg w-[140%] bg-neutral-100 ml-[-20px]">
                        <Link to="/coffee" className="mt-3 py-2 text-center w-full hover:bg-neutral-200 hover:font-bold">Coffee</Link>
                        <Link to="/" className="mt-3 py-2 text-center w-full hover:bg-neutral-200 hover:font-bold">Tea</Link>
                        <Link to="/" className="my-3 py-2 text-center w-full hover:bg-neutral-200 hover:font-bold">Energy Drinks</Link>
                    </div>
                </div>
                <Link to="/" className="hover:border-b-4 border-black">Contract</Link>
                <Link to="/" title="Checkout" className="material-symbols-outlined">shopping_cart_checkout</Link>
                <Link to="/" title="Account" className="material-symbols-outlined md:text-3xl text-md mr-7">account_circle</Link>
            </div>
        </nav>
    );
}