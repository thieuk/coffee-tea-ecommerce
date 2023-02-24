import { useParams } from "react-router-dom";
import { coffeeData, teaData } from '../data';
import Item from '../components/Item';
import Filter from '../components/Filter';

export default function Product() {
    const { id } = useParams();
    let itemData = [];

    if (id === "coffee") itemData = coffeeData;
    if (id === "tea") itemData = teaData;

    return (
        <div>
            { <img src={require(`../img/${itemData[0].hero}`)} alt="hero img" className="w-screen" /> }
            <div className="relative flex">
                <Filter itemData={itemData}/>
                <div className="flex flex-wrap w-full justify-center mt-5">
                    { itemData[2].item.map((data, index) => (
                        <Item key={`${id}${index}`} img={data.img} brand={data.brand} item={data.item} price={data.price}/>
                    )) }
                </div>
            </div>
        </div>
    );
}