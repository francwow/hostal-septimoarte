"use client";

import useLanguage from "@/context/LanguageContext";
import SecondaryBtn from "./SecondaryBtn";
import { useInView } from "react-intersection-observer";

type InfoComponentProps = {
  bgImg: string;
  headingTextES: string;
  headingTextEN: string;
  pTextES: string;
  pTextEN: string;
  btnTextES: string;
  btnTextEN: string;
};

const InfoComponent = ({
  bgImg,
  headingTextES,
  headingTextEN,
  pTextES,
  pTextEN,
  btnTextES,
  btnTextEN,
}: InfoComponentProps) => {
  const { languageActive } = useLanguage();

  const { ref: containerRef, inView: containerInView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  return (
    <div
      style={{ opacity: "0" }}
      ref={containerRef}
      className={
        containerInView ? "info-component fade-in-view" : "info-component"
      }
    >
      <div className="info-bg-container">
        <div className="bg-fade"></div>
        <div
          style={{
            background: `url(${bgImg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="info-component-bg"
        ></div>
      </div>
      {languageActive === "ES" ? (
        <div className="info-component-cta">
          <h3>{headingTextES}</h3>
          <p>{pTextES}</p>
          <SecondaryBtn btnTextES={btnTextES} btnTextEN={btnTextEN} />
        </div>
      ) : (
        <div className="info-component-cta">
          <h3>{headingTextEN}</h3>
          <p>{pTextEN}</p>
          <SecondaryBtn btnTextES={btnTextES} btnTextEN={btnTextEN} />
        </div>
      )}
    </div>
  );
};

export default InfoComponent;
