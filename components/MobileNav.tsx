"use client";

import useNavActive from "../context/NavContext";
import Header from "./Header";
import Social from "./Social";
import Link from "next/link";
import { useMediaQuery } from "usehooks-ts";

const MobileNav = () => {
  const deskTop = useMediaQuery("(min-width: 961px)");
  const { navActive, setNavActive } = useNavActive();

  function handleLinkClick() {
    if (navActive) {
      setNavActive(!navActive);
    }
  }

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
              Home
            </Link>
          </li>
          <li className={navActive ? "fade-up" : ""}>
            <Link onClick={handleLinkClick} href={"/acerca"}>
              Acerca
            </Link>
          </li>
          <li className={navActive ? "fade-up" : ""}>
            <Link onClick={handleLinkClick} href={"/contacto"}>
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
