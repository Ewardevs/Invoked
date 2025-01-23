import React from "react";
import NavBar from "../components/NavBar";
import Carousel from "../components/Hero";
import image1 from "../img/elfa.png"
import image2 from "../img/Rim.png"
import image3 from "../img/kael.png"
import Main from "../components/Main";


const Home=()=>{

    const images = [image1, image2, image3];

    return(
        <>
        <NavBar/>
        <Carousel interval={4000} />
        <Main/>
        </>
    )
}


export default Home;