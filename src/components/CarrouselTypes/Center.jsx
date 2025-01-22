const CarouselCenter = ({ image }) => {
    return (

        <div className="relative w-full h-[700px] bg-black text-white overflow-hidden">
            {/* Imagen de fondo */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >

                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>

            </div>

            {/* Contenido superpuesto */}
            <div className="absolute z-10 flex items-center h-full px-10">
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

export default CarouselCenter;
