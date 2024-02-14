"use client";

import useLanguage from "@/context/LanguageContext";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import img from "@/assets/webpImages/bogota.webp";
import img2 from "@/assets/webpImages/sala.webp";

const InicioIntro = () => {
  const { languageActive } = useLanguage();
  const { ref: containerRef, inView: containerInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div
      ref={containerRef}
      style={{ opacity: 1 }}
      className={containerInView ? "inicio-intro" : "inicio-intro"}
    >
      <div className="inicio-intro-info">
        <div className="inicio-intro-bg"></div>
        <div className="inicio-intro-desc">
          {languageActive === "ES" ? (
            <>
              <div className="inicio-intro-p">
                <div className="inicio-intro-h2">
                  <h2>BIENVENIDOS</h2>
                </div>
                <p>
                  El HOSTAL SEP7IMO ARTE busca resaltar la historia del Cine y
                  la Televisión en Colombia y el mundo para así crear una
                  experiencia diferente de hospedaje. Aquí encontrarás una
                  estadía tranquila, llena de arte y comodidad. ¡Nuestras
                  cámaras, luces y utilería estan listas para recibir a las
                  estrellas!
                </p>
                <div className="inicio-intro-img">
                  <Image
                    src={img2}
                    alt="mujer caminando en el barrio La Candelaria en la ciudad de Bogotá"
                    priority
                    width={700}
                    height={700}
                  />
                </div>
                <p>
                  Todas las habitaciones están equipadas con armario. Las
                  habitaciones del alojamiento tienen wifi gratis y baño privado
                  con ducha y artículos de aseo gratuitos. Las habitaciones
                  incluyen ropa de cama.
                </p>
              </div>

              <div className="inicio-intro-p">
                <p>
                  El Hostal se encuentra ubicado a 10 minutos del terminal de
                  transporte de Salitre y del Aeropuerto Internacional El
                  Dorado. Tiene una ubicación muy central cerca de lugares
                  turísticos como el centro de la ciudad, el estadio Nemesio
                  Camacho el Campin, el Parque interactivo Maloka, el Jardín
                  Botánico, el Museo del oro, entre otros. Además, en sus
                  alrededores se pueden encontrar bares, restaurantes y
                  discotecas.
                </p>

                <div className="inicio-intro-img">
                  <Image
                    src={img}
                    alt="mujer caminando en el barrio La Candelaria en la ciudad de Bogotá"
                    priority
                    width={700}
                    height={700}
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="inicio-intro-p">
                <div className="inicio-intro-h2">
                  <h2>WELCOME</h2>
                </div>
                <p>
                  Sep7imo Arte Hostel seeks to highlight the history of Cinema
                  and Television in Colombia and the world to create a special
                  lodging experience. Here you will find a peaceful stay, full
                  of art and comfort. Our cameras, lights and props are ready to
                  welcome the stars!
                </p>
                <div className="inicio-intro-img">
                  <Image
                    src={img2}
                    alt="mujer caminando en el barrio La Candelaria en la ciudad de Bogotá"
                    priority
                    width={700}
                    height={700}
                  />
                </div>
                <p>
                  All rooms are equipped with a wardrobe. The accommodation
                  rooms have free wifi and private bathroom with shower and free
                  toiletries. The rooms include bedding.
                </p>
              </div>

              <div className="inicio-intro-p">
                <p>
                  The Hostel is located 10 minutes from the Salitre
                  transportation terminal and El Dorado International Airport.
                  It has a very central location near tourist places such as the
                  city center, the Nemesio Camacho el Campin stadium, the Maloka
                  Interactive Park, the Botanical Garden, the Gold Museum, among
                  others. In addition, in its surroundings you can find bars,
                  restaurants and nightclubs.
                </p>

                <div className="inicio-intro-img">
                  <Image
                    src={img}
                    alt="mujer caminando en el barrio La Candelaria en la ciudad de Bogotá"
                    priority
                    width={700}
                    height={700}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default InicioIntro;
