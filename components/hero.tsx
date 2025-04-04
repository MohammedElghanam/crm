import React from 'react'

export default function Hero() {
  return (
    <div className="relative font-sans mt-16">


      <div className=' absolute top-0 left-0 -z-10 filter blur-[300px] rounded-full w-96 h-96 bg-[#092140]'></div>

      <section className=" py-12 px-32 flex justify-center items-center gap-4">

        <div className=' flex flex-col gap-5 p-5'>
          <div>
            <h1 className="max-w-2xl mb-7 text-5xl font-medium leading-17 tracking-tight md:text-6xl xl:text-7xl text-[#092140]">Besoin de rénover, réparer ou aménager ?</h1>
            <p className="text-gray-500 mb-2">
              Décrivez votre besoin, recevez des devis qualifiés, et choisissez
              le bon artisan en toute sérénité.
            </p>
          </div>

          <div className="flex items-center gap-2 max-w-xl mt-0">
            <input
              type="text"
              placeholder="Cherchez votre prestation : pose une cuisine, monter un meuble ..."
              className="flex-1 border-[0.5px] border-gray-400 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EEAD4F]"
            />
            <button className="bg-[#EEAD4F] py-2.5 px-4 rounded-lg text-white">
              ➝
            </button>
          </div>

          <div>
            <button className=' text-[#EEAD4F] font-bold text-[18px]'> Qui sommes-nous ? </button>
          </div>
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
