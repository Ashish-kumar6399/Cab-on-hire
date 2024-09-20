import React from 'react';
import './style/Carousel.css';
import img2 from './Img/5.png';
import img3 from './Img/business_trips_new.jpg';
import img4 from './Img/Rotorua img_6.jpg';
import img1 from './Img/cruise.jpg';
import img5 from './Img/city.avif';
import img6 from './Img/culture.jpg';
import img7 from './Img/tours_new.webp';
import img8 from './Img/hobition_movie_new.webp';
import img9 from './Img/lord_of_rings.webp';
import img10 from './Img/Best-BMWs_new.jpg';
import 'animate.css';


function Carousel() {
  return (
    <>
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">

        {/* First Slide */}
        <div className="carousel-item active">
          <img src={img1} className="d-block w-100" alt="Slide 1" />
          
          <div    className=" container div_head">
          <h1 className='er data-aos="fade-down"  text-black text-center' id='div_head_id'><span className='opacity-100  text-center text-capitalize fw-bold' >Cruise ship  Transfers </span></h1>
          </div>
         

          
        </div>



        {/* Fourth Slide */}
        <div className="carousel-item">
          <img src={img8} className="d-block w-100" alt="Slide 4" />
          
           <div className=" container div_head">
           <h1  data-aos="fade-down" className='  text-white text-center' id='div_head_id'><span className='opacity-100  text-center text-capitalize fw-bold' >Auckland   Tours </span></h1>
           
          </div>
        </div>


        <div className="carousel-item">
          <img src={img5} className="d-block w-100" alt="Slide 4" />
         
           <div className=" container div_head">
            <h1 className='er data-aos="fade-down"  text-black text-center' id='div_head_id'><span className='opacity-100  text-center text-capitalize fw-bold'> Private Day Tours, School Ball Transfer, Long  and Short Routes </span></h1>
            <h1 className='er  text-black text-center' id='div_head_id'><span className='opacity-100  text-center'> </span></h1>
          </div>
        </div>
        <div className="carousel-item">
          <img src={img9} className="d-block w-100" alt="Slide 4" />
         
           <div className=" container div_head">
           
            <h1 className='er  data-aos="fade-down" text-black text-center' id='div_head_id'><span className='opacity-100  text-center text-capitalize fw-bold text-dark animate__backInDown'> Visit of the movie set location  for the lord of the rings</span></h1>
          </div>
        </div>


        <div className="carousel-item">
          <img src={img10} className="d-block w-100" alt="Slide 4" />
         
           <div className=" container div_head">
            <h1 className='er  data-aos="fade-down" text-black' id='div_head_id'><span className='opacity-100  fw-bold' >Cruise ship Transports ,School ball Transfers </span></h1>
          </div>
        </div>

      </div>

      {/* Carousel Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>




  




    </>

    
  );
}

export default Carousel;
