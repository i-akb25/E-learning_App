import React from 'react'
import Navbar from './components/Navbar';
import About from './pages/About';
import Team from './components/Team';
import Services from './components/Services';
import ReviewByStud from './components/ReviewByStud';
import Feedback from './components/Feedback';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
// import {BrowserRouter, Routes, Route} from react-router-dom;
const App = () => {
  return (
    <div>
      <Navbar/>
      <About/>
      <Team/>
      <Services/>
      <ReviewByStud/>
      <ContactUs/>
      <Feedback/>
      <Footer/>
    </div>
  )
}

export default App
