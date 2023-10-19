import React from 'react'
import "./styles.css"
import Navbar from "./components/Navbar"
import Home from './routes/Home'

const App = () => {
  return (
    <div className="App">
            <Navbar/>
            <Home/>
        </div>
  )
}

export default App
