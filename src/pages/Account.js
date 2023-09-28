import { toast } from "react-hot-toast";

let login = true;

function chgForm() {
    if (login) { 
        document.getElementById("signin").style.display = "none";
        document.getElementById("signup").style.display = "block";
        login = false; 
    }
    else {
        document.getElementById("signin").style.display = "block";
        document.getElementById("signup").style.display = "none";
        login = true;
    }
}

export default function Account() {
    const handleDisplayMsg = () => {
        toast("This is a just a frontend project. \nYou can't login or signup.", 
        { duration: 4000, 
            style: {
                textAlign: "center",
                color: "#fcd34d"
            } 
        });
    }

    return (
        <div className="min-h-[calc(100vh-65px)] flex justify-center items-center p-12">
            <div id="account" className="w-fit sm:h-[475px] h-fit flex items-center border-2 border-purple-900 rounded-xl sm:px-16 sm:py-0 p-5 gap-9 shadow-2xl shadow-purple-300">
                <div id="signup" className="hidden flex flex-col justify-center w-[240px] sm:scale-100 scale-90">
                    <h1 className="font-bold text-2xl text-center text-purple-900">SIGN UP</h1>
                    <form id="signup" className="flex flex-col justify-center">
                        <input type="email" id="signup-username" placeholder="Username" required autoComplete="email" className="mt-5 border-2 border-purple-900 p-1 rounded shadow-lg shadow-purple-200"/>
                        <input type="password" id="new-password" placeholder="Password" required className="mt-5 border-2 border-purple-900 p-1 rounded shadow-lg shadow-purple-200"/>
                        <input type="password" id="reenter-password" placeholder="Re-enter password" required className="mt-5 border-2 border-purple-900 p-1 rounded shadow-lg shadow-purple-200"/>
                        <button onClick={(event) => { event.preventDefault(); handleDisplayMsg()}} type="submit" className="w-fit bg-amber-400 hover:bg-amber-500 py-2 px-3 font-bold rounded mt-4 mx-auto shadow-lg">SIGN UP</button>
                    </form>
                    <p className="mt-5 text-center">Already a user? <span className="underline font-bold cursor-pointer" onClick={chgForm}>LOGIN</span></p>
                </div>
                <div id="signin" className="flex flex-col justify-center w-[240px] sm:scale-100 scale-90">
                    <h1 className="font-bold text-2xl text-center text-purple-900">LOGIN</h1>
                    <form id="signin" className="flex flex-col justify-center">
                        <input type="email" id="signup-username" placeholder="Username" required autoComplete="email" className="mt-5 border-2 border-purple-900 p-1 rounded shadow-lg shadow-purple-200"/>
                        <input type="password" id="new-password" placeholder="Password" required className="mt-5 border-2 border-purple-900 p-1 rounded shadow-lg shadow-purple-200"/>
                        <button onClick={(event) => { event.preventDefault(); handleDisplayMsg()}} type="submit" className="w-fit bg-amber-400 hover:bg-amber-500 py-2 px-3 font-bold rounded mt-4 mx-auto">SIGN IN</button>
                        <p className="mt-4 text-center underline underline-offset-2 cursor-pointer">Forgot Password?</p>
                        <div className="flex flex-col items-center mt-7">
                            <hr className="w-full border-t-4 border-purple-800" />
                            <span className="bg-white px-2 mt-[-15px]">or</span>
                        </div>
                        <button onClick={(event) => { event.preventDefault(); handleDisplayMsg()}} className="flex justify-center items-center mt-5 py-2 bg-neutral-200 rounded hover:bg-neutral-300 border-2 border-neutral-300 shadow-lg">
                            <img src={require("../img/google-icon.jpg")} alt="google logo" className="w-[25px] h-[25px]" />
                            <span className="text-sm">Sign In with Google</span>
                        </button>
                    </form>
                    <p className="mt-5 text-center">Need an account? <span className="underline font-bold cursor-pointer" onClick={chgForm}>SIGN UP</span></p>
                </div>
            </div>
        </div>
    );
}