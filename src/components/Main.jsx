import Card from "../components/Card"
import Kael from '../img/kael.png';
import Soyle from '../img/soyle.png';
import Rim from '../img/Rim.png';
import trioDeProtagonistas from '../img/trio_de_protagonistas.png';

const Main = () => {
    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 md:grid-rows-2 gap-[20px] mx-[5%] h-[100%]">
                <Card
                    key={1}
                    name={"Lo mejor"}
                    chapter={"Chapter 1"}
                    description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga ipsum officia, a atque fugiat quae?"}
                    image={Kael}
                />
                <Card
                    key={2}
                    name={"Si se puede"}
                    chapter={"Chapter 2"}
                    description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga ipsum officia, a atque fugiat quae?"}
                    image={Soyle}

                />
                <Card
                    key={3}
                    name={"al papu"}
                    chapter={"Chapter 3"}
                    description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga ipsum officia, a atque fugiat quae?"}
                    image={Rim}

                />
                <aside class="w-full lg:w-64 bg-gray-100 p-6 rounded-lg shadow-md col-span-2 row-span-3 col-start-4 row-start-1">

                    <div class="mb-6">
                        <h3 class="text-xl font-bold text-gray-800 mb-3">Último Capítulo Leído</h3>
                        <div class="bg-white p-4 rounded-lg shadow-sm">
                            <p class="text-gray-700 text-sm mb-2">Capítulo 15: El inicio de todo</p>
                            <a href="#" class="inline-block bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded hover:bg-blue-600 transition">
                                Continuar
                            </a>
                        </div>
                    </div>


                    <div class="mb-6">
                        <h3 class="text-xl font-bold text-gray-800 mb-3">Novedades</h3>
                        <ul class="space-y-2">
                            <li>
                                <a href="#" class="block bg-white p-3 rounded-lg shadow-sm hover:bg-gray-50 transition">
                                    <span class="text-gray-800 font-medium">Capítulo 16: La revelación</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="block bg-white p-3 rounded-lg shadow-sm hover:bg-gray-50 transition">
                                    <span class="text-gray-800 font-medium">Capítulo 17: Un nuevo desafío</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="block bg-white p-3 rounded-lg shadow-sm hover:bg-gray-50 transition">
                                    <span class="text-gray-800 font-medium">Capítulo 18: Héroes y villanos</span>
                                </a>
                            </li>
                        </ul>
                    </div>


                    <div>
                        <h3 class="text-xl font-bold text-gray-800 mb-3">Recomendaciones</h3>
                        <div class="bg-white p-4 rounded-lg shadow-sm">
                            <p class="text-gray-700 text-sm mb-3">
                                ¿Has leído ya la saga <span class="font-bold">Crónicas del Viento</span>? 🌟
                            </p>
                            <a href="#" class="inline-block bg-green-500 text-white text-sm font-medium px-4 py-2 rounded hover:bg-green-600 transition">
                                Explorar
                            </a>
                        </div>
                    </div>
                </aside>
                <Card
                    key={3}
                    name={"al papu"}
                    chapter={"Chapter 3"}
                    description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga ipsum officia, a atque fugiat quae?"}
                    image={Rim}

                />


            </div>


        </>
    )
}
export default Main;