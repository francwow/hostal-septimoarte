"use client";

import { useState, useEffect } from "react";
import { carouselImages } from "@/data/Images";
import Image from "next/image";
import MainBtn from "./MainBtn";
import { useInView } from "react-intersection-observer";
import useLanguage from "@/context/LanguageContext";

const InicioSlider = () => {
  const { languageActive } = useLanguage();
  const [translateY, setTranslateY] = useState(0);

  const initialState = 0;
  const [index, setIndex] = useState<number>(initialState);
  const { ref: containerRef, inView: containerInView } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener("scroll", (e) => {
        setTranslateY(window.scrollY / 10);
        console.log(translateY);
      });
    }
  }, [translateY]);

  useEffect(() => {
    function increaseIndex() {
      if (index < carouselImages.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(initialState);
      }
    }

    const startCarousel = setInterval(function () {
      increaseIndex();
    }, 4000);
    return () => clearInterval(startCarousel);
  }, [index]);

  return (
    <div className="inicio-bg-slider">
      <div
        ref={containerRef}
        style={{
          opacity: "0",
        }}
        className={
          containerInView
            ? "inicio-slider-info fade-in-view"
            : "inicio-slider-info"
        }
      >
        <div
          style={{
            transform: `translate3d(0,-${translateY}px, 0)`,
            transition: "0.1s ease all",
          }}
          className="slider-info-container"
        >
          <h2>
            {languageActive === "ES"
              ? "VIVE UNA ESTADIA DE PELICULA"
              : "ENJOY A CINEMATIC EXPERIENCE"}
          </h2>
          <MainBtn btnTextES="Reservar" btnTextEN="Book Now" />
        </div>
      </div>
      <div className="bg-fade"></div>
      {carouselImages.map((item) => {
        return (
          <div
            className={
              index === item.id ? "inicio-bg-item show-item" : "inicio-bg-item"
            }
            key={item.id}
          >
            <div className="bg-img">
              <Image
                placeholder="blur"
                priority={true}
                src={item.src}
                alt="hostel image"
                width={1500}
                height={1500}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InicioSlider;
