import React from 'react';

import "./style/Cards.css"
import "./style/Cards_two.css";

import img1 from './Img/skoda_superb.jpg';
import img2 from './Img/2021-Mercedes-Benz-Vito-Tourer-Select-121-launch-Malaysia-8-BM-850x440.webp';
import img3 from './Img/cab_vw8.jpeg';
import img4 from './Img/cab_vw5.jpg';

function Cards() {
  return (
    <>
      <div className='d-flex justify-content-center pe-4 ps-4 container-fluid  cards_container_div'>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          <div className="col">
            <div className="card">
              <img src={img1} className="card-img-top rounded-bottom" alt="Hollywood Sign on The Hill" />
              <div className="card-body">
                <h5 className="card-title fw-bolder"> Skoda Superb </h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={img2} className="card-img-top rounded-bottom" alt="Palm Springs Road" />
              <div className="card-body">
              <h5 className="card-title fw-bolder">               Mercedes Vito Tourer              </h5>

              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={img3} className="card-img-top rounded-bottom" alt="Los Angeles Skyscrapers" />
              <div className="card-body">
                <h5 className="card-title fw-bolder">  TOYOTA PRIUS
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>




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
            

    </>
  );
}

export default Cards;
