import { useState } from "react"
import { Signin } from "./Signin"
import { Signup } from "./Signup"

export function Login({ handleLogin }) {

    const [showSignUp, setShowSignUp] = useState(true)
    return (
        <div className="flex justify-center items-center h-[90vh]">
            <div className="text-center flex flex-col justify-start items-center h-[80vh] w-[100vw] ">
                <div className="flex flex-row justify-around items-centers w-[50%] mt-[20px]">
                    <button style={showSignUp == true ? { backgroundColor: "bg-gray-900" } : {}} className="border-b-2 p-1"
                        onClick={() => { setShowSignUp(true) }}
                    >
                        SignUp
                    </button>
                    <span > | </span>
                    <button style={showSignUp == false ? { backgroundColor: "bg-gray-200" } : {}} className="border-b-2 p-1"
                        onClick={() => { setShowSignUp(false) }}
                    >
                        Sign In
                    </button>
                </div>
                {
                    showSignUp ? <Signup /> : <Signin />
                }
                <p className="mt-[20px] text-2xl"> OR </p>
                <button onClick={handleLogin} className="rounded border-2 bg-slate-400 text-white p-5 mt-[10px]"> google Login </button>
            </div>
        </div>
    )
}