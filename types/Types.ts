export type LanguageType = string;

export type LanguageContextType = {
  languageActive: LanguageType;
  setLanguageActive: (languageActive: string) => void;
};

export type NavActiveType = boolean;

export type NavContextType = {
  navActive: NavActiveType;
  setNavActive: (navActive: boolean) => void;
};
