import React from 'react'
import img2 from  "./Img/RT_Pete_0038cp.jpg"

import { Link } from 'react-router-dom'

function rotorua_Highlight_Tour() {
  return (
    <>




      
    <div className='Auck'>

<h1 className='text-white fw-bolder  about text-center ps-3 pe-3 text-uppercase'>Rotorua Tour With Optional Activities from Auckland</h1>


</div>




      <div className='container'>
      <div className='row mb-5'>

      <div className='col-1 text-center'> </div>
        <div className='col-5  text-center'>

          <img className='img_movie' src={img2} alt=''/>
        </div>
        <div  className='col-5  text-center'>
          <h1 className='movie_h1'>Rotorua Tour With Optional Activities from Auckland</h1>
          <h6 className='movie_h6 '>Take the Optional Extras Rotorua Tour, a small-group, fully guided day trip that showcases the best of Rotorua city. You may select up to two activities from our carefully chosen list when making a reservation. There is something for everyone to enjoy, whether they are interested in thrilling activities, natural wonders, or cultural encounters.</h6>
          <h6  className='movie_h6 mt-3'>Important: While others are driven to and from their selected activities, those who do not make any reservations will have free time to see Rotorua.
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
            <li>Lake Rotorua</li>
            <li>Government Gardens, Blue Baths, Whangapipiro (Rachel Spring) & Rotorua Museum</li>
            <li>Free time with 2 optional activities</li>
            <li>Waikato Farm Region </li>
            

          </ul>

          <h4 className='fw-bolder'>Itinerary:</h4>

            <p> <span className='fw-bold'> 1.  Auckland –</span> Start of your tour is at the biggest city in New Zealand. Your guide will introduce you to the main sights of the city as we head out of town and lay the groundwork for your trip.</p>
            <p> <span className='fw-bold'> 2. Waikato  – </span>  After departing from Auckland, we travel south through the beautiful Waikato countryside, which is well known for its vast agricultural region. Along the route, take in the breathtaking landscape, imposing rivers, great photo opportunities, striking mountains, and sights of farm animals.</p>
            <p>  <span className='fw-bold'> 4.Tirau  –  </span> Traveling towards Rotorua, we will travel through Tirau, which is renowned as the 'Corrugated Iron Capital of the World' because to its unique corrugated iron structures and artwork. You'll smile and find yourself drawn to this oddball town. As we move through, our guides will point us all of the major attractions.</p>
            <p>  <span className='fw-bold'> 6. Rotorua City Highlights –  </span> To complete our Rotorua experience, we'll take a guided driving tour of the city's most iconic sites, including Lake Rotorua, the Rotorua Museum, Government Gardens, Whangapipiro (Rachel Spring), and the Blue Baths. If time allows, we might also stop by a souvenir shop for discounted shopping and a taste of Manuka Honey.</p>
            <p>  <span className='fw-bold'> 5.Free Time for Optional Activities –  </span> After your city highlight tour, you'll have the flexibility to either enjoy free time to explore Rotorua on your own or add up to two of the following attractions for an additional fee: Te Puia, Wai-O-Tapu, Polynesian Spa, or Redwoods Treewalk. We'll provide pick-up and drop-off at each location as time allows.</p>
            <p> <span className='fw-bold'> 7. Auckland –</span> Sadly, it's time to return north, although the journey is far from over. Savor an entirely guided journey back to Auckland, including with unplanned stops en route.</p>

            <h5>Inclusions:</h5>
          <ul className='ul_movie'>
            <li className='ull'>Small Group Tour</li>
            <li>Fully Guided Tour</li>
            <li>Hobbiton Ticket</li>
            <li>Bottled Water</li>
            <li>Snacks</li>

          </ul>

          <p className='mt-4'>At Cab on Hire, we believe that while the destinations you’ll visit are undeniably breathtaking, it's the details that make our tours stand out. Our small groups, knowledgeable guides, and carefully curated journey set us apart. From secret stops and wildlife encounters to specially designed vehicles and complimentary refreshments, our tours are filled with delightful surprises that create an unforgettable experience.</p>

      </div>


  </>
  )
}

export default rotorua_Highlight_Tour
