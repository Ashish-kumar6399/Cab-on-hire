import React from 'react'
import "./style/Footer.css";
import { Link } from 'react-router-dom'



function Footer() {
  return (
    <>
        <div className='footer_main'>
        <div className='container footer_main '>

                <div className='row pt-5'>

                    <div className='col-3'> 
                        <h3 className='text-white mb-4'>CAB ON HIRE</h3>
                        <h6 className='text-white'>Welcome to CabonHire, your trusted Airport Transfer provider in Auckland. We specialize in efficient and reliable transportation solutions, ensuring you reach your destination comfortably and on time.</h6>

                    </div>
                    <div className='col-3'>
                        <h3 className='text-white mb-4  text-start  Quick '> QUICK LINKS</h3>
                        <ul className='text-white list-unstyled  text-start Quicklinks_li '>
                            


                            <Link  className='text-decoration-none text-white'   to="/home">
                            <li  className='mb-1 text-capitalize'> Home</li>
                            </Link>
                           
                            {/* <Link  className='text-decoration-none text-white' to="/service">
                            <li  className='mb-1 text-capitalize'> SERVICE </li>
                            </Link> */}

                            <Link   className='text-decoration-none text-white'to="/about">
                            <li  className='mb-1 text-capitalize'> About Us</li>
                            </Link>
                            <Link  className='text-decoration-none text-white' to="/contact">
                            <li  className='mb-1 text-capitalize'> Contact Us</li>
                            </Link>
                          
                        </ul>
                    </div>



                    <div className='col-3 '> 

                                            <h3 className='text-white mb-4 text-start text-capitalize '>Services</h3>

                        <ul className='text-white list-unstyled   text-start'>


                            <Link  className='text-decoration-none text-white' to ="/events">  <li  className='text-capitalize'>  Events </li></Link>
                            <Link  className='text-decoration-none text-white' to ="/cruise"> <li  className='text-capitalize '> Cruise Ships</li></Link>
                            <Link  className='text-decoration-none text-white' to ="/school_ball"> <li  className='text-capitalize'> School Ball</li></Link>
                            <Link  className='text-decoration-none text-white' to ="/dial a driver">  <li  className='text-capitalize'> Dial A driver</li></Link>
                            <Link  className='text-decoration-none text-white' to ="/concerts">  <li  className='text-capitalize'> Concerts  </li></Link>
                            <Link  className='text-decoration-none text-white' to ="/airport & transfers"><li  className=' text-capitalize'> Airport  Transfers</li></Link>

                            
                           

                           

                            

                        
                        </ul>




                    </div>
                    <div className='col-3'>
                        <h3 className='text-white mb-4 text-start'>CONTACT US</h3>

                        <ul className='text-white list-unstyled  text-start'>
                            <li  className='mb-3'> <i class="fa-solid fa-phone"></i>     +64 212845553</li>
                            <li  className='mb-3'> <i class="fa-solid fa-envelope"></i>       Resv@cabonhire.com</li>

                            <li  className='mb-'></li>
                           
                        </ul>

                        <div className='icons_div '>

                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-twitter"></i>



                        </div>

                        
                    </div>

                    


                </div>
                <hr className='text-white'/>

                <div className='container  kanak '>
                    <p className=' text-white text-start kanak_first'>  2024 CabonHire All rights reserved</p>
                    <p className=' text-white kanak_second'>  Designed and Developed by <span className='text-danger'>   <a className='text-decoration-underlined text-white' href='https://kanakdrishtiinfo.com/' target='blank'>Kanak Drishti Infotech</a> </span></p>

                </div>

        </div>
        </div>
    </>
  )
}

export default Footer
