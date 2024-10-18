import React from 'react';
import './style/Carousel.css';

import img1 from './Img/cruise.jpg';
import img5 from './Img/city.avif';

import img8 from './Img/carousel_img.webp';
import img9 from './Img/lord_of_rings.webp';
import img10 from './Img/Best-BMWs_new.jpg';


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
          <img src={img5} className="d-block w-100" alt="Slide 4" />
          
           <div className=" container div_head">
           <h1  data-aos="fade-down" className='  text-black text-center' id='div_head_id'><span className='opacity-100  text-center text-capitalize fw-bold' >Auckland   Tours </span></h1>
           
          </div>
        </div>


        <div className="carousel-item">
          <img src={img8} className="d-block w-100" alt="Slide 4" />
         
           <div className=" container div_head">
            <h1 className='er data-aos="fade-down"  text-black text-center' id='div_head_id'><span className='opacity-100  text-center text-capitalize fw-bold'> Private Day Tours, School Ball Transfer, Long  and Short Routes </span></h1>
            <h1 className='er  text-black text-center' id='div_head_id'><span className='opacity-100  text-center'> </span></h1>
          </div>
        </div>
        <div className="carousel-item">
          <img src={img9} className="d-block w-100" alt="Slide 4" />
         
           <div className=" container div_head">
           
            <h1 className='er  data-aos="fade-down" text-black text-center' id='div_head_id'><span className='opacity-100  text-center text-capitalize fw-bold text-dark animate__backInDown'>Explore the Iconic Lord of the Rings Movie Set





</span></h1>
          </div>
        </div>


        <div className="carousel-item">
          <img src={img10} className="d-block w-100" alt="Slide 4" />
         
           <div className=" container div_head">
            <h1 className='er  data-aos="fade-down" text-black text-center' id='div_head_id'><span className='opacity-100  text-center text-capitalize fw-bold text-white' >School Pickup And  Drop Off Services</span></h1>
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
