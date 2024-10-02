import React, { lazy, Suspense } from 'react'
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from '../components/home/Home'
 import Header from '../layout/header/Header'
import Footer from '../layout/footer/Footer'
import PageNotFound from '../PNF/PageNotFound'
import SignUp from '../components/user/register/SignUp'
import Login from '../components/user/login/Login'
import About from '../components/about/About'
import Contact from '../components/contact/Contact'
import Profile from '../components/user/profile/Profile'
import All_products from '../components/all_products/All_products'
import Dashboard from '../components/dashboard/Dashboard'
import Add_items from '../components/dashboard/Add_items/Add_items'
import Edit_item from '../components/dashboard/Edit_item/Edit_item'
import View_item from '../components/dashboard/View_item/View_item'
import SingleProduct from '../components/dashboard/View_item/singleProduct/SingleProduct'
import Admin_regestration from '../components/admin/admin_rege/Admin_regestration'
import Admin_login from '../components/admin/admin_login/Admin_login'
import Cart from '../components/cart/Cart'
import Error from '../api/error/Error'
import ProtectedRoutes from '../api/url/isAuth'
import Footer2 from '../layout/footer/Footer2'
let Dashboardz=lazy(()=>import('../components/dashboard/Dashboard'))
let ALl_prod=lazy(()=>import('../components/all_products/All_products'))
   
 const Routing = () => {
     
  return (
    <div> 
        <Router>
            <Header/>
            <Suspense fallback={<h1>Loading...</h1>}>
              <Routes>
                {/* default path */}
                <Route path='' element={<Home/>}/>

                <Route path='all_product' element={<ALl_prod/>}/>
                <Route path='all_product/single_product/:id' element={<SingleProduct/>}/>

                <Route path='all_product/view_items/:category' element={<View_item/>}/>
                <Route path='all_product/view_items/:category/single_product/:id' element={<SingleProduct/>}/>
                <Route path='cart/:uid' element={<Cart/>}/>
                {/* dashboard path for inventory or admin */}
                
                <Route element={<ProtectedRoutes/>}>
                <Route path='dashboard' element={<Dashboardz/>}/>
                </Route>

                <Route path='dashboard/add_items' element={<Add_items/>}/>
                <Route path='dashboard/edit_item/:id' element={<Edit_item/>}/>

                <Route path='error' element={<Error/>}/>


                <Route path='about' element={<About/>}/>
                <Route path='contact' element={<Contact/>}/>

                {/* authentication path of User */}
                 <Route path='admin_regestration' element={<Admin_regestration/>}/>
                 <Route path='admin_login' element={<Admin_login/>}/>


                {/* authentication path of User */}
                <Route path='user_signUp' element={<SignUp/>}/>
                <Route path='user_login' element={<Login/>}/>
                <Route path='user_profile/:id' element={<Profile/>}/>
                {/* error path */}
                <Route path='*' element={<PageNotFound/>}/>
            </Routes>
            </Suspense>
            <Footer/>
            <Footer2/>
         </Router>
    </div>
  )
}

export default Routing