import React from 'react'

const Carosuel = () => {
  return (
    <div className='mx-16'> 
<div className="carousel w-full rounded-xl shadow-md">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="../asset/Carosuel/c5.avif"
      className="w-full h-[250px]" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="../asset/Carosuel/c6.avif"
      className="w-full  h-[250px]" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="../asset/Carosuel/c7.avif"
      className="w-full  h-[250px]" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
{/* <section className="overflow-hidden h-[250px] rounded-lg shadow-2xl md:grid md:grid-cols-3">
  <img
    alt=""
    src="./asset/img.jpg"
    className="w-[450px] h-auto object-cover md:h-[250px]"
  />

  <div className="text-center sm:p-6 md:col-span-2 lg:p-8 h-[200px]">
    <p className="text-sm font-semibold uppercase tracking-widest">Run with the pack</p>

    <h2 className="mt-6 font-black uppercase">
      <span className="text-4xl font-black sm:text-5xl lg:text-6xl"> Get 20% off </span>

      <span className="mt-2 block text-sm">On your next order over $50</span>
    </h2>

    <a
      className="mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white"
      href="#"
    >
      Get Discount
    </a>

    <p className="mt-8 text-xs font-medium uppercase text-gray-400">
      Offer valid until 24th March, 2021 *
    </p>
  </div>
</section> */}
    </div>
  )
}

export default Carosuel