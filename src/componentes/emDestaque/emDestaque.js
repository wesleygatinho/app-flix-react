import './emDestaque.css'

const EmDestaque = () => {
    return (
        <body className='destaques'>
            <section className='conteudos-destaque'> {/* Body  */}
                <div className='video'>
                    <video src='/imagens/onePiece2.mp4' autoPlay loop controls></video>
                </div>
                <div className='textos'>
                    <button>FRONT END</button>
                    <h1>SEO com REACT</h1>
                    <p>Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar
                        uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas
                        dicas sobre performance e de quebra conhecer uma plataforma sensacional
                        pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito
                        com todo o carinho do mundo construindo uma "Pokedex"!</p>
                </div>
            </section>
        </body>
    )
}

export default EmDestaque;