

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

        </div>
    )
}