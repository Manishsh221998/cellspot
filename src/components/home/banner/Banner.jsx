import React from 'react'
import {Link} from 'react-router-dom'
  
const Banner = () => {
  return (
    <div> 
        <div className="hero bg-base-100 min-h-screen pb-3">
  <div className="hero-content flex-col lg:flex-row-reverse justify-center items-center ">
      <img
      // src="./asset/mobile_banner.jpg"
      src="../asset/Carosuel/iPhone.jpeg"
       className="max-w-sm rounded-lg h-[330px] hover:scale-110 duration-1000 cursor-pointer md:h-[380px]"/>
      <div className=' text-start'>
      <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-indigo-700 via-fuchsia-400 to-pink-500 pb-3">Smartphone Destination of your choice !</h1>
      <p className="py-6 text-bold text-blue-900">
      Empower your life with the right connection—where technology meets your everyday.
      </p>
      <Link to='/all_product'><button className="btn btn-outline me-1">Book now</button></Link>
      <button className="btn btn-ghost">Get started</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Banner