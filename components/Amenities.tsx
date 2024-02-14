"use client";

import useLanguage from "@/context/LanguageContext";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

type Amenitie = {
  imgSrc: string;
  headingTextES: string;
  headingTextEN: string;
  altText: string;
  name: string;
};

type AmenitiesProps = {
  amenitiesArr: Amenitie[];
};

const Amenities = ({ amenitiesArr }: AmenitiesProps) => {
  const { languageActive } = useLanguage();

  const { ref: containerRef, inView: containerInView } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });

  const gridStyle = {
    "--grid-size": `${amenitiesArr.length}`,
  } as React.CSSProperties;

  return (
    <div
      style={{ opacity: "0" }}
      ref={containerRef}
      className={containerInView ? "component-container fade-in-view" : ""}
    >
      <div className="amenities-container">
        <div className="amenities-grid" style={gridStyle}>
          {amenitiesArr.map((amenitie, index) => {
            return (
              <div key={index} className="amenities-item">
                {/* <Image
                  src={amenitie.imgSrc}
                  alt={amenitie.altText}
                  width={240}
                  height={240}
                /> */}
                <i>
                  <span className="material-symbols-outlined">
                    {amenitie.name}
                  </span>
                </i>
                {languageActive === "ES" ? (
                  <h3>{amenitie.headingTextES}</h3>
                ) : (
                  <h3>{amenitie.headingTextEN}</h3>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Amenities;
