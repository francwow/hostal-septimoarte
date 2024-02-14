export type LanguageType = "EN" | "ES";

export type LanguageContextType = {
  languageActive: LanguageType;
  setLanguageActive: (languageActive: LanguageType) => void;
};

export type NavActiveType = boolean;

export type NavContextType = {
  navActive: NavActiveType;
  setNavActive: (navActive: boolean) => void;
};
