import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { end_points } from '../../../api/url/api_url'
import { axiosInstance } from '../../../api/axiosInstance/axiosInstance'

const Profile = () => {
  let{id}=useParams()
  // console.log("id",id);
  let[state,setState]=useState()
  let api=end_points.user+`/${id}`
  // console.log(api);
  let navigate=useNavigate()
  let fetchData=()=>{ 
    axiosInstance.get(api)
    .then(res=>{
      console.log("axios res",res.data);
      setState(res.data)
      window.sessionStorage.setItem("image",res.data.image)
      window.sessionStorage.setItem("user_id",res.data.id)
      window.sessionStorage.setItem("user_fname",res.data.fname)
    })
    .catch(err=>console.log("axios error",err))
  }
  useEffect(()=>{
    fetchData()
  },[setState,api])
   
  const logOutt=()=>{
    window.sessionStorage.clear()
    navigate('/') 
  }
 
  return (
    <div className='mt-[150px] mb-60 flex justify-center'>
      <div className="card bg-gradient-to-r from-[#ffffff] to-[#e9fbff] shadow-xl rounded-xl w-[21rem] h-[380px]">
        <div className="p-4 rounded-lg rounded-b-none">
     <img
      src={state?.image}
      alt="Shoes"
      className="rounded-lg h-[260px] w-[300px]" />
      </div>
   <div className="card-body rounded-lg shadow-lg rounded-t-none items-center text-center bg-gradient-to-r from-[#ffffff] to-[#e9fbff]">
    <h2 className="card-title text-3xl font-sans text-[#25b2bc]">{state?.fname} {state?.lname}</h2>
    <p></p>
    <p className='font-semibold'>Email : <span className='text-[#cca827] font-semibold'>{state?.email}</span></p>
    <div className="card-actions mt-3">
    <button className="btn btn-ghost text-[#757575] text-md">Edit</button>
      <button className="btn btn-outline " onClick={logOutt}>Log out</button>
    </div>
  </div>
</div>
 
    </div>
  )
}

export default Profile