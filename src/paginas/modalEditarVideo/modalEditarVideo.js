
import PageEditar from '../pageEditar/pageEditar.js';
import './modalEditarVideo.css';

const ModalEditarVideo = ({ onClose, videoSelecionado, atualizarVideo }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <PageEditar onClose={onClose} videoSelecionado={videoSelecionado} atualizarVideo={atualizarVideo} />
      </div>
    </div>
  );
};

export default ModalEditarVideo;
