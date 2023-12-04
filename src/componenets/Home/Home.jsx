import React from 'react'
import  './Home.scss'
import Navbar from '../Navbar/Navbar'
import {Typewriter } from 'react-simple-typewriter'

export default function Home() {
  return (
    <>
      <Navbar/>
      <section id = "Home">
      <div className = "img-wrapper d-flex col-12 opacity-8 bg-dark zIndex-1" style = {{ backgroundImage: "url('https://harnishdesign.net/demo/react/simone/demo/images/intro-bg.jpg')" ,zIndex:"1"}} >
      {/* <Navbar/> */}
        <div className='overlay'></div>
         <div className = "col-12 text-center">
          <h1 className ="text-16 image-text mb-2">
      <span className='copy_write' style={{fontWeight : "bold" , color:"blueviolet" , fontSize:"80px"}}>
    <Typewriter
      words = { [`I'm Aina Zahid`, `I'm a Designer` , `I'm a Developer` , `I'm a FreeLancer` , `I'm a React Developer` ]}
          loop = {" "}
          Cursor
          cursorStyle= '<'
          typeSpeed = {120}
          deletespeed = {80}
/>
      </span>
      </h1>

      </div>
        </div>
        </section>
      </>
  )
}
