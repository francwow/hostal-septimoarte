import useLanguage from "@/context/LanguageContext";

const Languages = () => {
  const { languageActive, setLanguageActive } = useLanguage();

  return (
    <div className="languages-container">
      <div className="languages">
        <div
          tabIndex={0}
          role="button"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setLanguageActive("ES");
            }
          }}
          onClick={() => setLanguageActive("ES")}
          className={languageActive === "ES" ? "es es-active" : "es"}
        >
          ES
        </div>
        <div
          tabIndex={0}
          role="button"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setLanguageActive("EN");
            }
          }}
          onClick={() => setLanguageActive("EN")}
          className={languageActive === "EN" ? "en en-active" : "en"}
        >
          EN
        </div>
      </div>
    </div>
  );
};

export default Languages;
