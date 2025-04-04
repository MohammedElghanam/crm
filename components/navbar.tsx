import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-white border-b border-white dark:bg-white">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto px-4 py-2.5">
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
          <button
            className="md:px-10 md:py-2 px-8 py-1.5 text-white font-semibold text-base
             bg-yellow-500 hover:bg-yellow-600 transition-all duration-200 rounded-lg"
          >
            Demander un Devis
          </button>
          <Link href="#" className="text-black font-medium">
            Devenir prestataire
          </Link>
          <button
            className="md:px-10 md:py-2 px-8 py-1.5 text-black font-semibold text-base
            bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg border border-black"
          >
            Connexion
          </button>
        </div>
      </div>
    </div>

    //section 
  );
}
