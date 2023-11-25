import Image from "next/image";

type Amenitie = {
  imgSrc: string;
  headingText: string;
  altText: string;
  name: string;
};

type AmenitiesProps = {
  amenitiesArr: Amenitie[];
};

const Amenities = ({ amenitiesArr }: AmenitiesProps) => {
  const gridStyle = {
    "--grid-size": `${amenitiesArr.length}`,
  } as React.CSSProperties;

  return (
    <div className="component-container">
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
                <h3>{amenitie.headingText}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Amenities;
