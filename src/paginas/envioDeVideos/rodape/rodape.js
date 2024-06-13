import './rodape.css'
import { Link } from 'react-router-dom';
const Rodape = () => {
    return(
        <footer className='rodape-video'>
            <img className='foto-alura-flix' src='/imagens/aluraFlix01.png' alt='Logo AluraFlix'/>
            <nav className='cabecalhoVideo-invertido'>
                <Link to="/">
                    <div>
                        <img className='fototo' src='/imagens/home.png' alt='home' />
                    </div>
                </Link>
                <Link to="/enviovideo">
                    <div>
                        <img src='/imagens/videoVideo.png' alt='video' />
                    </div>
                </Link>
            </nav>
        </footer>
    )
}

export default Rodape;