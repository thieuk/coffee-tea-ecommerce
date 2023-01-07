export default function Coffee() {
    return (
        <div>
            <img src={require("../img/coffee/coffee-bg.jpg")} alt="cups of coffee" className="w-screen" />
            <div className="flex">
                <div className="bg-neutral-100 w-[10%] h-auto p-6">
                    <h2 className="font-bold text-md py-2">Roast</h2>
                    <input type="checkbox" id="light-roast" value="light-roast" />
                    <label for="light-roast">Light</label> <br />
                    <input type="checkbox" id="medium-roast" value="medium-roast" />
                    <label for="medium-roast">Medium</label> <br />
                    <input type="checkbox" id="dark-roast" value="dark-roast" />
                    <label for="dark-roast">Dark</label> <br />
                </div>
                <div className="flex flex-wrap w-full justify-center mt-5">
                    <div className="flex flex-col items-center border-2 border-neutral-200 shadow-lg rounded w-[20%] h-fit p-5 m-5">
                        <div className="w-[80%] h-[200px] pb-2">
                            <img src={require("../img/coffee/coffee2.jpg")} alt="coffee" className="h-full mx-auto"/>
                        </div>
                        <h1 className="w-[90%] text-center text-lg font-bold text-ellipsis overflow-hidden whitespace-nowrap">
                            San Francisco Bay Coffee
                        </h1>
                        <h2 className="text-lg text-ellipsis overflow-hidden whitespace-nowrap">Moka Java</h2>
                        <p>$22.99</p>
                    </div>
                </div>
            </div>
        </div>
    );
}