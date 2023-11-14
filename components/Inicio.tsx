import Header from "./Header";
import InfoComponent from "./InfoComponent";
import InicioSlider from "./InicioSlider";
import MobileNav from "./MobileNav";
import room1Img from "@/assets/webpImages/img20.webp";
import room2Img from "@/assets/webpImages/img18.webp";
import room3Img from "@/assets/webpImages/img26.webp";
import room4Img from "@/assets/webpImages/img22.webp";
import room5Img from "@/assets/webpImages/img19.webp";
import introImg from "@/assets/webpImages/img15.webp";
import Image from "next/image";

const Inicio = () => {
  return (
    <div className="main-wrapper">
      <div className="inicio-wrapper">
        <MobileNav />
        <Header />
        <InicioSlider />
        {/* <div className="content-container"></div> */}
        <div className="content-wrapper">
          <div className="inicio-intro">
            <h2>Bienvenidos al Hostal Sep7imo Arte</h2>
            <p>
              El HOSTAL SEP7IMO ARTE se encuentra ubicado a 10 minutos del
              terminal de transporte de Salitre y del Aeropuerto Internacional
              El Dorado. Tiene una ubicación muy central cerca de lugares
              turísticos como el centro de la ciudad, el estadio Nemesio Camacho
              el Campin, el Parque interactivo Maloka, el Jardín Botánico, el
              Museo del oro, entre otros. Además, en sus alrededores se pueden
              encontrar bares, restaurantes y discotecas.
              <br />
              <br />
              El Hostal busca resaltar la historia del Cine y la Televisión en
              Colombia y el mundo para así crear una experiencia diferente de
              hospedaje. Aquí encontrarás una estadía tranquila, llena de arte y
              comodidad. Nuestras cámaras, luces y utilería estan listas para
              recibir a las estrellas!!!
            </p>
            <div className="inicio-intro-img">
              <Image
                src={introImg.src}
                alt="foto de bar en el Hostal Septimo Arte."
                height={600}
                width={600}
                priority
              />
            </div>
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default Inicio;
