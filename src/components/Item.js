export default function Item(prop) {
    return (
        <div className="flex flex-col items-center border-2 border-neutral-200 shadow-lg rounded h-fit sm:p-5 py-5 sm:m-5 m-2 md:w-[240px] sm:w-[180px] w-[150px]">
            <div className="w-[80%] md:h-[160px] sm:h-[120px] h-[60px] pb-2">
                <img src={require(`../img/${prop.img}`)} alt="item" className="h-full mx-auto object-contain"/>
            </div>
            <h1 className="w-[80%] text-center sm:text-lg text-sm font-extrabold text-ellipsis overflow-hidden whitespace-nowrap">
                {`${prop.brand}`}
            </h1>
            <h2 className="w-[80%] text-center sm:text-lg text-xs text-ellipsis font-bold overflow-hidden whitespace-nowrap">{`${prop.item}`}</h2>
            <p className="sm:text-md text-xs ">{`$${prop.price}`}</p>
            <button className="font-bold text-purple-900 border-2 border-purple-900 rounded-2xl px-2 py-0 m-2 md:px-2 md:py-1 md:text-base text-sm hover:bg-purple-900 hover:text-amber-400">
                Add to Cart
            </button>
        </div>  
    );
}