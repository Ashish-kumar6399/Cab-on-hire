import React from 'react'
import img1 from "./Img/movie_img.jpg"
import { Link } from 'react-router-dom';

import "./style/Movie.css";


function Movie() {
  return (
    <>



{/* <div className='Auck'>

<h1 className='text-white fw-bolder text-uppercase about text-center '>Auckland Tours</h1>

</div> */}
      
      <div className='Auck'>

<h1 className='text-white fw-bolder text-uppercase about text-center ps-3 pe-3'>Hobbiton Movie Set Small Group Tour From Auckland</h1>


</div>




        <div className='container'>
        <div className='row mb-5'>

        <div className='col-1 text-center'> </div>
          <div className='col-5  text-center'>

            <img className='img_movie' src={img1} alt=''/>
          </div>
          <div  className='col-5  text-center'>
            <h1 className='movie_h1'>Hobbiton Movie Set Small Group Tour From Auckland</h1>
            <h6 className='movie_h6 '>Take the Hobbiton Movie Set Tour and go on an exciting journey! This fully guided small group tour departs from Auckland and takes you through the famous 12-acre Hobbiton Movie Set. With the help of an experienced Hobbiton guide, explore 44 hobbit holes, meander through the Shire's verdant fields, and learn the stories behind the movies. Savor the lovely gardens and cap up your tour at the well-known Green Dragon Inn with a complimentary drink. Traveling in a contemporary, well-equipped van, you'll be in the safe and comfortable company of our enthusiastic guides, whose tales and observations will make the experience truly unforgettable.</h6>
            <Link className='text-decoration-none' to="/contact">
        <div className='movie_btn rounded mt-4 text-white text-center'> BOOK NOW</div>

        </Link>            </div>



          <div  className='col-1  text-center'></div>


        </div>
          



        </div>





        <div className='container highlight' >
          <h5 className='fw-bolder'>Highlights</h5>
            <ul>
              <li className=''>Hobbiton & Alexander Family Sheep Farm</li>
              <li>Green Dragon Inn</li>
              <li>Waikato Farming Region</li>
              <li>Surprise Stops </li>

            </ul>

            <h4 className='fw-bolder'>Itinerary:</h4>

              <p> <span className='fw-bold'> 1. Auckland –</span> The biggest city in New Zealand is where your tour starts. Your guide will lay the groundwork for your journey as we depart the city and point you some of the must-see sights along the way.</p>
              <p> <span className='fw-bold'> 2. Waikato  – </span> After departing from Auckland, we travel south through the world's largest farming region, the stunning Waikato countryside. Along the route, take in the breathtaking scenery, imposing mountains, regal rivers, fantastic photo possibilities, and a variety of farm animals.              </p>
              <p>  <span className='fw-bold'> 3. Hobbiton Movie Set – </span>  Upon arriving at Hobbiton, you'll board one of the iconic green buses for a two-hour guided tour of the 12-acre movie set. Led by a professional Hobbiton guide, you'll explore the lush pastures of the Shire, visit 44 hobbit holes, admire stunning gardens, and uncover fascinating stories about the film's creation. The tour concludes with a complimentary cold beverage at the renowned Green Dragon Inn</p>
              <p>  <span className='fw-bold'> 4. Auckland –  </span> Your day is not yet over as we return north! Savor a completely guided journey back to Auckland, including with unexpected stops en route. Our guides might take you to picturesque locations near lakes, give you a taste of New Zealand ice cream, or show you to the local fauna and flora, depending on the conditions and the time of day. Take the tour to find out what surprises are in store!
              </p>
              <h5 className='fw-bolder'>Inclusions:</h5>
            <ul className='ul_movie'>
              <li className='ull'>Small Group Tour</li>
              <li>Fully Guided</li>
              <li>Entry Tickets</li>
              <li>Bottled Water</li>
              <li>Snacks</li>

            </ul>

            <p>While the destination is truly spectacular, at We Believe Travel, we believe it's our small groups, expert guides, and attention to detail that make our tours exceptional. From secret stops and wildlife viewings to specially designed vehicles, complimentary refreshments, and other delightful surprises, we ensure that every tour is a memorable experience.</p>

        </div>


    </>
  )
}

export default Movie
