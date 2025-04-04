import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#001b3a] text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-sm">
        {/* Logo and Branding */}
        <div className="flex items-center">
          
          <Image
            src="/images/home_white.png"
            width={200}
            height={120}
            alt="logo"
            className=""
          />
        </div>

        {/* Links */}
        <div className="space-y-2">
          <a href="#" className="text-yellow-500 hover:underline">
            Qui sommes-nous ?
          </a>
          <br />
          <a href="#" className="hover:underline">
            CGV
          </a>
          <br />
          <a href="#" className="hover:underline">
            Témoignages
          </a>
          <br />
          <a href="#" className="hover:underline">
            Nos Services
          </a>
          <br />
          <a href="#" className="hover:underline">
            Demandez un devis
          </a>
          <br />
          <a href="#" className="hover:underline">
            Devenir membre
          </a>
          <br />
          <a href="#" className="hover:underline">
            Nos abonnements pros
          </a>
          <br />
          <a href="#" className="hover:underline">
            Contactez-nous
          </a>
        </div>

        {/* Contact Info */}
        <div className="space-y-2 text-yellow-500">
          <p>27 place de la madeleine, 75008 Paris</p>
          <p>Whatsapp : 07 44 03 95 51</p>
          <p>contact@home-artisan.fr</p>
          <div className="flex gap-4 mt-2 text-xl">
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
            <a href="#">
              <i className="fab fa-linkedin" />
            </a>
            <a href="#">
              <i className="fab fa-facebook" />
            </a>
            <a href="#">
              <i className="fab fa-whatsapp" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
