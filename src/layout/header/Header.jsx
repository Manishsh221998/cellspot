import React, { useEffect } from 'react'
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useNavigate } from 'react-router-dom'
import { cnt } from '../../components/cart/Cart'
   const navigation = [
  { name: 'Home', href: '/' },
  { name: 'All Product', href: '/all_product' },
   { name: 'About us', href: '/about' },
 ]
const Header = () => {
  let navigate=useNavigate()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    

    let image=window.sessionStorage.getItem("image")
    let user_id=window.sessionStorage.getItem("user_id")
    let user_fname=window.sessionStorage.getItem("user_fname")  
    let isLogged=window.sessionStorage.getItem("isLogged")  

    let [logState, setLog] = useState({
      link: "user_login",
      jsx: "Log in",
      hide: "hidden",
      user_fname:"",
      profileimg:"",
      id:user_id
    });

    let loginHandler = () => {
    
      if (isLogged) {
        setLog({
          link: `user_profile/${user_id}`,
          jsx: `Hi, ${user_fname}`,
          hide: "block",
          user_fname: `${user_fname}`,
          profileimg: `${image}`,
        });
      } else {
        setLog({
          link: "user_login",
          jsx: "Log in",
          hide: "hidden",
          user_fname: "",
          profileimg: ""
        });
      }
    };
    useEffect(()=>{loginHandler()},[])
   const logOut=()=>{
      window.sessionStorage.clear()
      window.location.reload()
      navigate('/') 
    }
 
  return (
    <div className='mb-[40px]'>    
      <header className="absolute inset-x-0 top-0 z-50">
    <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
      <div className="flex lg:flex-1">
        <Link to="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <img
            alt=""
             src="./asset/logo.png"
            className="w-20 h-25"
          />
         </Link>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon aria-hidden="true" className="h-6 w-6" />
        </button>
      </div>
      <div>
      <div className="hidden lg:flex lg:gap-x-12 ">
        {navigation.map((item) => (
          <Link key={item.name} to={item.href} className="text-lg font-semibold leading-6 text-gray-900 hover:text-slate-500">
            {item.name}
          </Link>
        ))}
      </div>
      </div>

      <div className="px-2 flex justify-end">
     <Link to="">
     <div tabIndex={0} role="button" className="btn btn-ghost btn-circle" >
     <Link to={`/cart/${user_id}`}>
       <div className="indicator">
         <svg
           xmlns="http://www.w3.org/2000/svg"
           className="h-5 w-5"
           fill="none"
           viewBox="0 0 24 24"
           stroke="currentColor">
           <path
             strokeLinecap="round"
             strokeLinejoin="round"
             strokeWidth="2"
             d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
         </svg>
        <span className="badge badge-sm indicator-item bg-orange-400">{cnt}</span>
       </div>
       </Link>
       </div>
     </Link>
       </div>  

<div className="dropdown dropdown-end hidden lg:flex lg:flex-1 lg:justify-end">
        
        <div tabIndex={0} className="text-lg flex" > 
       
        <img
           src={logState.profileimg}
           alt="log in"
           className={`${logState.hide} h-10 w-10 mx-3 rounded-full object-cover animate-pulse`}
         />
         
         <Link to={logState.link}
            className="text-sm font-semibold leading-6 text-gray-900 mt-1.5">
           {logState.jsx} <span aria-hidden="true">&rarr;</span>
         </Link>
         </div> 
       <ul
         tabIndex={0}
         className={`${logState.hide} menu dropdown-content  rounded-box z-10 mt-14 w-52 p-2 shadow-lg bg-white`}>
           <li><Link to={logState.link}>Profile</Link></li>
           <li onClick={logOut}><Link>Log Out</Link></li> 
          {/* <li><Link to="/dashboard">Dashboard</Link></li> */}
       </ul>
     </div>

    </nav>
    <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
      <div className="fixed inset-0 z-50" />
      <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <Link href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="py-6" onClick={loginHandler}>
            <img
            src={logState.profileimg}
            alt="log in"
            className={`${logState.hide} h-10 w-10 mx-3 rounded-full object-cover`}
          />
                 <Link
                to={logState.link}

                className="-mx-3 text-2xl block rounded-lg px-3 py-2.5  font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
               {logState.jsx} <span aria-hidden="true">&rarr;</span>

              </Link>
             </div>
             <div className="dropdown dropdown-start mb-32">
        <div tabIndex={0} role="button" className={`${logState.hide} btn btn-ghost rounded-btn`}>Log in</div>
        <ul
          tabIndex={0}
          className={`menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow`}>
            <li><Link to={logState.link}>Profile</Link></li>
          <li onClick={logOut}><Link>Log out</Link></li>
          </ul>
      </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
  </div>
  )
}

export default Header