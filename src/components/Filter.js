import "./Filter.css";

function hideFilter() {
    document.querySelector(":root").style.setProperty("--filter-display", "none");
    document.querySelector(":root").style.setProperty("--filter-transform", "translateX(-100%)");
    document.getElementById("close-filter").style.display = "none";
    document.getElementById("blur-bg").style.display = "none";
}

function showFilter() {
    document.querySelector(":root").style.setProperty("--filter-display", "block");
    document.querySelector(":root").style.setProperty("--filter-transform", "translateX(0)");
    document.getElementById("close-filter").style.display = "block";
    document.getElementById("blur-bg").style.display = "block";
}

export default function Filter(props) {
    return (
        <>
            <div id="blur-bg" onClick={hideFilter} className="hidden absolute top-0 left-0 w-full h-[calc(100%+50px)] bg-neutral-500 opacity-60"></div>
            <div className="flex">
                <div id="filter" className="md:relative absolute bg-neutral-100 w-[150px] h-[calc(100%+50px)] p-6">
                    <svg id="close-filter" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={hideFilter} className="hidden w-7 h-7 absolute top-3 right-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    { props.itemData[1].filter.map((data) => (
                        <>
                            <h2 className="font-bold text-md py-2">{data.category}</h2>
                            {data.subCategory.map((sub) => (
                                <div>
                                    <input type="checkbox" id={`${data}-${sub.replace(" ", "-")}`} value={sub} className="border-[1px] border-black mr-1"/>
                                    <label htmlFor={`${data}-${sub.replace(" ", "-")}`}>{sub}</label>
                                </div>
                            ))}
                            {document.querySelectorAll("input[type=checkbox]").forEach(item => {
                                item.checked = false
                            })}
                        </>
                    )) }
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={showFilter} className="md:hidden w-10 h-10 p-2 m-2 rounded-full hover:bg-neutral-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                </svg>
            </div>
        </>
    );
}