import type {MovieInterface} from "../types.ts";

interface MovieCardProps{
    data: MovieInterface;
}

export default function MovieCard({data}: MovieCardProps){
    return(
        <div className="group bg-zinc-900 col-span relative h-[12vw]">
            <img alt={data.title} src={data.thumbnailUrl} className="cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-[12vw]"/>
        </div>
    )
}