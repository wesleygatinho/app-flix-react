import React, { useState } from 'react';
import './emDestaque.css';

const EmDestaque = () => {
  const videos = [
    "https://www.youtube.com/embed/izGwDsrQ1eQ?autoplay=1&loop=1&playlist=izGwDsrQ1eQ",
    "https://www.youtube.com/embed/ulZQTrV8QlQ?autoplay=1&loop=1&playlist=ulZQTrV8QlQ",
    "https://www.youtube.com/embed/eNvUS-6PTbs?autoplay=1&loop=1&playlist=eNvUS-6PTbs"
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  return (
    <section className='destaques'>
      <div className='conteudos-destaque'>
        {/* Body */}
        <div className='video'>
          <iframe
            width="100%"
            height="100%"
            src={videos[currentVideoIndex]}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className='textos'>
          <button onClick={nextVideo}>NEXT</button>
          <h1>SEO com REACT</h1>
          <p>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmDestaque;