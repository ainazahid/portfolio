import React from 'react'
import './Contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFax, faMessage, faPhone } from '@fortawesome/free-solid-svg-icons'
export default function Contact() {
  return (
   <>
   <div className='container px-lg-5'>
      <div className= "d-flex position-relative text-center mb-5" >
        <h1 className ="text-24 text-uppercase col-12 text-center text-light opacity-4 fw-600 w-600">
           Contact
        </h1>
        <p className = "text-9 text-dark w-100 position-absolute text-center align-self-center fw-600 lh-base">Get in touch</p>
      </div>
      <div className='row gx-5'>
        <div className='col-md-4 col-xl-3 text-center text-md-start'>
            <h3 className='text-4 text-uppercase mb-3'>Address</h3>
            <p className='text-3 mb-4'>Street #6 Green Town, Pakpattan</p>
            <p className='text-3 mb-3'>
            <span className='text-primary mb-4'>
            <FontAwesomeIcon className='icons'  icon={faPhone} /> 
            </span>  03042333461
            </p>
            <p className='text-3 mb-1'>
            <span className='text-primary mb-4 cursor-pointer'>
            <FontAwesomeIcon className='icons'  icon={faFax} /> 
            </span> 03042333461

            </p>
          <p className='text-3 mb-4 mt-3'>
            <span className='text-primary mb-3'>
            <FontAwesomeIcon className='icons'  icon={faMessage}/> 
            </span> chat@aina.com
            </p>
        </div>
        <div className='col-md-8 col-xl-9 order-0 order-md-1'>
            <h3 className='mb-3 text-uppercase text-4 text-center'>
              Send Me a note
            </h3>
            <div className="mb-3">
             <label for="exampleFormControlInput1" className="form-label">Email address</label>
             <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@email.com"/>
               </div>
             <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Tell me more about your needs</label>
           <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <button type="button" class="btn btn-primary ms-2">Submit Form</button>
          </div>
      </div>
      </div>
   
   
   </>
  )
}
