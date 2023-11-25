"use client";

import Link from "next/link";
import whatsappLogo from "@/assets/webpImages/whatsapp_logo.webp";
import Image from "next/image";
import useNavActive from "@/context/NavContext";

const Whatsapp = () => {
  const { navActive, setNavActive } = useNavActive();

  if (!navActive) {
    return (
      <aside className="whatsapp">
        <Link
          target="_blank"
          href={
            "https://wa.me/573197521741?text=Hola%20Hostal%20Sep7imo%20Arte"
          }
        >
          <Image src={whatsappLogo} alt="Whatsapp logo" priority />
        </Link>
      </aside>
    );
  } else {
    return null;
  }
};

export default Whatsapp;
