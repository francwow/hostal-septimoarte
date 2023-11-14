import "@/styles/index.css";
import "@/styles/globals.css";
import { Metadata } from "next";
import Provider from "@/components/Provider";
import ScrollTop from "@/components/ScrollTop";
import Whatsapp from "@/components/Whatsapp";
import ScrollNav from "@/components/ScrollNav";

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
    <html>
      <head />
      <Provider>
        <body>
          <ScrollTop />
          <Whatsapp />
          <ScrollNav />
          {children}
        </body>
      </Provider>
    </html>
  );
}
