import React, { useEffect, useState } from "react";
import { end_points } from "../../api/url/api_url";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from "../../api/axiosInstance/axiosInstance";

const All_products = () => {
  let api = end_points.products;
  // console.log("Api",api);
  let [data, setData] = useState([]);

  let nevigate = useNavigate();
  const getData = () => {
    axiosInstance
      .get(api)
      .then((res) => {
        console.log("Api for all product :", res);
        setData(res.data);
      })
      .catch((err) => console.log("axios error for all product:", err));
  };
  useEffect(() => {
    getData();
  }, [setData, api]);

  let err = data.map((v) => v.category);
  console.log("cat :", err);
  let newArr = [];
  for (let i of err) {
    if (!newArr.includes(i)) {
      newArr.push(i);
    }
  }

  return (
    <div className="mt-[110px]">
      {/* <div className='flex text-start'>
      <div className="px-4 sm:px-0">
        <h3 className="text-2xl font-semibold leading-7 text-gray-900">All product</h3>
       </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          {newArr.map((v,i)=>(
                        <Link to={`view_items/${v}`}><button className="btn btn-ghost text-sm font-medium leading-6 text-gray-900">{v}</button></Link>
          ))}
           </div>
        </dl>
      </div>
    </div> */}
         <div className="flex justify-start">
          <div className="flex h-screen flex-col justify-between border-e bg-white">
            <div className="px-4 py-6">
              <span className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-mg font-semibold text-gray-600">
                Category Wise
              </span>

              <ul className="mt-6 space-y-1">
                {newArr.map((v, i) => (
                  <li>
                    <Link
                      to={`view_items/${v}`}
                      className="text-justify block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      {v}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((v) => (
            <div key={v.id} className="group shadow-lg rounded-lg p-4">
              <div className="aspect-h-1 aspect-w-1 w-full rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                   src={v.prod_img}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-start font-bold text-lg text-gray-700">
                    {v.brand_name.toUpperCase()}
                  </h3>
                  <p className="mt-1 text-md text-[#b1a122]"><b>Model </b>{v.model_no}</p>  

                </div>
                <div className="">
              {/* <Link to="">
              <button className='btn btn-accent' >View more</button>
              </Link>   */}
              <Link to={`single_product/${v.id}`}><button className='btn btn-accent' >View more</button>
              </Link>  
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
        </div>
    
     </div>
  );
};
export default All_products;
