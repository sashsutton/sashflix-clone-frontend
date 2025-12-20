import './App.css'
import Navbar from "./components/Navbar.tsx"
import Billboard from "./components/Billboard.tsx";
import MovieList from "./components/MovieList.tsx";
import InfoModal from "./components/InfoModal.tsx";
import { movies } from './data';

function App() {

  return (
      <div className="min-h-screen bg-black">
          <Navbar/>
          <Billboard/>

          <div className="pb-40">
              <MovieList data={movies} title="Trending Now" />
              <MovieList data={movies} title="My List" />
              <InfoModal/>
          </div>

      </div>

  )
}

export default App
