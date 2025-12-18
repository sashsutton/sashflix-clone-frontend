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
            <img className="h-8" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"/>
            <img  className="h-8 w-8" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"/>



        </nav>
    )
}