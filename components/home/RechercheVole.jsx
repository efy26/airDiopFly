"use client";

import { useState } from "react";

const villes = [
  "Paris",
  "Marseille",
  "Lyon",
  "Toulouse",
  "Nice",
  "Nantes",
  "Strasbourg",
  "Montpellier",
  "Bordeaux",
  "Lille",
  "Rennes",
  "Reims",
  "Le Havre",
  "Saint-Étienne",
  "Toulon",
  "Grenoble",
  "Dijon",
  "Angers",
  "Nîmes",
  "Villeurbanne",
  "Saint-Denis",
  "Aix-en-Provence",
  "Clermont-Ferrand",
  "Le Mans",
  "Brest",
  "Tours",
  "Amiens",
  "Limoges",
  "Annecy",
  "Perpignan",
  "Boulogne-Billancourt",
  "Metz",
  "Besançon",
  "Orléans",
  "Saint-Denis (La Réunion)",
  "Rouen",
  "Mulhouse",
  "Caen",
  "Nancy",
  "Argenteuil",
  "Saint-Paul",
  "Montreuil",
  "Roubaix",
  "Dunkerque",
  "Tourcoing",
  "Nanterre",
  "Avignon",
  "Vitry-sur-Seine",
  "Créteil",
  "Poitiers",
  "Aubervilliers",
  "Versailles",
  "Colombes",
  "Asnières-sur-Seine",
  "Aulnay-sous-Bois",
  "Rueil-Malmaison",
  "Saint-Maur-des-Fossés",
  "Antibes",
  "Calais",
  "La Rochelle",
  "Champigny-sur-Marne",
  "Saint-Nazaire",
  "Courbevoie",
  "Mérignac",
  "Pau",
  "Cannes",
  "Drancy",
  "Levallois-Perret",
  "Noisy-le-Grand",
  "Pantin",
  "Épinay-sur-Seine",
  "Maisons-Alfort",
  "Cergy",
  "Béziers",
  "Valence",
  "Quimper",
  "Issy-les-Moulineaux",
  "Villeneuve-d'Ascq",
  "Le Blanc-Mesnil",
  "Ajaccio",
  "Troyes",
  "La Seyne-sur-Mer",
  "Lorient",
  "Chambéry",
  "Niort",
  "Montauban",
  "Neuilly-sur-Seine",
  "Sarcelles",
  "Pessac",
  "Ivry-sur-Seine",
  "Évry-Courcouronnes",
  "Clichy",
  "Le Cannet",
  "Vénissieux",
  "Chelles",
  "Narbonne",
  "Sète",
  "Montréal",
  "Dakar",
  "Abidjan",
  "Bruxelles",
  "Casablanca",
  "New York",
  "Londres",
  "Genève",
  "Bamako",
  "Alger",
  "Tunis",
  "Barcelone",
  "Rome",
  "Lisbonne",
];

export default function RechercheVol() {
  return (
    <section id="section-form-recherche">
      <div id="form-recherche">
        <h2 className="text-2xl font-bold mb-6">Rechercher un vol</h2>
        <form  className="">
         <div id="form-recherche-container">
           <div id="recherche-select">
            <div>
              <label className="block text-sm font-bold mb-1">
                * Ville de départ
              </label>
              <select className="rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400">
                <option value="">Sélectionnez une ville</option>
                {villes.map((ville, idx) => (
                  <option key={idx} value={ville}>
                    {ville}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold mb-1">
               * Ville d'arrivée
              </label>
              <select className="rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400">
                <option value="">Sélectionnez une ville</option>
                {villes.map((ville, idx) => (
                  <option key={idx} value={ville}>
                    {ville}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div id="recherche-input">
            <div>
              <label className="block text-sm font-bold mb-1">
                * Date de départ
              </label>
              <input
                type="date"
                className=" rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-1">
                Date de retour
              </label>
              <input
                type="date"
                className=" rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">* Passagers</label>
            <input
              type="number"
              min="1"
              className=" rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
         </div>
          <div id="recherche-container-btn">
            <button
              id="btn-recherche"
              type="submit"
              className="bg-yellow-500 rounded text-white py-2"
            >
              Rechercher
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
