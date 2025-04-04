import React from 'react'

export default function Statistique() {
  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-3 text-center px-8 py-12 gap-6">
        <div>
          <h2 className="text-3xl font-bold text-blue-900">+25 000</h2>
          <p className="font-semibold">Artisans certifiés</p>
          <p className="text-sm text-orange-500 mt-2">
            Des professionnels vérifiés, évalués et vérifiés RGE dans toute la France.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-blue-900">+10 000</h2>
          <p className="font-semibold">Rendez-vous confirmés / mois</p>
          <p className="text-sm text-orange-500 mt-2">
            Une équipe réactive pour connecter les particuliers aux bons artisans.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-blue-900">92%</h2>
          <p className="font-semibold">De satisfaction client</p>
          <p className="text-sm text-orange-500 mt-2">
            Nos utilisateurs apprécient la simplicité, et la qualité des artisans proposés.
          </p>
        </div>
      </section>
    </div>
  )
  
}
