import React from "react";

const NavBar = () => {
    return (
        <nav className="text-yellow-50 flex flex-row justify-between items-center mx-24 max-w-[100wh] py-4">
            {/* Logo */}
            <h1 className="text-2xl font-bold">INVOKED</h1>

            {/* Navegación */}
            <div className="flex flex-row justify-between w-full ml-8">
                {/* Enlaces principales */}
                <ul className="flex flex-row gap-6 items-center">
                    <li className="hover:text-blue-500 cursor-pointer">Wiki</li>
                    <li className="hover:text-blue-500 cursor-pointer">Capítulos</li>
                    <li className="hover:text-blue-500 cursor-pointer">Blog</li>
                </ul>

                {/* Enlaces secundarios */}
                <ul className="flex flex-row gap-6 items-center ml-auto">
                    <li className="hover:text-blue-500 cursor-pointer">Buscar</li>
                    <li className="hover:text-blue-500 cursor-pointer">Iniciar Sesión</li>
                </ul>
            </div>
        </nav>
    );
};





export default NavBar;