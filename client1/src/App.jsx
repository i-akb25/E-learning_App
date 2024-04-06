import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home';
import {BrowserRouter, Routes, Route} from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
  )
}

export default App
