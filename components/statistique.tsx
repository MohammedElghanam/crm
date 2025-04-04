import React from 'react'

export default function Statistique() {
  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-3 text-center px-32 py-20 gap-16">
        <div className=' flex flex-col gap-5'>
          <h2 className="text-6xl font-bold text-[#092140]">+25 000</h2>
          <p className="font-semibold">Artisans certifiés</p>
          <p className="text-[18px] font-sm text-[#EEAD4F] mt-2">
            Des professionnels vérifiés, évalués et vérifiés RGE dans toute la France.
          </p>
        </div>
        <div className=' flex flex-col gap-5'>
          <h2 className="text-6xl font-bold text-[#092140]">+10 000</h2>
          <p className="font-semibold">Rendez-vous confirmés / mois</p>
          <p className="text-[18px] font-sm text-[#EEAD4F] mt-2">
            Une équipe réactive pour connecter les particuliers aux bons artisans.
          </p>
        </div>
        <div className=' flex flex-col gap-5'>
          <h2 className="text-6xl font-bold text-[#092140]">92%</h2>
          <p className="font-semibold">De satisfaction client</p>
          <p className="text-[18px] font-sm text-[#EEAD4F] mt-2">
            Nos utilisateurs apprécient la simplicité, et la qualité des artisans proposés.
          </p>
        </div>
      </section>
    </div>
  )
  
}
