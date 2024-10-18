import React from 'react'
import img1 from "../src/Img/pohutu_main_image.jpg"
import { Link } from 'react-router-dom'

function rotorua_TePuia() {
  return (
    <>




      
    <div className='Auck'>

<h1 className='text-white fw-bolder text-uppercase about text-center ps-3 pe-3'>ROTORUA INCLUDING TE PUIA tour from auckland</h1>


</div>




      <div className='container'>
      <div className='row mb-5'>

      <div className='col-1 text-center'> </div>
        <div className='col-5  text-center'>

          <img className='img_movie' src={img1} alt=''/>
        </div>
        <div  className='col-5  text-center'>
          <h1 className='movie_h1'>ROTORUA INCLUDING TE PUIA tour from auckland</h1>
          <h6 className='movie_h6 '>The Rotorua, which includes the Te Puia Tour, is a small-group, fully guided day excursion that combines the strength and natural beauty of the environment with the vibrant Maori culture. We give you plenty of time, unlike many other excursions, so you can explore Te Puia to the fullest and engage in extra activities if you'd like. With their extensive expertise and captivating anecdotes, our renowned and ardent tour guides are renowned for making your trip truly unforgettable. Enjoy a comfortable and secure ride in one of our sleek, well-equipped minibuses, tailored to make your trip even better.          </h6>
          <Link className='text-decoration-none' to="/contact">
      <div className='movie_btn rounded mt-4 text-white text-center'> BOOK NOW</div>

      </Link>            </div>



        <div  className='col-1  text-center'></div>


      </div>
        



      </div>





      <div className='container highlight' >
        <h5 className='fw-bolder'>Highlights</h5>
          <ul>
            <li>  Te Puia Geothermal Park & Pohutu</li>
            <li>Maori Cultural Village and Arts School</li>
            <li>Rotorua City Highlights</li>
            <li>Waikato Farm Region</li>

          </ul>

          <h4>Itinerary:</h4>

            <p> <span className='fw-bold'> 1. Auckland –</span> Start of your tour is at the biggest city in New Zealand. Your guide will introduce you to the main sights of the city as we head out of town and lay the groundwork for your trip.</p>
            <p> <span className='fw-bold'> 2. Waikato  – </span> Leaving Auckland, we journey south through the breathtaking Waikato countryside, one of the world's most expansive farming regions. Along the way, you'll be treated to stunning landscapes, majestic rivers, fantastic photo opportunities and impressive mountains, not to mention sightings of various farm animals. During our adventure through Waikato, we'll also take a brief coffee break at a special location.</p>
            <p>  <span className='fw-bold'> 3. Tirau – </span>  As we continue our journey to Rotorua, we pass through the charming town of Tirau, known as the 'Corrugated Iron Capital of the World' for its quirky and unique corrugated iron sculptures and buildings. This town always brings a smile and our guides will highlight all the key attractions as we pass through.              </p>
            <p>  <span className='fw-bold'> 4.  Te Puia Geothermal Park  –   </span> When you get to Te Puia, our primary destination, you'll go on a fully guided tour that will introduce you to the region's cultural and geothermal treasures. Highlights include the breathtaking Pōhutu Geyser, the National Māori Arts School, magnificent Māori architecture, geothermal craters and the viewing house where you can get a close-up look at a Kiwi bird. Optional extras like the Māori Cultural Performance or a traditional Māori Hangi buffet meal might significantly improve your experience.            </p>
            <p>  <span className='fw-bold'>5. Free time in Rotorua –  </span> If you opt not to add any extra activities at Te Puia, you will have free time to explore Rotorua while other guests participate in additional experiences.</p>
            <p> <span className='fw-bold'> 6.    Rotorua City Highlights   –</span>To conclude our Rotorua experience, we embark on a brief guided driving tour of the city's top attractions, including Lake Rotorua, Rotorua Museum, Government Gardens, Whangapipiro (Rachel Spring) and the Blue Baths. If time permits, we'll also visit a special souvenir shop where you can enjoy discounted shopping and sample Manuka Honey.</p>
            <p> <span className='fw-bold'> 7.   Auckland  –</span> Unfortunately, it's time to begin our journey back north, but the day isn’t over yet as you'll enjoy a fully guided return trip to Auckland.</p>

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
      <a href="https://api.whatsapp.com/send?phone=64 212845553&text=." class="float" target="_blank">
  <i class="fa-brands fa-whatsapp  my-float"></i></a>
  
<a href="tel:+64 212845553" class="floatt" target="_blank">
      <i class="fa-solid fa-phone-volume my-floatt"></i>
      </a>


  </>
  )
}

export default rotorua_TePuia
