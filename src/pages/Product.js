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
            { <img src={require(`../img/${itemData[0].bg}`)} alt="hero img" className="w-screen" /> }
            <div className="flex">
                <div className="sm:block hidden bg-neutral-100 w-[10%] h-auto p-6">
                    { itemData[1].filter.map((data) => (
                        <>
                            <h2 className="font-bold text-md py-2">{data.category}</h2>

                            {data.subCategory.map((sub) => (
                                <div>
                                    <input type="checkbox" id={`${data}-${sub.replace(" ", "-")}`} value={sub} />
                                    <label htmlFor={`${data}-${sub.replace(" ", "-")}`}>{sub}</label>
                                </div>
                            ))}
                        </>
                    )) }
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