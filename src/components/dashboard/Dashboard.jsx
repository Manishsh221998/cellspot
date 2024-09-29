import React, { useEffect, useState } from "react";
import { end_points } from "../../api/url/api_url";
import { axiosInstance } from "../../api/axiosInstance/axiosInstance";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { LuEye } from "react-icons/lu";
import { IoLogOutOutline } from "react-icons/io5";

const Dashboard = () => {
  let api = end_points.products;
  let [data, setData] = useState([]);
  let [searchText, searchTextTerm] = useState("");

let nevigate=useNavigate()  
  let swAlert = (x, y, z) => {
    Swal.fire({
      title: x,
      icon: x,
      text: y,
      time: z,
    });
  };
  const getData = () => {
    axiosInstance
      .get(api)
      .then((res) => {
        console.log("Axios res for invetory table", res);
        setData(res.data);
      })
      .catch((err) => console.log("Axios err for invetory table", err));
  };
  useEffect(() => {
    getData();
  }, [api, setData]);

  const DeleteItem = (item_id) => {
    // console.log("Single Item id for delete the product",item_id);
    let api = end_points.products + "/" + item_id;
    axiosInstance
      .delete(api)
      .then((res) => {
        console.log("Axios res for delete", res);
        swAlert("success", "Item deleted successfully", 1700);
        getData(); //re-fetching of item after deletion
      })
      .catch((err) => console.log("axios err for delete", err));
  };

  let adminLogout=()=>{
    window.localStorage.clear("isAdminLogged")
    window.localStorage.clear("link")

     nevigate("/")
     window.location.reload()
  }

  return (
    <div className="mt-[190px] mb-[150px] mx-16">
         
      <div className="overflow-x-auto">
        <div className="flex justify-between flex-wrap mb-2 mx-auto">
          {/* search for listed product */}
          <div>
            <label
              htmlFor="search"
              className="relative mb-3 block overflow-hidden border-b-2 border-gray-500 bg-transparent pt-3 focus-within:border-blue-600"
            >
              <input
                type="text"
                name="search"
                id="search"
                onChange={(event) => searchTextTerm(event.target.value)}
                placeholder="Search"
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />

              <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-900 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                Search
              </span>
            </label>
          </div>
          {/* Add product link section */}
          <div className="">
            <button className="btn btn-outline text-[#2f80a2] text-[17.5px] font-bold shadow-md hover:shadow-none">
              <IoIosAddCircleOutline className="text-2xl" />
              <Link to="add_items">Add Product</Link>
            </button>
          </div>
        </div>
        {/* Dashboard inventory table */}
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right text-lg">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-[#d32727]">
                List
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-[#d32727] text-start">
                Image
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-[#d32727] text-start">
                Brand Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-[#d32727] text-start">
                Category
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-[#d32727] text-end">
                Price
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-[#d32727]">
                Actions
              </th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          {data
            .filter((item) => {
              if (searchText === "") {
                return item;
              } else if (
                item.brand_name
                  .toLowerCase()
                  .includes(searchText.toLowerCase()) ||
                item.category
                  .toLowerCase()
                  .includes(searchText.toLowerCase()) ||
                item.price.toLowerCase().includes(searchText.toLowerCase())
              ) {
                return item;
              }
            })
            .map((v, i) => (
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-950">
                    {i + 1}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    <img
                      src={v.prod_img}
                      alt="inproduct image"
                      className="h-[50px] w-[55px] rounded-lg p-0.5 flex justify-start"
                    />
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 font-medium text-start">
                 {v.brand_name} <br />
                 < >
                           <dd className="inline text-xs text-[#9f9e9e]">{v.model_no}</dd>
                        </>

                  </td>

                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 font-medium text-start">
                    {v.category}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 font-medium text-end">
                    {v.price}
                  </td>
                  <td className="whitespace-nowrap ps-7 py-2.5">
                    {/* <a
  className="inline-block shadow-md rounded border border-indigo-600 px-6 py-2 text-md font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
  href="#"
> 
ps-7 py-2.5
  Edit
</a> */}
                    <Link to={`edit_item/${v.id}`}>
                      <button className="btn btn-outline shadow-md text-[#41861c] me-2">
                        <FaRegEdit />
                        Edit
                      </button>
                    </Link>
                    {/* <Link to={`view/${v.id}`}>
                     <button className="btn btn-outline shadow-md text-[#309adc] me-2">
                      <FaRegEdit />
                      View
                    </button>
                  </Link> */}
                    <>
                      {/* <button className="btn btn-outline shadow-md text-[#309adc] me-2" onClick={()=>document.getElementById(v.id).showModal()}><FaRegEdit />View</button>
<dialog id={v.id} className="modal modal-bottom sm:modal-middle">
    <div className="flex flex-wrap lg:w-[450px] md:w-[300px] sm:w-[200px] sm:flex">
  <div className="modal-box text-start">
    <img src={v.prod_img} alt="img" className=" h-[220px] lg:w-[260px] rounded-md mb-3 mt-1"/>
    <div>
    <h3 className="font-bold text-xl text-[#999656]">{v.brand_name.toUpperCase()}</h3>
<span className="text-[#645b46] ms-24"> 
     <p className="py-2">Category - <b>{v.category}</b></p>
       <p className="py-2">Color - <b>{v.color}</b></p>
    <p className="py-2">Model no. - <b>{v.model_no}</b></p>
    <p className="py-2">Price - <MdOutlineCurrencyRupee className="inline-block text-[16px] mb-1"/><b>{v.price}</b></p>
    <p className="py-2">Warranty - <b>{v.warranty}</b> </p>
    <p className="py-2 text-wrap">Details - <b>{v.product_details}</b></p>
    </span>
    </div>
    <div className="modal-action">
      <form method="dialog">
         <button className="btn">Close</button>
      </form>
    </div>
    </div>
  </div>
</dialog> */}
                    </>
                    {/* ---------view product for admin using dialog box on dashboad------- */}
                    <button
                      className="btn btn-outline shadow-md text-[#309adc] me-2"
                      onClick={() => document.getElementById(v.id).showModal()}
                    >
                      <LuEye />
                      View
                    </button>
                    <dialog
                      id={v.id}
                      className="modal modal-bottom sm:modal-middle"
                    >
                      <div className="flex flex-wrap lg:w-[450px] md:w-[300px] sm:w-[200px] sm:flex">
                        <div className="modal-box text-start">
                          <img
                            src={v.prod_img}
                            alt="img"
                            className=" h-[220px] lg:w-[260px] rounded-md mb-3 mt-1"
                          />
                          {/* <div>
    <h3 className="font-bold text-xl text-[#999656]">{v.brand_name.toUpperCase()}</h3>
<span className="text-[#645b46] ms-24"> 
     <p className="py-2">Category - <b>{v.category}</b></p>
       <p className="py-2">Color - <b>{v.color}</b></p>
    <p className="py-2">Model no. - <b>{v.model_no}</b></p>
    <p className="py-2">Price - <MdOutlineCurrencyRupee className="inline-block text-[16px] mb-1"/><b>{v.price}</b></p>
    <p className="py-2">Warranty - <b>{v.warranty}</b> </p>
    <p className="py-2 text-wrap">Details - <b>{v.product_details}</b></p>
    </span>
    </div> */}
                          <div className="text-start">
                            <div className="border-t border-gray-100">
                              <dl className="divide-y divide-gray-100">
                                <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 bg-gray-50">
                                  <dt className="text-sm font-medium leading-6 text-gray-900">
                                    Category
                                  </dt>
                                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    {v.category}
                                  </dd>
                                </div>
                              </dl>
                            </div>
                            <div className="border-t border-gray-100 ">
                              <dl className="divide-y divide-gray-100">
                                <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                  <dt className="text-sm font-medium leading-6 text-gray-900">
                                    Color
                                  </dt>
                                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    {v.color}
                                  </dd>
                                </div>
                              </dl>
                            </div>
                            <div className="border-t border-gray-100  bg-gray-50">
                              <dl className="divide-y divide-gray-100">
                                <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                  <dt className="text-sm font-medium leading-6 text-gray-900">
                                    Model no
                                  </dt>
                                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    {v.model_no}
                                  </dd>
                                </div>
                              </dl>
                            </div>
                            <div className="border-t border-gray-100">
                              <dl className="divide-y divide-gray-100">
                                <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                  <dt className="text-sm font-medium leading-6 text-gray-900">
                                    Price
                                  </dt>
                                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    {v.price}
                                    <MdOutlineCurrencyRupee className="inline-block text-[14px] mb-1" />
                                  </dd>
                                </div>
                              </dl>
                            </div>
                            <div className="border-t border-gray-100  bg-gray-50">
                              <dl className="divide-y divide-gray-100">
                                <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                  <dt className="text-sm font-medium leading-6 text-gray-900">
                                    Warranty
                                  </dt>
                                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    {v.warranty}
                                  </dd>
                                </div>
                              </dl>
                            </div>
                            <div className="border-t border-gray-100">
                              <dl className="divide-y divide-gray-100">
                                <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                  <dt className="text-sm font-medium leading-6 text-gray-900">
                                    Details
                                  </dt>
                                  <dd className="mt-1 text-wrap text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    {v.product_details}
                                  </dd>
                                </div>
                              </dl>
                            </div>
                          </div>
                          <div className="modal-action">
                            <form method="dialog">
                              <button className="btn hover:shadow-lg">Close</button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </dialog>
                    <button
                      className="btn btn-outline shadow-md text-[#ff3131]"
                      onClick={() => {
                        DeleteItem(v.id);
                      }}
                    >
                      <RiDeleteBin6Line className="text-[15px]" />
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
        </table>
      </div>
      <div className="flex justify-end">
      <button onClick={adminLogout} className="btn btn-ghost text-[24px]"><IoLogOutOutline />
      </button>
      </div>
    </div>
  );
};

export default Dashboard;
