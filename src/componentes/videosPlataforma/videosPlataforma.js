
import './videosPlataforma.css';

const VideosPlataforma = ({corDeFundo, editarDoCompVideos, imagem, titulo, id, deletar}) => {

    return (
        <div className="colaborador" style={{ border: `5px solid ${corDeFundo}` }}>
            <div className="cabecalho">
                <img className='img-cabecalho' src={imagem} alt={titulo} />
            </div>
            <div className="rodape">
                <div>
                    <img
                        className="imagens-card"
                        onClick={() => deletar(id)}
                        src="/imagens/lixeira.png"
                        alt="Imagem lixeira"
                    />
                    <h4>DELETAR</h4>
                </div>
                
                <div>
                    <img
                        className="imagens-card"
                        onClick={() =>editarDoCompVideos(id)}
                        src="/imagens/editar.png"
                        alt="Imagem Editar"
                    />
                    <h4>EDITAR</h4>
                </div>
                
            </div>
        </div>
    );
};

export default VideosPlataforma;
