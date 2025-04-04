import React from 'react'

export default function Testimonial() {
  return (
    <section className="relative  px-6 py-16">
        {/* 🔥 Background Shape 🔥 */}
        <div className="absolute top-0 left-1/2 w-[300px] h-[300px] -z-20 bg-yellow-200 rounded-full opacity-30 -translate-x-[10%] -translate-y-1/3 blur-[120px]"></div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left side */}
        <div>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            What Our <br /> Customers Says
          </h3>
          <p className="text-gray-500 mb-6 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="bg-gray-900 text-white px-6 py-3 rounded-md shadow-lg">
            View More
          </button>
        </div>

        {/* Right side - Testimonials */}
        <div className="flex flex-col gap-6 relative">
        <div className="absolute top-50 left-1/2 w-[300px] h-[300px] -z-10 bg-yellow-200 rounded-full opacity-30 -translate-x-[10%] -translate-y-1/3 blur-[120px]"></div>

          {[
            { 
              active: false,
              name: "Mehwish",
              comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
              photo: "https://randomuser.me/api/portraits/women/44.jpg"
            },
            { 
              active: true,
              name: "John",
              comment: "Great service! The team was very professional and delivered on time.",
              photo: "https://randomuser.me/api/portraits/men/32.jpg"
            },
            { 
              active: false,
              name: "Sarah",
              comment: "Highly recommended. Will definitely work with them again.",
              photo: "https://randomuser.me/api/portraits/women/63.jpg"
            },
          ].map(({ active, name, comment, photo }, idx) => (
            <div
              key={idx}
              className={`relative flex items-center gap-4 rounded-xl px-6 py-5 shadow-md border-l-4 transition-all duration-300 bg-white ${
                active 
                  ? 'border-orange-400 shadow-lg scale-105 hover:scale-110'  // 🔥 Hover Effect
                  : 'border-gray-300 shadow-sm' 
              }`}
            >
              {/* User Image */}
              <img 
                src={photo} 
                alt={name}
                className="w-14 h-14 rounded-full object-cover border-2 border-gray-200"
              />
              
              {/* Text Content */}
              <div>
                <p className="font-semibold text-gray-900">{name}</p>
                <p className="text-gray-600 text-sm">{comment}</p>
              </div>

              {/* Quotation Mark */}
              <span className={`absolute top-3 right-4 text-3xl font-bold ${
                active ? 'text-orange-[#EEAD4F]' : 'text-gray-300'
              }`}>
                ”
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
