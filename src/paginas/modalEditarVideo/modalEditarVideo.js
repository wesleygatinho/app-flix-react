import React, { useState } from 'react';
import PageEditar from '../pageEditar/pageEditar.js';
import './modalEditarVideo.css';

const ModalEditarVideo = ({ video, onClose, editarDoCompModal }) => {
  const [dadosEditados, setDadosEditados] = useState(video);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDadosEditados({ ...dadosEditados, [name]: value });
  };

  const handleSubmit = (evento) => {
    // evento.preventDefault();
    editarDoCompModal(video.id, dadosEditados); // Envia os dados editados para o componente pai
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <PageEditar video={dadosEditados} onClose={onClose} onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default ModalEditarVideo;
