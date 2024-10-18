import React from 'react'
import img1 from "../src/Img/pohutu_main_image.jpg"

import { Link } from 'react-router-dom'

function rotorua_Waiotapu() {
  return (
    <>



  
          
          <div className='Auck'>
    
    <h1 className='text-white fw-bolder text-uppercase about text-center ps-3 pe-3'>ROTORUA including WAIOTAPU Tour from Auckland</h1>
    
    
    </div>
    
    
    
    
            <div className='container'>
            <div className='row mb-5'>
    
            <div className='col-1 text-center'> </div>
              <div className='col-5  text-center'>
    
                <img className='img_movie mt-5' src={img1} alt=''/>
              </div>
              <div  className='col-5  text-center'>
                <h1 className='movie_h1'>ROTORUA including WAIOTAPU Tour from Auckland </h1>
                <h6 className='movie_h6 '>Experience the Rotorua & Wai-O-Tapu Tour! This small group, fully-guided day trip not only takes you to and from Wai-O-Tapu but also includes a comprehensive guided tour through the park to ensure you get the most out of your visit. Led by our famously passionate guides, known for their engaging stories and extensive knowledge and traveling in modern, comfortable minibuses equipped with all the extras for your comfort and safety.</h6>
                <Link className='text-decoration-none' to="/contact">
            <div className='movie_btn rounded mt-4 text-white text-center'> BOOK NOW</div>
    
            </Link>            </div>
    
    
    
              <div  className='col-1  text-center'></div>
    
    
            </div>
              
    
    
    
            </div>
    
    
    
    
    
            <div className='container highlight' >
              <h5 className='fw-bolder'>Highlights</h5>
                <ul>
                  <li>Wai-O-Tapu Geothermal Wonderland</li>
                  <li>Champagne Lake & Devils Bath (not suitable for swimming)</li>
                  <li>Rotorua City Highlights</li>
                  <li>Waikato Farm Region  
                  </li>
    
                </ul>
    
                <h4>Itinerary:</h4>
    
                  <p> <span className='fw-bold'> 1. Auckland –</span>Your adventure begins in New Zealand’s largest city. As we leave the city, your guide will set the stage for the day ahead and highlight some of the city's top attractions along the way.</p>
                  <p> <span className='fw-bold'> 2. Waikato  – </span>  Leaving Auckland, we journey south through the breathtaking Waikato countryside, the world’s largest farming region. Along the way, you'll encounter stunning scenery, majestic rivers, excellent photo opportunities, impressive mountains and various farm animals. We’ll also pause for a quick coffee break at a charming spot in the Waikato..</p>
                  <p>  <span className='fw-bold'> 3. Tirau –  </span>Travelling towards Rotorua, we will go through Tirau, which is known as the 'Corrugated Iron Capital of the World' because to its unique corrugated iron structures and sculptures. With our guides pointing out all of its noteworthy characteristics along the route, this quaint village never fails to draw attention and make people smile..</p>
                  <p>  <span className='fw-bold'>  4. Wai-O-Tapu Geothermal Wonderland (90 minutes) –  </span>When you get to Wai-O-Tapu Geothermal Wonderland, you'll start your tour of this amazing location with a comprehensive guide. Wai-O-Tapu, a popular tourist destination with breathtaking natural features, includes Devil's Bath, Champagne Lake, colorful mud pools, geothermal craters and a variety of other breathtaking geothermal phenomena. It's incredibly breathtaking, with vibrant colors and lively movement.</p>
                  <p>  <span className='fw-bold'>  5.  Rotorua City Free time  –  </span>If you choose to not add an extra activity in the afternoon you will spend free time in Rotorua.
                  </p>
                  <p>  <span className='fw-bold'>6.  Rotorua City Highlights –  </span> As our Rotorua journey comes to an end, we'll go on a guided driving tour of some of the city's most popular sights, such as Whangapipiro (Rachel Spring), the Rotorua Museum, Government Gardens and the Blue Baths. If time allows, we might also make a stop at a distinctive memento shop for some Manuka Honey tasting and bargain purchasing.</p>
                  <p> <span className='fw-bold'> 7. Auckland –</span> Sadly, it's time to return north, although the journey is far from over. Savor an entirely guided journey back to Auckland, including with unplanned stops en route.</p>

                  <h5>Inclusions:</h5>
                <ul className='ul_movie'>
                  <li className='ull'>Small Group Tour</li>
                  <li>Fully Guided</li>
                  <li>Entry Tickets</li>
                  <li>Bottled Water</li>
                  <li>Snacks</li>
    
                </ul>
    
                <p>While the destination you will be visiting is truly spectacular, we at We believe Travel believe it is our small groups, our guides, the journey and the little details that set our tours well apart. Secret stops, wildlife viewings, specially designed vehicles, complementary refreshments and many other pleasant surprises ensure our tours are an experience to remember.</p>
    
            </div>
    
    
        </>
  )
}

export default rotorua_Waiotapu
