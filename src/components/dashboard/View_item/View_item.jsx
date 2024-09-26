import React, { useEffect, useState } from 'react'
import { end_points } from '../../../api/url/api_url'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { axiosInstance } from '../../../api/axiosInstance/axiosInstance'
 
const View_item = () => {
  let{category}=useParams()
  console.log("prop",category);
  
 let api=end_points.products 
//  console.log("CategoryWise prod",api);
let[data,setData]=useState([])
let nevigate=useNavigate()
const getData=()=>{
  axiosInstance.get(api)
  .then(res=>{
    console.log("axios res",res);
    setData(res.data)
  })
  .catch(err=>console.log("axios err",err))
}
useEffect(()=>{
  getData()
},[setData,api])
 
let catWise=data.filter(v=>v.category===category)
console.log("aa",catWise);

  return (
    <div> 
         <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Hurry Byu now</h2>
         <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {catWise.map((v) => (
            <div key={v.id} className="group shadow-lg rounded-lg p-4">
              <div className="aspect-h-1 aspect-w-1 w-full   rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                   src={v.prod_img}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-start font-bold text-lg text-gray-700">
                    {v.brand_name.toUpperCase()}
                  </h3>
                  <p className="mt-1 text-md text-[#b1a122]"><b>Model </b>{v.model_no}</p>  

                </div>
                <div className="">
              <Link to={`single_product/${v.id}`}><button className='btn btn-accent' >View more</button>
              </Link>  
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>      
    </div>
  )
}

export default View_item