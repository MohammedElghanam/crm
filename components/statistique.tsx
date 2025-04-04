"use client";
import { useEffect, useState } from "react";

export default function Statistique() {

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setCount1((prev) => (prev >= 25000 ? 25000 : prev + 250));
    }, 10);

    const interval2 = setInterval(() => {
      setCount2((prev) => (prev >= 10000 ? 10000 : prev + 100));
    }, 20);

    const interval3 = setInterval(() => {
      setCount3((prev) => (prev >= 92 ? 92 : prev + 1));
    }, 30);

    // Cleanup function
    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);

  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-3 text-center px-32 py-20 gap-16">
        <div className=' flex flex-col gap-5'>
          <h2 className="text-6xl font-bold text-[#092140]">+{count1.toLocaleString()}</h2>
          <p className="font-semibold">Artisans certifiés</p>
          <p className="text-[18px] font-sm text-[#EEAD4F] mt-2">
            Des professionnels vérifiés, évalués et vérifiés RGE dans toute la France.
          </p>
        </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-6xl font-bold text-[#092140]">+{count2.toLocaleString()}</h2>
            <p className="font-semibold">Rendez-vous confirmés / mois</p>
            <p className="text-[18px] font-sm text-[#EEAD4F] mt-2">
              Une équipe réactive pour connecter les particuliers aux bons artisans.
            </p>
          </div>
        <div className=' flex flex-col gap-5'>
          <h2 className="text-6xl font-bold text-[#092140]">{count3}%</h2>
          <p className="font-semibold">De satisfaction client</p>
          <p className="text-[18px] font-sm text-[#EEAD4F] mt-2">
            Nos utilisateurs apprécient la simplicité, et la qualité des artisans proposés.
          </p>
        </div>
      </section>
    </div>
  )
  
}
