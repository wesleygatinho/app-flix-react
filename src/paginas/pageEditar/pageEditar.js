import './pageEditar.css';
import FormEditar from './formularioEditar/formEditar';
import { useState, useEffect } from 'react';
import axios from 'axios';
const PageEditar = ({ video, onClose, onSubmit }) => {
  const [times, setTimes] = useState([]);
  const [videosDaPlataforma, setVideosDaPlataforma] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/times')
      .then(response => setTimes(response.data))
      .catch(error => console.error("Erro ao buscar times:", error));
      
    axios.get('http://localhost:3001/videosDaPlataforma')
      .then(response => setVideosDaPlataforma(response.data))
      .catch(error => console.error("Erro ao buscar vídeos:", error));
  }, []);

  const aoNovoVideoAdicionado = (colaborador) => {
    axios.post('http://localhost:3001/videosDaPlataforma', colaborador)
      .then(response => {
        setVideosDaPlataforma(prevVideos => [...prevVideos, response.data]);
      })
      .catch(error => console.error("Erro ao adicionar vídeo:", error));
  };
  return (
    <div className='backGround'>
      <FormEditar video={video} onClose={onClose} onSubmit={onSubmit} times={times.map(time => time.nome)} />
    </div>
  );
};

export default PageEditar;
