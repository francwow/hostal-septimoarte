"use client";

import { PropsWithChildren, useState } from "react";
import { NavContext } from "../context/NavContext";
import { NavActiveType, LanguageType } from "../types/Types";
import { LanguageContext } from "@/context/LanguageContext";

const Provider = (props: PropsWithChildren) => {
  const [languageActive, setLanguageActive] = useState<LanguageType>("ESP");
  const [navActive, setNavActive] = useState<NavActiveType>(false);

  return (
    <LanguageContext.Provider value={{ languageActive, setLanguageActive }}>
      <NavContext.Provider value={{ navActive, setNavActive }}>
        {props.children}
      </NavContext.Provider>
    </LanguageContext.Provider>
  );
};

export default Provider;
