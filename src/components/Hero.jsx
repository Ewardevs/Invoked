import CarouselRight from "./CarrouselTypes/Right";
import CarouselLeft from "./CarrouselTypes/Left";
import CarouselCenter from "./CarrouselTypes/Center";
import image1 from "../img/elfa.png";
import image2 from "../img/Rim.png";
import image3 from "../img/kael.png";
import image4 from "../img/soyle.png";
import image5 from "../img/trio_de_protagonistas.png";
import image6 from "../img/portada_prologo.png";

import React, { useState, useEffect } from "react";

const Carousel = ({ interval = 5000 }) => {
    const images = [
        { image: image1, tipo: "Right" },
        { image: image2, tipo: "Left" },
        { image: image3, tipo: "Center" },
        { image: image4, tipo: "Right" },
        { image: image5, tipo: "Center" },
        { image: image6, tipo: "Center" },
    ];

    const [currentIndex, setCurrentIndex] = useState(1); // Comienza en el primer índice real
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Duplicar la lista para crear un efecto continuo
    const extendedimages = [images[images.length - 1], ...images, images[0]];

    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, interval);

        return () => clearInterval(timer); // Limpiar el intervalo al desmontar
    }, [isTransitioning, interval]);

    const handleNext = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    const handlePrev = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    const handleTransitionEnd = () => {
        setIsTransitioning(false);

        if (currentIndex === extendedimages.length - 1) {
            setCurrentIndex(1); // Saltamos al primer índice real
        } else if (currentIndex === 0) {
            setCurrentIndex(images.length); // Saltamos al último índice real
        }
    };

    return (
        <div className="relative w-full h-[800px] overflow-hidden">
            {/* Contenedor de imágenes */}
            <div
                className="flex transition-transform duration-700"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                    transition: isTransitioning ? "transform 0.7s ease" : "none",
                }}
                onTransitionEnd={handleTransitionEnd}
            >
                {extendedimages.map((item, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                        {item.tipo === "Right" ? (
                            <CarouselRight image={item.image} />
                        ) : item.tipo === "Left" ? (
                            <CarouselLeft image={item.image} />
                        ) : item.tipo === "Center" ? (
                            <CarouselCenter image={item.image} />
                        ) : null}
                    </div>
                ))}
            </div>

            {/* Botones de navegación */}
            <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
                onClick={handlePrev}
            >
                ❮
            </button>
            <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
                onClick={handleNext}
            >
                ❯
            </button>

            {/* Indicadores */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${
                            currentIndex - 1 === index
                                ? "bg-white"
                                : "bg-white/50"
                        }`}
                        onClick={() => setCurrentIndex(index + 1)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
