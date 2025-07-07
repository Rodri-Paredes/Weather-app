import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import CitySelector from "./pages/CitySelector"
import { useState } from "react"
import dayBg from "./assets/dia.jpg"
import nightBg from "./assets/night.jpeg"
import { isDaytime } from "./utils/timeUtils"

function App() {
  const [count, setCount] = useState(0)
   const bgImage = isDaytime() ? dayBg : nightBg

  return (
    <>
{/*       <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
{/*       <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
<div
      className="app-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cities" element={<CitySelector />} />
      </Routes>
    </div>
  
    </>
  )
}

export default App
