import './botao.css'

const Botao = ({texto1, texto2}) => {
    return (
        <div className='botao-enviarVideos'>
            <button className='botao-enviar'>
                {texto1}
            </button>
            <button className='botao-limpar'>
                {texto2}
            </button>
        </div>
    )
}

export default Botao;