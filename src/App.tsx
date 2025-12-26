import './App.css'
import Navbar from "./components/Navbar.tsx"
import Billboard from "./components/Billboard.tsx";
import MovieList from "./components/MovieList.tsx";
import InfoModal from "./components/InfoModal.tsx";
import { movies } from './data';

function App() {

    return (
        <div className="min-h-screen bg-black">
            <Navbar />
            <Billboard />

            <div className="pb-40">
                <MovieList data={movies} title="Trending Now" />
                <MovieList data={movies} title="My List" />
                <InfoModal />
            </div>


            <footer className="w-full py-6 text-center text-zinc-500 text-sm mt-10 border-t border-zinc-800">
                <p>© {new Date().getFullYear()} Sashflix. This is a portfolio project for educational purposes only.</p>
                <p>Not affiliated with Netflix Inc. All trademarks belong to their respective owners.</p>
            </footer>
        </div>

    )
}

export default App
