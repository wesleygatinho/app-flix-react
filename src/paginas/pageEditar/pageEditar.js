import './pageEditar.css';
import FormEditar from './formularioEditar/formEditar';
import { useState, useEffect } from 'react';
import axios from 'axios';
const PageEditar = ({ onClose, videoSelecionado, atualizarVideo }) => {
  const [times, setTimes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/times')
      .then(response => setTimes(response.data))
      .catch(error => console.error("Erro ao buscar times:", error));
  }, []);


  return (
    <div className='backGround'>
      <FormEditar onClose={onClose} times={times.map(time => time.nome)} videoSelecionado={videoSelecionado} atualizarVideo={atualizarVideo} />
    </div>
  );
};

export default PageEditar;
