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

    const linkStyle = "text-left hover:scale-105";
    const headerStyle = "mb-2 font-extrabold underline underline-offset-4 decoration-white decoration-2";

    return (
        <footer className="bg-purple-900 text-white w-full mt-[50px] p-10">
            <div className="flex gap-x-[10vw] gap-y-[5vw] w-fit mx-auto md:flex-row flex-col sm:text-base text-sm">
                <div className="flex gap-[10vw]">
                    <div className="flex flex-col">
                        <h3 className={headerStyle}>COMPANY</h3>
                        <Link to="/about" className={linkStyle}>About us</Link>
                        <button onClick={handleDisplayMsg} className={linkStyle}>Code of Ethics</button>
                        <button onClick={handleDisplayMsg} className={linkStyle}>Careers</button>
                        <button onClick={handleDisplayMsg} className={linkStyle}>Return Policy</button>
                    </div>
                    <div className="flex flex-col">
                        <h3 className={headerStyle}>PRODUCTS</h3>
                        <Link to="/product/coffee" className={linkStyle}>Coffee</Link>
                        <Link to="/product/tea" className={linkStyle}>Tea</Link>
                    </div>
                    <div className="flex flex-col">
                        <h3 className={headerStyle}>SOCIAL</h3>
                        <button onClick={handleDisplayMsg} className={linkStyle}>Facebook</button>
                        <button onClick={handleDisplayMsg} className={linkStyle}>Instagram</button>
                        <button onClick={handleDisplayMsg} className={linkStyle}>Twitter</button>
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