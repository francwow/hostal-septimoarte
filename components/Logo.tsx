"use client";

import useNavActive from "@/context/NavContext";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/webpImages/logo_website.webp";
import logo_white from "@/assets/webpImages/logo_website_white.webp";

type LogoProps = {
  color: string;
};

const Logo = ({ color }: LogoProps) => {
  const { navActive, setNavActive } = useNavActive();

  function handleLogo() {
    setNavActive(false);
    if (typeof window !== undefined) {
      window.scrollTo(0, 0);
    }
  }

  return (
    <div className="logo-container">
      <Link href={"/"}>
        <div className="logo">
          <Image
            src={color === "black" ? logo.src : logo_white.src}
            alt=""
            width={300}
            height={300}
            priority
          />
        </div>
      </Link>
    </div>
  );
};

export default Logo;
