import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Cabecalho from "./componentes/cabecalho/cabecalho";
// import EmDestaque from "./componentes/emDestaque/emDestaque";
// import Times from "./componentes/times/times";
// import { useState } from 'react';
import PageInicio from "./paginas/inicio/inicio.js";
import EnviarVideo from "./paginas/envioDeVideos/envioDeVideos.js";
import PageEditar from "./paginas/pageEditar/pageEditar.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageInicio/>}/>
        <Route path="/envioVideo" element={<EnviarVideo/>}/>
        <Route path="*" element={<h1>Página não encontrada</h1>}/>
        <Route path="/video" element={<PageEditar/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
