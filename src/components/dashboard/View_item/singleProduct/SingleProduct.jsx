import React, { useEffect, useState } from 'react'
import { end_points } from '../../../../api/url/api_url';
import { axiosInstance } from '../../../../api/axiosInstance/axiosInstance';
import { useNavigate, useParams } from 'react-router-dom';
import { MdOutlineCurrencyRupee } from 'react-icons/md';
import { MdOutlineShoppingCart } from "react-icons/md";

const SingleProduct = () => {
    let{id}=useParams()
    console.log("prop",id);
    
   let api=end_points.products+`/${id}`
   let api_cart=end_points.cart
  //  console.log("cart api:",api_cart);
   
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

  let user_id=window.sessionStorage.getItem("user_id")
  
  let dataForCart={
  user_id:user_id,
  prod_id:data.id,
  prod_name:data.brand_name,
  prod_col:data.color,
  prod_price:data.price,
  prod_img:data.prod_img
  }

  const cartHandler=()=>{
    
    axiosInstance.post(api_cart,dataForCart)
    .then(res=>{
      console.log("axios response for cart section:",res.data);
      nevigate(`/cart/${user_id}`)
    })
    .catch(err=>console.log("axios error for cart section:",err))
  }

  let{brand_name,category,model_no,color,price,product_details,warranty,prod_img}=data
  return (
    <div className='mt-[100px]  mb-[90px]'> 
  <div className='flex rounded-lg flex-wrap justify-center'>
      <div className="px-4 sm:px-0">
        <img src={prod_img} alt="" className='h-[350px] w-[390px]' />
       </div>
      <div className="mt-6 border-t border-gray-100 text-start">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Brand</dt>
            <dd className="mt-1 text-md font-bold leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{brand_name}</dd>
          </div>
          <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Category</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{category}</dd>
          </div>
          <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900"><MdOutlineCurrencyRupee className="inline-block text-[14px] mb-1"/>Price</dt>
            <dd className="mt-1 text-sm font-bold leading-6 text-[#202b0b] sm:col-span-2 sm:mt-0">{price}</dd>
          </div>
          <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Model no</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{model_no}</dd>
          </div>
          <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Details</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{product_details}</dd>
          </div>
          <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Warranty</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{warranty}</dd>
          </div>
          <div className="text-end pt-2">
           <button className='btn btn-warning btn-sm hover:shadow-lg' onClick={cartHandler}>Add to cart <MdOutlineShoppingCart />
           </button>
           </div>
         </dl>
      </div>
    </div>

     </div>
  )
}

export default SingleProduct