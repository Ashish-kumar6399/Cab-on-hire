import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import About from './About_comp'
import Air from "./Air";
import Queens from "./Queens";
import Movie from './Movie'
import Caves from './Caves'
import Services from './Services_Page'
import Contact from './Contact';
import Auckland from './Auckland'
import Tepuia from './Tepuia'
import Wotapu from './Wotapu'
import Business from './Business'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Four from "./Four";
import Cruise from './Cruise'
import Routess from './Routess'
import Concerts from './Concerts'
import Airport from './Airport'
import Waitomo_Rotora from './Waitomo_Rotora'
import TePuia_two  from './rotorua_TePuia'
import Wai from "./rotorua_Waiotapu"
import Waitomo_Rotorua_Tepuia from './waitomo_Rotorua_Tepuia'
import Auckland_oneway from './auckland_Rotorua_Hobbiton_Oneway'
import Waitomo_Oneway from './auckland_Rotorua_Waitomo_Oneway'
import Rotoruahighlighttour from './rotorua_Highlight_Tour'
import Driver from './Driver'
import School from './school_Ball'
import Events from './Events'



import ScrollToTop from './ScrollToTop';
import Aboutnew from './Aboutnew'
import Testimonial from './Testimonial'
import Destinations from './Destinations'
import SchoolTransport from './SchoolTransport'
import Weedingtransport from './Weedingtransport'
import Chauffer from './Chauffer'



function App() {
  return (
    <>
            <BrowserRouter>
            <ScrollToTop />
    <Navbar/>
      <Routes>
        <Route index  element={<Home/>}/>
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/airport" element={<Air/>} />
          <Route path="/queen" element={<Queens/>} />
          <Route path="/movie" element={<Movie/>} />
          <Route path="/caves" element={<Caves/>} />
          <Route path="/service/:id" element={<Services/>} />
          <Route path="/service" element={<Services/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/fourr" element={<Four/>} />
          <Route path="/auckland" element={<Auckland/>} />
          <Route path="/tepuia" element={<Tepuia/>} />
          <Route path="/wotapu" element={<Wotapu/>} />
          <Route path="/cruise" element={<Cruise/>} />
          <Route path="/business" element={<Business/>} />
          <Route path="/routes" element={<Routess/>} />
          <Route path="/concerts" element={<Concerts/>} />
          <Route path="/airport & transfers" element={<Airport/>} />
          <Route path="/Wo" element={<Airport/>} />
          <Route path="/WAITOMO CAVES & ROTORUA" element={<Waitomo_Rotora/>} />
          <Route path="/ROTORUA INCLUDING TE PUIA tour" element={<TePuia_two/>} />
          <Route path="/ROTORUA INCLUDING Wai-O-Tapu tour" element={<Wai/>} />
          <Route path="/waitomo_rotorua_tepuia" element={<Waitomo_Rotorua_Tepuia/>} />
          <Route path="/auckland_rotorua_hobbiton_Oneway" element={<Auckland_oneway/>} />
          <Route path="/auckland_Rotorua_Waitomo_Oneway" element={<Waitomo_Oneway/>} />
          <Route path="/rotorua_highlight_tour" element={<Rotoruahighlighttour/>} />
          <Route path="/dial a driver" element={<Driver/>} />
          <Route path="/school_ball" element={<School/>} />
          <Route path="/events" element={<Events/>} />
          <Route path="/abb" element={<Aboutnew/>} />
          <Route path="/testimonial" element={<Testimonial/>} />
          <Route path="/destination" element={<Destinations/>} />
          <Route path="/schooltransport" element={<SchoolTransport/>} />
          <Route path="/weedingtransport" element={<Weedingtransport/>} />
          <Route path="/chauffer" element={<Chauffer/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>




    

    </>
  )
}

export default App
