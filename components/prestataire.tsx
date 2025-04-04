import React from "react";
import Image from "next/image";

export default function Prestataire() {
  return (
    <section className=" px-6 pb-0 relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center min-h-[400px]">
        {/* Centered Text Content */}
        <div className="text-center w-full lg:w-[50%] lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
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
          <button className="bg-yellow-500 text-white font-medium px-6 py-3 rounded-lg hover:bg-yellow-600 transition">
            Devenir prestataire
          </button>
        </div>

        {/* Image moved slightly left */}
        <div className="mt-8 lg:mt-0 lg:absolute lg:right-[80px] lg:bottom-0">
          <Image
            src="/images/personne1.png"
            width={350}
            height={120}
            alt="Prestataire"
          />
        </div>
      </div>
    </section>
  );
}