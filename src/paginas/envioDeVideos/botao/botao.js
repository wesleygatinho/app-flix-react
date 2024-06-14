import './botao.css'

const Botao = ({texto1, texto2, limparForm}) => {
    return (
        <div className='botao-enviarVideos'>
            <button className='botao-enviar' type='submit'>
                {texto1}
            </button>
            <button className='botao-limpar' type='button' onClick={limparForm}>
                {texto2}
            </button>
        </div>
    )
}

export default Botao;