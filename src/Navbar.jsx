import React from 'react'
import "./style/Navbar.css"
import logo from "./Img/Logo.png"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>

    <div className=''>
      <nav className="navbar navbar-expand-xl main-navbar">


        
        <div className="container ">

          {/* <Link id='img_logo' className='text-decoration-none text-black' to="/home">
          <div className='logo'>
          
            <img  src={logo} alt='logo'/>
          </div>    
          </Link> */}

                     <h1 className='text-white mt-2'>CabOnHire</h1>

         

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
              <div><h6 id='navbar_heading' className=' '>HOME</h6></div>
            </Link>

            <Link className='text-decoration-none ' to="about">
              <div><h6 id='navbar_heading' className=' '>ABOUT US</h6></div>
            </Link>

            <div className="dropdown drp_1 "  id='navbar_heading'>
              <button className="btn btn-white dropdown-toggle border-0   text-white"  type="button" data-bs-toggle="dropdown" aria-expanded="false">
                 SERVICES
              </button>
              <ul className="dropdown-menu border-0">
                {/* <Link className='text-decoration-none airr' to="/airport">  
                  <li><a className="dropdown-item">AIRPORT TO CITY</a></li>
                </Link> */}
              

             
               
                <Link className='text-decoration-none' to="/cruise">
                <li><a className="dropdown-item" href="#">Cruise ship </a></li>
                </Link>
                <Link className='text-decoration-none' to="/dial a driver">
                <li><a className="dropdown-item" href="#">Dial a Driver </a></li>
                </Link>
                <Link className='text-decoration-none' to="/school_ball">
                <li><a className="dropdown-item" href="#">School Ball</a></li>
                </Link>

               

                <Link className='text-decoration-none' to="/airport & transfers">
                  <li><a className="dropdown-item" href="#">Airport And City Transfers</a></li>
                </Link>
               
                {/* <Link className='text-decoration-none' to="/routes">
                  <li><a className="dropdown-item" href="#">Short And Long Routes</a></li>
                </Link> */}


                
              </ul>
            </div>    

            <div className="dropdown drp_1  " id='navbar_heading'>
              <button  className="btn btn-white dropdown-toggle border-0  text-white" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                TOURS/RENTAL
              </button>
              <ul className="dropdown-menu border-0">
                {/* <Link className='text-decoration-none' to="movie">
                  <li><a className="dropdown-item text-capitalize" href="#">Tourism /Shows</a></li>
                </Link> */}

<Link className='text-decoration-none' to="/events">
                  <li><a className="dropdown-item" href="#">Events</a></li>
                </Link>

                <Link className='text-decoration-none' to="/concerts">
                <li><a className="dropdown-item" href="#">Concerts </a></li>
                </Link>
                <Link className='text-decoration-none' to="auckland">
                  <li><a className="dropdown-item" href="#">Auckland Tours</a></li>
                </Link>
                <Link className='text-decoration-none' to="/business">
                  <li><a className="dropdown-item" href="#">Business Trips</a></li>
                </Link>
                {/* <Link className='text-decoration-none' to="movie">
                  <li><a className="dropdown-item" href="#">Hobbiton Movie Set Tour</a></li>
                </Link>
                <Link className='text-decoration-none' to="caves">
                  <li><a className="dropdown-item" href="#">Hobbiton & Waitomo Caves Tour</a></li>
                </Link> */}
                <Link className='text-decoration-none' to="/routes">
                  <li><a className="dropdown-item" href="#">Short And Long Routes</a></li>
                </Link>


               

                
                {/* <Link className='text-decoration-none' to="/fourr">
                <li><a className="dropdown-item" href="#">4 HOUR PRIVATE CITY TOUR</a></li>
                </Link> */}



              </ul>
            </div>

           

            <Link className='text-white text-decoration-none' to="/service">
              <div><h6 id='navbar_heading' className=' '> CARS / VANS</h6></div>
            </Link>

            <Link className='text-white text-decoration-none' to="/contact">
              <div className='book_now_div rounded'><h6 id='' className='book_btn'>Book Now</h6></div>
            </Link>
     
          </div>
        </div>


        
      </nav>
      </div>
    </>
  )
}

export default Navbar
