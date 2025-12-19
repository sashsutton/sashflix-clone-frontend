import type {MovieInterface} from "../types.ts";
import { BsFillPlayFill } from "react-icons/bs";
import { BiChevronDown, BiPlus } from "react-icons/bi";

interface MovieCardProps{
    data: MovieInterface;
}

export default function MovieCard({data}: MovieCardProps){
    return(
        <div className="group bg-zinc-900 col-span relative h-[12vw]">

            <img
                alt={data.title}
                src={data.thumbnailUrl}
                className="cursor-pointer object-cover transition duration shadow-xl rounded-md w-full h-[12vw] group-hover:opacity-90 sm:group-hover:opacity-0 delay-300"
            />

            <div className="
                opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-300 w-full
                scale-0 group-hover:scale-110
                group-hover:-translate-y-[6vw]
                group-hover:translate-x-[2vw]
                group-hover:opacity-100
            ">
                <img
                    alt={data.title}
                    src={data.thumbnailUrl}
                    className="
                        cursor-pointer object-cover transition duration shadow-xl rounded-t-md
                        w-full h-[12vw]
                    "
                />
                <div className="z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md">

                    <div className="flex flex-row items-center gap-3">

                        <div className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300">
                            <BsFillPlayFill size={30} className="text-black" />
                        </div>

                        <div className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:bg-neutral-300">
                            <BiPlus size={30} className="text-white group-hover/item:text-neutral-300" />
                        </div>

                        <div className="cursor-pointer ml-auto w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:bg-neutral-300">
                            <BiChevronDown size={30} className="text-white group-hover/item:text-neutral-300" />
                        </div>

                    </div>

                </div>
            </div>



        </div>
    )
}