import React from 'react'
import "./style/Cars.css";
import img1 from "./Img/cab_vw1.jpg"
import img2 from "./Img/crysler 3000s.jpg"
import img3 from "./Img/2022-toyota-camry-se-nightshade-4dr-sedan (2).jpg"
import img4 from "./Img/skoda_superb.jpg"
import img5 from "./Img/cab_vw8.jpeg"
import img6 from "./Img/pic_view.jpg"
import img7 from "./Img/ss.png"
import img8 from "./Img/skoda_superb.jpg"


// import img1 from './Img/skoda_superb.jpg';



function Cars() {
  return (
    <>
    
             
        
            <div className='container text-danger fw-bold mb-5 mt-3'><h5 className='fw-bolder mb-3 mt-3'> AVAILABLE NOW NEAR YOU</h5></div>

       <div className='d-flex flex-wrap container justify-content-around carss '>

           

           <div className="">
                   
                    <img src={img1} className="card-img-top rounded img_car" alt="..."/>
                    <h5 className=" text-danger text-center fw-bolder mt-3"> Volkswagen ID 4</h5>
                    <p className=""> The Volkswagen ID.4 is an all-electric compact SUV produced by Volkswagen.</p>

                      
            </div>



            <div className="">
                   
                   <img src={img2} className="card-img-top rounded img_car" alt="..."/>
                   <h5 className=" text-danger text-center fw-bolder  mt-3">CHRYSLER 300S</h5>
                   <p className="">The Chrysler 300S white car is a sleek, powerful sedan with luxurious features and sporty performance.
                   </p>
                     
                   {/* <div className='btn bg-success rounded-pill  '> 
                      View More                 
                    </div>
                       */}
           </div>



           <div className=" ">
                   
                   <img src={img3} className="card-img-top rounded  img_car" alt="..."/>
                   <h5 className=" text-danger text-center fw-bolder mt-3"> Toyota Camry</h5>
                   <p className=" ">The Toyota Camry white car offers a blend
                   of reliability, comfort, and sleek design.</p>

                   {/* <div className='btn bg-success rounded-pill  '> 
                      View More                 
                    </div> */}
                      
                     
           </div>

           




       </div>
       <div className='d-flex flex-wrap container justify-content-around carss'>

           

           <div className="div">
                   
                    <img src={img4} className="card-img-top rounded img_car" alt="..."/>
                    <h5 className=" text-danger text-center fw-bolder mt-3">Skoda Superb</h5>
                    <p className="">The Skoda Superb combines luxury and performance with a spacious interior. Its sleek design and powerful engine suit both city and long drives.</p>

                  
                      
            </div>



            <div className=" div">
                   
                   <img src={img5} className="card-img-top rounded img_car" alt="..."/>
                   <h5 className=" text-danger text-center fw-bolder  mt-3">TOYOTA PRIUS</h5>
                   <p className=""> The Toyota Prius is a hybrid car known for its fuel efficiency, eco-friendliness, and advanced
                   technology features.
                   </p>
                     
                 
           </div>



           <div className="div">
                   
                   <img src={img6} className="card-img-top rounded  img_car" alt="..."/>
                   <h5 className=" text-danger text-center fw-bolder mt-3"> Mercedes Vito Tourer</h5>
                   <p className=" ">The  Mercedes Vito Tourer is a versatile van with seating for 9, offering advanced safety features and a comfortable interior, ideal for business or family use.</p>

                   {/* <div className='btn bg-success rounded-pill  '> 
                      View More                 
                    </div> */}
                      
                     
           </div>

           




       </div>


       {/* <div>
          
          <img className='container-fluid imaa mt-5' src={img7} alt='img'/>

       </div> */}
       



       <div className='container car_section mb-5'>

        <div>
        {/* <img className='container-fluid  rounded-bottom mt-2  ' id='swift_car' src={img8} alt='img'/> */}
        <img className='rounded ' id='swift_car' src={img8} alt='img'/>

        </div>


        <div>

          <h2 className='fw-bolder swift'> Swift and Reliable Cab Services</h2>
          <h6 className='mt-4  h6 journey'>Take advantage of CabonHire for a smooth and opulent travel. Reliable, on-time, stress-free transportation that is customized to satisfy your every requirement is guaranteed by our committed service. We place a high value on your comfort and peace of mind whether you're traveling for work or pleasure, ensuring that you get to your destination on schedule and in style. Traveling hassle-free, receiving first-rate service, and knowing you are in capable hands are all made possible by CabonHire. See what makes using a service dedicated to quality and dependability different.</h6>

        </div>

     

       </div>

    </>
  )
}

export default Cars
