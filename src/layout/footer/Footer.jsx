import React from 'react'
import { Link } from 'react-router-dom'
import { RiAdminLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div>
        <footer className="footer bg-base-200 text-base-content p-10">
    <aside>
      <img src="./asset/logo_footer.png" alt="" height='20' width='100'/>
      <p className=''>
        Cellspot Enterprise ltd.
        <br />
        Providing reliable tech since 2012
      </p>
    </aside>
    <nav>
      <h6 className="footer-title">Services</h6>
      <a className="link link-hover">Branding</a>
      <a className="link link-hover">Design</a>
      <a className="link link-hover">Marketing</a>
      <a className="link link-hover">Advertisement</a>
    </nav>
    <nav>
      <h6 className="footer-title">Company</h6>
      <Link to="/about" className="link link-hover">About us</Link>
      <a className="link link-hover">Contact us</a>
        <a className="link link-hover">cellspot@gmail.com</a>
      <a className="link link-hover">033 2586 8520</a>
     </nav>
    <nav>
      <h6 className="footer-title">Legal</h6>
      <a className="link link-hover">Terms of use</a>
      <a className="link link-hover">Privacy policy</a>
      <h6 className="footer-title text-lg text-center items-center mt-3 capitalize">
      <RiAdminLine  className='inline-block text-xl p-0.5'/>
      <Link to="/admin_login" className='link-hover'>
      Admin</Link></h6>
     </nav>
  </footer>

  </div>
  )
}

export default Footer