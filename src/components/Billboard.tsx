

export default function Billboard(){
    return(
        <div className="relative h-[56.25vw] bg-zinc-900">
            <video className="w-full h-full object-cover brightness-[60%]"
                   src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                   autoPlay
                   muted
                   loop
                   poster="https://upload.wikimedia.org/wikipedia/commons/7/70/Big.Buck.Bunny.-.Opening.Screen.png"
            />
            <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
                <h1 className="text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">Big Buck Bunny</h1>
                <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">A giant rabbit with a heart bigger than himself.</p>

                <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">

                    <button className="bg-white text-black py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-neutral-300 transition rounded-md">
                        Play
                    </button>

                    <button className="bg-white/30 text-white py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-white/20 transition rounded-md">
                        More Info
                    </button>

                </div>

            </div>
        </div>
    )
}