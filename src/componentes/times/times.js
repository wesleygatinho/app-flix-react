// import PageEditar from '../../paginas/pageEditar/pageEditar';
import VideosPlataforma from '../videosPlataforma/videosPlataforma';
import './times.css';
import { useState } from 'react';
import ModalEditarVideo from '../../paginas/modalEditarVideo/modalEditarVideo';

const Times = ({nome, corPrimaria, colaboradores, deletar, editar}) => {

  const [openModal, setOpenModal] = useState(false);
  const [videoSelecionado, setVideoSelecionado] = useState(null);

  const editarVideo = (colaborador) => {
    setVideoSelecionado(colaborador);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    colaboradores.length > 0 && (
      
      <div className='time'> 
        <h3
          style={{
            borderColor: corPrimaria,
            backgroundColor: corPrimaria
          }}
        >
          {nome}
        </h3>
        <div className='colaboradores'>
          {colaboradores.map((colaborador) => (
            <VideosPlataforma
              key={colaborador.id}
              id={colaborador.id} 
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              corDeFundo={corPrimaria}
              deletar={deletar}
              editar={editarVideo}
            />
            
          ))}
        </div>
        {openModal && (
        <ModalEditarVideo video={videoSelecionado} onClose={handleCloseModal}/>
       )}
      </div>
      
      
    )
  );
};

export default Times;
