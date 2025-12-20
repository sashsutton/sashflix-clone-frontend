import useInfoModal from '../hooks/useInfoModal';
import { movies } from '../data';

export default function InfoModal() {
    const { isOpen, closeModal, movieId } = useInfoModal();

    const movie = movies.find((item) => item.id === movieId);

    if (!isOpen) return null;

    return (
        <div className="z-50 transition duration-300 bg-black/80 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0">
            <div className="relative w-auto mx-auto max-w-3xl rounded-md overflow-hidden bg-zinc-900 w-[90%] md:w-[60%]">

                <div className="relative h-96">
                    <img
                        className="w-full h-full object-cover brightness-[60%]"
                        src={movie?.thumbnailUrl}
                        alt={movie?.title}
                    />

                    <div
                        onClick={closeModal}
                        className="cursor-pointer absolute top-3 right-3 h-10 w-10 rounded-full bg-black bg-opacity-70 flex items-center justify-center"
                    >
                        {/* I kept the text X here, but you can swap for the icon if you prefer! */}
                        <span className="text-white font-bold">X</span>
                    </div>

                    <div className="absolute bottom-[10%] left-10">
                        <p className="text-white text-3xl md:text-4xl h-full lg:text-5xl font-bold mb-8">
                            {movie?.title}
                        </p>

                        <div className="flex flex-row gap-4 items-center">
                            <button className="bg-white text-black px-4 py-2 font-bold rounded hover:bg-neutral-300 transition">
                                Play
                            </button>
                        </div>
                    </div>
                </div>

                <div className="px-12 py-8">
                    <p className="text-green-400 font-semibold text-lg">
                        New
                    </p>
                    <p className="text-white text-lg">
                        {movie?.duration}
                    </p>
                    <p className="text-white text-lg mt-4">
                        {movie?.genre}
                    </p>
                    <p className="text-white text-lg mt-4">
                        {movie?.description}
                    </p>
                </div>

            </div>
        </div>
    );
}