import Card from "../components/Card"
import Kael from '../img/kael.png';
import Soyle from '../img/soyle.png';
import Rim from '../img/Rim.png';
import trioDeProtagonistas from '../img/trio_de_protagonistas.png';

const Main = ()=>{
    return(
        <div className="grid grid-cols-4 md:grid-cols-3 gap-[20px] mx-[5%] w-[100wh]">
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
            <Card 
            key={3}
            name={"al papu"} 
            chapter={"Chapter 3"} 
            description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga ipsum officia, a atque fugiat quae?"}
            image={Rim}
            /> 
            <Card 
            key={3}
            name={"al papu"} 
            chapter={"Chapter 3"} 
            description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga ipsum officia, a atque fugiat quae?"}
            image={Rim}
            /> 
            <Card 
            key={3}
            name={"al papu"} 
            chapter={"Chapter 3"} 
            description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga ipsum officia, a atque fugiat quae?"}
            image={Rim}
            /> 

            
        </div>
    )
}
export default Main;