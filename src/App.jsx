import { useState } from 'react';

import './App.css';
import Home from './view/Home'; 

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
