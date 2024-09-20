import React from 'react'
import "./style/Cards_two.css"

// import img1 from './Img/NZ1.jpg';
// import img2 from './Img/NZ2.jpg';
// import img3 from './Img/NZ3.jpg';


import img1 from  "./Img/movie_new.webp"
import img2 from  "./Img/glowworm.webp"
import img3 from  "./Img/Rotorua new.jpg"
import img4 from  "./Img/e3.jpg";
import { Link } from 'react-router-dom'




function Cards_two() {
  return (
    <>
      
      


                    <h1 className='text-center fw-bolder  mt-5'>Our Tours  </h1>      


                               <div className='d-flex container-fluid tours_div mb-5  '>

                                                    <div className="card boot_card rounded">
                                    <img className='rounded rounded-bottom' src={img1} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h6 class="card-title">Hobbiton Movie Set Tour</h6>

                                        <Link className='text-decoration-none' to="/movie">
                                        <div className='text-center  text-white tour_btn' id='btnn'>
                                            View Tour
                                        </div></Link>
                                        
                                    </div>
                                    </div>



                                                    <div className="card boot_card">
                                    <img  className='rounded rounded-bottom'  src={img2} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h6 class="card-title">Hobbiton & Waitomo Glowworm Caves Tour</h6>

                                        <Link className='text-decoration-none' to="/caves">
                                        <div className='text-center  text-white tour_btn'>
                                            View Tour
                                        </div></Link>
                                        
                                    </div>
                                    </div>



                                    
                                                    <div className="card boot_card">
                                    <img className='rounded rounded-bottom' src={img3} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h6 class="card-title">Hobbiton & Rotorua Tour (including Te Puia) </h6>

                                        <Link className='text-decoration-none' to="/tepuia">
                                        <div className='text-center  text-white tour_btn'>
                                            View Tour
                                        </div></Link>
                                        
                                    </div>
                                    </div>



                                                    <div className="card boot_card">
                                    <img className='rounded rounded-bottom' src={img4} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h6 class="card-title">Hobbiton & Rotorua Tour (including Wai-O-Tapu) </h6>

                                        <Link className='text-decoration-none ' to="/wotapu">
                                        <div className='text-center  text-white tour_btn'>
                                            View Tour
                                        </div></Link>
                                        
                                    </div>
                                    </div>





                </div>

                    





    </>
  )
}

export default Cards_two
