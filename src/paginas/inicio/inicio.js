import Cabecalho from "../../componentes/cabecalho/cabecalho.js";
import EmDestaque from "../../componentes/emDestaque/emDestaque.js";
import RodapeHome from "../../componentes/rodape/rodape.js";
import ReceberDados from "../envioDeVideos/receberDados/receberDados.js";


const PageInicio = () => {
  

  return (
    <div className="App">
      <Cabecalho />
      <EmDestaque />
      <ReceberDados/>
      <RodapeHome />
    </div>
  );
}

export default PageInicio;
