import './formEditar.css';
import CampoTexto from '../campoTextoFormEditar/campoTextoFormEditar.js';
import axios from 'axios';
import { useState } from 'react';
import BotaoFormEditar from '../botaoFormEditar/botaoFormEditar.js';
import ListaSupensaFormEditar from '../listaSuspensa/listaSuspensaFormEditar.js';

const FormEditar = ({ onClose, times, videoSelecionado, atualizarVideo }) => {
  const [titulo, setTitulo] = useState(videoSelecionado.titulo);
  const [categoria, setCategoria] = useState(videoSelecionado.categoria);
  const [imagem, setImagem] = useState(videoSelecionado.imagem);
  const [videoLink, setVideoLink] = useState(videoSelecionado.video);
  const [descricao, setDescricao] = useState(videoSelecionado.descricao);

  const handleSubmit = (evento) => {
    evento.preventDefault();
    const videoEditado = {
      id: videoSelecionado.id,
      titulo,
      categoria,
      imagem,
      video: videoLink,
      descricao
    };

    axios.put(`http://localhost:3001/videosDaPlataforma/${videoSelecionado.id}`, videoEditado)
      .then(response => {
        atualizarVideo(response.data);
        onClose();
      })
      .catch(error => console.error("Erro ao editar vídeo:", error));
  };

  const limparCampos = () => {
    setTitulo('');
    setCategoria('');
    setImagem('');
    setVideoLink('');
    setDescricao('');
  };




  return (
    <div className='formularioEditar'>
      <form onSubmit={handleSubmit}>
        <img className='botaoSair' onClick={onClose} src='../../imagens/cross.png' alt='Imagem saída' />
        <h2>EDITAR CARD:</h2>
        <CampoTexto
          obrigatorio={true}
          label="Título"
          placeholder="Insira o título"
          valor={titulo}
          aoAlterado={valor => setTitulo(valor)}
        />
        <ListaSupensaFormEditar
          obrigatorio={true}
          label="Categoria"
          itens={times}
          valor={categoria}
          aoAlterado={valor => setCategoria(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Imagem"
          placeholder="Insira link imagem"
          valor={imagem}
          aoAlterado={setImagem}
        />
        <CampoTexto
          obrigatorio={true}
          label="Vídeo"
          placeholder="Insira link vídeo"
          valor={videoLink}
          aoAlterado={setVideoLink}
        />
        <CampoTexto
          obrigatorio={true}
          label="Descrição"
          placeholder="Sobre o que é este vídeo?"
          valor={descricao}
          aoAlterado={setDescricao}
        />
        <BotaoFormEditar limparForm={limparCampos} />
      </form>
    </div>
  );
};

export default FormEditar;
