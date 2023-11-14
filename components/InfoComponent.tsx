import SecondaryBtn from "./SecondaryBtn";

type InfoComponentProps = {
  bgImg: string;
  headingText: string;
  pText: string;
  btnText: string;
};

const InfoComponent = ({
  bgImg,
  headingText,
  pText,
  btnText,
}: InfoComponentProps) => {
  return (
    <div className="info-component">
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
      <div className="info-component-cta">
        <h3>{headingText}</h3>
        <p>{pText}</p>
        <SecondaryBtn btnText={btnText} />
      </div>
    </div>
  );
};

export default InfoComponent;
