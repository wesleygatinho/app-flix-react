import Times from "../../../componentes/times/times.js";
import { useState, useEffect } from 'react';
import axios from 'axios';

const ReceberDados = () => {

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

  

  const deletarVideo = (id) => {
    axios.delete(`http://localhost:3001/videosDaPlataforma/${id}`)
      .then(() => {
        setVideosDaPlataforma(prevVideos => prevVideos.filter(colaborador => colaborador.id !== id));
      })
      .catch(error => console.error("Erro ao deletar vídeo:", error));
  };

  const editarVideo = (id, colaboradorAtualizado) => {
    axios.put(`http://localhost:3001/videosDaPlataforma/${id}`, colaboradorAtualizado)
      .then(response => {
        setVideosDaPlataforma(videosDaPlataforma.map(colaborador =>
          colaborador.id === id ? response.data : colaborador
        ));
      });
  };

  return (
    <>
      
      {times.map(time => (
        <Times
          key={time.nome}
          titulo={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={videosDaPlataforma.filter(colaborador => colaborador.categoria === time.nome)}
          deletar={deletarVideo}
          editarDoCompTime={editarVideo}
        />
      ))}
    </>
  );
};

export default ReceberDados;
