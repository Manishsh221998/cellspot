import React from 'react'
import { end_points } from '../../../api/url/api_url'
import { axiosInstance } from '../../../api/axiosInstance/axiosInstance'
import { useFormik } from 'formik'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
 const Add_items = () => {
    let api = end_points.products;
    let nevigate=useNavigate()
    let swAlert=(x,y,z)=>{
  Swal.fire({
    title:x,
    icon:x,
    text:y,
    timer:z
  })
    }
    const getBase64=file=>new Promise((resolve,reject)=>{
        const reader=new FileReader();
        reader.readAsDataURL(file);
        reader.onload=()=>resolve(reader.result);
        reader.onerror=reject;
       })

    let submitHandler = (formData) => {
      console.log("Form Data :", formData)
      axiosInstance.post(api,formData)
      .then(res=>{
        console.log("axios res, for adding product",res)
        if(res.status===201) swAlert("success","Product added successfully",1200)
        else swAlert("error","something went wrong",1200)
    nevigate("/dashboard")
      })
      .catch(err=>console.log("axios error for adding product",err))
    }
    let formValidator = (data) => {
      let err = {}
      if (data.brand_name.length < 1){ err.brand_name = "required field*"}
      if (data.category.length < 1){ err.category = "required field*"}
      if (data.model_no.length < 1) {err.model_no = "required field*"}
      if (data.color.length < 1) {err.color = "required field*"}
  
      if (data.price.length < 1){ err.price = "required field*"}
      else if (data.price < 0){ err.price = "(-) value is not allowed"}
  
      if (data.warranty.length < 1) {err.warranty = "required field*"}
      if (data.product_details.length < 1) {err.product_details = "required field*"}
  
      if (!data.prod_img) {err.prod_img = "required field*"}
  
      return err
    };
  
    let formik = useFormik({
      initialValues: {
        brand_name: "",
        category: "",
        model_no: "",
        color: "",
        price: "",
        product_details: "",
        warranty: "",
        prod_img:"",
      },
      onSubmit: submitHandler,
      validate:formValidator
    });
  
    return (
      <div className="text-start bg-[#ffffff] p-14">
        <form
            onSubmit={formik.handleSubmit}
          className="mx-auto p-10 max-w-xl sm:mt-20 shadow-lg rounded-2xl bg-white drop-shadow-sm"
      >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="brand_name"
                className="block text-sm font-semibold leading-6  text-[#ff6d2e]"
              >
                Brand name*
              </label>
              <div className="mt-2.5">
                <input
                  id="brand_name"
                  name="brand_name"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.brand_name}
                  onBlur={formik.handleBlur}
                  placeholder="Enter brand name"
                   className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                />
               {formik?.touched?.brand_name&&formik?.errors?.brand_name?<p className="text-end pe-1 text-[#6C4E31]">{formik?.errors?.brand_name}</p>:""}
               </div>
            </div>
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-semibold leading-6 text-[#ff6d2e]"
              >
                Category*
              </label>
              <div className="mt-2.5">
                <input
                  id="category"
                  name="category"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.category}
                  onBlur={formik.handleBlur}
                  placeholder="Enter category"
                   className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                />
               {formik?.touched?.category&&formik?.errors?.category?<p className="text-end pe-1 text-[#6C4E31]">{formik?.errors?.category}</p>:""}
              </div>
            </div>
            <div>
              <label
                htmlFor="model_no"
                className="block text-sm font-semibold leading-6  text-[#ff6d2e]"
              >
                Model no.*
              </label>
              <div className="mt-2.5">
                <input
                  id="model_no"
                  name="model_no"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.model_no}
                  onBlur={formik.handleBlur}
                  placeholder="Enter model no"
                   className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                />
               {formik?.touched?.model_no&&formik?.errors?.model_no?<p className="text-end pe-1 text-[#6C4E31]">{formik?.errors?.model_no}</p>:""}
              </div>
            </div>
            <div>
              <label
                htmlFor="color"
                className="block text-sm font-semibold leading-6 text-[#ff6d2e]"
              >
                Color*
              </label>
              <div className="mt-2.5">
                <input
                  id="color"
                  name="color"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.color}
                  onBlur={formik.handleBlur}
                  placeholder="Enter color"
                   className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                />
               {formik?.touched?.color&&formik?.errors?.color?<p className="text-end pe-1 text-[#6C4E31]">{formik?.errors?.color}</p>:""}
              </div>
            </div>
            <div>
              <label
                htmlFor="price"
                className="block text-sm font-semibold leading-6  text-[#ff6d2e]"
              >
                Price*
              </label>
              <div className="mt-2.5">
                <input
                  id="price"
                  name="price"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.price}
                  onBlur={formik.handleBlur}
                  placeholder="Enter price"
                   className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                />
               {formik?.touched?.price&&formik?.errors?.price?<p className="text-end pe-1 text-[#6C4E31]">{formik?.errors?.price}</p>:""}
              </div>
            </div>
            <div>
              <label
                htmlFor="warranrty"
                className="block text-sm font-semibold leading-6 text-[#ff6d2e]"
              >
                Warranrty*
              </label>
              <div className="mt-2.5">
                {/* <input
                  id="warranty"
                  name="warranty"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.warranty}
                  onBlur={formik.handleBlur}
                  placeholder="Enter warranrty"
                   className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                /> */}
                <select name="warranty" id="warranty" onChange={formik.handleChange}
                  value={formik.values.warranty}
                  onBlur={formik.handleBlur}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6" >
                  <option selected >Choose warranty</option>
                  <option value="6 months">6 months</option>
                  <option value="1 year">1 year</option>
                  <option value="2 year">2 year</option>
                </select>
               {formik?.touched?.warranty&&formik?.errors?.warranty?<p className="text-end pe-1 text-[#6C4E31]">{formik?.errors?.warranty}</p>:""}
              </div>
            </div>
  
            <div className="sm:col-span-2">
              <label
                htmlFor="prod_img"
                className="block text-sm font-semibold leading-6 text-[#ff6d2e]"
              >
                Upload an image*
              </label>
              <div className="mt-2.5">
                <input
                  id="prod_img"
                  name="prod_img"
                  type="file"
                   onBlur={formik.handleBlur}
                   className="file-input file-input-bordered block w-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-end focus:ring-1 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
             onChange={(event)=>{
              getBase64(event.target.files[0]).then(res=>{
                console.log("Add product image read as data URL:",res);
                formik.setFieldValue("prod_img",res)
              }).catch(err=>console.log("add product image url error",err)
              )
             }}
                />
              {formik?.touched?.prod_img&&formik?.errors?.prod_img?<p className="text-end pe-1 text-[#6C4E31]">{formik?.errors?.prod_img}</p>:""}
              </div>
            </div>
  
            <div className="sm:col-span-2">
              <label
                htmlFor="product_details"
                className="block text-sm font-semibold leading-6 text-[#ff6d2e]"
              >
                Discription*
              </label>
              <div className="mt-2.5">
                <textarea
                  id="product_details"
                  name="product_details"
                  onChange={formik.handleChange}
                  value={formik.values.product_details}
                  onBlur={formik.handleBlur}
                  placeholder="Product details"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                />
              {formik?.touched?.product_details&&formik?.errors?.product_details?<p className="text-end pe-1 text-[#3e316c]">{formik?.errors?.product_details}</p>:""}
              </div>
            </div>
          </div>
          <div className="mt-10">
            {/* <button
              type="submit"
               className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button> */}
            <button className='btn btn-outline shadow-md text-[#ff6039] w-full'>Submit</button> 
           
          </div>
         </form>
      </div>
    );
  };

export default Add_items