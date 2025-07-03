import React from "react";

export default function About() {
  return (
    <div className="bg-white min-h-screen py-10 px-4">
      {/* Titre animé */}
      <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-200 to-blue-700 bg-clip-text text-transparent">
        À PROPOS DE NOTRE SITE ✈️
      </h1>

      {/* Grille des images */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        {/* Image 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition transform duration-300">
          <img src="/img/Ap1.webp" alt="Nos pilotes experts" className="w-full h-60 object-cover"/>
          <div className="p-4">
            <h2 className="text-xl font-semibold text-yellow-600">Nos pilotes experts</h2>
            <p className="text-gray-600">Nos pilotes hautement qualifiés assurent votre sécurité à chaque vol.</p>
          </div>
        </div>

        {/* Image 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition transform duration-300">
          <img src="/img/Ap2.webp" alt="Services bagages rapides" className="w-full h-60 object-cover"/>
          <div className="p-4">
            <h2 className="text-xl font-semibold text-yellow-600">Services bagages rapides</h2>
            <p className="text-gray-600">Profitez de nos services de bagages fluides et sécurisés à l’aéroport.</p>
          </div>
        </div>

        {/* Image 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition transform duration-300">
          <img src="/img/Ap3.webp" alt="Réservation facile en ligne" className="w-full h-60 object-cover"/>
          <div className="p-4">
            <h2 className="text-xl font-semibold text-yellow-600">Réservation facile en ligne</h2>
            <p className="text-gray-600">Réservez vos billets en quelques clics grâce à notre plateforme intuitive.</p>
          </div>
        </div>

        {/* Image 4 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition transform duration-300">
          <img src="/img/Ap4.webp" alt="Notre équipe dévouée" className="w-full h-60 object-cover"/>
          <div className="p-4">
            <h2 className="text-xl font-semibold text-yellow-600">Notre équipe dévouée</h2>
            <p className="text-gray-600">Une équipe de pilotes et hôtesses passionnés pour un service impeccable.</p>
          </div>
        </div>

        {/* Image 5 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition transform duration-300">
          <img src="/img/bon.webp" alt="Décollage et atterrissage sécurisés" className="w-full h-60 object-cover"/>
          <div className="p-4">
            <h2 className="text-xl font-semibold text-yellow-600">Décollage et atterrissage sécurisés</h2>
            <p className="text-gray-600">Chaque étape de votre vol est soigneusement contrôlée pour votre tranquillité.</p>
          </div>
        </div>

        {/* Image 6 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition transform duration-300">
          <img src="/img/carte.webp" alt="Réseau mondial" className="w-full h-60 object-cover"/>
          <div className="p-4">
            <h2 className="text-xl font-semibold text-yellow-600">Réseau mondial</h2>
            <p className="text-gray-600">Nous connectons des centaines de destinations à travers le monde entier.</p>
          </div>
        </div>

      </div>

      {/* Barre bleue description en dehors de la grid */}
      <div className="w-full bg-blue-600 text-white py-10 mt-12 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Pourquoi AirDiop Fly ?</h2>
        <p className="mb-6 mx-auto">
          AirDiop Fly est né de la passion de rendre le voyage aérien accessible à tous. 
          Notre objectif est de simplifier la réservation, vous offrir les meilleurs tarifs, 
          et garantir un service fiable, rapide et sécurisé à chaque étape.
        </p>
        <a 
          href="/description" 
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-8 py-4 rounded-full transition"
        >
          Voir plus
        </a>
      </div>
    </div>
  );
}
