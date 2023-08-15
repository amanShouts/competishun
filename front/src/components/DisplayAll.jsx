export function DisplayAll({ movieArr }) {
    return (
        <div className="bg-gray-200 grid grid-cols-3 gap-[20px] mb-[20px] p-2">
            {
                movieArr?.map((elem, index) => {
                    return (
                        <div key={index}
                            className=" border-black rounded-lg h-[100px] p-2 bg-slate-400 text-white border-0"
                        >
                            <h2> {elem.Title}  </h2>
                            <p className="text-xs"> {elem.Year} </p>
                        </div>
                    )
                })
            }
        </div>
    )
}