"use client";

import room1Img from "@/assets/webpImages/img20.webp";
import room2Img from "@/assets/webpImages/img18.webp";
import room3Img from "@/assets/webpImages/img26.webp";
import room4Img from "@/assets/webpImages/img22.webp";
import room5Img from "@/assets/webpImages/hab-2.webp";
import room6Img from "@/assets/webpImages/img27.webp";
import room7Img from "@/assets/webpImages/img28.webp";
import InfoComponent from "./InfoComponent";
import { useInView } from "react-intersection-observer";
import useLanguage from "@/context/LanguageContext";

const InfoComponentContainer = () => {
  const { languageActive } = useLanguage();

  const { ref: containerRef, inView: containerInView } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });

  return (
    <div className="component-container">
      <div
        ref={containerRef}
        style={{ opacity: "0" }}
        className={
          containerInView
            ? "info-component-h2 fade-in-view"
            : "info-component-h2"
        }
      >
        <h2>
          {languageActive === "ES" ? "NUESTRAS HABITACIONES" : "OUR ROOMS"}
        </h2>
      </div>
      <div className="info-component-container">
        <InfoComponent
          bgImg={room1Img.src}
          headingTextES="Habitación de camarógrafos"
          headingTextEN="Cameramen's room"
          pTextES="La habitación de camarógrafos ofrece una cama sencilla, dotada con escritorio, muebles y demás accesorios para brindar la máxima comodidad. El baño es de uso compartido."
          pTextEN="The cameramen's room offers a single bed, equipped with a desk, furniture and other accessories to provide maximum comfort. The bathroom is shared."
          btnTextES="Reservar"
          btnTextEN="Book Now"
        />
        <InfoComponent
          bgImg={room2Img.src}
          headingTextES="Habitación de actores"
          headingTextEN="Actors room"
          pTextES="Las habitaciones dobles cuentan con dos posibles acomodaciones: cama matrimonial o camas separadas individuales. Están dotadas con escritorio, silla e iluminación adecuada para el trabajo, además cuentan con todas las comodidades y un excelente baño."
          pTextEN="The double rooms have two possible accommodations: double bed or separate single beds. They are equipped with a desk, chair and adequate lighting for work, and they also have all the necessary items for a comfortable stay and an excellent bathroom."
          btnTextES="Reservar"
          btnTextEN="Book Now"
        />
        <InfoComponent
          bgImg={room3Img.src}
          headingTextES="Habitación de directores"
          headingTextEN="Directors room"
          pTextES="Las habitaciones dobles cuentan con dos posibles acomodaciones: cama matrimonial o camas separadas individuales. Están dotadas con escritorio, silla e iluminación adecuada para el trabajo, además cuentan con todas las comodidades y un excelente baño."
          pTextEN="The double rooms have two possible accommodations: double bed or separate single beds. They are equipped with a desk, chair and adequate lighting for work, and they also have all the necessary items for a comfortable stay and an excellent bathroom."
          btnTextES="Reservar"
          btnTextEN="Book Now"
        />
        <InfoComponent
          bgImg={room4Img.src}
          headingTextES="Habitación de productores"
          headingTextEN="Producers room"
          pTextES="Las habitaciones dobles cuentan con dos posibles acomodaciones: cama matrimonial o camas separadas individuales. Están dotadas con escritorio, silla e iluminación adecuada para el trabajo, además cuentan con todas las comodidades y un excelente baño."
          pTextEN="The double rooms have two possible accommodations: double bed or separate single beds. They are equipped with a desk, chair and adequate lighting for work, and they also have all the necessary items for a comfortable stay and an excellent bathroom."
          btnTextES="Reservar"
          btnTextEN="Book Now"
        />
        <InfoComponent
          bgImg={room5Img.src}
          headingTextES="Habitación de asistentes de producción"
          headingTextEN="Production assistants room"
          pTextES="La habitación de camarógrafos ofrece una cama sencilla, dotada con escritorio, muebles y demás accesorios para brindar la máxima comodidad. El baño es de uso compartido."
          pTextEN="The production assistants room offers a single bed, equipped with a desk, furniture and other accessories to provide maximum comfort. The bathroom is shared."
          btnTextES="Reservar"
          btnTextEN="Book Now"
        />
        <InfoComponent
          bgImg={room6Img.src}
          headingTextES="Habitación camerino"
          headingTextEN="Lovers room"
          pTextES="Es un espacio de parejas que desean hacer momentos únicos. Incluye sauna, tabla de quesos y una noche especial."
          pTextEN="It's a space for couples who want to make unique moments. Includes sauna, cheese board and a special night."
          btnTextES="Reservar"
          btnTextEN="Book Now"
        />
        <InfoComponent
          bgImg={room7Img.src}
          headingTextES="Habitación luminotécnicos"
          headingTextEN="Gaffers room"
          pTextES="Habitación para grupos familiares o amigos, hasta 5 personas. Donde se siente la magia de la luz para crear efectos especiales de nuestra película."
          pTextEN="Room for family groups or friends, up to 5 people. Where you feel the magic of light to create special effects for our film."
          btnTextES="Reservar"
          btnTextEN="Book Now"
        />
      </div>
    </div>
  );
};

export default InfoComponentContainer;
