import React from 'react'

export default function Project() {
  return (
    <section className="bg-[#001b3a] text-white px-8 py-16 text-center">
  <h2 className="text-3xl md:text-4xl font-bold mb-12">Décrivez votre projet en 1 minute</h2>
  <div className="grid md:grid-cols-3 gap-12">
    {/* Step 1 */}
    <div className="flex flex-col items-center">
      <div className="w-24 h-24 mb-4">
        <img src="step1.png" alt="Étape 1" className="w-full h-full object-contain" />
      </div>
      <h3 className="text-lg text-orange-400 font-bold">ETAP 1</h3>
      <p className="text-orange-400 font-semibold mb-2">Remplissez notre formulaire rapide</p>
      <p className="text-sm">Indiquez le type de travaux, le lieu et vos disponibilités.</p>
    </div>

    {/* Step 2 */}
    <div className="flex flex-col items-center">
      <div className="w-24 h-24 mb-4">
        <img src="step2.png" alt="Étape 2" className="w-full h-full object-contain" />
      </div>
      <h3 className="text-lg text-orange-400 font-bold">ETAP 2</h3>
      <p className="text-orange-400 font-semibold mb-2">Un expert vous appelle pour valider votre demande</p>
      <p className="text-sm">Nous affinons ensemble les détails et vous conseillons gratuitement</p>
    </div>

    {/* Step 3 */}
    <div className="flex flex-col items-center">
      <div className="w-24 h-24 mb-4">
        <img src="step3.png" alt="Étape 3" className="w-full h-full object-contain" />
      </div>
      <h3 className="text-lg text-orange-400 font-bold">ETAP 3</h3>
      <p className="text-orange-400 font-semibold mb-2">Recevez plusieurs devis & choisissez votre artisan</p>
      <p className="text-sm">Des artisans certifiés et proches de chez vous vous contactent rapidement.</p>
    </div>
  </div>
</section>
  )
}
