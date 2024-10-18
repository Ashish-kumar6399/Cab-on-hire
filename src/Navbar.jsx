import React from 'react'
import "./style/Navbar.css"
import logo from "./Img/logo_new.png"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>

    <div className='' id='main_navbar_bootom'>
      <nav className="navbar navbar-expand-xl main-navbar fixed-top " >


        
        <div className="container " >

          <Link id='img_logo' className='text-decoration-none text-black' to="/home">
          <div className='logo'>
          
            {/* <img  src={logo} className=''  alt='logo'/> */}
                                 <h3 className='text-white mt-2'  style={{"fontStyle":"italic"}}>CAB ON HIRE</h3>

          </div>    
          </Link>


         

          <button
            className="navbar-toggler bg-white"

            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse nav_inner_second" id="navbarSupportedContent">
            <Link className='text-decoration-none text-white' to="home">
              <div><h6 id='navbar_heading' className=' ' data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent">HOME</h6></div>
            </Link>

            <Link className='text-decoration-none ' to="about">
              <div><h6 id='navbar_heading'  className=' ' data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent">ABOUT US</h6></div>
            </Link>

            <div className="dropdown drp_1 "  id='navbar_heading'>
              <button className="btn btn-white dropdown-toggle border-0   text-white"  type="button" data-bs-toggle="dropdown" aria-expanded="false">
                 SERVICES
              </button>
              <ul className="dropdown-menu border-0">


              <Link className='text-decoration-none' to="/events">
                  <li ><a className="dropdown-item" href="#"><h6  data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent">Events</h6></a></li>
                </Link>

                <Link className='text-decoration-none' to="/concerts">
                <li ><a className="dropdown-item" href="#"><h6  data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent">Concerts</h6></a></li>
                </Link>
                

             
               
                
                <Link className='text-decoration-none' to="/dial a driver">
                <li ><a className="dropdown-item" href="#"><h6  data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent">Dial a Driver</h6></a></li>
                </Link>
                

               

                <Link className='text-decoration-none' to="/airport & transfers">
                <li ><a className="dropdown-item" href="#"><h6  data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent">Airport  Transfers </h6></a></li>
                </Link>
               
                <Link className='text-decoration-none' to="/weedingtransport">
                <li ><a className="dropdown-item" href="#"><h6  data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"> Wedding Car Services  </h6></a></li>
                </Link>
                <Link className='text-decoration-none' to="/chauffer">
                <li ><a className="dropdown-item" href="#"><h6  data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent">Chauffer Service </h6></a></li>
                </Link>


               
                
                <Link className='text-decoration-none' to="/business">
                <li ><a className="dropdown-item" href="#"><h6  data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent">Business Trips</h6></a></li>
                </Link>
               
                <Link className='text-decoration-none' to="/routes">
                <li ><a className="dropdown-item" href="#"><h6  data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent">Short and Long Routes</h6></a></li>
                </Link>
                <Link className='text-decoration-none' to="/cruise">
                <li ><a className="dropdown-item" href="#"><h6  data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent">Cruise Ship Transfers</h6></a></li>
                </Link>


                <Link className='text-decoration-none' to="/school_ball">
                <li ><a className="dropdown-item" href="#"><h6  data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent">School Ball Transfers</h6></a></li>
                </Link>

                <Link className='text-decoration-none' to="/schooltransport">
                <li ><a className="dropdown-item" href="#"><h6  data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent">school pickup and drop off  service </h6></a></li>
                </Link>
               
                


                
              </ul>
            </div>    

            <div className="dropdown drp_1  " id='navbar_heading'>
              <button  className="btn btn-white dropdown-toggle border-0  text-white" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                TOURS
              </button>
              <ul className="dropdown-menu border-0">
                

                

                <Link className='text-decoration-none' to="auckland">
                <li ><a className="dropdown-item" href="#"><h6  data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent">Auckland Tours</h6></a></li>
                </Link>
                <Link className='text-decoration-none' to="/caves">
                <li ><a className="dropdown-item" href="#"><h6  data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent">Waitomo Caves</h6></a></li>
                </Link>


               

                
              


              </ul>
            </div>

           

            <Link className='text-white text-decoration-none' to="/service">
              <div><h6 id='navbar_heading' className=' ' data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"> CARS / VANS</h6></div>
            </Link>

            <Link className='text-white text-decoration-none' to="/contact">
              <div className='book_now_div rounded'><h6 id='' className='book_btn' data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent">Book Now</h6></div>
            </Link>
     
          </div>
        </div>


        
      </nav>
      </div>
    </>
  )
}

export default Navbar
