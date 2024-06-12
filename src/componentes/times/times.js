import './times.css';
import VideosPlataforma from '../videosPlataforma/videosPlataforma';
import { useState } from 'react';
import ModalEditarVideo from '../../paginas/modalEditarVideo/modalEditarVideo';

const Times = ({ titulo, corPrimaria, colaboradores, deletar, editarDoCompTime }) => {
  const [openModal, setOpenModal] = useState(false);
  const [videoSelecionado, setVideoSelecionado] = useState(null);

  const editarVideo = (colaborador) => {
    setVideoSelecionado(colaborador);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleEditarModal = (id, dadosEditados) => {
    editarDoCompTime(id, dadosEditados); // Envia os dados editados para a função de editar no componente pai
    handleCloseModal();
  };

  return (
    colaboradores.length > 0 && (
      <div className='time'>
        <h3 style={{ borderColor: corPrimaria, backgroundColor: corPrimaria }}>{titulo}</h3>
        <div className='colaboradores'>
          {colaboradores.map((colaborador) => (
            <VideosPlataforma
              key={colaborador.id}
              id={colaborador.id}
              titulo={colaborador.titulo}
              categoria={colaborador.categoria}
              imagem={colaborador.imagem}
              video={colaborador.video}
              descricao={colaborador.descricao}
              corDeFundo={corPrimaria}
              deletar={deletar}
              editarDoCompVideos={() => editarVideo(colaborador)}
            />
          ))}
        </div>
        {openModal && (
          <ModalEditarVideo video={videoSelecionado} onClose={handleCloseModal} editarDoCompModal={editarDoCompTime} />
        )}
      </div>
    )
  );
};

export default Times;
