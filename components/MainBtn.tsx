"use client";

import useLanguage from "@/context/LanguageContext";
import Link from "next/link";

type MainBtnProps = {
  btnTextES: string;
  btnTextEN: string;
};

const MainBtn = ({ btnTextES, btnTextEN }: MainBtnProps) => {
  const { languageActive } = useLanguage();

  return (
    <div className="main-btn-container">
      {languageActive === "ES" ? (
        <Link
          href={
            "https://hotels.cloudbeds.com/reservation/kHYlQm#checkin=2024-02-13&checkout=2024-02-14"
          }
          target="_blank"
        >
          {btnTextES}
        </Link>
      ) : (
        <Link
          href={
            "https://hotels.cloudbeds.com/reservation/kHYlQm#checkin=2024-02-13&checkout=2024-02-14"
          }
          target="_blank"
        >
          {btnTextEN}
        </Link>
      )}
    </div>
  );
};

export default MainBtn;
