import React from 'react'
import img1 from "../src/Img/tepuia.jpg"
import { Link } from 'react-router-dom'

function Tepuia() {
  return (

      
      <>




      
      <div className='Auck'>

<h1 className='text-white fw-bolder text-uppercase about text-center ps-3 pe-3'>Hobbiton & Rotorua Tour (including Te Puia)</h1>


</div>




        <div className='container'>
        <div className='row mb-5'>

        <div className='col-1 text-center'> </div>
          <div className='col-5  text-center'>

            <img className='img_movie' src={img1} alt=''/>
          </div>
          <div  className='col-5  text-center'>
            <h1 className='movie_h1'>Hobbiton & Rotorua Tour (including Te Puia)</h1>
            <h6 className='movie_h6 '>A small-group, fully guided day tour that incorporates two of the North Island's most popular sights is the Hobbiton & Rotorua Te Puia Tour. In one day, discover the highlights of Rotorua City and immerse yourself in the finest aspects of Māori culture and the natural world. With their vast expertise and engaging anecdotes, our enthusiastic tour guides will make your trip truly unforgettable. You'll also ride in contemporary, cozy minibuses that are furnished with features to guarantee your safety and comfort.

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
              <li>Hobbiton & Alexander Family Sheep Farm</li>
              <li>Te Puia Geothermal Park & Pohutu</li>
              <li>Maori Cultural Village and Arts School</li>
              <li>Rotorua City Highlights </li>

            </ul>

            <h4>Itinerary:</h4>

              <p> <span className='fw-bold'> 1. Auckland –</span> Start of your tour is at the biggest city in New Zealand. Your guide will introduce you to the main sights of the city as we head out of town and lay the groundwork for your trip.</p>
              <p> <span className='fw-bold'> 2. Waikato  – </span>  After departing from Auckland, we travel south through the beautiful Waikato countryside, which is well known for its vast agricultural region. Along the route, take in the breathtaking landscape, imposingrivers, great photo opportunities, striking mountains and sights of farm animals.</p>
              <p>  <span className='fw-bold'> 3. Hobbiton Movie Set – </span>  Once at Hobbiton, you'll hop on one of the recognizable green buses and spend the next two and a half hours touring the breathtaking 12-acre film set with a comprehensive guide. You'll travel the verdant Shire pastures, stop at 44 hobbit holes, take in the stunning gardens and learn interesting anecdotes about the film's making with the help of an experienced Hobbiton guide. Finally, at the well-known Green Dragon Inn, savor a complementary cool beverage.</p>
              <p>  <span className='fw-bold'> 4.Tirau  –  </span> Traveling towards Rotorua, we will travel through Tirau, which is renowned as the 'Corrugated Iron Capital of the World' because to its unique corrugated iron structures and artwork. You'll smile and find yourself drawn to this oddball town. As we move through, our guides will point us all of the major attractions.</p>
              <p>  <span className='fw-bold'> 5. Te Puia Geothermal Park –   </span> Once you reach Te Puia, you will go on a fully guided tour to fully appreciate the cultural and geothermal marvels of the Māori people. A visit to the Kiwi watching house, where visitors may be able to observe a Kiwi bird, the Pōhutu Geyser, traditional Māori architecture, the National Māori Arts School, geothermal craters and geothermal activities are among the highlights.</p>
              <p>  <span className='fw-bold'> 6. Rotorua City Highlights –  </span> To complete our Rotorua experience, we'll take a guided driving tour of the city's most iconic sites, including Lake Rotorua, the Rotorua Museum, Government Gardens, Whangapipiro (Rachel Spring) and the Blue Baths. If time allows, we might also stop by a souvenir shop for discounted shopping and a taste of Manuka Honey.</p>
              <p> <span className='fw-bold'> 7. Auckland –</span> Sadly, it's time to return north, although the journey is far from over. Savor an entirely guided journey back to Auckland, including with unplanned stops en route.</p>

              <h5>Inclusions:</h5>
            <ul className='ul_movie'>
              <li className='ull'>Small Group Tour</li>
              <li>Fully Guided</li>
              <li>Entry Tickets</li>
              <li>Bottled Water</li>
              <li>Snacks</li>

            </ul>

            <p>At Cab on Hire, we believe that while the destinations you’ll visit are undeniably breathtaking, it's the details that make our tours stand out. Our small groups, knowledgeable guides and carefully curated journey set us apart. From secret stops and wildlife encounters to specially designed vehicles and complimentary refreshments, our tours are filled with delightful surprises that create an unforgettable experience.</p>

        </div>


        <a href="https://api.whatsapp.com/send?phone=64 212845553&text=." class="float" target="_blank">
  <i class="fa-brands fa-whatsapp  my-float"></i></a>
  
<a href="tel:+64 212845553" class="floatt" target="_blank">
      <i class="fa-solid fa-phone-volume my-floatt"></i>
      </a>



    </>



  )
}

export default Tepuia
