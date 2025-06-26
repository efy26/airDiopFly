import React from "react";
import Link from "next/link";
import SectionUniverselle from "@/components/home/SectionUniverselle";

export default function Connexion() {
  return (
    <div className="flex flex-col">
      <SectionUniverselle />
      
          <div className="flex items-center  justify-center mt-10">
            <form id="from-connexion" className="bg-white p-8 rounded-lg shadow-md w-full max-w-90">
              <h2 className="text-2xl font-courier mb-6 text-center text-gray-800">
                Connexion
              </h2>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block mb-2 text-gray-700 "
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
                  className="block mb-2 text-gray-700"
                >
                  Mot de passe
                </label>
                <input
                  id="password"
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />

                <Link href="/inscription">
                    <p className="text-sm text-blue-600 hover:underline mt-2">
                        Crée un compte
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
