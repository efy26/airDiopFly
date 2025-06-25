import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <div id="ouvir-menu">
        <svg
          className="w-8 h-8 text-gray-800 cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <ul id="menu-liens">
        <li className="cursor-pointer">
          <Link href="/">Accueil</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/ConsultationReservation">Reservation</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/TableauDeBord">Tableau de bord</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/about">À propos</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <ul id="menu-liens-mobile">
        <div id="fermer-menu" className="">
          <svg
            className="w-8 h-8 text-gray-800 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <li className="cursor-pointer">
          <Link href="/">Accueil</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/ConsultationReservation">Reservation</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/TableauDeBord">Tableau de bord</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/about">À propos</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
