import Image from "next/image";
import Link from "next/link";
import RechercheVole from "@/components/home/RechercheVole";

export default function SectionUn() {
  return (
    <section
      id="section-un"
      className="bg-[url(@/public/img/bgJet.png)] bg-no-repeat flex  flex-col items-center"
    >
      <p
        id="citation-home"
        className="text-shadow-lg/500"
      >
        Bienvenue sur notre plateforme de gestion de vols aériens.Organisez,
        suivez et optimisez vos trajets aériens en quelques clics.
      </p>
      <p
        id="citation-home-2"
        className="text-shadow-lg/500"
      >
        Notre système
        assure une coordination fluide entre passagers, vols et
        compagnies.Gagnez du temps grâce à une interface intuitive et des outils
        puissants.Avec nous, chaque vol est sous contrôle du décollage à
        l’atterrissage.
      </p>
    </section>
  );
}
