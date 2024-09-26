import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { end_points } from "../../../api/url/api_url";
import { axiosInstance } from "../../../api/axiosInstance/axiosInstance";
import Swal from "sweetalert2";
import {useNavigate} from 'react-router-dom'
// import {v4} from 'uuid'

const SignUp = () => {
let api=end_points.user
// console.log("User Api, for form sign up :",api);

// let uuid=v4()
// console.log("UUID---------",uuid);

let getBase64=file=>new Promise((resolve,reject)=>{
  const reader=new FileReader();
  reader.readAsDataURL(file)
  reader.onload=()=>resolve(reader.result)
  reader.onerror=reject
})
let navigate=useNavigate()
let[oldData,setOldData]=useState([])
let[img,setImg]=useState("")
let[inputState,setState]=useState({fname:"",lname:"",email:"",password:"",cnf_pwd:"",errors:{fname:"",lname:"",email:"",password:"",cnf_pwd:""}})
  let swAlert=(x,y,z)=>{
Swal.fire({
  title:x,
  icon:x,
  text:y,
   timer:z,
 })
}
const changeHandler=(event)=>{
// console.log("Event, form value collected from dom after submit:",event);
let{name,value}=event.target
// console.log(name,":",value);
let err={...inputState.errors}
 switch (name) {
  case "fname":
    err.fname=value.length<1?"required field*":(err.fname=value.length<2?"minimium 2 characters":"")
  // console.log(err.fname);
  break;
  case "lname":
    if(value.length<1){ err.lname="required field*"}
    else if(value.length<3){ err.lname="minimum 3 characters"}
    else{err.lname=""}
    break;
  case "email":err.email=value.length<1?"required field*":(err.email=value.length<12?"email contain atleeat 12 characters":"")
  break;
  case "password":err.password=value.length<1?"required field*":(err.password=value.length<6?"minimum 6 characters":"")
  break;
  case "cnf_pwd":err.cnf_pwd=value.length<1?"required field*":(value!==inputState.password?"password unmatched":"")
  break; 
  default:
    break;
 }

setState({...inputState,[name]:value,errors:err})
}
let getData=()=>{
axiosInstance.get(api)
.then(res=>{
  console.log("axios res,to verify email with stored data:",res);
  setOldData(res.data)
}) 
.catch(err=>console.log("axios error",err)
)
}
useEffect(()=>{
  getData()
},[setOldData,api])
 
let isEmailVarified=oldData.find((v)=>v.email===inputState.email)
// console.log("Email verify",isEmailVarified);

 const submitHandler=(event)=>{
  // event.preventDefault()
  if(inputState.fname&&inputState.lname&&inputState.email&&inputState.password&&inputState.cnf_pwd){
    let{fname,lname,email,password,cnf_pwd}=inputState.errors
    if(!fname&&!lname&&!email&&!password&&!cnf_pwd){
    // console.log("InputState values:",inputState);
if(isEmailVarified){
  swAlert("error","Email is already exists","2000")
}
else{
let formData={
  fname:inputState.fname,
  lname:inputState.lname,
  email:inputState.email,
  password:inputState.password,
  cnf_pwd:inputState.cnf_pwd,
  image:img
}

axiosInstance.post(api,formData)
.then(res=>{
  console.log(res);
  if(res.status===201){
    swAlert("success","Sign up successfully",2000)
    // window.sessionStorage.setItem("token",uuid)

      navigate("/user_login")
  }
  else{
    swAlert("error","opps..!somthing went wrong",2000)
  }
})
.catch(err=>console.log("axios err for form sign up:",err)
)
}
  }
  }
   
}

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg mt-10 mb-20">
        <h1 className="text-center text-xl font-bold text-indigo-600 sm:text-3xl">
          Get started shop with us !
        </h1>

        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
          To explore the greatest deals.
        </p>

        <form className="mb-0 mt-6 space-y-4 rounded-lg p-10 shadow-lg sm:p-6 lg:p-8 bg-gradient-to-tr from-[#efffd8] to-[#e1f5ff]" onSubmit={submitHandler}>
          <p className="text-center text-xl font-medium">Sign Up</p>
          <div>
            <label htmlFor="fname" className="sr-only">
              First Name
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border  p-4 pe-12 text-sm shadow-sm"
                placeholder="First name"
                name="fname"
                id="fname"
                onChange={changeHandler}
              />
              {inputState?.errors?.fname?<p className="text-end text-[#ff8002]">{inputState?.errors?.fname}</p>:null}
            </div>
          </div>
          <div>
            <label htmlFor="lname" className="sr-only">
              Last Name
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border  p-4 pe-12 text-sm shadow-sm"
                placeholder="Last name"
                autoComplete="on"
                name="lname"
                id="lname"
                onChange={changeHandler}
              />
              {inputState?.errors?.lname?<p className="text-end text-[#ff8002]">{inputState?.errors?.lname}</p>:null}
            </div>
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border  p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter email"
                autoComplete="on"
                name="email"
                id="email"
                onChange={changeHandler}
              />
              {inputState?.errors?.email?<p className="text-end text-[#ff8002]">{inputState?.errors?.email}</p>:null}
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border  p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter password"
                name="password"
                id="password"
                onChange={changeHandler}
               />
               {inputState?.errors?.password?<p className="text-end text-[#ff8002]">{inputState?.errors?.password}</p>:""}
            </div>
          </div>

          <div>
            <label htmlFor="cnf_pwd" className="sr-only">
             Confirm Password
            </label>

            <div className="relative">
              <input
                type="password"
                className="w-full rounded-lg border  p-4 pe-12 text-sm shadow-sm"
                placeholder="Confirm password"
                name="cnf_pwd"
                id="cnf_pwd"
                onChange={changeHandler}
              />
              {inputState?.errors?.cnf_pwd?<p className="text-end text-[#ff8002]">{inputState?.errors?.cnf_pwd}</p>:""}
            </div>
          </div>

          <div>
            <label htmlFor="image" className="sr-only">
             Choose an image
            </label>
            <div className="relative">
            <input type="file" id="image" name="image" className="file-input file-input-bordered w-full max-w-lg" 
            onChange={(event)=>{
              getBase64(event.target.files[0]).then(res=>{
                console.log("Singup image URL:",res);
                setImg(res)
              }).catch(err=>console.log("error image url",err)
              )
            }}
            />
            </div>
          </div>

           <button
            type="submit"
            className="block w-full shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
          >
            Sign up
          </button> 

          <p className="text-center text-sm text-gray-500">
            Already registered?
            <Link className="underline ms-1" to="/user_login">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
 