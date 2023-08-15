import { PiTelevisionDuotone } from "react-icons/pi"
import { GoHomeFill } from "react-icons/go"
import { AiTwotoneHeart } from "react-icons/ai"

export function Bottom() {

    function handeClick(tab) {
        console.log(tab)
    }

    return (
        <div className="flex flex-row justify-around items-center w-[100vw] bg-slate-500  h-[65px] fixed bottom-0 left-0">
            <PiTelevisionDuotone className="text-4xl border-r-[1px] w-1/3 bg-slate-500  border-white "
                onClick={() => { handeClick("watchlist") }}
            />
            <GoHomeFill className="text-4xl w-1/3 bg-slate-500 "
                onClick={() => { handeClick("home") }}
            />
            <AiTwotoneHeart className="text-4xl border-l-[1px] w-1/3 bg-slate-500  border-white"
                onClick={() => { handeClick("favourite") }}
            />
        </div>
    )
}