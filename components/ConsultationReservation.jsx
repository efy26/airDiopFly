'use client';
import React, { useState } from 'react';
import SectionUniverselle from "@/components/home/SectionUniverselle";

const Consultation = () => {
  // Simulation de données de vol
  const [flights, setFlights] = useState([
    {
      id: 1,
      airline: 'Air France',
      flightNumber: 'AF123',
      departure: { time: '08:45', airport: 'CDG' },
      arrival: { time: '10:30', airport: 'LHR' },
      duration: '1h45',
      price: 189,
      stops: 0,
      date: '2023-12-15'
    },
    {
      id: 2,
      airline: 'British Airways',
      flightNumber: 'BA456',
      departure: { time: '10:15', airport: 'CDG' },
      arrival: { time: '12:00', airport: 'LHR' },
      duration: '1h45',
      price: 175,
      stops: 0,
      date: '2023-12-15'
    },
    {
      id: 3,
      airline: 'Lufthansa',
      flightNumber: 'LH789',
      departure: { time: '14:20', airport: 'CDG' },
      arrival: { time: '17:45', airport: 'LHR' },
      duration: '2h25',
      price: 150,
      stops: 1,
      date: '2023-12-16'
    }
  ]);

  const [sortOption, setSortOption] = useState('price');

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    // Trier les vols selon l'option sélectionnée
    const sortedFlights = [...flights].sort((a, b) => {
      if (e.target.value === 'price') {
        return a.price - b.price;
      } else if (e.target.value === 'duration') {
        return a.duration.localeCompare(b.duration);
      } else if (e.target.value === 'departure') {
        return a.departure.time.localeCompare(b.departure.time);
      }
      return 0;
    });
    setFlights(sortedFlights);
  };

  return (
    <div className='flex flex-col'>
      <SectionUniverselle/>
      <div id='container' className='flex justify-center'>
        <div id='training-page' className="w-full max-w-6xl px-4 py-8">
          <h1 id='titre-page-training' className="text-3xl font-bold text-center mb-8">Consultation et Réservation</h1>
          
          {/* Options de tri */}
          <div className="flex justify-end mb-6">
            <div className="flex items-center">
              <label htmlFor="sort" className="mr-2 text-gray-700">Trier par :</label>
              <select
                id="sort"
                value={sortOption}
                onChange={handleSortChange}
                className="p-2 border border-gray-300 rounded-md"
              >
                <option value="price">Prix (croissant)</option>
                <option value="duration">Durée</option>
                <option value="departure">Heure de départ</option>
              </select>
            </div>
          </div>

          {/* Liste des vols */}
          <div className="space-y-6">
            {flights.length > 0 ? (
              flights.map(flight => (
                <div key={flight.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <div className="flex items-center mb-4 md:mb-0">
                      <div className="bg-gray-100 p-3 rounded-full mr-4">
                        <span className="font-bold text-blue-600">{flight.airline.substring(0, 2)}</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{flight.airline}</h3>
                        <p className="text-gray-600">Vol {flight.flightNumber}</p>
                        <p className="text-sm text-gray-500">Date: {flight.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-blue-600">€{flight.price}</p>
                      <p className="text-gray-600">par personne</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row justify-between items-center py-4 border-t border-b border-gray-200">
                    <div className="text-center mb-4 md:mb-0">
                      <p className="text-xl font-bold">{flight.departure.time}</p>
                      <p className="text-gray-600">{flight.departure.airport}</p>
                    </div>
                    <div className="text-center mx-0 md:mx-4 mb-4 md:mb-0">
                      <p className="text-gray-500">{flight.duration}</p>
                      <div className="relative">
                        <div className="border-t-2 border-gray-300 w-24 md:w-32 my-2"></div>
                        <div className="absolute -top-2 left-0 right-0 flex justify-center">
                          <span className="bg-white px-2 text-xs text-gray-500">
                            {flight.stops === 0 ? 'Direct' : `${flight.stops} escale${flight.stops > 1 ? 's' : ''}`}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold">{flight.arrival.time}</p>
                      <p className="text-gray-600">{flight.arrival.airport}</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-end">
                    <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-md transition duration-300">
                      Réserver maintenant
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <p className="text-gray-600">Aucun vol disponible pour le moment.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
