'use client'

import { useState } from 'react'
 
export default function RechercheVol() {

return (
<section id="section-form-recherche">
  <div id = "form-recherche" >
    <h2 className="text-2xl font-bold mb-6">Rechercher un vol</h2>
    <form  id="form-recherche-container" className='space-y-4'>
        <label className="block text-sm font-medium mb-1">Ville de départ : </label>
        <input type="text" placeholder="Ex : Montréal" className="p-2 rounded" />
        <label className="block text-sm font-medium mb-1">Ville d'arrivée :</label>
        <input type="text" placeholder="Ex : Paris" className="p-2 rounded" />
        <label className="block text-sm font-medium mb-1">Date de départ :</label>
        <input type="date" className="p-2 rounded" />
      <div className="">
        <label className="block text-sm font-medium mb-1">Date de retour (facultatif) :</label>
        <input type="date" className="p-2 rounded" />
      </div>

      <div className="">
        <label className="block text-sm font-medium mb-1">Passagers :</label>
        <input type="number" min="1" className="p-2 rounded" />
      </div>

      <div className="">
        <button id='btn-recherche' type="submit" className="p-2 rounded text-white py-2">
          Rechercher
        </button>
      </div>
    </form>
  </div>
</section>

)
}

 