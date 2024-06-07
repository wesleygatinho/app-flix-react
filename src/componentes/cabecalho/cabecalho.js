import './cabecalho.css'

const Cabecalho = () =>{
    return(
        <header className='cabecalho'>
            <div className='imagem-aluraFlix'>
                <img src='/imagens/aluraFlix.png' alt='Logo Alura Flix'/>
            </div>
            <div className='botoaes'>
                <button className='botao-home'>HOME</button>
                <button className='botao-video'>NOVO VÍDEO</button>
            </div>
        </header>
    )
}

export default Cabecalho;