import { useState, useEffect } from 'react';

export default function Navbar(){
    const [showbackground, setShowBackground] = useState<boolean>(false);

    const TOP_OFFSET = 66;

    useEffect(()=>{
        const handleScroll = () => {
            if(window.scrollY >= TOP_OFFSET){
                setShowBackground(true);
            }
            else{
                setShowBackground(false)
            }
        }

        window.addEventListener('scroll', handleScroll);

        return() => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return(
        <nav className= {`w-full fixed z-50 p-4 flex justify-between items-center transition-colors duration-500 ${showbackground? `bg-zinc-900 bg-opacity-90`:`bg-transparent`}`}>
            {/* Replaced Netflix Logo with Text Branding */}
            <div className="text-red-600 text-2xl font-bold tracking-tighter uppercase">
                Sashflix
            </div>

            {/* Replaced Netflix Avatar with a generic user icon placeholder */}
            <div className="h-8 w-8 bg-blue-500 rounded-md flex items-center justify-center text-white font-bold">
                S
            </div>
        </nav>
    )
}