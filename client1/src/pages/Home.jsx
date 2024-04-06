import React from 'react'
import ContactUs from '../components/ContactUs'
import Courses from '../components/Courses'
import About from './About'
import Team from '../components/Team'
import Services from '../components/Services'
import ReviewByStud from '../components/ReviewByStud'
import Feedback from '../components/Feedback'
const Home = () => {
  return (
    <div>
      <Courses/>
      <About/>
      <Team/>
      <Services/>
      <ReviewByStud/>
      <ContactUs/>
      <Feedback/>
    </div>
  )
}

export default Home
