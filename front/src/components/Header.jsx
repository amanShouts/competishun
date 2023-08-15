import { SlLogout } from "react-icons/sl"
import { auth } from "../firebase_auth/auth";
import { signOut } from "firebase/auth";
export function Header() {

    let user = auth.currentUser;

    function logout() {
        signOut(auth).then(() => {
            console.log("logged out man yayyyyyyyy")
        }).catch((error) => {
            // An error happened.
            console.log("cannot log out :(((((((( ", error)
        });
    }
    return (
        <div className="h-30 mb-[10px] top-0 left-0 fixed w-[100vw]">
            <div className="flex justify-between items-center text-cyan-50 bg-slate-700 pb-[10px]">
                <div className="text-3xl flex items-center p-2 justify-center">
                    <h1 className="drop-shadow-2xl mr-1"> MoviFlix </h1>
                    <h1 className="mr-1"> | </h1>
                    <h1 className="-rotate-180 mt-[20px] text-gray-400"> MoviFlix</h1>
                </div>
                <div className="flex flex-col items-center justify-evenly h-20 p-1">
                    <SlLogout className="text-lg"
                        onClick={() => { logout() }}
                    />
                    {
                        user != undefined
                            ?
                            <img alt="user" src={user?.photoURL} className="w-[30px] rounded-3xl" />
                            :
                            null
                    }
                </div >
            </div>
            {
                user != undefined ?
                    <div className="bg-slate-300 h-6">
                        <p className="text-sm text-right px-1"> {user != undefined ? "Hello, " + user.displayName : null} </p>
                    </div>
                    :
                    null
            }
        </div>
    )
}