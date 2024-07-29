import React, { Component } from 'react'
import loading from './Spin@1x-0.5s-200px-200px.gif'
const Spinner =() => {

    return (
      <div className='text-center'>
           <img className="my-3" src={loading} alt="loading"/>
      </div>
    )
  
}
export default Spinner
