import { Header } from "./Header"
import { Display } from "./Display"
import { useEffect, useState } from "react"
import { Login } from "./Login"
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { initializeApp } from 'firebase/app';
import { handleLogin } from "../firebase_auth/auth"

export function Home() {
    const [isAuth, setIsAuth] = useState(false)

    // var firebaseConfig = {
    //     apiKey: "AIzaSyDB5PYFLBn3hFTAT_SD-x-ggcUKgVtWfno",
    //     authDomain: "PROJECT_ID.firebaseapp.com",
    //     // The value of `databaseURL` depends on the location of the database
    //     databaseURL: "https://DATABASE_NAME.firebaseio.com",
    //     projectId: "PROJECT_ID",
    //     storageBucket: "PROJECT_ID.appspot.com",
    //     messagingSenderId: "SENDER_ID",
    //     appId: "APP_ID",
    //     // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
    //     measurementId: "G-MEASUREMENT_ID",
    // };

    // const firebaseApp = initializeApp(firebaseConfig);

    // useEffect(() => {
    //     // firebase.initializeApp(config);

    // }, [])

    // function handleLogin() {
    //     const provider = new GoogleAuthProvider();
    //     const auth = getAuth(firebaseApp);
    //     signInWithPopup(auth, provider)
    //         .then((result) => {
    //             // This gives you a Google Access Token. You can use it to access the Google API.
    //             const credential = GoogleAuthProvider.credentialFromResult(result);
    //             const token = credential.accessToken;
    //             // The signed-in user info.
    //             const user = result.user;
    //             // IdP data available using getAdditionalUserInfo(result)
    //             // ...
    //         }).catch((error) => {
    //             // Handle Errors here.
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //             // The email of the user's account used.
    //             const email = error.customData.email;
    //             // The AuthCredential type that was used.
    //             const credential = GoogleAuthProvider.credentialFromError(error);
    //             // ...
    //         });
    // }

    return (
        <div className="">
            <Header />
            {
                isAuth == true ? <Display /> : <Login handleLogin={handleLogin} />
            }
        </div>
    )
}