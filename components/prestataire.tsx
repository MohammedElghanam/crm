import React from 'react'

export default function Prestataire() {
  return (
    <section className="bg-white px-6 py-16">
  <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
    {/* Left Text Section */}
    <div className="text-center lg:text-left max-w-xl">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
        Professionnel du bâtiment ?
      </h2>
      <p className="text-lg text-gray-800 mb-2">
        Vous cherchez des chantiers fiables et réguliers ?<br />
        Inscrivez-vous gratuitement et bénéficiez de projets sélectionnés
        auprès de clients qualifiés.
      </p>
      <p className="text-orange-400 font-medium mb-6">
        Trouvez des projets adaptés à votre métier.
      </p>
      <button className="bg-orange-400 text-white font-medium px-6 py-3 rounded-lg hover:bg-orange-500 transition">
        Devenir prestataire
      </button>
    </div>

    {/* Right Image */}
    <div className="w-full max-w-sm">
      <img src="contractor.png" alt="Professionnel du bâtiment" className="w-full" />
    </div>
  </div>
</section>
  )
}
