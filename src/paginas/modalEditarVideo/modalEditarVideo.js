import React, { useState } from 'react';
import PageEditar from '../pageEditar/pageEditar.js'; // Import PageEditar component
import './modalEditarVideo.css'

const ModalEditarVideo = ({ video, onClose }) => {
  const [dadosDoVideo, setDadosDoVideo] = useState(video);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDadosDoVideo({ ...dadosDoVideo, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Save video changes
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <PageEditar video={dadosDoVideo} isOpen={true} onClose={onClose} />
      </div>
    </div>
  );
};

export default ModalEditarVideo;
