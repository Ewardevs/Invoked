import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './view/home'; 

function App() {
  const [count, setCount] = useState(0);

  return (
 /*    <BrowserRouter>
      <div>
        <a href="/">Home</a>
        <a href="/Contactos">Contactos</a>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contactos" element={<Contactos />} />
      </Routes>
    </BrowserRouter> */

    <div>
      <Home/>
    </div>

  );
}

export default App;
