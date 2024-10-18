import React, { useState } from 'react';
import "./style/Form.css";

const QueryForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  // console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    const emailBody = `
    <p>First Name: ${formData.firstName}</p>
    <p>Last Name: ${formData.lastName}</p>
    <p>Phone: ${formData.phone}</p>
    <p>Email: ${formData.email}</p>
    <p>Service: ${formData.service}</p>
    <p>Message: ${formData.message}</p>
  `;


    window.Email.send({
      Host : "smtp.elasticemail.com",
      Username : "komalsingh552718@gmail.com",
      Password : "0EB07327B350CBB192FA6A248417574ABAF4",
      To : 'komalsingh552718@gmail.com',
      From : "komalsingh552718@gmail.com",
      Subject : 'Enquiry Form',
      Body : emailBody
  }).then(
    message => alert(message)
  );
  };

  return (
    <div className="container form_container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name:</label>
            <input 
              type="text" 
              name="firstName" 
              value={formData.firstName} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input 
              type="text" 
              name="lastName" 
              value={formData.lastName} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div>
            <label>Phone:</label>
            <input 
              type="tel" 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div>
            <label>Email:</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div>
            <label>Our Services:</label>
            <select 
              name="service" 
              value={formData.service} 
              onChange={handleChange} 
              required
            >
              <option value="" disabled>Select a service</option>
              <option value="Business Trips">Business Trips</option>
              <option value="Cruise Ship">Cruise Ship</option>
              <option value="Auckland Tours">Auckland Tours</option>
              <option value="Short and Long Routes">Short and Long Routes</option>
              <option value="Dial a Driver">Dial a Driver</option>
              <option value="School Ball">School Ball</option>
              <option value="Concerts & Events">Concerts & Events</option>
              <option value="Airport and city  Transfers">Airport and city  Transfers </option>
              <option value="others">others</option>

            </select>
          </div>
          <div>
            <label>Your Message:</label>
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              required 
            />
          </div>
          <button type="submit">Send Enquiry</button>
        </form>
      </div>

      <div className="other-content">

                   <h1 className='other_content_h1 text-dark'>Connect with Cab on Hire, Travel with Comfort</h1>

                
            
              <h5 className='other_content_h3 text-dark'>Reach us effortlessly; book now for reliable, budget-friendly rides. Your convenience, our commitment!</h5>




<ul className=' list-unstyled text-dark  ul_form'>
    <li  className='mb-3  text-start  text-centre '> <i class="fa-solid fa-phone icon_query"></i>      +64 212845553</li>
    <li  className='mb-5  text-start  '> <i class="fa-solid fa-envelope   icon_query"></i>      cabonhire.com</li>
   
</ul>
    

      </div>
      <a href="https://api.whatsapp.com/send?phone=64 212845553&text=." class="float" target="_blank">
  <i class="fa-brands fa-whatsapp  my-float"></i></a>
  
<a href="tel:+64 212845553" class="floatt" target="_blank">
      <i class="fa-solid fa-phone-volume my-floatt"></i>
      </a>

    </div>
  );
};

export default QueryForm;