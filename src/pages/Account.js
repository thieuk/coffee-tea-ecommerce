function chgForm() {
    if (document.querySelector("#account div button").innerHTML === "CREATE ACCOUNT") {
        document.querySelector("#account div h1").innerHTML = "Aready Have an Account?";
        document.querySelector("#account div h2").innerHTML = "Sign In Instead";
        document.querySelector("#account div button").innerHTML = "LOG IN";
        document.querySelector("#account div").style.transform = "translate(100%)";
        document.querySelector("#account div").style.borderRadius = "0 8px 8px 0";
    }
    else {
        document.querySelector("#account div h1").innerHTML = "Don't Have an Account?";
        document.querySelector("#account div h2").innerHTML = "Sign Up Instead";
        document.querySelector("#account div button").innerHTML = "CREATE ACCOUNT";
        document.querySelector("#account div").style.transform = "translate(0)";
        document.querySelector("#account div").style.borderRadius = "8px 0 0 8px";
    }
}

export default function Account() {
    return (
        <div id="account" className="relative w-fit mx-auto flex border-2 border-purple-900 rounded-xl p-9 gap-9 mt-[50px]">
            <form id="signup" className="flex flex-col justify-center m-9">
                <h1 className="font-bold text-xl text-center">SIGN UP</h1>
                <label htmlFor="signup-username" className="mt-4">Username</label>
                <input type="email" id="signup-username" placeholder="Enter username..." required className="border-2 border-purple-900 p-1"/>
                <label htmlFor="new-password" className="mt-4">Password</label>
                <input type="password" id="new-password" placeholder="Enter password..." required className="border-2 border-purple-900 p-1"/>
                <label htmlFor="reenter-password" className="mt-4">Re-enter Password</label>
                <input type="password" id="reenter-password" placeholder="Re-enter password..." required className="border-2 border-purple-900 p-1"/>
                <input type="submit" value="SIGN UP" className="w-fit bg-amber-400 py-2 px-3 font-bold rounded mt-4 mx-auto" />
            </form>
            <form id="signin" className="flex flex-col justify-center m-9">
                <h1 className="font-bold text-xl text-center">SIGN IN</h1>
                <label htmlFor="signin-username" className="mt-4">Username</label>
                <input type="email" id="signin-username" placeholder="Enter username..." required className="border-2 border-purple-900 p-1"/>
                <label htmlFor="signin-password" className="mt-4">Password</label>
                <input type="password" id="signin-password" placeholder="Enter password..." required className="border-2 border-purple-900 p-1"/>
                <input type="submit" value="SIGN IN" className="w-fit bg-amber-400 py-2 px-3 font-bold rounded mt-4 mx-auto" />
                <p className="mx-auto mt-4 underline">Forgot Password?</p>
            </form>
            <div className="absolute top-0 left-0 flex flex-col justify-center items-center rounded-l-lg bg-purple-900 w-1/2 h-full text-white transition-transform">
                <h1 className="text-xl font-bold">Don't Have an Account?</h1>
                <h2 className="font-bold">Sign Up Instead</h2>
                <button onClick={chgForm} className="mt-4 font-extrabold text-amber-400 border-2 border-amber-400 py-2 px-3 rounded-2xl hover:bg-amber-400 hover:text-black">
                    CREATE ACCOUNT
                </button>
            </div>
        </div>
    );
}