import './emDestaque.css'

const EmDestaque = () => {
    return (
        <section className='destaques'>
            <div className='conteudos-destaque'> {/* Body  */}
                <div className='video'>
                    <video src='/imagens/onePiece2.mp4' type='video/mp4' autoPlay loop controls></video>
                </div>
                <div className='textos'>
                    <button>FRONT END</button>
                    <h1>SEO com REACT</h1>
                    <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                </div>
            </div>
        </section>
    )
}

export default EmDestaque;