import React, { useEffect } from 'react'
import Carousel from './Carousel'
import About from './About'
import Cards from './Cards'
import Cards_two from './Cards_two'
import Servicess from './Services'
import Cars from './Cars';
// import Why from './Why'


function Home() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Carousel/>
      <About/>
      <Cards/>
      <Cards_two/>
      <Servicess/>
      <Cars/>
      
    </div>
  )
}

export default Home
