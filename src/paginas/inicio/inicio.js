import Cabecalho from "../../componentes/cabecalho/cabecalho.js";
import EmDestaque from "../../componentes/emDestaque/emDestaque.js";
import Times from "../../componentes/times/times.js";

const PageInicio = () => {
    
    
    
    
    
    return (
        <div className="App">
            <Cabecalho/>
            <EmDestaque />
            {/* {times.map(time => <Times
        key={time.nome}
        nome={time.nome}
        corPrimaria={time.corPrimaria}
        corSecundaria={time.corSecundaria} 
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />)} */}

            <Times />
        </div>
    )
}

export default PageInicio;