import React,{useState,useEffect} from 'react'
import base_url, { end_points } from '../../../api/url/api_url'
import { axiosInstance } from '../../../api/axiosInstance/axiosInstance'
import {Link}  from 'react-router-dom'
const Best_sellers = () => {
    let api=end_points.products
console.log("Api",api);

let[state,setState]=useState([])
let getData=()=>{
  axiosInstance.get(api)
   .then(res=>{
    console.log("axios res",res.data);
    setState(res.data)
  })
  .catch(err=>console.log("axios error",err)
  )
}
useEffect(()=>{
  getData()
},[setState,api])
let data=state.slice(3,7)
  return (
    <section className='m-22'>
    <h3 className='text-2xl font-bold font-sans text-transparent mb-2 bg-clip-text bg-gradient-to-tr from-indigo-700 via-fuchsia-400 to-blue-700'>Best Sellers</h3>
    <h1 className='divider text-[46px] mb-8 font-bold text-[#232123]'>Most Recommended Products</h1>
    <p className='text-slate-500 mb-6'>Our most recommended products</p>
  <div className="max-w-[1320] flex justify-center items-center gap-5 flex-wrap">
    {data.map((v,i)=>(
  <div className="mb-10 card w-[17rem] h-[420px] shadow-xl bg-gradient-to-r from-[#ffffff] to-[#ffe4f6]" key={i}>
<figure className='mt-3'>
  <Link to='/all_product'><img
    // src="../asset/iphone13.jpeg"
    src={v.prod_img}
    alt="Shoes" 
    className='hover:scale-105 h-[230px] duration-500 rounded-lg'
    /></Link>
</figure>
<div className="card-body" key={v.id}>
{/* <span className='divider'></span> */}

  <h2 className="card-title">{v.brand_name} ({v.category})</h2>
  <p className='text-start  text-[#727272] text-sm'>Model No. | {v.
model_no}</p>
  <div className="card-actions justify-end">
    <Link to='/all_product'><button className="btn btn-outline hover:shadow-lg hover:btn-secondary">Shop now</button></Link> 
   </div>
    
</div>
</div>
))}
</div>
</section>
  )
}

export default Best_sellers