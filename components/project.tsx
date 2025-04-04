import React from 'react'
import Image from 'next/image'

export default function Project() {
  return (
    <section className="bg-[#001b3a] text-white py-16 px-32 text-center">
  <h2 className="text-3xl md:text-4xl font-bold mb-20">Décrivez votre projet en 1 minute</h2>
  <div className="grid md:grid-cols-3 gap-12">
    {/* Step 1 */}
    <div className="flex flex-col items-center">
      <div className="w-40 h-40 mb-4 bg-[#EEAD4F] rounded-full relative">
        <Image src="./project/1.svg" width={60} height={60} alt="Étape 1" className=" w-full h-full object-contain absolute -top-2.5 -right-10" />
      </div>
      <div className=' flex flex-col gap-6'>
        <h3 className="text-lg text-[#EEAD4F] font-bold">ETAP 1</h3>
        <p className="text-[#EEAD4F] text-xl font-medium mb-2">Remplissez notre formulaire rapide</p>
        <p className="font-light">Indiquez le type de travaux, le lieu et vos disponibilités.</p>
      </div>
    </div>

    {/* Step 2 */}
    <div className="flex flex-col items-center">
      <div className="w-40 h-40 mb-4 bg-[#EEAD4F] rounded-full relative">
        <Image src="./project/2.svg" width={60} height={60} alt="Étape 1" className=" w-full h-full object-contain " />
      </div>
      <div className=' flex flex-col gap-6'>
        <h3 className="text-lg text-[#EEAD4F] font-bold">ETAP 2</h3>
        <p className="text-[#EEAD4F] text-xl font-medium mb-2">Un expert vous appelle pour valider votre demande</p>
        <p className=" font-light">Nous affinons ensemble les détails et vous conseillons gratuitement</p>
      </div>
    </div>

    {/* Step 3 */}
    <div className="flex flex-col items-center">
      <div className="w-40 h-40 mb-4 bg-[#EEAD4F] rounded-full flex justify-center items-center">
        <Image src="./project/3.svg" width={20} height={20} alt="Étape 1" className=" w-32 h-32 object-contain" />
      </div>
      <div className=' flex flex-col gap-6'>
        <h3 className="text-lg text-[#EEAD4F] font-bold">ETAP 3</h3>
        <p className="text-[#EEAD4F] text-xl font-medium mb-2">Recevez plusieurs devis & choisissez votre artisan</p>
        <p className="font-light">Des artisans certifiés et proches de chez vous vous contactent rapidement.</p>
      </div>
    </div>
  </div>
</section>
  )
}
