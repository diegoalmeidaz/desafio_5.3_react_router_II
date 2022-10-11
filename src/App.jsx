import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Detalle from './pages/Detalle'

import Home from './pages/Home';
import Personajes from './components/Personajes';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personajes" element={<Personajes />} />
        <Route path="/personajes/:name" element={<Detalle/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
