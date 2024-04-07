import React from 'react'
<<<<<<< HEAD
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home';
import {BrowserRouter, Routes, Route} from "react-router-dom";
=======
import Navbar from './components/Navbar';
import About from './components/About';
import Team from './components/Team';
import Services from './components/Services';
import ReviewByStud from './components/ReviewByStud';
import Feedback from './components/Feedback';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
>>>>>>> a1e4e3fcefcae59881435ef1353b5f7693273434
import Courses from './components/Courses';
import Login from './pages/Login';
import Register from './pages/register';
const App = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/courses" element={<Courses/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
  )
}

export default App
