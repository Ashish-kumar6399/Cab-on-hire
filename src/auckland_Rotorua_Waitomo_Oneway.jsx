import React from 'react'
// import img1 from "../src/Img/tepuia.jpg"
import img2 from  "./Img/Waitomo_1617_Aranui_Cave_Couple_3_1200.jpg"

import { Link } from 'react-router-dom'

function auckland_Rotorua_Waitomo_Oneway() {
  return (
    <>




      
      <div className='Auck'>

<h1 className='text-white fw-bolder  about text-center ps-3 pe-3 text-uppercase'>auckland to rotorua via waitomo caves (one-way) </h1>


</div>




        <div className='container'>
        <div className='row mb-5'>

        <div className='col-1 text-center'> </div>
          <div className='col-5  text-center'>

            <img className='img_movie' src={img2} alt=''/>
          </div>
          <div  className='col-5  text-center'>
            <h1 className='movie_h1'>Auckland to Rotorua via Hobbiton Small Group Tour (One Way)</h1>
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
              <li>Auckland highlights</li>
              <li>Waikato</li>
              <li>Waitomo Caves</li>
              <li>Scenic drive</li>
              <li>Rotorua</li>
              <li>Rotorua highlights</li>

            </ul>

            <h4 className='fw-bolder'>Itinerary:</h4>

              <p> <span className='fw-bold'> 1.  Auckland –</span> Start of your tour is at the biggest city in New Zealand. Your guide will introduce you to the main sights of the city as we head out of town and lay the groundwork for your trip.</p>
              <p> <span className='fw-bold'> 2. Waitomo Caves – </span>When you first arrive in Waitomo, you'll start by touring its intriguing and old caves, which are home to a range of breathtaking formations like lime columns, stalactites, and stalagmites. After that, you'll go even down below ground for a mystical glowworm adventure. Take a peaceful boat ride down the grotto river, where thousands of glowworms—a phenomenon only found in New Zealand—will illuminate the night sky above you. For any traveler, the Waitomo Glowworm Caves are an absolute must-see.              </p>
              <p>  <span className='fw-bold'> 3.Scenic drive – </span>We'll continue our adventure with a fully guided journey south to Rotorua, where you'll enjoy a variety of attractions along the way. Highlights include scenic hydro dams, picturesque rivers, and plenty of wildlife encounters..</p>
              <p>  <span className='fw-bold'> 4. Rotorua–  </span>When you arrive in Rotorua, we will take you to some of the city's most well-known and significant landmarks, such as the Government Gardens, Lake Rotorua, the Blue Baths, the Thermal Springs, and the Polynesian Spa. We will drop you off at your accommodation or a downtown Rotorua area after the trip.              </p>
             
              <h5>Inclusions:</h5>
            <ul className='ul_movie'>
              <li className='ull'>Small Group Tour</li>
              <li>Fully Guided Tour</li>
              <li>Hobbiton Ticket</li>
              <li>Bottled Water</li>
              <li>Snacks</li>

            </ul>

            <p>At Cab on Hire, we believe that while the destinations you’ll visit are undeniably breathtaking, it's the details that make our tours stand out. Our small groups, knowledgeable guides, and carefully curated journey set us apart. From secret stops and wildlife encounters to specially designed vehicles and complimentary refreshments, our tours are filled with delightful surprises that create an unforgettable experience.</p>

        </div>


    </>
  )
}

export default  auckland_Rotorua_Waitomo_Oneway
