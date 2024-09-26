import React from 'react'
import {Link} from 'react-router-dom'
const ProductFooter = () => {
  return (
    <div><section>
<div className="mt-14">
          <h3 className='text-2xl font-bold font-sans text-transparent mb-2 bg-clip-text bg-gradient-to-tr from-indigo-700 via-fuchsia-400 to-blue-700'>Hurry Book Now!</h3>
    <h1 className='divider text-[46px] mb-8 font-bold'>New Arrivals of the day</h1>
    <p className='text-slate-500 mb-6'>Our most recommended products</p>
    </div>
    <div className="mx-16 my-10 max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="bg-gradient-to-r from-[#373d3d] to-[#b0b5b5] p-8 md:p-12 lg:px-16 lg:py-24  rounded-lg shadow-lg">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-2xl font-bold text-white md:text-3xl text-wrap">
            Explore various to find what you need.
            </h2>
  
            <p className="hidden text-white/90 sm:mt-4 sm:block">
            If you’re looking to buy the latest electronic products, the Cellspot online store is your go-to destination. With a wide range of the newest gadgets, from smartphones and laptops to smart home devices and accessories, Cellspot makes it easy to find exactly what you need. Stay updated with your order status, and get ready to enjoy your new tech!
            </p>
  
            <div className="mt-4 md:mt-8">
              <Link
                to="/all_product"
                className="inline-block rounded border border-white bg-white px-12 py-3 text-md font-bold text-[#ff3434] transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Byu the Latest Deals !
              </Link>
            </div>
          </div>
        </div>
  
        <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2 overflow-hidden">
          <img
            alt=""
            src="../asset/img.jpg"
            className="h-40 w-full object-cover sm:h-56 md:h-full rounded-lg shadow-lg hover:opacity-80"
          />
  
          <img
            alt=""
            src="../asset/img3.jpg"
            className="h-40 w-full object-cover sm:h-56 md:h-full rounded-lg shadow-xl hover:opacity-80"
          />
        </div>
 
      </div>
    </div>
  </section></div>
  )
}

export default ProductFooter