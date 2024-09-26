import axios from "axios";
import base_url from "../url/api_url";

export const axiosInstance=axios.create({
  baseURL:base_url
})  

// axiosInstance.interceptors.request.use(
//   async function (config) {
//     const token=sessionStorage.getItem("token")||localStorage.getItem("token")
//     if(token){
//       // config.headers['token']=token;
//       // config.headers.Autorization=token
//       // config.headers.Autorization=`Bearer ${token}`
//   }
//   return config;
//    },
//   function (err){
//     return Promise.reject(err);
//   }
// )