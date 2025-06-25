import React from "react";
import Link from "next/link";
import SectionUniverselle from "@/components/home/SectionUniverselle";

export default function Connexion() {
  return (
    <div className="flex flex-col">
      <SectionUniverselle />

      <div className="flex items-center justify-center mt-10">
        <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Inscription
          </h2>
          <div className="mb-4">
            <label
              htmlFor="nom"
              className="block mb-2 text-gray-700 font-semibold"
            >
              Nom complet
            </label>
            <input
              id="nom"
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-gray-700 font-semibold"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-gray-700 font-semibold"
            >
              Mot de passe
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <Link href="/connexion">
              <p className="text-sm text-blue-600 hover:underline mt-2">
                Se connecter
              </p>
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded transition duration-200"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}
