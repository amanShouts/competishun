import { Home } from './components/Home'
import { Favorites } from "./components/Favorites"
import { WatchList } from './components/WatchList'

import { Routes, Route } from "react-router-dom"
import './App.css'

function App() {

  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/watchlist" element={<WatchList />} />
    </Routes>
  )
}

export default App
