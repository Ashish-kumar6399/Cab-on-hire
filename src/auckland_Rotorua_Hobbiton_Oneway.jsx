import React from 'react'
// import img1 from "../src/Img/tepuia.jpg"
import img2 from  "./Img/Hobbiton-Movie-Set-17-1200-px.jpg"

import { Link } from 'react-router-dom'

function auckland_Rotorua_Hobbiton_Oneway() {
  return (
    <>




      
      <div className='Auck'>

<h1 className='text-white fw-bolder  about text-center ps-3 pe-3 text-uppercase'>auckland to rotorua via hobbiton (one-way)</h1>


</div>




        <div className='container'>
        <div className='row mb-5'>

        <div className='col-1 text-center'> </div>
          <div className='col-5  text-center'>

            <img className='img_movie' src={img2} alt=''/>
          </div>
          <div  className='col-5  text-center'>
            <h1 className='movie_h1'>Auckland to Rotorua via Hobbiton Small Group Tour (One Way) </h1>
            <h6 className='movie_h6 '>This journey takes you from Auckland to Rotorua, where you'll spend a comfortable day exploring the famous Hobbiton movie set, which is tucked away in the center of Middle-earth. Experience Rotorua City's distinct charm and beauty as well.



</h6>
            <Link className='text-decoration-none' to="/contact">
        <div className='movie_btn rounded mt-4 text-white text-center'> BOOK NOW</div>

        </Link>            </div>



          <div  className='col-1  text-center'></div>


        </div>
          



        </div>





        <div className='container highlight' >
          <h5 className='fw-bolder'>Highlights</h5>
            <ul>
              <li>Waikato</li>
              <li>Alexander Family Sheep Farm</li>
              <li>Shire's Rest</li>
              <li>Hobbiton & Bagshot Row</li>
              <li>Rotorua</li>
              <li>Tirau</li>

            </ul>

            <h4 className='fw-bolder'>Itinerary:</h4>

              <p> <span className='fw-bold'> 1.  Auckland –</span> Start of your tour is at the biggest city in New Zealand. Your guide will introduce you to the main sights of the city as we head out of town and lay the groundwork for your trip.</p>
              <p> <span className='fw-bold'> 2. Alexander Family Sheep Farm – </span>Upon arrival at the Alexander Family Sheep Farm and Shire's Rest—the gateway to Hobbiton—you'll have the chance to see thousands of sheep and enjoy a variety of amenities. Grab a bite to eat, enjoy a coffee or treat yourself to an ice cream while we handle the ticketing for your Hobbiton movie set experience.</p>
              <p>  <span className='fw-bold'> 3. Hobbiton Tour  – </span> After that, you'll board one of the recognizable green Hobbiton buses for a 2.5-hour tour of the breathtaking 12-acre film set with a full guide. You'll explore gorgeous gardens, immerse yourself in the lush landscapes of the Shire, see 44 quaint hobbit holes, and learn fascinating anecdotes and production secrets from the movie's making while escorted by a qualified Hobbiton guide. The journey ends with a cool drink in the well-known Hobbiton bar, the Green Dragon Inn.
              .</p>
              <p>  <span className='fw-bold'> 4.Rotorua Geothermals and Tirau–  </span>You will be taken on a guided tour of the Alexander Family Sheep Farm after your immersive Lord of the Rings adventure and then you will head south to Rotorua's busy geothermal district. En route, you'll see the unique town of Tirau, which is dubbed the global center for corrugated iron sculpture, marvel at the gorgeous Fitzgerald Glade and take in a number of other sights. </p>
              <p>  <span className='fw-bold'> 5.Rotorua –   </span> At the conclusion of the tour, we will drop you off at a central Rotorua spot or at your accommodation (central hotels only).</p>
             
              <h5>Inclusions:</h5>
            <ul className='ul_movie'>
              <li className='ull'>Small Group Tour</li>
              <li>Fully Guided Tour</li>
              <li>Hobbiton Ticket</li>
              <li>Bottled Water</li>
              <li>Snacks</li>

            </ul>

            <p>At Cab on Hire, we believe that while the destinations you’ll visit are undeniably breathtaking, it's the details that make our tours stand out. Our small groups, knowledgeable guides and carefully curated journey set us apart. From secret stops and wildlife encounters to specially designed vehicles and complimentary refreshments, our tours are filled with delightful surprises that create an unforgettable experience.</p>

        </div>

        <a href="https://api.whatsapp.com/send?phone=64 212845553&text=." class="float" target="_blank">
        <i class="fa-brands fa-whatsapp  my-float"></i></a>

    </>
  )
}

export default auckland_Rotorua_Hobbiton_Oneway
