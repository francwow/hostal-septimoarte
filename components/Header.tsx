"use client";

import Social from "./Social";
import Link from "next/link";
import useNavActive from "../context/NavContext";
import Logo from "./Logo";

const Header = () => {
  const { navActive, setNavActive } = useNavActive();

  function handleBurger() {
    setNavActive(!navActive);
    console.log(navActive);
  }

  function handleLogo() {
    setNavActive(false);
    if (typeof window !== undefined) {
      window.scrollTo(0, 0);
    }
  }

  return (
    <div className="header-wrapper">
      <div className="header">
        <Logo color="black" />
        <div className="burger-container">
          <button
            onClick={handleBurger}
            className={navActive ? "nav-burger toggle" : "nav-burger"}
          >
            <div className="line-one"></div>
            <div className="line-two"></div>
          </button>
        </div>
        <div className="nav-container">
          <nav className="main-nav">
            <ul className="nav-list">
              <li>
                <Link onClick={() => handleLogo} href={"/"}>
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={() => handleLogo} href={"/acerca"}>
                  Acerca
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => handleLogo}
                  href={{
                    pathname: "/contacto",
                    query: {},
                  }}
                >
                  Contacto
                </Link>
              </li>
            </ul>
            <Social />
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
