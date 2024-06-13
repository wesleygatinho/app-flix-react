import './rodape.css'
import { Link } from 'react-router-dom';
const RodapeHome = () => {
    return (
        <footer className='rodape-home'>
            <img className='logo-aluraFlix' src='/imagens/aluraFlix01.png' alt='Logo AluraFlix' />

            <nav className='cabecalho-invertido'>
                <Link to="/">
                    <div>
                        <img className='fototo' src='/imagens/botao-home.png' alt='home' />
                    </div>
                </Link>
                <Link to="/enviovideo">
                    <div>
                        <img src='/imagens/botao-envioVideos.png' alt='video' />
                    </div>
                </Link>
            </nav>
        </footer>
    )
}

export default RodapeHome;