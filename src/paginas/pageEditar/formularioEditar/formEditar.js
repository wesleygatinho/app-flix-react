import './formEditar.css';
import CampoTexto from '../campoTextoFormEditar/campoTextoFormEditar.js';

import { useState } from 'react';
import BotaoFormEditar from '../botaoFormEditar/botaoFormEditar.js';
import ListaSupensaFormEditar from '../listaSuspensa/listaSuspensaFormEditar.js';

const FormEditar = ({ video, onClose, onSubmit, times }) => {
  const [titulo, setTitulo] = useState(video.titulo || '');
  const [categoria, setCategoria] = useState(video.categoria || '');
  const [imagem, setImagem] = useState(video.imagem || '');
  const [videoLink, setVideoLink] = useState(video.video || '');
  const [descricao, setDescricao] = useState(video.descricao || '');

  const handleSubmit = (evento) => {
    evento.preventDefault();
    onSubmit({ // Envia os dados editados para o componente pai
      ...video,
      titulo,
      categoria,
      imagem,
      video: videoLink,
      descricao
    });
  };

  return (
    <div className='formularioEditar'>
      <form onSubmit={handleSubmit}>
      <img className='botaoSair' onClick={onClose} src='../../imagens/cross.png' alt='Imagem saída'/>
        <h2>EDITAR CARD:</h2>
        <CampoTexto
          obrigatorio={true}
          label="Título"
          placeholder="Insira o título"
          valor={titulo}
          aoAlterado={setTitulo}
        />
        {/* <ListaSupensaFormEditar
          obrigatorio={true}
          label="Categoria"
          itens={times}
          valor={categoria}
          aoAlterado={setCategoria}
        /> */}
        <CampoTexto
          obrigatorio={true}
          label="Imagem"
          placeholder="Insira link imagem"
          valor={imagem}
          aoAlterado={setImagem}
        />
        <CampoTexto
          label="Vídeo"
          placeholder="Insira link vídeo"
          valor={videoLink}
          aoAlterado={setVideoLink}
        />
        <CampoTexto
          label="Descrição"
          placeholder="Sobre o que é este vídeo?"
          valor={descricao}
          aoAlterado={setDescricao}
        />
        <BotaoFormEditar />
      </form>
    </div>
  );
};

export default FormEditar;
