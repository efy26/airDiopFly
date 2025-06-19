import Image from "next/image";
import Link from "next/link";
import RechercheVole from "@/components/home/RechercheVole";

export default function SectionUn() {
    return (
        
        <section id="section-un" className="bg-[url(@/public/img/bgJet.png)] bg-cover bg-center bg-no-repeat min-w-100 h-200 flex  flex-col items-center">
            {/* <Link id="link-home" href="/" className="size-40 mt-80 cursor-pointer">
                <Image src={logo} alt="Logo" id="logo" />
            </Link> */}
            {/* <p id="citation-home" className="max-w-170 font-mono mt-10 text-shadow-lg/500">
                Bienvenue sur notre plateforme de gestion de vols aériens.Organisez, suivez et optimisez 
                vos trajets aériens en quelques clics.Notre système assure une coordination fluide entre passagers,
                 vols et compagnies.Gagnez du temps grâce à une interface intuitive et des outils puissants.Avec nous, 
                 chaque vol est sous contrôle du décollage à l’atterrissage.
            </p> */}

            
        </section>
        

    )
}
