export default function Contact() {
    return (
        <div>
            <h1 className="w-full py-[25px] bg-purple-900 sm:text-6xl text-4xl text-white font-bold text-center">Contact Us</h1>
            <form className="flex flex-col items-center">
                <div className="flex flex-col mt-5">
                    <label htmlFor="fname" className="mr-3 sm:text-xl text-lg">Name</label>
                    <input type="text" id="fname" required placeholder="Enter name..." className="w-[80vw] max-w-[500px] border-2 border-purple-900 p-1"></input>
                </div>
                <div className="flex flex-col mt-5">
                    <label htmlFor="mail" className="mr-3 sm:text-xl text-lg">Email </label>
                    <input type="email" id="mail" required placeholder="Enter your email..." className="w-[80vw] max-w-[500px] border-2 border-purple-900 p-1"></input>
                </div>
                <div className="flex flex-col mt-5">
                    <label htmlFor="msg" className="mr-3 sm:text-xl text-lg">Message</label>
                    <textarea id="msg" required placeholder="Enter your message..." className="w-[80vw] max-w-[500px] h-[150px] border-2 border-purple-900 p-1"></textarea>
                </div>
                <input type="submit" value="SUBMIT" className="mt-5 bg-amber-400 rounded py-2 px-3 text-black font-bold sm:text-xl text-lg cursor-pointer" />
            </form>
        </div>
    );
}