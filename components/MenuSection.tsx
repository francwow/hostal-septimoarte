"use client";

import useLanguage from "@/context/LanguageContext";
import { PropsWithChildren } from "react";

type MenuSectionProps = {
  headingES: string;
  headingEN: string;
};

const MenuSection = ({
  headingES,
  headingEN,
  children,
}: PropsWithChildren & MenuSectionProps) => {
  const { languageActive } = useLanguage();

  return (
    <div className="menu-section">
      <div className="menu-heading">
        <h2>{languageActive === "ES" ? headingES : headingEN}</h2>
      </div>
      {children}
    </div>
  );
};

export default MenuSection;
