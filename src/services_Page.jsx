import React from 'react'
import "./style/Services_Page.css";
import img10 from "./Img/nz_img.jpg"
import img9 from "./Img/transfers.jpg"
import { Link } from 'react-router-dom';

import img1 from "./Img/cab_vw1.jpg"
import img2 from "./Img/crysler 3000s.jpg"
import img3 from "./Img/2022-toyota-camry-se-nightshade-4dr-sedan.jpg"
import img4 from "./Img/Bmw 330i.jpg"
import img5 from "./Img/cab_vw8.jpeg"
import img6 from "./Img/2021-Mercedes-Benz-Vito-Tourer-Select-121-launch-Malaysia-8-BM-850x440.webp"
import 'bootstrap-icons/font/bootstrap-icons.css';







function services_Page() {
  return (
    <>
                       <div className='bg'>

                         <h1 className='text-white fw-bolder text-uppercase about text-center' id='heading_center'>
                                Luxury Cars and Vans
                         </h1>
                      </div> 



                      <div className='container services_main_div '>
                         

                         <div className='services_main_div_first'>

                            <h2 className='fw-bolder mb- mt-5'>Volkswagen ID 4
                            </h2>
                            <h6>The Volkswagen ID.4 is an all-electric SUV that combines modern design with advanced technology. It offers a spacious interior, impressive range, and a smooth, quiet ride, making it an ideal choice for eco-conscious drivers looking for a practical and stylish vehicle.</h6>
                                

                                 <div className='car_features_icons'>


                            <div className='text-black'><i class="fa-solid fa-users "></i>   5 seater</div>
                            <div className='text-black'><i class="bi bi-fan"></i>  Air conditioner</div>
                            

                            </div>

                                 <div className='car_features_icons'>
                            
                            <div className='text-black'><i class="bi bi-battery-charging"></i>  Mobile Charging</div>
                            <div className='text-black'><i class="bi bi-volume-up"></i>  Audio System</div>

                            </div>






                                          <Link className='text-decoration-none' to="/contact">
                                          <div className='service_bookNow_main '>
                                <div className='service_bookNow  text-center  '> Book Now</div>
                                        </div>
                                          </Link>

                                        

                         </div>



                         <div className='services_main_div_second' >
                            <img className='rounded mt-5' src={img1}  alt='alt'/>

                         </div>


                      </div>


                           <div className='container-fluid service_fluid' >
                                                <div className='container services_main_div' id='cars_flex'>



                                                <div className='services_main_div_second'>
                                                      <img className='mt-5 rounded' src={img2}  alt='alt'/>

                                                   </div>
                                                   

                                                   <div className='services_main_div_first'>

                                                      <h2 className='fw-bolder mb-4'>CHRYSLER 300S</h2>
                                                      <h6>The Chrysler 300S is a stylish and powerful sedan that blends classic American design with modern performance. It features a bold exterior, a spacious and refined interior, and a robust engine, offering a smooth and comfortable ride with a touch of luxury.</h6>
                                                         

                                                      <div className='car_features_icons'>

                                    
<div className='text-black'><i class="fa-solid fa-users "></i>   5 seater</div>
<div className='text-black'><i class="bi bi-fan"></i>  Air conditioner</div>


</div>

     <div className='car_features_icons'>

<div className='text-black'><i class="bi bi-battery-charging"></i>  Mobile Charging</div>
<div className='text-black'><i class="bi bi-volume-up"></i>  Audio System</div>

</div>





                                                      <Link className='text-decoration-none' to="/contact">
                                                                     <div className='service_bookNow_main '>

                                                         <div className='service_bookNow  text-center  '> Book Now</div>
                                                                  </div>
                                                                     </Link>

                             </div>



                                                


                                                </div>

                                                </div>





                      <div className='container services_main_div '>
                         

                         <div className='services_main_div_first'>

                         <h2 className='fw-bolder mb-4'>Toyota Camry
                         </h2>
                         <h6> The Toyota Camry is a reliable and well-rounded midsize sedan known for its comfort, fuel efficiency, and smooth ride. It features a sleek design, a spacious interior, and advanced safety features, making it a popular choice for both daily commuting and long-distance driving.</h6>


                         <div className='car_features_icons'>

                                    
<div className='text-black'><i class="fa-solid fa-users "></i>   5 seater</div>
<div className='text-black'><i class="bi bi-fan"></i>  Air conditioner</div>


</div>

     <div className='car_features_icons'>

<div className='text-black'><i class="bi bi-battery-charging"></i>  Mobile Charging</div>
<div className='text-black'><i class="bi bi-volume-up"></i>  Audio System</div>

</div>


                            <Link className='text-decoration-none' to="/contact">
                                          <div className='service_bookNow_main '>

                                <div className='service_bookNow  text-center  '> Book Now</div>
                                        </div>
                                          </Link>

                         </div>



                         <div className='services_main_div_second'>
                            <img className='mt-3 rounded' src={img3}  alt='alt'/>

                         </div>


                      </div>


                              <div className='container-fluid service_fluid' >
                                                   <div className='container services_main_div '  id='cars_flex'>



                                                   <div className='services_main_div_second'>
                                                         <img className='mt-3 rounded' src={img4}  alt='alt'/>

                                                      </div>
                                                      

                                                      <div className='services_main_div_first'>

                                                         <h2 className='fw-bolder mb-4'> BMW 330i</h2>
                                                         <h6>The BMW 330i is a luxury sedan with a turbocharged 2.0-liter engine, offering 255 horsepower and refined handling. It combines elegant design with advanced technology for a comfortable and dynamic driving experience.</h6>
                                                            

                                                         <div className='car_features_icons'>

                                    
<div className='text-black'><i class="fa-solid fa-users "></i>   5 seater</div>
<div className='text-black'><i class="bi bi-fan"></i>  Air conditioner</div>


</div>

     <div className='car_features_icons'>

<div className='text-black'><i class="bi bi-battery-charging"></i>  Mobile Charging</div>
<div className='text-black'><i class="bi bi-volume-up"></i>  Audio System</div>

</div>


                                                         <Link className='text-decoration-none' to="/contact">
                                                                        <div className='service_bookNow_main '>

                                                            <div className='service_bookNow  text-center  '> Book Now</div>
                                                                     </div>
                                                                        </Link>

                                                      </div>



                                                   


                                                   </div>

                               </div>




                      <div className='container services_main_div '>
                         

                         <div className='services_main_div_first'>

                            <h2 className='fw-bolder mb-4'>TOYOTA PRIUS
                            </h2>
                            <h6> The Toyota Prius is a pioneering hybrid vehicle known for its exceptional fuel efficiency and eco-friendly design. With its sleek, aerodynamic profile, advanced technology, and reliable performance, the Prius offers a smooth and economical ride, making it a top choice for environmentally conscious drivers.</h6>
                                



                            <div className='car_features_icons'>

                                    
<div className='text-black'><i class="fa-solid fa-users "></i>   5 seater</div>
<div className='text-black'><i class="bi bi-fan"></i>  Air conditioner</div>


</div>

     <div className='car_features_icons'>

<div className='text-black'><i class="bi bi-battery-charging"></i>  Mobile Charging</div>
<div className='text-black'><i class="bi bi-volume-up"></i>  Audio System</div>

</div>

                            <Link className='text-decoration-none' to="/contact">
                                          <div className='service_bookNow_main '>

                                <div className='service_bookNow  text-center  '> Book Now</div>
                                        </div>
                                          </Link>

                         </div>



                         <div className='services_main_div_second'>
                            <img className='mt-5 rounded' src={img5}  alt='alt'/>

                         </div>


                      </div>


             <div className='container-fluid service_fluid' >
                      <div className='container services_main_div ' id='cars_flex'>



                      <div className='services_main_div_second'>
                            <img className='mt-5 rounded' src={img6}  alt='alt'/>

                         </div>
                         

                         <div className='services_main_div_first'>

                            <h2 className='fw-bolder mb-4'>Mercedes Vito Tourer</h2>
                            <h6> 
                            The Mercedes Vito Tourer is a versatile van, ideal for transporting passengers in comfort. It features a spacious interior, flexible seating options, and advanced safety technology, making it perfect for both business and family use.</h6>
                                


                            <div className='car_features_icons'>

                                    
<div className='text-black'><i class="fa-solid fa-users "></i>   8 seater</div>
<div className='text-black'><i class="bi bi-fan"></i>  Air conditioner</div>


</div>

     <div className='car_features_icons'>

<div className='text-black'><i class="bi bi-battery-charging"></i>  Mobile Charging</div>
<div className='text-black'><i class="bi bi-volume-up"></i>  Audio System</div>

</div>


                            <Link className='text-decoration-none' to="/contact">
                                          <div className='service_bookNow_main '>

                                <div className='service_bookNow  text-center  '> Book Now</div>
                                        </div>
                                          </Link>

                         </div>



                       


                      </div>

                      </div>



                      
    </>
  )
}

export default services_Page
