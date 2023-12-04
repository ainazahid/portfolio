import React from 'react'
import './Resume.scss'
export default function Resume() {
  return (
    <>
 <section id ="Resume">
    <div className='container px-lg-5'>
      <div className= "d-flex position-relative text-center mb-5" >
        <h1 className ="text-24 text-uppercase col-12 text-center text-light opacity-4 fw-600 w-600">
           Summary
        </h1>
        <p className = "text-9 text-dark w-100 position-absolute text-center align-self-center fw-600 lh-base">Resume</p>
      </div>
     <div className='row gx-5'>  
        <div className='col-md-6'>
         <h1 className='text-6 fw-600 mb-4 '>My Education</h1>
          <div className='bg-white border p-4 mb-4'>
              <span class="badge bg-primary text-2 mb-2">2020-2022</span>
                <h3 className='text-4 mb-3 '>FSC Engineering</h3>
                <p className='text-3 mb-3 fw-600 text-primary'>Punjab Group Of Colleges</p>
              <p className='mb-2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, accusantium. Molestias debitis fuga ea voluptatibus obcaecati delectus soluta omnis officia!</p>
          </div>
         <div className='bg-white border p-4'>
            <span class="badge bg-primary text-2 mb-2">2022-2026</span>
              <h3 className='text-4 mb-3 '>Computer Sciences</h3>
               <p className='text-3 mb-3 fw-600 text-primary'>Comsats University</p>
            <p className=' mb-2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, accusantium. Molestias debitis fuga ea voluptatibus obcaecati delectus soluta omnis officia!</p>
         </div>
      </div>
      <div className='col-md-6'>
            <h1 className='text-6 fw-600 mb-4 '>My Experiance</h1>
          <div className='bg-white border p-4 mb-4'>
              <span class="badge bg-primary text-2 mb-2">2020-2022</span>
                <h3 className='text-6 mb-3 '>Frontend Development</h3>
                <p className='text-3 mb-3 fw-600 text-primary'>Web Development</p>
              <p className='mb-2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, accusantium. Molestias debitis fuga ea voluptatibus obcaecati delectus soluta omnis officia!</p>
          </div>
          <div className='bg-white border p-4 mb-4'>
              <span class="badge bg-primary text-2 mb-2">2020-2022</span>
                <h3 className='text-6 mb-3 '>React JS</h3>
                <p className='text-3 mb-3 fw-600 text-primary'>Lorem, ipsum dolor.</p>
              <p className='mb-2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, accusantium. Molestias debitis fuga ea voluptatibus obcaecati delectus soluta omnis officia!</p>
          </div>
      </div>
    </div>
    <h1 className='text-6 mb-4 fw-600 '>My Skills</h1>
    <div className='row gx-5'>
            <div className='col-md-6'>
                <p className='text-5 mb-3 fw-600'>Web Design
                <span className='float-end'>
                    65%</span>
                </p>
             <div class="progress progress-sm mb-4 ">
                  <div class="progress-bar bg-primary progess-primary" role="progressbar" style={{width:"70%" }}aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" ></div>
             </div>
            </div>
            <div className='col-md-6'>
                <p className='text-5 mb-3 fw-600'>Html
                <span className='float-end'>
                    99%</span>
                </p>
             <div class="progress progress-sm mb-4 ">
                  <div class="progress-bar bg-primary progess-primary" role="progressbar" style={{width:"99%" }}aria-valuenow="99" aria-valuemin="0" aria-valuemax="100" ></div>
             </div>
            </div>
            <div className='col-md-6'>
                <p className='text-5 mb-3 fw-600'>CSS
                <span className='float-end'>
                    90%</span>
                </p>
             <div class="progress progress-sm mb-4 ">
                  <div class="progress-bar bg-primary progess-primary" role="progressbar" style={{width:"90%" }}aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" ></div>
             </div>
            </div>
            <div className='col-md-6'>
                <p className='text-5 mb-3 fw-600'>Scss
                <span className='float-end'>
                    70%</span>
                </p>
             <div class="progress progress-sm mb-4 ">
                  <div class="progress-bar bg-primary progess-primary" role="progressbar" style={{width:"70%" }}aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" ></div>
             </div>
            </div>
            <div className='col-md-6'>
                <p className='text-5 mb-3 fw-600'>JavaScript
                <span className='float-end'>
                    75%</span>
                </p>
             <div class="progress progress-sm mb-4 ">
                  <div class="progress-bar bg-primary progess-primary" role="progressbar" style={{width:"75%" }}aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
             </div>
            </div>
            <div className='col-md-6'>
                <p className='text-5 mb-3 fw-600'>React JS
                <span className='float-end'>
                    80%</span>
                </p>
             <div class="progress progress-sm mb-4 ">
                  <div class="progress-bar bg-primary progess-primary" role="progressbar" style={{width:"80%" }}aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" ></div>
             </div>
            </div>
            </div>
            <button type="button" class="btn btn-primary mt-4">Download CV</button>
        </div>
 </section>
      </>
  )
}
