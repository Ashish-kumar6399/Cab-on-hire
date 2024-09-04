import React from 'react'
import img1 from  "./Img/Hobbiton-Movie-Set-17-1200-px.jpg"
import img2 from  "./Img/hobbiton_waitomo.jpg"
import img3 from  "./Img/hobbitonrotoruatepuia-1.jpg"
import img4 from  "./Img/imggg_4.jpg";
import img5 from "./Img/Rotorua img_1.jpg"
import img6 from "./Img/Rotorua img_2.jpg"
import img7 from "./Img/Rotorua img_3.jpg"
import img8 from "./Img/Rotorua img_4.jpg"
import img9 from "./Img/Rotorua img_5.jpg"
import img10 from "./Img/Rotorua img_6.jpg"
import img11 from "./Img/Rotorua img_7.jpg"
import img12 from "./Img/Rotorua img_8.jpg"


import img13 from "./Img/waitomo_caves.jpg"
import img14 from "./Img/waitomorotoruatepuia-1.jpg"



import "./style/Auckland.css"
import { Link } from 'react-router-dom'



function Auckland() {
  return (
    <>

                <div className='Auck'>

                     <h1 className='text-white fw-bolder text-uppercase about text-center '>Auckland Tours</h1>

                </div>


                <h1 className='text-center fw-bolder Auckland_heading' id='tours_heading'>Auckland to Hobbiton
                </h1>      


                               <div className='d-flex container-fluid tours_div '>

                                                    <div className="card boot_card">
                                    <img className='rounded' src={img1} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h6 class="card-title">Hobbiton Movie Set Tour</h6>

                                        <Link className='text-decoration-none' to="/movie">
                                        <div className='text-center  text-white tour_btn' id='btnn'>
                                            View Tour
                                        </div></Link>
                                        
                                    </div>
                                    </div>



                                                    <div className="card boot_card">
                                    <img  className='rounded'  src={img2} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h6 class="card-title">Hobbiton & Waitomo Glowworm Caves Tour</h6>

                                        <Link className='text-decoration-none' to="/caves">
                                        <div className='text-center  text-white tour_btn'>
                                            View Tour
                                        </div></Link>
                                        
                                    </div>
                                    </div>



                                    
                                                    <div className="card boot_card">
                                    <img className='rounded' src={img3} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h6 class="card-title">Hobbiton & Rotorua Tour (including Te Puia) </h6>

                                        <Link className='text-decoration-none' to="/tepuia">
                                        <div className='text-center  text-white tour_btn'>
                                            View Tour
                                        </div></Link>
                                        
                                    </div>
                                    </div>



                                                    <div className="card boot_card">
                                    <img className='rounded' src={img4} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h6 class="card-title">Hobbiton & Rotorua Tour (including Wai-O-Tapu) </h6>

                                        <Link className='text-decoration-none' to="/wotapu">
                                        <div className='text-center  text-white tour_btn'>
                                            View Tour
                                        </div></Link>
                                        
                                    </div>
                                    </div>





                </div>





                <h1 className='text-center fw-bolder Waitomo_heading' id='tours_heading' >Auckland to Waitomo Caves</h1>  


                <div className='container '>

                <div class="  row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card" >
      <img src={img13}  id='Card_caves' class="card-img-top" alt="Hollywood Sign on The Hill"/>
      <div class="card-body">
        <h5 class="card-title  fw-bolder">Hobbiton & Waitomo Glowworm Caves Tour</h5>
        <Link className='text-decoration-none'   to="/caves">
                                        <div className='text-center  text-white tour_btn'  id='btnn_new'>
                                            View Tour
                                        </div></Link>
      </div>
    </div>
  </div>
 
 
  <div class="col" >
    <div class="card" >
      <img src={img14} id='Card_caves' class="card-img-top" alt="Skyscrapers"/>
      <div class="card-body">
        <h5 class="card-title fw-bolder">Waitomo Caves & Rotorua Tour (including Te Puia)</h5>

        <Link className='text-decoration-none'  to="/WAITOMO CAVES & ROTORUA">
                                        <div className='text-center  text-white tour_btn'  id='btnn_new'>
                                            View Tour
                                        </div></Link>
        
      </div>
    </div>
  </div>
</div>



                </div>

     











                <h1 className='text-center fw-bolder h1_heading ' id='tours_heading' >Auckland to Rotorua</h1>      


                               <div className='d-flex container-fluid tours_div '>

                                                    <div className="card boot_card">
                                    <img className='rounded' src={img5} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h6 class="card-title">Rotorua Highlights (including Te Puia)

</h6>

                                        <Link className='text-decoration-none' to="/ROTORUA INCLUDING TE PUIA tour">
                                        <div className='text-center  text-white tour_btn' id='btnn_2'>
                                            View Tour
                                        </div></Link>
                                        
                                    </div>
                                    </div>



                                                    <div className="card boot_card">
                                    <img  className='rounded'  src={img6} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h6 class="card-title">Rotorua Highlights (including Wai-O-Tapu)</h6>

                                        <Link className='text-decoration-none' to="/ROTORUA INCLUDING Wai-O-Tapu tour">
                                        <div className='text-center  text-white tour_btn'>
                                            View Tour
                                        </div></Link>
                                        
                                    </div>
                                    </div>



                                    
                                                    <div className="card boot_card">
                                    <img className='rounded' src={img7} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h6 class="card-title">Hobbiton & Rotorua Tour (including Te Puia)</h6>

                                        <Link className='text-decoration-none' to="/tepuia">
                                        <div className='text-center  text-white tour_btn'>
                                            View Tour
                                        </div></Link>
                                        
                                    </div>
                                    </div>



                                                    <div className="card boot_card">
                                    <img className='rounded' src={img8} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h6 class="card-title">Hobbiton & Rotorua Tour (including Wai-O-Tapu) </h6>

                                        <Link className='text-decoration-none' to="/wotapu">
                                        <div className='text-center  text-white tour_btn'>
                                            View Tour
                                        </div></Link>
                                        
                                    </div>
                                    </div>





                </div>
                               <div className='d-flex container-fluid tours_div  '>

                                                    <div className="card boot_card">
                                    <img className='rounded' src={img9} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h6 class="card-title">Waitomo & Rotorua Tour (including Te Puia)

</h6>

                                        <Link className='text-decoration-none' to="/waitomo_rotorua_tepuia">
                                        <div className='text-center  text-white tour_btn' id='btnn_2'>
                                            View Tour
                                        </div></Link>
                                        
                                    </div>
                                    </div>



                                                    <div className="card boot_card">
                                    <img  className='rounded'  src={img10} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h6 class="card-title">Auckland to Rotorua Tour via Hobbiton (One Way)</h6>

                                        <Link className='text-decoration-none' to="/auckland_rotorua_hobbiton_Oneway">
                                        <div className='text-center  text-white tour_btn'>
                                            View Tour
                                        </div></Link>
                                        
                                    </div>
                                    </div>



                                    
                                                    <div className="card boot_card">
                                    <img className='rounded' src={img11} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h6 class="card-title">Auckland to Rotorua Tour via Waitomo Caves (One Way)</h6>

                                        <Link className='text-decoration-none' to="/auckland_rotorua_waitomo_Oneway">
                                        <div className='text-center  text-white tour_btn'>
                                            View Tour
                                        </div></Link>
                                        
                                    </div>
                                    </div>



                                                    <div className="card boot_card">
                                    <img className='rounded' src={img12} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h6 class="card-title">Rotorua Highlights Tour </h6>

                                        <Link className='text-decoration-none' to="/rotorua_highlight_tour">
                                        <div className='text-center  text-white tour_btn'>
                                            View Tour
                                        </div></Link>
                                        
                                    </div>
                                    </div>





                </div>






                                        




    </>
  )
}

export default Auckland
