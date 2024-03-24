"use client";

import useLanguage from "@/context/LanguageContext";
import ContactFormES from "./ContactFormES";
import ContactFormEN from "./ContactFormEN";

const Sugerencias = () => {
  const { languageActive } = useLanguage();

  return languageActive === "ES" ? <ContactFormES /> : <ContactFormEN />;
};

export default Sugerencias;
