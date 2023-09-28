import { useParams } from "react-router-dom";
import { coffeeData, teaData } from '../data';
import Item from '../components/Item';
import Filter from '../components/Filter';

export default function Product() {
    const { id } = useParams();
    let itemData = [];

    if (id === "coffee") itemData = coffeeData;
    else itemData = teaData;

    return (
        <div className="min-h-[calc(100vh-280px)]">
            { <img src={require(`../img/${itemData[0].hero}`)} alt="hero img" className="w-screen" /> }
            <div className="relative flex">
                <Filter itemData={itemData}/>
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 w-fit justify-items-center gap-10 mt-10 mx-auto">
                    { itemData[2].item.map((data) => (
                        <Item key={data.id} img={data.img} brand={data.brand} item={data.item} price={data.price} id={data.id} sale={data.sale} discount={data.discount} />
                    )) }
                </div>
            </div>
        </div>
    );
}