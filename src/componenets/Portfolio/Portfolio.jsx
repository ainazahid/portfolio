import React from 'react'
import './Portfolio.scss'
export default function Portfolio() {
  return (
<>
    <div className='container px-lg-5'>
      <div className= "d-flex position-relative text-center mb-5" >
          <h1 className ="text-24 text-uppercase col-12 text-center text-light opacity-4 fw-600 w-600">
           Portfolio
          </h1>
          <p className = "text-9 text-dark w-100 position-absolute text-center align-self-center fw-600 lh-base">My Work</p>
      </div>
       <ul className='text-4 nav nav-tabs text-center justify-content-center fw-400 p-4 mb-4'>
        <li className='nav-items'>
           <button className='nav-link text-primary'>All</button> 
        </li>
        <li className='nav-items'>
           <button className='nav-link text-primary'>Design</button> 
        </li>
        <li className='nav-items'>
           <button className='nav-link text-primary'>Brand</button> 
        </li>
        <li className='nav-items'>
           <button className='nav-link text-primary'>Photos</button> 
        </li>
       </ul>
       <div className='Portfolio popup-ajex-gallery'>
        <div className='row Portfolio-filter filter-container g-4 position-relative'>
            <div className='col-sm-4 col-lg-6 filter-item brand position-absolute'>
                <div className='Portfolio-box rounded'>
                    <div className='Portfolio-img rounded'>
                        <img className='img-fluid d-block portfolio-image'  src="./project-1.jpg" alt=''>
                            
                        </img>
                    </div>
              </div>
            </div>
        </div>
       </div>
     </div>
    
</>
  )
}
