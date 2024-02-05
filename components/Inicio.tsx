import Header from "./Header";
import InicioSlider from "./InicioSlider";
import MobileNav from "./MobileNav";
import introImg from "@/assets/webpImages/img15.webp";
import Image from "next/image";
import Amenities from "./Amenities";
import InfoComponentContainer from "./InfoComponentContainer";
import { amenitiesArr } from "@/data/Amenities";

const Inicio = () => {
  const amenities = amenitiesArr;

  return (
    <div className="main-wrapper">
      <div className="inicio-wrapper">
        <MobileNav />
        <Header />
        <InicioSlider />
        {/* <div className="content-container"></div> */}
        <div className="content-wrapper">
          <div className="inicio-intro">
            <div className="inicio-intro-info">
              <div className="inicio-intro-bg">
                <div className="inicio-intro-filter"></div>
              </div>
              <div className="inicio-intro-h2">
                <h2>Bienvenidos al Hostal Sep7imo Arte</h2>
              </div>
              <div className="inicio-intro-p">
                <p>
                  El HOSTAL SEP7IMO ARTE se encuentra ubicado a 10 minutos del
                  terminal de transporte de Salitre y del Aeropuerto
                  Internacional El Dorado. Tiene una ubicación muy central cerca
                  de lugares turísticos como el centro de la ciudad, el estadio
                  Nemesio Camacho el Campin, el Parque interactivo Maloka, el
                  Jardín Botánico, el Museo del oro, entre otros. Además, en sus
                  alrededores se pueden encontrar bares, restaurantes y
                  discotecas.
                  <br />
                  <br />
                  El Hostal busca resaltar la historia del Cine y la Televisión
                  en Colombia y el mundo para así crear una experiencia
                  diferente de hospedaje. Aquí encontrarás una estadía
                  tranquila, llena de arte y comodidad. Nuestras cámaras, luces
                  y utilería estan listas para recibir a las estrellas!!!
                </p>
              </div>
            </div>

            {/* <div className="inicio-intro-img">
              <Image
                src={introImg.src}
                alt="foto de bar en el Hostal Septimo Arte."
                height={600}
                width={600}
                priority
              />
            </div> */}
          </div>
          <InfoComponentContainer />
          <Amenities amenitiesArr={amenities} />
        </div>
      </div>
    </div>
  );
};

export default Inicio;
