import React from 'react'
import {Link} from 'react-router-dom'
const PageNotFound = () => {
  return (
    <section className='mt-[300px] mb-[280px] font-sans'>
    <div className='text-7xl text-slate-600 animate-bounce mb-14'>
        <h1 >
        Page Not Found 404......</h1>
       
        </div>
        <Link
              to="/"
              className="rounded-md bg-[#000000] px-3.5 py-2.5 text-sm font-semibold text-white shadow-lg hover:text-black hover:bg-[#fffb1e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link> 
            <Link to="/contact" className="ms-2 text-sm font-semibold text-gray-900">
              Contact support <span aria-hidden="true">&rarr;</span>
            </Link>
        </section>
  )
}

export default PageNotFound
