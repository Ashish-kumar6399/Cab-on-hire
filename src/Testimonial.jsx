import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./style/Testimonial.css"
function Testimonial() {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

  return (
    <>
    <div className='testimonial_main_div pb-5'>
    <div className='container testimonial_main_div'>
        <h2 className='fw-bold text-center pt-5'>What our clients says</h2>

            <Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
//   autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet","desktop" ]}
//   deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
<div class="card border border-dark mt-4 mb-4 main_div_testim ">
  <div class="card-body" id='card_body_new '>
    <h5 class="card-title mt-3">John D.</h5>
    <div className=' star_div mb-3'>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    </div>    <p class="card-text">"Exceptional service! The driver was punctual, the car was clean, and the ride was smooth. I felt safe and comfortable throughout the journey. Highly recommend for anyone needing reliable cab service."</p>
    
  </div>
</div>


<div class="card border border-dark mt-4 mb-4 main_div_testim">
  <div class="card-body" id='card_body_new'>
    <h5 class="card-title mt-3">Sarah L.</h5>
    {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
    <div className=' star_div mb-3'>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    </div>
    <p class="card-text">"Amazing experience! The cab arrived on time, and the driver was very polite and professional. It made my airport transfer stress-free. I’ll definitely use this service again."</p>
    
  </div>
</div>
<div class="card border border-dark mt-4 mb-4 main_div_testim">
  <div class="card-body" id='card_body_new'>
    <h5 class="card-title mt-3">Ravi S.</h5>
    <div className=' star_div mb-3'>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    </div>    <p class="card-text">"Superb cab service! The driver was courteous, helped with my luggage, and took the best route to avoid traffic. I reached my destination much quicker than expected!"</p>
    
  </div>
</div>  
<div class="card border border-dark mt-4 mb-4 main_div_testim">
  <div class="card-body" id='card_body_new'>
    <h5 class="card-title mt-3">Emma P.</h5>
    <div className=' star_div mb-3'>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    </div>    <p class="card-text">"I’m really impressed by the level of professionalism. The driver was well-mannered, and the car was spotless. The booking process was easy, and I had a fantastic experience overall."</p>
    
  </div>
</div>
<div class="card border border-dark mt-4 mb-4 main_div_testim">
  <div class="card-body" id='card_body_new'>
    <h5 class="card-title mt-3">James P.</h5>
    <div className=' star_div mb-3'>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    </div>    <p class="card-text">"Fantastic experience! The cab arrived promptly, and the driver was friendly and professional. Navigating through Auckland’s traffic was effortless thanks to their knowledge."</p>
    
  </div>
</div>
<div class="card border border-dark mt-4 mb-4 main_div_testim rounded">
  <div class="card-body" id='card_body_new'>
    <h5 class="card-title mt-3">Michael T.</h5>
    <div className=' star_div mb-3'>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    </div>    <p class="card-text">"I’ve used this cab service several times, and it’s always been a pleasure. The drivers are friendly and knowledgeable about the city. Great value for the service they provide!"</p>
    
  </div>
</div>
</Carousel>

</div>
</div>



    </>
  )
}

export default Testimonial
