"use client";

import { useState, useEffect } from "react";
import { carouselImages } from "@/data/Images";
import Image from "next/image";
import Link from "next/link";
import MainBtn from "./MainBtn";

const InicioSlider = () => {
  const initialState = 0;
  const [index, setIndex] = useState<number>(initialState);

  // function handleHover(e: React.MouseEvent) {
  //   if ((e.target as Element).innerHTML === "AUDIOVISUAL") {
  //     setIndex(0);
  //   } else if ((e.target as Element).innerHTML === "FOTOGRAFÍA") {
  //     setIndex(1);
  //   } else if ((e.target as Element).innerHTML === "UFX") {
  //     setIndex(2);
  //   }
  // }

  useEffect(() => {
    function increaseIndex() {
      if (index < carouselImages.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(initialState);
      }
      console.log(index);
    }

    const startCarousel = setInterval(function () {
      increaseIndex();
    }, 4000);
    return () => clearInterval(startCarousel);
  }, [index]);

  return (
    <div className="inicio-bg-slider">
      <div className="inicio-slider-info">
        <h2>Vive una estadía de película</h2>
        <MainBtn btnText="Reservar" />
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
