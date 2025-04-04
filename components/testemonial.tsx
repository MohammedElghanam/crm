import React from 'react'

export default function Testemonial() {
  return (
    <section className="bg-white px-6 py-16">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-16">
    Ils nous ont fait confiance
  </h2>

  <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-start">
    {/* Left side */}
    <div>
      <h3 className="text-3xl font-extrabold text-blue-900 mb-4 leading-tight">
        What Our <br />
        Customers Says
      </h3>
      <p className="text-gray-500 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>
      <button className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800">
        View More
      </button>
    </div>

    {/* Right side - Testimonials */}
    <div className="flex flex-col gap-6">
      {[
        { active: false },
        { active: true },
        { active: false },
      ].map(({ active }, idx) => (
        <div
          key={idx}
          className={`rounded-xl px-6 py-4 shadow-md relative ${
            active
              ? 'bg-orange-50 border border-orange-300'
              : 'bg-white'
          }`}
        >
          <p className="font-semibold text-gray-800 mb-1">Mehwish</p>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
          <span className={`absolute bottom-3 right-4 text-3xl ${
            active ? 'text-orange-400' : 'text-gray-300'
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
