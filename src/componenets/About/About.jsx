import React from 'react'
import  './About.scss'
export default function About() {
  return (
    <>
    <section id= "About">
 <div className='container px-lg-5'>
      <div className= "d-flex position-relative text-center mb-5" >
        <h1 className ="text-24 text-uppercase col-12 text-center text-light opacity-4 fw-600 w-600">
            About Me 
        </h1>
        <p className = "text-9 text-dark w-100 position-absolute text-center align-self-center fw-600 lh-base">KNOW ME MORE</p>
      </div>
      <div className='row gy-5'>
      <div className='col-lg-7 col-xl-8 text-center text-lg-start'>
      <h2 className= "text-7 fw-600 mb-3">
        I'm
    <span className='text-primary fw-600 text-9'> Aina Zahid, </span> a Web Developer
    </h2>
      <p className='info'>
        I help you build brands for your business at an affordable price.Thousands of clients have procured exceptional results while working with our dedicated team.When an unknown printer took a gallery of type and scrambled it to make type speciamn book.
      </p>
      <p className='more'>
        Delivering work within time and budget which meets client's requirement is our motto.A web developer is a programmer who develops World Wide Web applications using a client server model 
      </p>
      </div>
     <div className='col-lg-5 col-xl-4'>
      <div className='ps-lg-4'>
        <ul className='list-style-2'>
         <li>
           <span className='fw-600 me-4 fs-5'>Name: </span> Aina Zahid
         </li>
         <li>
           <span className='fw-600 me-4 fs-5'>Email </span> ainazahid69@gmail.com
         </li>
         <li>
           <span className='fw-600 me-4 fs-5'>Age: </span> 19
         </li>
         <li>
           <span className='fw-600 me-4 fs-5'>From</span> Pakpattan, Pakistan
         </li>
        </ul>
        <button type="button" class="btn btn-primary btn-lg ms-5" style = {{borderRadius:"40px"}}>Download CV</button>
      </div>
      </div> 
    </div>


    <div className='brands-grid mt-5 border-separator'>
      <div className='row d-flex'>
        <div className='col-6 col-md-3'>
          <div className='featured-box text-center'>
            <h1 className='text-22 mb-0 text-muted'>
              <span>10+ </span>
            </h1>
            <p className='mb-0'>Years Experiance</p>
          </div>
        </div>
        <div className='col-6 col-md-3'>
          <div className='featured-box text-center'>
            <h1 className='text-22 mb-0 text-muted'>
              <span>250+ </span>
            </h1>
            <p className='mb-0'>Happy Clients</p>
          </div>
        </div>
        <div className='col-6 col-md-3'>
          <div className='featured-box text-center'>
            <h1 className='text-22 mb-0 text-muted'>
              <span>300+</span> 
            </h1>
            <p className='mb-0'>Projects Done</p>
          </div>
        </div>
        <div className='col-6 col-md-3'>
          <div className='featured-box text-center'>
            <h1 className='text-22 mb-0 text-muted'>
              <span fs-5>30+</span>
            </h1>
            <p className='mb-0'>Get Awards</p>
          </div>
        </div>
      </div>
    </div>
</div>
</section>
    </>
  )
}
