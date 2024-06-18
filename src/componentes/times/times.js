import './times.css';
import VideosPlataforma from '../videosPlataforma/videosPlataforma';
import { useState } from 'react';
import ModalEditarVideo from '../../paginas/modalEditarVideo/modalEditarVideo';

const Times = ({ titulo, corPrimaria, colaboradores, deletar, editar }) => {
  const [openModal, setOpenModal] = useState(false);
  const [videoSelecionado, setVideoSelecionado] = useState(null);

  const editarVideo = (colaborador) => {
    setVideoSelecionado(colaborador);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const atualizarVideo = (videoEditado) => {
    editar(prevColaboradores => prevColaboradores.map(colaborador =>
      colaborador.id === videoEditado.id ? videoEditado : colaborador
    ));
  };

  return (
    colaboradores.length > 0 && (
      <div className='time'>
        <div className='timeDoTime'>

          <div className='titulo-time'><h3 style={{ borderColor: corPrimaria, backgroundColor: corPrimaria }}>{titulo}</h3></div>

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
            <ModalEditarVideo onClose={handleCloseModal}
              videoSelecionado={videoSelecionado} atualizarVideo={atualizarVideo} />
          )}
        </div>

      </div>
    )
  );
};

export default Times;
