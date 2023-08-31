import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export default function Footer() {
    const handleDisplayMsg = () => {
        toast("This is just a frontend project. \nThis page does not exist.", 
        { duration: 4000, 
            style: {
                textAlign: "center",
                color: "#fcd34d"
            }
        });
    }

    return (
        <footer className="bg-purple-900 text-white w-full mt-[50px] p-10">
            <div className="flex gap-x-[10vw] gap-y-[5vw] w-fit mx-auto md:flex-row flex-col sm:text-base text-sm">
                <div className="flex gap-[10vw]">
                    <div className="flex flex-col">
                        <h3 className="font-extrabold">COMPANY</h3>
                        <Link to="/about" className="text-left hover:underline underline-offset-4">About us</Link>
                        <button onClick={handleDisplayMsg} className="text-left hover:underline underline-offset-4">Code of Ethics</button>
                        <button onClick={handleDisplayMsg} className="text-left hover:underline underline-offset-4">Careers</button>
                        <button onClick={handleDisplayMsg} className="text-left hover:underline underline-offset-4">Return Policy</button>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="font-extrabold">PRODUCTS</h3>
                        <Link to="/product/coffee" className="text-left hover:underline underline-offset-4">Coffee</Link>
                        <Link to="/product/tea" className="text-left hover:underline underline-offset-4">Tea</Link>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="font-extrabold">SOCIAL</h3>
                        <button onClick={handleDisplayMsg} className="text-left hover:underline underline-offset-4">Facebook</button>
                        <button onClick={handleDisplayMsg} className="text-left hover:underline underline-offset-4">Instagram</button>
                        <button onClick={handleDisplayMsg} className="text-left hover:underline underline-offset-4">Twitter</button>
                    </div>
                </div>
                <form onSubmit={(event) => { event.preventDefault(); toast.success("Thanks for Signing Up.")} } className="flex flex-col items-center">
                    <h3 className="font-bold">SIGN UP FOR NEWSLETTER</h3>
                    <input type="email" placeholder="Enter your email..." required autoComplete="email" className="w-full mt-2 mb-3 p-2 text-black rounded"></input>
                    <input type="submit" value="SUBSCRIBE" className="w-full bg-amber-400 hover:bg-yellow-500 rounded py-2 px-3 text-black font-bold cursor-pointer" />
                </form>
            </div>
        </footer>
    );
}