export default function Contact() {
    return (
        <div>
            <h1 className="w-full py-[25px] bg-purple-900 text-6xl text-white font-bold text-center">CONTACT US</h1>
            <div className="flex flex-col items-center">
                <div className="flex flex-col mt-5">
                    <label htmlFor="fname" className="mr-3 text-xl">Name</label>
                    <input type="text" id="fname" placeholder="Enter name..." className="w-[80vw] max-w-[500px] border-2 border-purple-900 p-1"></input>
                </div>
                <div className="flex flex-col mt-5">
                    <label htmlFor="mail" className="mr-3 text-xl">Email </label>
                    <input type="email" id="mail" placeholder="Enter your email..." className="w-[80vw] max-w-[500px] border-2 border-purple-900 p-1"></input>
                </div>
                <div className="flex flex-col mt-5">
                    <label htmlFor="msg" className="mr-3 text-xl">Message</label>
                    <textarea id="msg" placeholder="Enter your message..." className="w-[80vw] max-w-[500px] h-[150px] border-2 border-purple-900 p-1"></textarea>
                </div>
                <button className="mt-5 bg-amber-400 rounded py-2 px-3 text-black font-bold text-xl">SUBMIT</button>
            </div>
        </div>
    );
}