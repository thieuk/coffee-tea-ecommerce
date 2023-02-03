import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-purple-900 text-white w-full mt-[50px]">
            <div className="flex gap-x-[10vw] gap-y-[5vw] p-5 w-fit mx-auto md:flex-row flex-col sm:text-base text-sm">
                <div className="flex gap-[10vw]">
                    <div className="flex flex-col">
                        <h3 className="font-bold">COMPANY</h3>
                        <Link to="/about">About us</Link>
                        <Link to="/notFound">Code of Ethics</Link>
                        <Link to="/notFound">Careers</Link>
                        <Link to="/notFound">Return Policy</Link>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="font-bold">PRODUCTS</h3>
                        <Link to="/product/coffee">Coffee</Link>
                        <Link to="/product/tea">Tea</Link>
                        <Link to="/notFound">Brewing Tools</Link>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="font-bold">SOCIAL</h3>
                        <Link to="/notFound">Facebook</Link>
                        <Link to="/notFound">Instagram</Link>
                        <Link to="/notFound">Twitter</Link>
                    </div>
                </div>
                <form className="flex flex-col items-center">
                    <h3 className="font-bold">SIGN UP FOR NEWSLETTER</h3>
                    <input type="email" placeholder="Enter your email..." required className="w-full mt-2 mb-3 p-2 text-black rounded"></input>
                    <input type="submit" value="SUBSCRIBE" className="w-full bg-amber-400 hover:bg-yellow-500 rounded py-2 px-3 text-black font-bold cursor-pointer" />
                </form>
            </div>
        </footer>
    );
}