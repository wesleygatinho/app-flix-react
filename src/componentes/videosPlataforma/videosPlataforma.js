import { Link } from 'react-router-dom';
import './videosPlataforma.css';

const VideosPlataforma = ({corDeFundo, editarDoCompVideos, imagem, titulo, id, deletar}) => {

    return (
        <div className="colaborador" style={{ border: `5px solid ${corDeFundo}` }}>
            <div className="cabecalho">
                <img src={imagem} alt={titulo} />
            </div>
            <div className="rodape">
                <Link>
                    <img
                        className="imagens-card"
                        onClick={() => deletar(id)}
                        src="/imagens/lixeira.png"
                        alt="Imagem lixeira"
                    />
                </Link>
                <h4>DELETAR</h4>
                <Link>
                    <img
                        className="imagens-card"
                        onClick={() =>editarDoCompVideos(id)}
                        src="/imagens/editar.png"
                        alt="Imagem Editar"
                    />
                </Link>
                <h4>EDITAR</h4>
            </div>
        </div>
    );
};

export default VideosPlataforma;
