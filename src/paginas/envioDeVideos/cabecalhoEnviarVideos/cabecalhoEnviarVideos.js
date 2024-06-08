import { Link } from 'react-router-dom';
import './cabecalhoEnviarVideos.css'
const CabecalhoEnviarVideos = () => {
    return(
        <header className='cabecalho-cabe'>
            <div className='imagem-aluraFlix-flix'>
                <img src='/imagens/aluraFlix01.png' alt='Logo Alura Flix'/>
            </div>
            <nav className='botao'>
                <Link className='botao-home-home' to="/">HOME</Link>
                <Link className='botao-video-video' to="enviovideo">NOVO VÍDEO</Link>
                
            </nav>
        </header>
    )
}

export default CabecalhoEnviarVideos;