import room1Img from "@/assets/webpImages/img20.webp";
import room2Img from "@/assets/webpImages/img18.webp";
import room3Img from "@/assets/webpImages/img26.webp";
import room4Img from "@/assets/webpImages/img22.webp";
import room5Img from "@/assets/webpImages/img19.webp";
import InfoComponent from "./InfoComponent";

const InfoComponentContainer = () => {
  return (
    <div className="component-container">
      <div className="info-component-container">
        <h2>Conoce nuestras habitaciones</h2>
        <InfoComponent
          bgImg={room1Img.src}
          headingText="Cameraman's room"
          pText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
    mattis sem eget enim pretium, eget blandit velit accumsan. Vivamus
    efficitur augue diam."
          btnText="Reservar"
        />
        <InfoComponent
          bgImg={room2Img.src}
          headingText="Actor's room"
          pText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
    mattis sem eget enim pretium, eget blandit velit accumsan. Vivamus
    efficitur augue diam."
          btnText="Reservar"
        />
        <InfoComponent
          bgImg={room3Img.src}
          headingText="Director's room"
          pText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
    mattis sem eget enim pretium, eget blandit velit accumsan. Vivamus
    efficitur augue diam."
          btnText="Reservar"
        />
        <InfoComponent
          bgImg={room4Img.src}
          headingText="Producer's room"
          pText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
    mattis sem eget enim pretium, eget blandit velit accumsan. Vivamus
    efficitur augue diam."
          btnText="Reservar"
        />
        <InfoComponent
          bgImg={room5Img.src}
          headingText="Production assistants room"
          pText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
    mattis sem eget enim pretium, eget blandit velit accumsan. Vivamus
    efficitur augue diam."
          btnText="Reservar"
        />
      </div>
    </div>
  );
};

export default InfoComponentContainer;
