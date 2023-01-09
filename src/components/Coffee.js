export default function Coffee(prop) {
    return (
        <div className="flex flex-col items-center border-2 border-neutral-200 shadow-lg rounded h-fit 
        sm:p-5 py-5 sm:m-5 m-2 w-[250px]">
            <div className="w-[80%] sm:h-[200px] h-[120px] pb-2">
                <img src={require(`../img/coffee/${prop.img}`)} alt="coffee" className="h-full mx-auto object-contain"/>
            </div>
            <h1 className="w-[80%] text-center sm:text-lg text-md font-bold text-ellipsis overflow-hidden whitespace-nowrap">
                {`${prop.brand}`}
            </h1>
            <h2 className="sm:text-lg text-md text-ellipsis overflow-hidden whitespace-nowrap">{`${prop.blend}`}</h2>
            <p className="sm:text-md text-sm ">{`$${prop.price}`}</p>
        </div>
                    
    );
}