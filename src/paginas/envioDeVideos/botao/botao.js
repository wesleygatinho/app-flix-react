import './botao.css'

const Botao = (propriedades) => {
    return (
        <div className='botao-enviarVideos'>
            <button className='botao-enviar'>
                {propriedades.texto1}
            </button>
            <button className='botao-limpar'>
                {propriedades.texto2}
            </button>
        </div>
    )
}

export default Botao;