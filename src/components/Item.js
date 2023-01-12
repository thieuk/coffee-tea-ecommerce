export default function Item(prop) {
    return (
        <div className="flex flex-col items-center border-2 border-neutral-200 shadow-lg rounded h-fit 
        sm:p-5 py-5 sm:m-5 m-2 md:w-[250px] sm:w-[200px] w-[150px]">
            <div className="w-[80%] md:h-[200px] sm:h-[150px] h-[100px] pb-2">
                <img src={require(`../img/${prop.img}`)} alt="item" className="h-full mx-auto object-contain"/>
            </div>
            <h1 className="w-[80%] text-center sm:text-lg text-md font-bold text-ellipsis overflow-hidden whitespace-nowrap">
                {`${prop.brand}`}
            </h1>
            <h2 className="w-[80%] text-center sm:text-lg text-md text-ellipsis overflow-hidden whitespace-nowrap">{`${prop.item}`}</h2>
            <p className="sm:text-md text-sm ">{`$${prop.price}`}</p>
        </div>
                    
    );
}