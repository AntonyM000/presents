import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingBoxes from './pages/Landingboxes'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Giftpage from './pages/Giftpage'
import Upload from './components/Upload'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
<BrowserRouter>
  <Routes>
    <Route path='/' element={<LandingBoxes/>}/>
    <Route path='/gifts' element={<Giftpage/>}/>
    <Route path='/upload' element={<Upload/>}/>

  </Routes>
</BrowserRouter>    
    </>
  )
}

export default App
