import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { end_points } from '../../../api/url/api_url'
import { useFormik } from 'formik'
import Swal from 'sweetalert2'
import { axiosInstance } from '../../../api/axiosInstance/axiosInstance'
import {useNavigate} from 'react-router-dom'
// import {v4} from 'uuid'

const Login = () => {
let api=end_points.user
console.log("Api for login :",api);

// let uuid=v4()
// console.log("UUID---------",uuid);

let navigate=useNavigate()
let[state,setState]=useState([])
let swAlert=(x,y,z)=>{
  Swal.fire({
    title:x,
    icon:x,
    text:y,
     timer:z,
   })
  }
let getData=()=>{
  axiosInstance.get(api)
  .then(res=>{
    console.log("Axios res,to verify login email & password with existing data:",res.data);
     setState(res.data)
  })
  .catch(err=>console.log("axios errpr for login:",err)
  )
}
useEffect(()=>{
  getData()
},[setState,api])

let sumbutHandler=(formData)=>{
let emailVarify=state.find((v)=>v.email===formData.email)
let passwordVerify=state.find((v)=>v.password===formData.password)
  if(!emailVarify){
    swAlert("error","Email doesn't matched",2000)
  }
  else if(!passwordVerify){
    swAlert("error","Password doesn't matched",2000)
  }
  else{
    swAlert("success","Logged in successfully",2000)
    // window.sessionStorage.setItem("token",uuid)
    window.sessionStorage.setItem("isLogged","true")
    navigate(`/user_profile/${emailVarify.id}`)
  }
 
}
let formValidator=(data)=>{
   let err={}
   if(data.email<1) err.email="required field*"
   if(data.password<1) err.password="required field*"   
   return err
}
let formik=useFormik({
  initialValues:{
    email:"",
    password:""
  },
  onSubmit:sumbutHandler,
  validate:formValidator
})

  return (
    <div className=''> 
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 m-20">
        <div className="mx-auto max-w-lg mt-16  ">
          <h1 className="text-center text-2xl font-bold text-slate-500 sm:text-3xl">
            Grab the offers!
          </h1>
          <form
             className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 bg-gradient-to-tr from-[#ebffff] to-[#ddf1ff]"
             onSubmit={formik.handleSubmit}
          >
            <p className="text-center text-2xl font-medium">
            Log in 
            </p> 

            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  className="w-full rounded-lg border p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                  autoComplete="true"
                  id='email'
                  name='email'
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                  />
                  {formik?.touched.email&&formik?.errors?.email?<p className='text-end text-[#ff3737]'>{formik?.errors?.email}</p>:""}
              </div>
             </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  className="w-full rounded-lg border p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter password"
                  id='password'
                  name='password'
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                />
                {formik?.touched?.password&&formik?.errors?.password?<p className='text-end text-[#ff3737]'>{formik?.errors?.password}</p>:""}
               </div>
            </div>

            <button
              type="submit"
              className="block w-full shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"

                // className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
            >
              Log in
            </button>

            <p className="text-center text-sm text-gray-500">
              If you are not registered? 
              <Link className="underline ps-1" to="/user_signUp">
                 Sign up
              </Link>
              <br />
              now
            </p>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Login