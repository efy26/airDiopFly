import Link from "next/link";

export default function NavBar() {
    return (
        <nav>
            <ul id="menu-liens">
                <li className="cursor-pointer" >
                    <Link href="/">Accueil</Link>
                </li>
                <li className="cursor-pointer" >
                    <Link href="/ConsultationReservation">Consultation/Reservation</Link>
                </li>
                <li className="cursor-pointer" >
                    <Link href="/TableauDeBord">Tableau de bord</Link>
                </li>
                <li className="cursor-pointer" >
                    <Link href="/about">À propos</Link>
                </li>
                <li className="cursor-pointer" >
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}
