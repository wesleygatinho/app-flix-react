import './videosPlataforma.css'

const VideosPlataforma = (propriedades) => {
    return(
        <div className='colaborador' style={{ border: `5px solid ${propriedades.corDeFundo}` }}>
            <div className='cabecalho'>
                <img src={propriedades.imagem} alt={propriedades.nome}/>
            </div>
            <div className='rodape'>
                <img src='/imagens/lixeira.png'alt='Imagem lixeira'/>
                <h4>DELETAR</h4>
                <img src='/imagens/editar.png' alt='Imagem Editar'/>
                <h4>EDITAR</h4>
            </div>
        </div>
    )
}

export default VideosPlataforma;