import './emDestaque.css'

const EmDestaque = () => {
    return (
        <section className='conteudos-destaque'>
            <div className='conteudos-destaque-textos'>
                
                <div className='textos'>
                    <button>FRONT END</button>
                    <h1>SEO com REACT</h1>
                    <h3>Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar
                        uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas
                        dicas sobre performance e de quebra conhecer uma plataforma sensacional
                        pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito
                        com todo o carinho do mundo construindo uma "Pokedex"!</h3>
                </div>
            </div>
            <div className='video'>
                
                    
                        <iframe width="100%" height="72%" src="https://www.youtube.com/embed/FKYBCl_I9zU"
                            title="Jetpack Compose: Estados e animações | #AluraMais" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                   
                
            </div>
        </section>
    )
}

export default EmDestaque;