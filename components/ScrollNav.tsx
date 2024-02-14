"use client";

import { useEffect, useState } from "react";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import Link from "next/link";
import Icon from "./GoogleIcon";

const ScrollNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    function scrollTop() {
      if (typeof window !== undefined) {
        let scrollY = window.scrollY;
        if (scrollY >= 300) {
          setScrolled(true);
        } else if (scrollY <= 299) {
          setScrolled(false);
        }
      }
    }

    if (typeof window !== undefined) {
      window.addEventListener("scroll", scrollTop);
    }

    return () => {
      window.removeEventListener("scroll", scrollTop);
    };
  }, []);

  // useEffect(() => {
  //   console.log(scrollDirection);
  // }, [scrollDirection]);

  if (scrolled) {
    return (
      <aside className="scroll-up-btn">
        <Link href="#">
          <Icon icon="stat_1" />
        </Link>
      </aside>
    );
  } else {
    return null;
  }
};

export default ScrollNav;
