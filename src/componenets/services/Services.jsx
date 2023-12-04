import React from 'react'
import './Services.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn, faChartArea, faDesktop, faPaintBrush, faPalette, faPencilRuler } from '@fortawesome/free-solid-svg-icons'
export default function Services() {
  return (
 <>
 <section id = "Services">
  <div className='container px-lg-5'>
      <div className= "d-flex position-relative text-center mb-5" >
        <h1 className ="text-24 text-uppercase col-12 text-center text-light opacity-4 fw-600 w-600">
            Services
        </h1>
        <p className = "text-9 text-dark w-100 position-absolute text-center align-self-center fw-600 lh-base">What I do</p>
      </div>
      <div className='row'>
        <div className='col-lg-11 m-auto'>
          <div className='row'>
            <div className='col-md-6'>
            <div className='featured-box style-3 mb-5'>
              <div className='featured-box-icon text-primary shadow-sm d-flex align-self-center'>
              <FontAwesomeIcon className='icons'  icon={faPalette} /></div>
                  <h3 className='mt-2'>Graphic Designing</h3>
                  <p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate officiis sapiente minus deserunt, numquam dolore. Sunt harum obcaecati delectus rem commodi deleniti dolorum.</p>
              </div>
          </div>
          <div className='col-md-6'>
            <div className='featured-box style-3 mb-5'>
              <div className='featured-box-icon text-primary shadow-sm d-flex align-self-center'>
              <FontAwesomeIcon className='icons' icon={faDesktop} /></div>
                  <h3 className='mt-2'>Web Designing</h3>
                  <p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate officiis sapiente minus deserunt, numquam dolore. Sunt harum obcaecati delectus rem commodi deleniti dolorum.</p>
              </div>
          </div>
          <div className='col-md-6'>
            <div className='featured-box style-3 mb-5'>
              <div className='featured-box-icon text-primary shadow-sm d-flex align-self-center'>
              <FontAwesomeIcon className='icons' icon={faPencilRuler} /></div>
                  <h3 className='mt-2'>UI/UX Designing</h3>
                  <p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate officiis sapiente minus deserunt, numquam dolore. Sunt harum obcaecati delectus rem commodi deleniti dolorum.</p>
              </div>
          </div>
          <div className='col-md-6'>
            <div className='featured-box style-3 mb-5'>
              <div className='featured-box-icon text-primary shadow-sm d-flex align-self-center'>
              <FontAwesomeIcon className='icons' icon={faPaintBrush} /></div>
                  <h3 className='mt-2'>App Designing</h3>
                  <p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate officiis sapiente minus deserunt, numquam dolore. Sunt harum obcaecati delectus rem commodi deleniti dolorum.</p>
              </div>
          </div>
          <div className='col-md-6'>
            <div className='featured-box style-3 mb-5'>
              <div className='featured-box-icon text-primary shadow-sm d-flex align-self-center'>
              <FontAwesomeIcon className='icons' icon={faChartArea} /></div>
                  <h3 className='mt-2'>Business Analysis</h3>
                  <p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate officiis sapiente minus deserunt, numquam dolore. Sunt harum obcaecati delectus rem commodi deleniti dolorum.</p>
              </div>
          </div>
          <div className='col-md-6'>
            <div className='featured-box style-3 mb-5'>
              <div className='featured-box-icon text-primary shadow-sm d-flex align-self-center' >
              <FontAwesomeIcon  className='icons' icon={faBullhorn} /></div>
                  <h3 className='mt-2'>SEO Marketing</h3>
                  <p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate officiis sapiente minus deserunt, numquam dolore. Sunt harum obcaecati delectus rem commodi deleniti dolorum.</p>
              </div>
          </div>
        </div>
      </div>
      </div>
      </div>
      </section>
 </>
  )
}
