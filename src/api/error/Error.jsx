import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className="flex h-screen flex-col bg-white">
   
  
    <div className="flex flex-1 items-center justify-center">
      <div className="mx-auto max-w-xl px-4 py-8 text-center">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
          We can't find the page.
        </h1>
  
        <p className="mt-4 text-gray-500 animate-bounce">
          To go to the Dashboard, Please login as admin first.
        </p>
        <Link
          to='/admin_login'
         ><button className='btn btn-outline my-4 hover:shadow-lg'>
       
        Admin Login
        </button>
        </Link>

      </div>
    </div>
  </div>
  )
}

export default Error