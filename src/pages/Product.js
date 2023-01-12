import { useParams } from "react-router-dom";
import Item from '../components/Item';
import { coffeeData, teaData } from '../data';

export default function Product() {
    const { id } = useParams();
    let itemData = [];

    if (id === "coffee") itemData = coffeeData;
    if (id === "tea") itemData = teaData;

    return (
        <div>
            { <img src={require(`../img/${itemData[0].bg}`)} alt="background" className="w-screen" /> }
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
                    { itemData[2].item.map((data, index) => (
                        <Item key={`${id}${index}`} img={data.img} brand={data.brand} item={data.item} price={data.price}/>
                    )) }
                </div>
            </div>
        </div>
    );
}