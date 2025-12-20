import useInfoModal from '../hooks/useInfoModal';

export default function InfoModal(){
    const {isOpen, closeModal} = useInfoModal();

    if (!isOpen){
        return null;
    }else{
        return(
            <div className="z-50 transition duration-300 bg-black/80 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0">
                <div className="relative w-auto mx-auto max-w-3xl rounded-md overflow-hidden">
                    <div className="bg-zinc-900 p-10 drop-shadow-md border border-zinc-800">
                        <p className="text-white mb-4">Modal is Open!</p>
                        <button
                            onClick={closeModal}
                            className="bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-neutral-300"
                        >
                            Close
                        </button>
                    </div>

                </div>
            </div>
        )
    }

}
