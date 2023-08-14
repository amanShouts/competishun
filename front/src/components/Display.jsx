import { useEffect, useState } from "react"
import { FcSearch } from "react-icons/fc"
import { Bottom } from "./Bottom";
const movieURL = "https://www.themoviedb.org/";

export function Display() {


    const [movieArr, setMovieArr] = useState([])
    const [searchMovie, setSearchMovie] = useState("")
    useEffect(() => {
        fetch(movieURL)
            .then((res) => res.json())
            .then((data) => { console.log(data, " data"), setMovieArr(prev => data) })
            .catch((error) => {
                console.log("some error in fetching")
            })
    }, [])
    return (
        <div className="bg-gray-100 h-[80vh]">
            <div className="flex flex-row justify-around items-center w-[50%] h-[40px]" >
                <FcSearch /> <input placeholder="Serach for movies..." value={searchMovie} />
            </div>
            <div>

            </div>
            <Bottom />
        </div>
    )
}