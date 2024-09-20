import React from 'react'
import img2 from "./Img/business_trips.webp";
import img3 from "./Img/short_car.jpg";
import img1 from "./Img/cab_vw1.jpg"
import   "./style/Schooltransport.css"


import { Link } from 'react-router-dom'

function SchoolTransport() {
  return (
    <>




      
<div className='School_pickup_bg'>

<h1 className='text-white fw-bolder text-uppercase about text-center ps-3 pe-3 ' id='heading_bg'>School Pickup and Drop-Off Cab Services </h1>


</div>




  <div className='container'>
  <div className='row mb-5'>

  <div className='col-1 text-center'> </div>
    <div className='col-5  text-center'>

      <img className='img_business' src={img1} alt=''/>
    </div>
    <div  className='col-5  text-center'>
      <h1 className='movie_h1'>Reliable School Pickup and Drop-Off Cab Services in Auckland
      </h1>


      <h6 className='movie_h6  ' style={{"textAlign":"justify"}}>
      Ensure your child’s safety and comfort with our trusted school pickup and drop-off cab services in Auckland. We understand the importance of punctuality and reliability, which is why we provide professional drivers and well-maintained vehicles to transport your child to and from school. </h6>
      <Link className='text-decoration-none' to="/contact">
  <div className='movie_btn rounded mt-4 text-white text-center'> BOOK NOW</div>

  </Link>            </div>



    <div  className='col-1  text-center'></div>


  </div>
    



  </div>





  <div className='container highlight' >


 

   
   
   <h4  className='fw-bolder '>Why Choose Our School Transport Services?</h4>


   <h6 className='mt-4 mb-4'><span className="fw-bolder">    Safety First:</span> All our drivers are fully licensed, background-checked, and trained to provide safe, secure transportation for children of all ages. </h6>

   <h6 className='mt-4 mb-4'><span className="fw-bolder">   Punctual and Reliable:</span> We guarantee timely pick-up and drop-off, ensuring your child arrives at school and home on time.</h6>

   <h6 className='mt-4 mb-4'><span className="fw-bolder">   Flexible Scheduling:</span>Whether you need regular daily transport or occasional pickups, our services can be tailored to fit your family's schedule. </h6>

   <h6 className='mt-4 mb-4'><span className="fw-bolder">  Comfortable Rides:</span>Our cabs are equipped with comfortable seating and climate control to ensure a pleasant ride every time. </h6>

   <h6 className='mt-4 mb-4'><span className="fw-bolder">     Affordable Rates:</span>We offer competitive pricing with no hidden fees, making school transport both convenient and budget-friendly </h6>

   <h6 className='mt-4 mb-4'><span className="fw-bolder">    Simple Online Booking: </span>Our user-friendly platform allows you to schedule pickups and drop-offs with just a few clicks. </h6>

   <h6 className='mt-4 mb-4'><span className="fw-bolder">    Recurring Bookings: </span> Set up daily or weekly bookings so you don’t have to rebook every time. </h6>

   <h6 className='mt-4 mb-4'><span className="fw-bolder">    Last-Minute Bookings:</span>Need a last-minute cab for your child? Our fleet is always ready to respond to urgent requests.</h6>
   





   <h4  className='fw-bolder ' style={{"marginTop":"5rem"}}>Dedicated Support for Parents</h4>


   <h5>We understand the importance of communication and are always here to assist you:


   <h6 className='mt-4 mb-4'><span className="fw-bolder">     24/7 Customer Support:</span> Our dedicated team is available around the clock to help with any queries or concerns.
   </h6>
   <h6 className='mt-4 mb-4'><span className="fw-bolder">    Phone and Email Support: </span>  Speak directly with our support team for personalized assistance.
   </h6>
   <h6 className='mt-4 mb-4'><span className="fw-bolder">    Certified Drivers: </span>  All drivers are certified professionals with clean driving records and extensive training in child safety.
   </h6>
   

</h5>


   




   
  

</div>










<a href="https://api.whatsapp.com/send?phone=64 212845553&text=." class="float" target="_blank">
<i class="fa-brands fa-whatsapp  my-float"></i></a>

<a href="tel:+91 64 212845553" class="floatt" target="_blank">
      <i class="fa-solid fa-phone-volume my-floatt"></i>
      </a>


</>
  )
}

export default SchoolTransport
