export function Signup() {

    return (
        <div className="rounded-lg bg-gray-200 py-5 flex flex-col items-center justify-between text-center h-[30vh] w-[70vw] mt-[20px]">

            <input type="text" placeholder="username" className="h-[30px] w-[80%] rounded-sm p-1" />
            <input type="email" placeholder="email" className="h-[30px] w-[80%] rounded-sm p-1" />
            <input type="password" placeholder="password" className="h-[30px] w-[80%] rounded-sm p-1" />
            <button className=" border-white border-[1px] p-2 rounded-md hover:bg-slate-300">Sign up</button>
        </div>
    )
}