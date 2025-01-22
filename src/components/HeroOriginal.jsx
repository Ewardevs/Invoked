/* import React, { useEffect, useState } from "react";
import portadaPrologo from '../img/portada_prologo.png';
import Kael from '../img/Kael.png';
import Soyle from '../img/Soyle.png';
import Rim from '../img/Rim.png';
import trioDeProtagonistas from '../img/trio_de_protagonistas.png';

const Hero=()=>{
HeroRight
const images = [
    portadaPrologo,
    Kael,
    Soyle,
    Rim,
    trioDeProtagonistas,
];

    const [index,setIndex] = useState(0);
    useEffect(() => {
        // Cambia la imagen cada 3 segundos
        const interval = setInterval(() => {
            setIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        // Limpia el intervalo al desmontar el componente
        return () => clearInterval(interval);
    }, [images.length]);

    return(
        <div className="w-full mx-auto ">
            <div>
                <img 
                className=" w-full h-[600px] object-cover transition-opacity duration-5000 ease-in-out "
                src={images[index]} 
                alt="" 
                />
            </div>
        </div>
    )
}


export default Hero; */





import React from "react";
import elfa from "../img/soyle.png";

const Hero = () => {
  return (
    
    <div className="relative w-full h-[700px] bg-black text-white overflow-hidden">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
                backgroundImage: `url(${elfa})`,
                backgroundSize: "cover",
                backgroundPosition: "center top", 
                }} 

        /* style={{
  backgroundImage: `url(${elfa})`,
  top: "0",
  right: "0",
  bottom: "2000px",
  left: "0",
  position: "absolute", 
}} */

      >
        {/* Sombra para degradado */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div> */}
        <div className="absolute inset-0 bg-gradient-to-l from-black via-black/20  to-transparent"></div>

      </div>

      {/* Contenido superpuesto */}
      <div className="absolute -right-0 z-10 flex items-center h-full px-10">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold">Ultimo Lanzadoooo</h1>
          <h2 className="text-2xl text-[#bdabff] mt-2">Una nueva amiga</h2>
          <p className="mt-4">
            Kael se puso manos a la obra para recoger los utiles para su nueva vida academica hasta choca que un encuentro inesperado pinta su dia de color de rosas...
          </p>
          <button className="mt-6 px-6 py-3 bg-[#4d1ff3] text-white rounded hover:bg-[#4d1fd7]">
            COMENZAR LEER CAPITULO 25
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

