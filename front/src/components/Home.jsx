import { Header } from "./Header"
import { Display } from "./Display"
import { Login } from "./Login"
import { atom } from "recoil"
import { handleLogin } from "../firebase_auth/auth"
import { auth } from "../firebase_auth/auth";
import { onAuthStateChanged } from "firebase/auth"
import { useState } from "react"

export function Home() {

    const [authState, setAuthState] = useState(false)
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            console.log(user)
            setAuthState(true)
            // ...
        } else {
            // User is signed out
            // ...
            console.log("failed", user)
            setAuthState(false)
        }
    });


    return (
        <div className="">
            <Header />
            {
                authState == true ? <Display /> : <Login handleLogin={handleLogin} />
            }
        </div>
    )
}