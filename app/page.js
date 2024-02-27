"use client"
import React, { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Option from '@/Components/Option';


const page = () => {

  return (
    <>
    
      <div className="main bg-dark d-flex align-items-center justify-content-center text-light flex-column">
          <h1>Rock Paper Siccor</h1>
          <br />
          <br />
          <Option/>
      </div>
          

    </>
  )
}

export default page