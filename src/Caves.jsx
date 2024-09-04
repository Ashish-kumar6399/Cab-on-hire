import React from 'react'
import "./style/Movie.css";
import { Link } from 'react-router-dom';

import img1 from "./Img/hobbiton_caves.jpg"



function Caves() {
  return (
    <>

<div className='Auck'>

<h1 className='text-white fw-bolder text-uppercase about text-center'>Hobbiton & Waitomo Caves Small Group Tour From Auckland</h1>


</div>

        <div className='container'>
        <div className='row mb-5'>

        <div className='col-1 text-center'> </div>
          <div className='col-5  text-center'>

            <img className='img_movie' src={img1} alt=''/>
          </div>
          <div  className='col-5  text-center'>
            <h1 className='movie_h1'>Hobbiton & Waitomo Caves Small Group Tour from Auckland</h1>
            <h6 className='movie_h6 '>The Hobbiton & Waitomo Tour is a small-group, fully-guided day trip that combines two of North Island's top attractions in a more relaxed manner than other tours. Experience the ultimate day trip from Auckland with our passionate guides, known for bringing the journey to life with their stories and extensive knowledge. Travel in a modern, comfortable van equipped with extras to ensure your comfort and safety.</h6>
            <Link className='text-decoration-none' to="/contact">
        <div className='movie_btn rounded mt-4 text-white text-center'> BOOK NOW</div>

        </Link>            </div>



          <div  className='col-1  text-center'></div>


        </div>
          



        </div>





        <div className='container highlight ' >
          <h5  className='fw-bolder'>Highlights</h5>
            <ul>
              <li>Hobbiton & Alexander Family Sheep Farm</li>
              <li>Waitomo Glowworm Caves</li>
              <li>Secret Animal Viewing Stops</li>
              <li>Waikato Farming Region </li>

            </ul>

            <h4 className='fw-bolder'>Itinerary:</h4>

              <p> <span className='fw-bold'> 1. Auckland –</span>Your tour begins in New Zealand’s largest city. As we depart, your guide will set the stage for your adventure and highlight some of the city's top attractions along the way.</p>
              <p> <span className='fw-bold'> 2. Waikato  – </span> After departing from Auckland, we travel south through the world's largest farming region, the stunning Waikato countryside. You'll pass by gorgeous countryside, regal rivers, amazing photo ops, striking mountains, and a variety of farm animals on your journey..</p>
              <p>  <span className='fw-bold'> 3. Hobbiton Movie Set – </span>  You'll take a two-hour guided tour of the 12-acre film set at Hobbiton after boarding one of the recognizable green buses. Along the way, a knowledgeable Hobbiton guide will take you through the verdant Shire pastures, to 44 different locations for hobbit holes, past gorgeous gardens, and fascinating behind-the-scenes tales from the movies. At the famous Green Dragon Inn, guests can have a complimentary cold beverage as the tour comes to an end.              </p>
              {/* <p>  <span className='fw-bold'> 4. Auckland –  </span> Sadly we must start to head north again but your day is not over with a fully guided return trip to Auckland including surprise stops. Depending on weather and timing our guides love doing other surprise stops. Maybe a scenic stop near a lake or the chance to try New Zealand ice creams, we love introducing you to local wildlife and animals. You will have to jump on the tour to see where you go!</p> */}
              <p>  <span className='fw-bold'>  4. Karapiro –  </span>    As we leave Hobbiton and head toward Waitomo, we make a stop at the picturesque Lake Karapiro. Home to one of New Zealand’s first hydro dams and a training spot for top rowers, the lake offers breathtaking views of the water and surrounding countryside. It's the perfect place for a brief break and some memorable photos.</p>
              <p>  <span className='fw-bold'> 5. Otorohanga –  </span>As we continue, you'll enjoy more scenic views, pass racehorse breeding areas, and rivers before arriving in Otorohanga, known as "The Kiwiana Capital of New Zealand." Experience the charm of this unique town, where you'll see all things Kiwi.</p>
              <p>  <span className='fw-bold'>  6. Big Bird –  </span>  As we approach our second destination, we stop outside the Big Bird & Miniature Animal Petting Farm to meet some of the local animals. Although we won't have time to enter the park, the friendly animals often come to the fences for photos, delighting our guests and adding a special touch to the visit.</p>
              <p>  <span className='fw-bold'> 7. Waitomo Caves –  </span>When you arrive at our second main attraction, you will be taken on a guided tour of the breathtaking and historic caverns, where you can explore a variety of formations like limestone columns, stalactites, and stalagmites. Go further below the surface for a Glowworm encounter that will never be forgotten. Embark on a boat ride down the grotto river while millions of glowworms twinkle overhead. The Waitomo Glowworm Caves have been a renowned tourist destination in New Zealand for more than a century.              </p>
              <p>  <span className='fw-bold'> 8. Auckland –  </span> After visiting Waitomo, we begin our journey back north. However, your day isn’t over yet. Enjoy a fully guided return trip to Auckland with some secret stops along the way.</p>
              
              <h5 className='fw-bolder'>Inclusions:</h5>
            <ul>
              <li>Small Group Tour</li>
              <li>Fully Guided</li>
              <li>Entry Tickets</li>
              <li>Bottled Water</li>
              <li>Snacks</li>

            </ul>
            <h5>Optional Extras:</h5>
            <li>One-way option from Auckland to Waitomo
            </li>
            <p>We Believe Travel feels that our tours are unique because of our small groups, knowledgeable guides, and meticulous attention to detail—even when the destination is really amazing. We make sure that every tour is full of exciting surprises and life-changing experiences, from specially designed vehicles and wildlife viewings to secret stops and free refreshments.
            </p>

        </div>
      
    </>
  )
}

export default Caves
