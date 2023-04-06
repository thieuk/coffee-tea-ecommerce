import Item from "./Item";

let currLocation = 0;

function slideLeft() {
    if (currLocation < 0) {
        currLocation += 100;
        document.getElementById("saleItems").style.transform = `translate(${currLocation}vw)`;
        document.getElementById("saleItemLoc").children.item(Math.abs(currLocation) / 100 + 1).style.backgroundColor = "white";
        document.getElementById("saleItemLoc").children.item(Math.abs(currLocation) / 100).style.backgroundColor = "#581c87";
    }
}

function slideRight() {
    if (currLocation > -400) {
        currLocation -= 100;
        document.getElementById("saleItems").style.transform = `translate(${currLocation}vw)`;
        document.getElementById("saleItemLoc").children.item(Math.abs(currLocation) / 100 - 1).style.backgroundColor = "white";
        document.getElementById("saleItemLoc").children.item(Math.abs(currLocation) / 100).style.backgroundColor = "#581c87";
    }
}

export default function DealSlider(props) {

    return (
        <div id="slider" className="relative">
            <hr className="absolute w-full top-5 z-[-1] border-t-4 border-purple-800" />
            <div className="w-fit mx-auto px-6 bg-white">
                <h1 className="w-fit mt-9 text-center md:text-4xl text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 drop-shadow-lg">
                    Deals of the Week
                </h1>
            </div>
            <div className="border-b-4 border-purple-800 overflow-x-hidden">
                <div id="saleItems" className="flex w-[500vw] sm:transition-transform sm:duration-1000">
                    {props.items.map((product) => ( 
                        <div key={product.id} className="w-full flex justify-center items-center my-9">
                            <Item img={product.img} brand={product.brand} item={product.item} price={product.price} id={product.id} sale={product.sale} discount={product.discount} />
                        </div>
                        
                    ))}
                </div>
                <div id="saleItemLoc" className="w-full flex justify-center gap-3 mb-4">
                    <span className="rounded-full w-[10px] aspect-square border-2 border-purple-900 bg-purple-900"></span>
                    <span className="rounded-full w-[10px] aspect-square border-2 border-purple-900"></span>
                    <span className="rounded-full w-[10px] aspect-square border-2 border-purple-900"></span>
                    <span className="rounded-full w-[10px] aspect-square border-2 border-purple-900"></span>
                    <span className="rounded-full w-[10px] aspect-square border-2 border-purple-900"></span>
                </div>
                <button onClick={slideLeft} className="absolute top-[50%] left-0 h-[150px] translate-y-[calc(-50%+10px)] flex items-center p-2 bg-neutral-300 hover:bg-neutral-400">
                    <span className="material-symbols-outlined">arrow_back_ios</span>
                </button>
                <button onClick={slideRight} className="absolute top-[50%] right-0 h-[150px] translate-y-[calc(-50%+10px)] flex items-center p-2 bg-neutral-300 hover:bg-neutral-400">
                    <span className="material-symbols-outlined">arrow_forward_ios</span>
                </button>                
            </div>
        </div>
    );
}