import VideosPlataforma from '../videosPlataforma/videosPlataforma';
import './times.css';

const Times = (propriedades) => {
  return (
    propriedades.colaboradores.length > 0 && (
      <section className='time'>
        <h3
          style={{
            borderColor: propriedades.corPrimaria,
            backgroundColor: propriedades.corPrimaria
          }}
        >
          {propriedades.nome}
        </h3>
        <div className='colaboradores'>
          {propriedades.colaboradores.map((colaborador) => (
            <VideosPlataforma
              key={colaborador.id}
              id={colaborador.id} 
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              corDeFundo={propriedades.corPrimaria}
              deletar={propriedades.deletar}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Times;
