import React from 'react'
const people = [
    {
      name: 'Bosch',
      role: 'Smartphone Devices',
      imageUrl:
        'https://www.citypng.com/public/uploads/preview/bosch-white-logo-free-png-701751694709015zgzeerwbm3.png',
    },
    {
        name: 'Samsung',
        role: 'Smart Appliances',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaOy50BTsnimLbIeaqZXo0gODE32FXiQ8hHh3M5f9lB6ud6DeEUHJFro3QLSAqVd03Q_4&usqp=CAU',
      },
      {
        name: 'Apple',
        role: 'Smart Phones',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdPKIkQHZgTHJiV1Ldn8_Iuq2B4q20tnEEGA&s',
      },

      {
        name: 'Sony',
        role: 'Smart Gadgets',
        imageUrl:
          'https://w7.pngwing.com/pngs/600/954/png-transparent-logo-mobile-world-congress-sony-xperia-xz2-sony-archives-sony-television-text-logo.png',
      },
      {
        name: 'Oppo',
        role: 'Smart Phones',
        imageUrl:
          'https://e7.pngegg.com/pngimages/372/107/png-clipart-oppo-digital-oppo-find-x-oppo-f7-bbk-electronics-oppo-f1s-logo-oppo-text-logo.png',
      },

      {
        name: 'Realme',
        role: 'Mobile Accessories',
        imageUrl:
          'https://erp-image.sgliteasset.com/_next/image?url=https%3A%2F%2Fcdn1.sgliteasset.com%2Fimt%2Fimages%2Fcollection%2Fcollection-12181%2Fcached%2F79HZCfav64d209feda0ad_1691486718_420x420.jpg&w=3840&q=75',
      },
   ]
const TeamSection = () => {
  return (
    <div className="bg-white items-center ms-16 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl me-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Brand Partners</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          That’s great! Partnering with big smartphone companies must bring a lot of opportunities. Do you collaborate on product launches, marketing campaigns, or maybe technology sharing? I’d love to know more about how those partnerships work!
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img alt="" src={person.imageUrl} className="h-16 w-16 rounded-full shadow-inner hover:grayscale"/>
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900 text-start">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TeamSection