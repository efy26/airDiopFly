import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
// export const metadata = {
//     title: "Gym-app",
//     description: "Demo Cours Programmation web avancé",
// };
export default function RootLayout({ children }) {
    return (
        <html lang="fr">
            <body className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-1">
                     {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
