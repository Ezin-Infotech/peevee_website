import React from 'react'
import Banner from '../Components/Home/Banner'
import LearnMore from '../Components/Home/LearnMore'
import About from '../Components/Home/About'
import Reputation from '../Components/Home/Reputation'
import Testimonial from '../Components/Home/Testimonial'
import Cards from '../Components/Home/Cards'

const Home = () => {
  return (
    <>
      <Banner />
      <LearnMore />
      <About />
      <Reputation />
      <Cards />
      <Testimonial />
    </>
  )
}

export default Home