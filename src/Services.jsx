import React from 'react'
import "./style/Services.css";

function Services() {
  return (
    <>
                <div className='container'><h1 className='ms-5 mb-5'>SERVICES</h1> </div>



                <div data-aos="fade-right">

                <div className='container  services_div mb-5'>
                    
                    <div className='text-center services_inner'>
                            
                    <i class="fa-solid fa-plane icon "></i>

                            <h2>Airport and Transfers</h2>
                                <p className="para">
                                    Enjoy prompt and reliable Airport Transfer services with us.
                                    Our courteous drivers ensure a smooth transfer, making your
                                    journey to or from Auckland comfortable and stress-free.
                                </p>

                    </div>
                   
                   
                    <div className='text-center services_inner'>
                            
                    <i class="fa-solid fa-bus icon"></i>

                            <h2>Auckland Tours

                            </h2>
                                <p className="para">
                                Take off on fantastic day trips from Auckland and discover some of the most fascinating things the area has to offer. There is something for everyone, from breathtaking natural settings and enchanted film sets to fascinating underground occurrences and geothermally active marvels.


                                </p>

                    </div>

                    <div className='text-center services_inner'>
                            
                    <i class="fa-solid fa-business-time icon"></i>

                            <h2>Business Trips

                            </h2>
                                <p className="para">
                                Business trips in Auckland offer a blend of professional
                                    opportunities and vibrant city experiences. The city boasts
                                    modern conference centers, excellent transport links, and a
                                    thriving business district.
                                </p>

                    </div>


                </div>
                </div>


                


                     {/* second services  */}

                     <div data-aos="fade-left">

                     <div className='container  services_div'>
                    
                    <div className='text-center services_inner'>
                            
                    <i class="fa-solid fa-location-dot icon"></i>

                            <h2>Hobbiton & Waitomo Caves</h2>
                                <p className="para">
                                The Waitomo and Hobbiton Caves provide a fantastic New Zealand experience. Discover the renowned Hobbiton film set, where the verdant Shire landscapes come to life.
                                </p>

                    </div>
                   
                   
                    <div className='text-center services_inner'>
                            
                    <i class="fa-solid fa-car icon"></i>

                            <h2>Long and Short Routes

                            </h2>
                                <p className="para">
                                Long and short routes offer diverse travel experiences to suit
                                different preferences. Long routes provide extended journeys,
                                ideal for exploring multiple destinations, experiencing varying
                                landscapes, and immersing in different cultures. 
                                </p>

                    </div>

                    <div className='text-center services_inner'>
                            
                    <i class="fa-solid fa-van-shuttle icon"></i>

                            <h2>Luxury Cars/Vans

                            </h2>
                                <p className="para">
                                Need spacious transportation? Our fleet includes both cab
                                and cab vans, ensuring we have the perfect vehicle for your
                                needs. Trust us for convenient and accommodating travel
                                experiences.
                                </p>

                    </div>


                </div>

                     </div>





                 
    </>
  )
}

export default Services
