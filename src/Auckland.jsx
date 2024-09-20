import React from 'react'
import img1 from  "./Img/movie_new.webp"
import img2 from  "./Img/glowworm.webp"
import img3 from  "./Img/Rotorua new.jpg"
import img4 from  "./Img/e3.jpg";
import img5 from "./Img/tepuia2.webp"
import img6 from "./Img/waitapu2.webp"
import img7 from "./Img/Rotorua img_3.webp"
import img8 from "./Img/Hobitton_Rotorua.webp"
import img9 from "./Img/Rotorua img_5.jpg"
import img10 from "./Img/Rotorua img_6.jpg"
import img11 from "./Img/Rotorua img_7.jpg"
import img12 from "./Img/Rotorua img_8.jpg"


import img13 from "./Img/hobiton_waitomo.webp"
import img14 from "./Img/waitomo_tepua_new.webp"
import img15 from "./Img/queenstreet.webp"
import img16 from "./Img/cornwall.webp"
import img17 from "./Img/Paritai.webp"
import img18 from "./Img/Tamaki.webp"
import img19 from "./Img/mission-bay-beach-1345684.webp"
import img20 from "./Img/St Heliers Bay.webp"
import img21 from "./Img/Achillies Point.webp"
import img22 from "./Img/Harbour Bridge.webp"
import img23 from "./Img/Devonport.webp"



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
                                        <div className='text-center  text-white tour_btn me-2' id='btnn'>
                                            View Tour
                                        </div></Link>
                                        
                                    </div>
                                    </div>



                                                    <div className="card boot_card">
                                    <img  className='rounded'  src={img2} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h6 class="card-title">Hobbiton & Waitomo Glowworm Caves Tour</h6>

                                        <Link className='text-decoration-none' to="/caves">
                                        <div className='text-center  text-white tour_btn me-2'>
                                            View Tour
                                        </div></Link>
                                        
                                    </div>
                                    </div>



                                    
                                                    <div className="card boot_card">
                                    <img className='rounded' src={img3} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h6 class="card-title">Hobbiton & Rotorua Tour (including Te Puia) </h6>

                                        <Link className='text-decoration-none' to="/tepuia">
                                        <div className='text-center  text-white tour_btn me-2'>
                                            View Tour
                                        </div></Link>
                                        
                                    </div>
                                    </div>



                                                    <div className="card boot_card">
                                    <img className='rounded' src={img4} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h6 class="card-title">Hobbiton & Rotorua Tour (including Wai-O-Tapu) </h6>

                                        <Link className='text-decoration-none' to="/wotapu">
                                        <div className='text-center  text-white tour_btn me-2'>
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
                                        <div className='text-center  text-white tour_btn me-2'  id='btnn_new'>
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
                                        <div className='text-center  text-white tour_btn me-2'  id='btnn_new'>
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
                                        <div className='text-center  text-white tour_btn me-2' id='btnn_2'>
                                            View Tour
                                        </div></Link>
                                        
                                    </div>
                                    </div>



                                                    <div className="card boot_card">
                                    <img  className='rounded'  src={img6} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h6 class="card-title">Rotorua Highlights (including Wai-O-Tapu)</h6>

                                        <Link className='text-decoration-none' to="/ROTORUA INCLUDING Wai-O-Tapu tour">
                                        <div className='text-center  text-white tour_btn me-2'>
                                            View Tour
                                        </div></Link>
                                        
                                    </div>
                                    </div>



                                    
                                                    <div className="card boot_card">
                                    <img className='rounded' src={img7} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h6 class="card-title">Hobbiton & Rotorua Tour (including Te Puia)</h6>

                                        <Link className='text-decoration-none' to="/tepuia">
                                        <div className='text-center  text-white tour_btn me-2'>
                                            View Tour
                                        </div></Link>
                                        
                                    </div>
                                    </div>



                                                    <div className="card boot_card">
                                    <img className='rounded' src={img8} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h6 class="card-title">Hobbiton & Rotorua Tour (including Wai-O-Tapu) </h6>

                                        <Link className='text-decoration-none' to="/wotapu">
                                        <div className='text-center  text-white tour_btn me-2'>
                                            View Tour
                                        </div></Link>
                                        
                                    </div>
                                    </div>





                </div>


                               <div className='d-flex container-fluid tours_div  '>

                                                    <div className="card boot_card">
                                    <img className='rounded' src={img14} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h6 class="card-title">Waitomo & Rotorua Tour (including Te Puia)</h6>

                                        <Link className='text-decoration-none' to="/waitomo_rotorua_tepuia">
                                        <div className='text-center  text-white tour_btn me-2' id='btnn_2'>
                                            View Tour
                                        </div></Link>
                                        
                                    </div>
                                    </div>



                                                    <div className="card boot_card">
                                    <img  className='rounded'  src={img10} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h6 class="card-title">Auckland to Rotorua Tour via Hobbiton (One Way)</h6>

                                        <Link className='text-decoration-none' to="/auckland_rotorua_hobbiton_Oneway">
                                        <div className='text-center  text-white tour_btn me-2'>
                                            View Tour
                                        </div></Link>
                                        
                                    </div>
                                    </div>



                                    
                                                    <div className="card boot_card">
                                    <img className='rounded' src={img11} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h6 class="card-title">Auckland to Rotorua Tour via Waitomo Caves (One Way)</h6>

                                        <Link className='text-decoration-none' to="/auckland_rotorua_waitomo_Oneway">
                                        <div className='text-center  text-white tour_btn me-2'>
                                            View Tour
                                        </div></Link>
                                        
                                    </div>
                                    </div>



                                                    <div className="card boot_card">
                                    <img className='rounded' src={img12} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h6 class="card-title">Rotorua Highlights Tour </h6>

                                        <Link className='text-decoration-none' to="/rotorua_highlight_tour">
                                        <div className='text-center  text-white tour_btn me-2'>
                                            View Tour
                                        </div></Link>
                                        
                                    </div>
                                    </div>





                </div>



                               <div className='d-flex container-fluid tours_div  '>

                                                    <div className="card boot_card">
                                    <img className='rounded' src={img15} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h6 class="card-title">Queen Street</h6>

                                        <Link className='text-decoration-none' to="">
                                        <div className='text-center  text-white tour_btn me-2' id='btnn_2'>
                                            View Tour
                                        </div></Link>
                                        
                                    </div>
                                    </div>



                                                    <div className="card boot_card">
                                    <img  className='rounded'  src={img16} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h6 class="card-title">Cornwall Park & One Tree Hill</h6>

                                        <Link className='text-decoration-none' to="">
                                        <div className='text-center  text-white tour_btn me-2'>
                                            View Tour
                                        </div></Link>
                                        
                                    </div>
                                    </div>



                                    
                                                    <div className="card boot_card">
                                    <img className='rounded' src={img17} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h6 class="card-title">Paritai Drive</h6>

                                        <Link className='text-decoration-none' to="">
                                        <div className='text-center  text-white tour_btn me-2'>
                                            View Tour
                                        </div></Link>
                                        
                                    </div>
                                    </div>



                                                    <div className="card boot_card">
                                    <img className='rounded' src={img18} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h6 class="card-title">Tamaki Drive </h6>

                                        <Link className='text-decoration-none' to="">
                                        <div className='text-center  text-white tour_btn me-2'>
                                            View Tour
                                        </div></Link>
                                        
                                    </div>
                                    </div>





                </div>







                               <div className='d-flex container-fluid tours_div  '>

                                    <div className="card boot_card">
                                    <img className='rounded' src={img19} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h6 class="card-title">Mission Bay</h6>

                                        <Link className='text-decoration-none' to="">
                                        <div className='text-center  text-white tour_btn me-2' id='btnn_2'>
                                            View Tour
                                        </div></Link>
                                        
                                    </div>
                                    </div>



                                                    <div className="card boot_card">
                                    <img  className='rounded'  src={img20} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h6 class="card-title">St Heliers Bay</h6>

                                        <Link className='text-decoration-none' to="">
                                        <div className='text-center  text-white tour_btn me-2'>
                                            View Tour
                                        </div></Link>
                                        
                                    </div>
                                    </div>



                                    
                                                    <div className="card boot_card">
                                    <img className='rounded' src={img21} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h6 class="card-title"> Achillies Point </h6>

                                        <Link className='text-decoration-none' to="">
                                        <div className='text-center  text-white tour_btn me-2'>
                                            View Tour
                                        </div></Link>
                                        
                                    </div>
                                    </div>



                                                    <div className="card boot_card">
                                    <img className='rounded' src={img22} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h6 class="card-title"> Auckland Harbour Bridge</h6>

                                        <Link className='text-decoration-none' to="">
                                        <div className='text-center  text-white tour_btn me-2'>
                                            View Tour
                                        </div></Link>
                                        
                                    </div>
                                    </div>





                </div>






                                        
                <a href="https://api.whatsapp.com/send?phone=64 212845553&text=." class="float" target="_blank">
                <i class="fa-brands fa-whatsapp  my-float"></i></a>

                <a href="tel:+91 +64 212845553" class="floatt" target="_blank">
      <i class="fa-solid fa-phone-volume my-floatt"></i>
      </a>



    </>
  )
}

export default Auckland
