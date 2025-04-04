import React from 'react'

export default function About() {
  return (
    <section className=" text-center px-6 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-10 md:mb-16">
          Pourquoi choisir Home Artisan ?
        </h2>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12 md:mb-16 px-4">
          {[
            { src: "images/1.jpeg", label: "Le Bouscat (33)" },
            { src: "images/2.jpeg", label: "Rueil-Malmaison (78)" },
            { src: "images/3.jpeg", label: "Villeurbanne (69)" },
            { src: "images/4.jpeg", label: "Sanary-sur-Mer (83)" },
          ].map(({ src, label }, idx) => (
            <div key={idx} className="relative rounded-2xl overflow-hidden shadow-md">
              <img src={src} alt={label} className="w-full h-48 object-cover" />
              <span className="absolute bottom-2 right-2 bg-blue-100 text-blue-800 text-sm font-semibold px-2 py-1 rounded">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-6 px-4">
          {[
            {
              icon: "images/verifie.png",
              title: "Artisans vérifiés RGE",
            },
            {
              icon: "images/como.png",
              title: "Accompagnement personnalisé",
            },
            {
              icon: "images/billet.png",
              title: "Devis gratuits",
            },
          ].map(({ icon, title }, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md py-6 px-4 flex flex-col items-center w-full sm:w-44"
            >
              <img src={icon} alt={title} className="w-12 h-12 object-contain mb-4" />
              <p className="font-semibold text-blue-900 text-center">{title}</p>
              <div className="h-12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}