import React from 'react';
import { Link } from 'react-router-dom';

import "./style/Cards.css"
import "./style/Cards_two.css";

import img1 from './Img/skoda_superb.jpg';
import img2 from './Img/2021-Mercedes-Benz-Vito-Tourer-Select-121-launch-Malaysia-8-BM-850x440.webp';
import img3 from './Img/cab_vw1.jpg';
import img4 from './Img/cab_vw5.jpg';

function Cards() {
  return (
    <>

<div className=' pe-1 ps-1'>
      <div className='d-flex justify-content-center  container-fluid  cards_container_div'>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">

        <div data-aos="zoom-in">

          <div className="col">
            <div className="card">
              <img src={img1} className="card-img-top rounded-bottom" alt="Hollywood Sign on The Hill" />

              <Link  className='text-black text-decoration-none' to="/service/skoda">
              <div className="card-body">
                <h4 className="card-title fw-bolder"> Skoda Superb </h4>
                <h6 className='text-center'><i class="fa-solid fa-users "></i>   5 seater </h6>

              </div>
              </Link>

            </div>
          </div>
          </div>



          <div data-aos="zoom-in">

          <div className="col">
            <div className="card">
              <img src={img2} className="card-img-top rounded-bottom" alt="Palm Springs Road" />

              <Link  className='text-black text-decoration-none' to="/service/Vito">

              <div className="card-body">
              <h5 className="card-title fw-bolder">               Mercedes Vito Tourer              </h5>
              <h6 className='text-center'><i class="fa-solid fa-users "></i>   5 seater </h6>


              </div>
              </Link>


            </div>
          </div>

        </div>


        <div data-aos="zoom-in">

          <div className="col">
            <div className="card">
              <img src={img3} className="card-img-top rounded-bottom" alt="Los Angeles Skyscrapers" />

              <Link  className='text-black text-decoration-none' to="/service/Volkswagen">

              <div className="card-body">
                <h5 className="card-title fw-bolder"> Volkswagen ID 4

                </h5>
                <h6 className='text-center'><i class="fa-solid fa-users "></i>   5 seater </h6>

              </div>
              </Link>
            <div>

              
            </div>
            </div>
          </div>

          </div>
        </div>
      </div>
      </div>



      <a href="https://api.whatsapp.com/send?phone=64 212845553&text=." class="float" target="_blank">
      <i class="fa-brands fa-whatsapp  my-float"></i></a>


      <a href="tel:+91 64 212845553" class="floatt" target="_blank">
      <i class="fa-solid fa-phone-volume my-floatt"></i>
      </a>











{/* 
      <div
  className="card text-white"
  id="card1"
  style={{
    marginTop: 20,
    width: "100%",
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: "white",
    border: "none"
  }}
>
  <img
    src={img4}
    className="card-img"
    alt="..."
    style={{ width: "100%" }}
  />
  <div className="card-img-overlay "></div>
</div>
             */}

    </>
  );
}

export default Cards;

















































