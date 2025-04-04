import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[#001b3a] text-white px-6 py-10">
  <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-sm">
    {/* Logo and Branding */}
    <div>
      <img src="home-artisan-logo-white.png" alt="Home Artisan" className="w-40 mb-4" />
    </div>

    {/* Links */}
    <div className="space-y-2">
      <a href="#" className="text-white hover:underline">Qui sommes-nous ?</a><br />
      <a href="#" className="hover:underline">CGV</a><br />
      <a href="#" className="hover:underline">Témoignages</a><br />
      <a href="#" className="hover:underline">Nos Services</a><br />
      <a href="#" className="hover:underline">Demandez un devis</a><br />
      <a href="#" className="hover:underline">Devenir membre</a><br />
      <a href="#" className="hover:underline">Nos abonnements pros</a><br />
      <a href="#" className="hover:underline">Contactez-nous</a>
    </div>

    {/* Contact Info */}
    <div className="space-y-2">
      <p>27 place de la madeleine, 75008 Paris</p>
      <p>Whatsapp : 07 44 03 95 51</p>
      <p>contact@home-artisan.fr</p>
      <div className="flex gap-4 mt-2 text-xl">
        <a href="#"><i className="fab fa-instagram" /></a>
        <a href="#"><i className="fab fa-linkedin" /></a>
        <a href="#"><i className="fab fa-facebook" /></a>
        <a href="#"><i className="fab fa-whatsapp" /></a>
      </div>
    </div>
  </div>
</footer>
  )
}
