import "@/styles/index.css";
import "@/styles/globals.css";
import { Metadata } from "next";
import localFont from "next/font/local";
import Provider from "@/components/Provider";
import ScrollTop from "@/components/ScrollTop";
import Whatsapp from "@/components/Whatsapp";
import ScrollNav from "@/components/ScrollNav";
import { Inter, Poppins, Oswald, Montserrat } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});
const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const materialSymbols = localFont({
  variable: "--font-family-symbols", // Variable name (to reference after in CSS/styles)
  style: "normal",
  src: "../node_modules/material-symbols/material-symbols-rounded.woff2", // This is a reference to woff2 file from NPM package "material-symbols"
  display: "block",
  weight: "100 700",
});

export const metadata: Metadata = {
  title: "Hostal Sep7imo Arte - Vive una estadía de película",
  description:
    "Ven y disfruta de una experiencia como una estrella de cine. Contamos con una ubicación privilegiada cerca del aeropuerto y el centro turístico de la capital.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${materialSymbols.variable}`}>
      <head />
      <Provider>
        <body
          className={`${poppins.variable} ${inter.variable} ${montserrat.variable} ${oswald.variable}`}
        >
          <ScrollTop />
          <Whatsapp />
          <ScrollNav />
          {children}
        </body>
      </Provider>
    </html>
  );
}
