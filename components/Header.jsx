import Link from "next/link";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import logo from "@/public/img/logoJet.png";

export default function Header() {
    return (
        <header className="flex h-27 items-center bg-white text-black">
            <Link id="link-home" href="/" className="size-10 cursor-pointer">
                <Image src={logo} alt="Logo" id="logo" />
            </Link> 
            <NavBar />
        </header>
    );
}
