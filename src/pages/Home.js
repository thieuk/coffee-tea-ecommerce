import { coffeeData, teaData } from '../data';
import Item from '../components/Item';
import DealSlider from '../components/DealSlider';
import { toast } from 'react-hot-toast';

export default function Home() {
    const popularProduct = [
        coffeeData[2].item[3], coffeeData[2].item[2], teaData[2].item[5], coffeeData[2].item[4],
        coffeeData[2].item[7], coffeeData[2].item[6], teaData[2].item[1], teaData[2].item[9], 
    ];

    return (
        <div className="min-h-[calc(100vh-329px)]">
            <h1 className="bg-purple-900 text-yellow-300 md:text-2xl text-lg font-bold text-center w-full p-2">Free Shipping on Orders Over $75</h1>
            <div className="relative">
                <img src={require("../img/home-hero.png")} alt="hero img" className="w-screen opacity-40" />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <h1 className="md:text-5xl sm:text-3xl text-xl font-extrabold w-[80%] text-center">
                        Bringing You the World's Finest Tea and Coffee Straight to Your Doorstep.
                    </h1>
                </div>
            </div>

            <DealSlider items={[coffeeData[2].item[3], teaData[2].item[0], teaData[2].item[1], coffeeData[2].item[2], coffeeData[2].item[4]]} />
            
            <div className="flex flex-col items-center mb-[35px]">
                <h1 className="mt-9 mb-4 text-center md:text-4xl text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 drop-shadow-lg">
                    Popular Products
                </h1>
                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 max-w-[1000px]">
                    {popularProduct.map((product) => (
                        <div key={product.id} className="sm:scale-[0.85] scale-95">
                            <Item id={product.id} img={product.img} brand={product.brand} item={product.item} price={product.price} sale={product.sale} discount={product.discount} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative">
                <img src={require("../img/home-b-hero.png")} alt="hero img" className="w-full md:min-h-[400px] min-h-[350px] object-none opacity-20" />
                <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                    <h1 className="md:text-5xl sm:text-3xl text-2xl font-extrabold text-center">MONTHLY DRAWINGS:</h1>
                    <h2 className="w-[90%] my-4 md:text-2xl sm:text-xl text-lg font-extrabold text-center">
                        Sign Up for Our Newsletter for a Chance to Win a $100 Gift Card
                    </h2>
                    <form onSubmit={(event) => { event.preventDefault(); toast.success("Thanks for Signing Up.")}} className="flex flex-col items-center">
                        <input type="email" placeholder="Enter your email..." required autoComplete="email" className="md:w-[150%] w-full mt-4 mb-3 md:p-3 p-2 md:text-xl text-lg text-black rounded border-4 border-purple-900"></input>
                        <input type="submit" value="SIGN UP TO WIN NOW" className="md:w-[150%] w-full bg-amber-400 md:text-xl text-lg hover:bg-yellow-500 rounded md:p-2 p-1 text-black font-extrabold cursor-pointer border-2 border-black" />
                    </form>
                </div>
            </div>
        </div>
    );
}