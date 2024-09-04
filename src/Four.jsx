import React from 'react'
import "./style/four.css";
import { Link } from 'react-router-dom';


import img1 from "./Img/gallery3-44.jpg"


function four() {
  return (
    <>

<div className='bgg'>

<h1 className='text-white fw-bolder text-uppercase about text-center'>
       4 HOUR PRIVATE CITY TOUR
</h1>
</div> 


<div className='container'>
        <div className='row mb-5'>

        <div className='col-1 text-center'> </div>


          <div className='col-5  text-center'>

            <img className='img_movie mt-5 pt-5' src={img1} alt=''/>
          </div>
          <div  className='col-5  text-center'>
            <h1 className='movie_h1'>4 HOUR PRIVATE CITY TOUR
            </h1>
            <h6 className='movie_h6 '>Experience Auckland, the vibrant heart of New Zealand, where adventure, beauty, and a hint of magic await. With so much to explore, where should you start? This half-day whirlwind tour is crafted to captivate your senses and give you a glimpse of Auckland's finest.

Picture this: stunning panoramic views that will leave you in awe. Pristine beaches inviting you to sink your toes into the sand. Unique neighborhoods brimming with character and charm. And the dynamic energy of downtown Auckland, a haven for shoppers!

But this is no ordinary tour. With a small group of just 7 adventurers, you’ll enjoy the VIP treatment. Your friendly local guide will be your go-to expert in Auckland, revealing hidden gems, sharing captivating stories, and offering insider tips to make your experience unforgettable.</h6>


        <Link className='text-decoration-none' to="/contact">
        <div className='movie_btn rounded mt-4 text-white text-center'> BOOK NOW</div>

        </Link>

          </div>



          <div  className='col-1  text-center'></div>


        </div>
          



        </div>

        <div className='container four_div'>

        <h2 className=''>An Exciting Adventure Through Auckland’s  Heart!</h2>

        <h5 className=''>Prepare for an unforgettable adventure that will take your breath away! This tour is your key to discovering the hidden gems and vibrant pulse of Auckland, New Zealand’s sparkling City of Sails.</h5>


        <h4>Fly High Over the Waitemata Harbour</h4>


       
        <h6>Our journey starts with a grand crossing of the Auckland Harbour Bridge. Feel the energy beneath you as we pass over this iconic structure, the gateway to the city’s vibrant core. From its towering vantage point, take in the dazzling Waitemata Harbour, a scene of bobbing boats and boundless adventure waiting to unfold.</h6>
       

        <h4> <i class="fa-solid fa-star"></i> Journey Back in Time at North Head Historic Reserve:</h4>
        <h6>Discover Auckland’s military past at North Head Historic Reserve. Wander through the formidable Fort Takapuna, a guardian of the city’s shores. Picture the echoing booms of cannons as they protected the harbor from would-be invaders. Your guide will breathe life into these tales, taking you back to a time long gone.</h6>

        <h4> <i class="fa-solid fa-star"></i> Stunning City Views from Mount Eden:</h4>
        <h6>Prepare for an unparalleled panoramic adventure! We’ll ascend to the summit of Mount Eden, Auckland’s tallest volcanic peak. Be amazed by the stunning 360-degree vistas of the city below. Take in the sparkling harbor, majestic mountains, and the urban landscape in all its splendor.</h6>
        
        <h4> <i class="fa-solid fa-star"></i> Experience the Majesty of the Holy Trinity Cathedral:</h4>
        <h6>Immerse yourself in the architectural wonder of the Holy Trinity Cathedral. This remarkable building is the world’s only Pacific-Gothic cathedral, captivating visitors with its grandeur and stunning beauty.</h6>
        <h4> <i class="fa-solid fa-star"></i> Unwind and Reflect at MJ Savage Memorial Park:</h4>
        <h6>Relax and enjoy the scenic beauty at MJ Savage Memorial Park. Amidst lush gardens and breathtaking views stretching from east to west, find a peaceful retreat from the city’s bustle. Visit the memorial dedicated to Michael Joseph Savage, New Zealand’s first Labour Prime Minister, and take in the serene vistas of the Waitemata Harbour.</h6>
        

        <h6>This is just a glimpse of the amazing experiences that await on this exhilarating tour. Join us to uncover the magic of Auckland—it’s a journey you’ll always remember!</h6>
        
        </div>


    </>
  )
}

export default four
