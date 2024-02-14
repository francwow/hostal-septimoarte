"use client";

import useNavActive from "../context/NavContext";
import Header from "./Header";
import Social from "./Social";
import Link from "next/link";
import { useMediaQuery } from "usehooks-ts";
import { useEffect } from "react";
import Languages from "./Languages";
import useLanguage from "@/context/LanguageContext";

const MobileNav = () => {
  const deskTop = useMediaQuery("(min-width: 991px)");
  const { navActive, setNavActive } = useNavActive();

  const { languageActive } = useLanguage();

  function handleLinkClick() {
    if (navActive) {
      setNavActive(!navActive);
    }
  }

  useEffect(() => {
    if (typeof window !== undefined) {
      if (navActive) {
        window.document.documentElement.style.overflowY = "hidden";
      } else if (!navActive) {
        window.document.documentElement.style.overflowY = "scroll";
      }
    }
  }, [navActive]);

  return (
    <div
      className={
        !deskTop && navActive
          ? "mobile-nav-container nav-active"
          : "mobile-nav-container"
      }
    >
      <Header />
      <Social />
      <nav className="mobile-nav">
        <ul className="mobile-list">
          <li className={navActive ? "fade-up" : ""}>
            <Link onClick={handleLinkClick} href={"/"}>
              {languageActive === "ES" ? "Inicio" : "Home"}
            </Link>
          </li>
          <li className={navActive ? "fade-up" : ""}>
            <Link onClick={handleLinkClick} href={"/habitaciones"}>
              {languageActive === "ES" ? "Habitaciones" : "Rooms"}
            </Link>
          </li>
          <li className={navActive ? "fade-up" : ""}>
            <Link onClick={handleLinkClick} href={"/acerca"}>
              {languageActive === "ES" ? "Acerca" : "About"}
            </Link>
          </li>
          <li className={navActive ? "fade-up" : ""}>
            <Link onClick={handleLinkClick} href={"/contacto"}>
              {languageActive === "ES" ? "Contacto" : "Contact"}
            </Link>
          </li>
        </ul>
      </nav>
      <Languages />
    </div>
  );
};

export default MobileNav;
