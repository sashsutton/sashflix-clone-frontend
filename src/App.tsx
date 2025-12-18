import './App.css'
import Navbar from "./components/Navbar.tsx"
import Billboard from "./components/Billboard.tsx";

function App() {

  return (
      <div className="min-h-screen bg-black">
          <Navbar/>
          <Billboard/>
          <div className="h-screen bg-zinc-900"></div>
      </div>

  )
}

export default App
