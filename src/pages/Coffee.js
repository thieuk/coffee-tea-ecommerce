export default function Coffee() {
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
                    <div className="flex flex-col items-center border-2 border-neutral-200 shadow-lg rounded h-fit 
                        sm:p-5 py-5 sm:m-5 m-2 min-w-max">
                        <div className="w-[80%] sm:h-[200px] h-[120px] pb-2">
                            <img src={require("../img/coffee/coffee2.jpg")} alt="coffee" className="h-full mx-auto object-contain"/>
                        </div>
                        <h1 className="w-[80%] text-center sm:text-lg text-md font-bold text-ellipsis overflow-hidden whitespace-nowrap">
                            San Francisco Bay Coffee
                        </h1>
                        <h2 className="sm:text-lg text-md text-ellipsis overflow-hidden whitespace-nowrap">Moka Java</h2>
                        <p className="sm:text-md text-sm ">$22.99</p>
                    </div>
                </div>
            </div>
        </div>
    );
}