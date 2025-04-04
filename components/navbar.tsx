import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-white border-b border-gray-300">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto px-4 py-4">
        {/* Logo on the left */}
        <a href="#" className="flex items-center">
          <Image
            src="/images/logo_home.png"
            width={120}
            height={120}
            alt="logo"
          />
        </a>

        {/* Right side buttons/links */}
        <div className="flex items-center space-x-16">
          <Link href="#" className="text-black font-medium">
            Devenir prestataire
          </Link>
          <div className=" flex justify-center items-center gap-4">
            <button
              className="md:px-10 md:py-2 px-8 py-1.5 text-white font-semibold text-base
              bg-[#EEAD4F] transition-all duration-200 rounded-lg"
            >
              Demander un Devis
            </button>
            <button
              className="md:px-10 md:py-2 px-8 py-1.5 text-black font-semibold text-base
              bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg border border-gray-300"
            >
              Connexion
            </button>
          </div>
        </div>
      </div>
    </div>

    //section 
  );
}
