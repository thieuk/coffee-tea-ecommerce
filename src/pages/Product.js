import Coffee from '../components/Coffee';
import { coffeeData } from '../data';

export default function Product() {
    return (
        <div>
            <img src={require("../img/coffee/coffee-bg.png")} alt="cups of coffee" className="w-screen" />
            <div className="flex">
                <div className="sm:block hidden bg-neutral-100 w-[10%] h-auto p-6">
                    <h2 className="font-bold text-md py-2">Roast</h2>
                    <input type="checkbox" id="light-roast" value="light-roast" />
                    <label htmlFor="light-roast">Light</label> <br />
                    <input type="checkbox" id="medium-roast" value="medium-roast" />
                    <label htmlFor="medium-roast">Medium</label> <br />
                    <input type="checkbox" id="dark-roast" value="dark-roast" />
                    <label htmlFor="dark-roast">Dark</label> <br />
                </div>
                <div className="flex flex-wrap w-full justify-center mt-5">
                    {coffeeData.map((data, index) => {
                        if (index === 2) {
                            return (
                                data.item.map(c => ( <Coffee img={c.img} brand={c.brand} blend={c.blend} price={c.price}/> ))
                            );
                        }

                        return (<></>);
                    })}
                </div>
            </div>
        </div>
    );
}