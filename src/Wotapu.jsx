import React from 'react'
import img1 from "../src/Img/ec79a382c7dd4d29a44a8021b53c5977IMG_4755.jpg"

import { Link } from 'react-router-dom'


function Wotapu() {
  return (
    <>



    {/* <div className='Auck'>
    
    <h1 className='text-white fw-bolder text-uppercase about text-center '>Auckland Tours</h1>
    
    </div> */}
          
          <div className='Auck'>
    
    <h1 className='text-white fw-bolder text-uppercase about text-center ps-5 pe-5'>Hobbiton & ROTORUA TOUR INCLUDING WAI-O-TAPU from Auckland</h1>
    
    
    </div>
    
    
    
    
            <div className='container'>
            <div className='row mb-5'>
    
            <div className='col-1 text-center'> </div>
              <div className='col-5  text-center'>
    
                <img className='img_movie mt-5' src={img1} alt=''/>
              </div>
              <div  className='col-5  text-center'>
                <h1 className='movie_h1'>Hobbiton & ROTORUA TOUR INCLUDING WAI-O-TAPU </h1>
                <h6 className='movie_h6 '>The Hobbiton & Rotorua Wai-O-Tapu Tour, departing from Auckland, is a small group, fully guided day tour that combines two of the best attractions in the North Island for an amazing experience. Our guided trips at Wai-O-Tapu and Hobbiton, in contrast to many other tours, guarantee that you have a thorough and engaging experience. Savor the voyage with our esteemed guides, acclaimed for their captivating narratives and vast expertise. Enjoy a comfortable and well-equipped minibus ride that will keep you safe and comfortable all day long. </h6>
                <Link className='text-decoration-none' to="/contact">
            <div className='movie_btn rounded mt-4 text-white text-center'> BOOK NOW</div>
    
            </Link>            </div>
    
    
    
              <div  className='col-1  text-center'></div>
    
    
            </div>
              
    
    
    
            </div>
    
    
    
    
    
            <div className='container highlight' >
              <h5 className='fw-bolder'>Highlights</h5>
                <ul>
                  <li>Hobbiton & Alexander Family Sheep Farm</li>
                  <li>Wai-O-Tapu Geothermal Park</li>
                  <li>Champagne Lake & Devils Bath</li>
                  <li>Rotorua City Highlights </li>
    
                </ul>
    
                <h4>Itinerary:</h4>
    
                  <p> <span className='fw-bold'> 1. Auckland –</span>Your adventure begins in New Zealand’s largest city. As we leave the city, your guide will set the stage for the day ahead and highlight some of the city's top attractions along the way.</p>
                  <p> <span className='fw-bold'> 2. Waikato  – </span>  After departing from Auckland, we travel through the stunning Waikato countryside, which is known as one of the greatest farming districts in the world. Savor the breathtaking views of the gorgeous rivers, towering mountains, and lovely scenery while keeping a look out for adorable farm animals and excellent photo ops.</p>
                  <p>  <span className='fw-bold'> 3. Hobbiton Movie Set – </span> Once you arrive to Hobbiton, you will join one of the recognizable green buses for a two-and-a-half-hour guided tour around this magical 12-acre film set. A knowledgeable guide will take you through the verdant Shire, showing you the 44 hobbit holes, gorgeous gardens, and interesting behind-the-scenes tales from the making of the movie. Additionally, you will be able to take advantage of the famous Green Dragon Inn's refreshing complimentary beverage offer.</p>
                  <p>  <span className='fw-bold'> 4. Tirau –  </span> As we head towards Rotorua, we'll pass through Tirau, known as the 'Corrugated Iron Capital of the World' due to its distinctive corrugated iron sculptures and buildings. This quirky town always provides a visual treat and a chuckle, with our guides highlighting its most interesting features along the way.</p>
                  <p>  <span className='fw-bold'> 5.  Wai-O-Tapu Geothermal Wonderland  </span>After reaching our second stop, you will go on a guided tour of Wai-O-Tapu Geothermal Wonderland. Cultivated to create surreal scenery, this remarkable location showcases several geothermal wonders such as Devil's Bath, bubbling mud pools, Champagne Pool, and geothermal craters. You will certainly be in awe of the vivid colors and amazing natural phenomena.</p>
                  <p>  <span className='fw-bold'>6.  Rotorua City Highlights –  </span> As our Rotorua journey comes to an end, we'll go on a guided driving tour of some of the city's most popular sights, such as Whangapipiro (Rachel Spring), the Rotorua Museum, Government Gardens, and the Blue Baths. If time allows, we might also make a stop at a distinctive memento shop for some Manuka Honey tasting and bargain purchasing.</p>
                  <p> <span className='fw-bold'> 7. Auckland –</span> Sadly, it's time to return north, although the journey is far from over. Savor an entirely guided journey back to Auckland, including with unplanned stops en route.</p>

                  <h5>Inclusions:</h5>
                <ul className='ul_movie'>
                  <li className='ull'>Small Group Tour</li>
                  <li>Fully Guided</li>
                  <li>Entry Tickets</li>
                  <li>Bottled Water</li>
                  <li>Snacks</li>
    
                </ul>
    
                <p>At Cab on Hire, we believe that while the destinations you’ll visit are undeniably breathtaking, it's the details that make our tours stand out. Our small groups, knowledgeable guides, and carefully curated journey set us apart. From secret stops and wildlife encounters to specially designed vehicles and complimentary refreshments, our tours are filled with delightful surprises that create an unforgettable experience.</p>
    
            </div>
    
    
        </>
  )
}

export default Wotapu
