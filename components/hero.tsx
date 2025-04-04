import React from 'react'

export default function Hero() {
  return (
    <div className="bg-white font-sans">


      <section className="bg-gradient-to-r from-gray-50 to-white px-8 py-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">\          Besoin de rénover, réparer ou aménager ?
        </h1>
        <p className="text-gray-700 text-lg mb-2">
          <span className="text-pink-600 font-semibold">
            Décrivez votre besoin, recevez des devis qualifiés, et choisissez
          </span>{" "}
          le bon artisan en toute sérénité.
        </p>

        <div className="flex items-center gap-2 max-w-xl mt-6">
          <input
            type="text"
            placeholder="Cherchez votre prestation : pose une cuisine, monter un meuble ..."
            className="flex-1 border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
          />
          <button className="bg-orange-400 hover:bg-orange-500 p-3 rounded-lg text-white">
            ➝
          </button>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          {["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg"].map((img, index) => (
            <div key={index} className="w-24 h-32 rounded-2xl overflow-hidden shadow">
              <img
                src={img}
                alt="Artisan en action"
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </section>

      
    </div>
  );
}
