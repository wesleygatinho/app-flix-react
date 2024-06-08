import { Link } from 'react-router-dom';
import './cabecalho.css'

const Cabecalho = () =>{
    return(
        <header className='cabecalho-principal'>
            <div className='imagem-aluraFlix'>
                <img src='/imagens/aluraFlix.png' alt='Logo Alura Flix'/>
            </div>
            <nav className='botao'>
                <Link className='botao-home' to="/">HOME</Link>
                <Link className='botao-video' to="enviovideo">NOVO VÍDEO</Link>
            </nav>
        </header>
    )
}

export default Cabecalho;