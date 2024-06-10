import { Link } from 'react-router-dom';
import './videosPlataforma.css'

const VideosPlataforma = (propriedades) => {
    return (
        <div className='colaborador' style={{ border: `5px solid ${propriedades.corDeFundo}` }}>
            <div className='cabecalho'>
                <img src={propriedades.imagem} alt={propriedades.nome} />
            </div>
            <div className='rodape'>
                <Link>
                    <img className='imagens-card' onClick={() => propriedades.deletar(propriedades.id)} src='/imagens/lixeira.png' alt='Imagem lixeira' />
                </Link>
                <h4>DELETAR</h4>
                <Link to="/video">
                    <img className='imagens-card' src='/imagens/editar.png' alt='Imagem Editar' />
                </Link>
                <h4>EDITAR</h4>
            </div>
        </div>
    )
}

export default VideosPlataforma;