import { useEffect, useState } from "react"
import { FcSearch } from "react-icons/fc"
import { Bottom } from "./Bottom";
import { DisplayAll } from "./DisplayAll";
const movieURL = "http://www.omdbapi.com/?apikey=3c25f3c3&t=";

export function Display() {

    const [movieArr, setMovieArr] = useState(
        JSON.parse(localStorage.getItem("imdb_movie_list")) != null && JSON.parse(localStorage.getItem("imdb_movie_list")).length > 0
            ? JSON.parse(localStorage.getItem("imdb_movie_list"))
            : []
    )
    console.log(movieArr, " 1st one ", movieArr.length)
    const [searchMovie, setSearchMovie] = useState("")

    function getCharacter() {
        let rnum = Math.random() * 25
        let ascii_num = rnum + 97
        let rcharacter = String.fromCharCode(ascii_num)
        return rcharacter
    }

    useEffect(() => {
        console.log(JSON.parse(localStorage.getItem("imdb_movie_list")))
        async function createMovies() {
            let datastream = await fetch(movieURL + getCharacter());
            let data = await datastream.json()
            console.log(data, " < - data");
            setMovieArr(prev => [...prev, data])
        }

        if (movieArr?.length == 0) {
            for (let i = 0; i < 10; i++) {
                console.log("etra worek", i, "  iiiiiiiiiii", movieArr);
                createMovies()
            }
            localStorage.setItem("imdb_movie_list", JSON.stringify(movieArr))
        }

        return () => {
            console.log(" BYEY VYE BYE BYE ------------------");
        }
    }, [])


    return (
        <div className="bg-gray-100 h-[80vh]">
            <div className="flex flex-row justify-around items-center w-[100%] mt-[115px] h-[40px] mb-[5px]" >
                <FcSearch />
                <input placeholder="Serach for movies..." value={searchMovie} onChange={(e) => { return; }}
                    className="w-5/6 text-center h-[30px]"
                />
            </div>
            <DisplayAll movieArr={movieArr} />
            <Bottom />
        </div>
    )
}