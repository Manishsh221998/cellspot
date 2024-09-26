import React from "react";

const Services = () => {
  const stats = [
    { id: 1, name: 'Finding products with free shipping can be a great way to save money.', value: 'Free shipping' },
    { id: 2, name: 'Absolutely! Here are some of the best mobile products in various categories.', value: 'Best Products' },
    { id: 3, name: 'Return products hassle-free if they do not meet your expectations.', value: 'Easy Returns' },
  ]
  return (
    <div className="mt-[200px]">
      <div className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-2 mx-24">
        <div className="text-start pt-12">
          <p className="text-[36px] text-wrap font-bold pb-4 font-sans">We built our business on great customer service</p>
          <p className="text-slate-400 text-wrap pe-2">At the beginning at least, but then we realized we could make a lot more money if we kinda stopped caring about that. Our new strategy is to write a bunch of things that look really good in the headlines, then clarify in the small print but hope people don't actually read it.That’s fantastic to hear! Building a business on great customer service is a solid foundation for success. It often leads to strong customer loyalty and positive word-of-mouth. What specific aspects of customer service have you focused on to create such a strong reputation.</p>
        </div>
        <div className="overflow-hidden rounded-2xl mt-2">
          <img src="https://tailwindui.com/img/ecommerce-images/incentives-07-hero.jpg" alt="" 
          className=" hover:scale-110 duration-700"/>
        </div>
      </div>
      <div className="bg-white pt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-10 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4 animate-pulse">
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-2xl font-semibold tracking-tight text-gray-500 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
    </div>
  );
};

export default Services;
