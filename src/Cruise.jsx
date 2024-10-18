import React from 'react'
import "./style/Cruise.css"
import img1 from  "./Img/private_best_travel_-_cruise_transfer.jpg";




import { Link } from 'react-router-dom'


function Cruise() {
  return (
    <>
       


<>




      
<div className='cruise_bg'>

<h1 className='text-white fw-bolder text-uppercase about text-center   ' id='heading_bg'>Cruise Ship Transfers </h1>


</div>




  <div className='container'>
  <div className='row mb-5'>

  <div className='col-1 text-center'> </div>
    <div className='col-5  text-center'>

      <img className='img_movie ps-3 pe-3  mt-5 ' src={img1} alt=''/>
    </div>
    <div  className='col-5  text-center'>
      <h1 className='movie_h1'>Cruise Ship Transfers</h1>
      <h6 className='movie_h6 '>Reserve your ride with our premium cruise shuttle service, offering seamless transfers for domestic cruise arrivals and departures in Auckland. Enjoy seamless travel between Auckland Airport, cruise terminals, ferry terminals and Queens Wharf, ensuring a smooth start or end to your journey. Experience ultimate comfort and privacy with our private cruise transfers, customized exclusively for your needs. We also offer efficient cruise ship transfers to Whangaparaoa and Hibiscus Coast, ensuring a hassle-free experience. 
</h6>
      <Link className='text-decoration-none' to="/contact">
  <div className='movie_btn rounded mt-4 text-white text-center'> BOOK NOW</div>

  </Link>            </div>



    <div  className='col-1  text-center'></div>


  </div>
    



  </div>





  <div className='container highlight' >
   

      <h4 className='fw-bolder'>Door To Door Cruise Transfer  </h4>


      <h6 className='mt-4 mb-4 about_para'>Cab on Hire provides comprehensive cruise ship transfer services in Auckland, catering to both local and international cruise passengers. Available 24/7 throughout the year, we ensure a seamless travel experience. Whether you need transportation between Auckland Airport, Auckland Central or the North of our Auckland Cruise Terminals, our reliable Cruise Transfers are ready to serve you. Enjoy a complimentary meet and greet upon your return, making your journey stress-free.    </h6>

        
       
       <h4  className='fw-bolder '>Cruise Transfer To Auckland Airport</h4>


       <h6 className='mt-4 mb-4 about_para text-capitalize'>Cruise Terminal to Airport – Our pickup procedure at Auckland's Queens Wharf cruise ship terminal is straightforward. We have designated parking near Shed 10, and if permitted, we will enter the terminal with a sign for a cruise meet and greet. Queens Wharf is well-organized, making the process smooth. The procedure at Auckland's Princess Wharf cruise ship terminal is slightly more complex, but we ensure a seamless experience for our passengers.  </h6>

       




       
     
       <a href="https://api.whatsapp.com/send?phone=64 212845553&text=." class="float" target="_blank">
  <i class="fa-brands fa-whatsapp  my-float"></i></a>
  
<a href="tel:+64 212845553" class="floatt" target="_blank">
      <i class="fa-solid fa-phone-volume my-floatt"></i>
      </a>



  </div>


</>


    </>
  )
}

export default Cruise
