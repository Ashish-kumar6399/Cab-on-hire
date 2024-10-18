import React from 'react'
import "./style/Business.css"

import img2 from "./Img/business_trips.webp";

import { Link } from 'react-router-dom'


function Business() {
  return (
    <>




      
    <div className='Business_bg'>

<h1 className='text-white fw-bolder text-uppercase about text-center ps-3 pe-3 '>Business Trips</h1>


</div>




      <div className='container'>
      <div className='row mb-5'>

      <div className='col-1 text-center'> </div>
        <div className='col-5  text-center'>

          <img className='img_business' src={img2} alt=''/>
        </div>
        <div  className='col-5  text-center'>
          <h1 className='movie_h1'> Upgrade Your Business Journey with Cab On Hire</h1>
          <h6 className='movie_h6 '>Here at Cab On Hire, we revolutionize business travel by offering top-notch service, professionalism and dependability. Auckland is a popular destination for corporate engagements because of its dynamic business center and breathtaking scenery. We're here to make sure your trip is easy and productive.
</h6>
          <Link className='text-decoration-none' to="/contact">
      <div className='movie_btn rounded mt-4 text-white text-center'> BOOK NOW</div>

      </Link>            </div>



        <div  className='col-1  text-center'></div>


      </div>
        



      </div>





      <div className='container highlight' >
   

      <h4 className='fw-bolder'>Customized Transportation Approaches  </h4>


      <h6 className='mt-4 mb-4'>Cab On Hire provides customized transportation options that are tailored to your unique business requirements, whether you're traveling for a series of appointments, a company event or an important meeting. Our collection of up-to-date, immaculate cars guarantees that you will travel in comfort and style and our team of experienced chauffeurs will provide prompt, polite service that upholds the high standards of your company </h6>

      
       
       <h4  className='fw-bolder '>Why Opt for a Hired Cab for Your Corporate Travel?</h4>


       <h6 className='mt-4 mb-4'><span className="fw-bolder"> Timeliness Promised:</span>  We understand how  time is important in the business sector. Our drivers are committed to getting you to your destination promptly, ensuring you arrive ready and relaxed.</h6>
       <h6 className='mt-4 mb-4'><span className="fw-bolder"> Expert Operators:</span> Our knowledgeable drivers serve as representatives of our company in addition to being skilled drivers. They are skilled in providing a high degree of privacy, professionalism and local expertise to make your trip more enjoyable.</h6>
       <h6 className='mt-4 mb-4'><span className="fw-bolder"> Adaptable Reservation Choices:</span>Whether you're planning a single trip, a full-day hire or a sequence of trips, we have a variety of booking choices to suit your schedule. Our friendly customer service representatives and our user-friendly online booking system are there to help you at every stage. </h6>
       <h6 className='mt-4 mb-4'><span className="fw-bolder"> Corporate Accounts:</span> For frequent travelers, we offer tailored corporate account services, including flexible billing options and dedicated account management to streamline your travel arrangements.</h6>
       <h6 className='mt-4 mb-4'><span className="fw-bolder"> Cozy and Practical:</span>The newest conveniences available are installed in our cars to create a relaxing and effective workspace. With Wi-Fi and charging connections accessible to keep you connected and on top of your work, enjoy a smooth commute. </h6>

       




       
      

  </div>

  
  <a href="https://api.whatsapp.com/send?phone=64 212845553&text=." class="float" target="_blank">
  <i class="fa-brands fa-whatsapp  my-float"></i></a>
  
<a href="tel:+64 212845553" class="floatt" target="_blank">
      <i class="fa-solid fa-phone-volume my-floatt"></i>
      </a>



  </>
  )
}

export default Business
