import { Link } from 'react-router-dom';
import './videosPlataforma.css';
// import { useState } from 'react';

const VideosPlataforma = ({corDeFundo, editar, imagem, nome, id, deletar}) => {

    return (
        <div className="colaborador" style={{ border: `5px solid ${corDeFundo}` }}>
            <div className="cabecalho">
                <img src={imagem} alt={nome} />
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
                        onClick={() =>editar(id)}
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
