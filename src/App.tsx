import './App.css'
import Navbar from "./components/Navbar.tsx"
import Billboard from "./components/Billboard.tsx";
import MovieList from "./components/MovieList.tsx";

const movies = [
    {
        id: "1",
        title: "Big Buck Bunny",
        description: "Three rodents amuse themselves by harassing creatures of the forest. However, when they mess with a bunny, he decides to teach them a lesson.",
        thumbnailUrl: "https://upload.wikimedia.org/wikipedia/commons/7/70/Big.Buck.Bunny.-.Opening.Screen.png",
        genre: "Comedy",
        duration: "10 mins"
    }
]

function App() {

  return (
      <div className="min-h-screen bg-black">
          <Navbar/>
          <Billboard/>
          <MovieList data={movies} title="A movie"/>
          <div className="h-screen bg-zinc-900"></div>
      </div>

  )
}

export default App
