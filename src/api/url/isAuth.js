import React from 'react'
import {Navigate,Outlet} from 'react-router-dom'
const ProtectedRoutes = () => {
const isLogged=window.sessionStorage.getItem("user_id")
console.log("User login id as token value:",isLogged);

const isAdminLogged=window.localStorage.getItem("isAdminLogged")
console.log("Admin login id as tokwn value:",isAdminLogged);

return isAdminLogged?<Outlet/>:<Navigate to='/error'/>
}

export default ProtectedRoutes