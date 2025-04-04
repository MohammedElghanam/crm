import React from 'react'

export default function About() {
  return (
    <section className="bg-white text-center px-6 py-16">
  <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-10">
    Pourquoi choisir Home Artisan ?
  </h2>

  {/* Image Gallery */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
    {[
      { src: "bouscat.jpg", label: "Le Bouscat (33)" },
      { src: "rueil.jpg", label: "Rueil-Malmaison (78)" },
      { src: "villeurbanne.jpg", label: "Villeurbanne (69)" },
      { src: "sanary.jpg", label: "Sanary-sur-Mer (83)" },
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
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
    {[
      {
        icon: "verified-icon.png",
        title: "Artisans vérifiés RGE",
      },
      {
        icon: "support-icon.png",
        title: "Accompagnement personnalisé",
      },
      {
        icon: "quote-icon.png",
        title: "Devis gratuits",
      },
    ].map(({ icon, title }, idx) => (
      <div
        key={idx}
        className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center gap-3"
      >
        <img src={icon} alt={title} className="w-12 h-12 object-contain" />
        <p className="font-semibold text-blue-900">{title}</p>
      </div>
    ))}
  </div>
</section>
  )
}
