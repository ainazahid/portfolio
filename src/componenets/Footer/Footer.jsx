import React from 'react'
import  './Footer.scss'
export default function Footer() {
  return (
    <>
    <section id = "Footer">
        <div className='container py-xl-5'>
            <div className='row'>
                <div className='col-lg-6 text-center text-lg-center'>
                   <p className='mb-3 mb-lg-0'>
                    copyright 2023 Aina Zahid. All rights reserved
                   </p>
                    </div>
                    <div className='col-lg-6'>
                        <p className='justify-content-center justify-content-lg-end'>
                            Terms & Policy |  Disclaimer
                        </p>
                    </div>
            </div>
        </div>
    </section>
    
    </>
  )
}
