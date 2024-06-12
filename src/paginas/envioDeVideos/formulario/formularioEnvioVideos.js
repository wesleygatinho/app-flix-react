import './formularioEnvioVideos.css';
import CampoTexto from '../campoTexto/campoTexto.js';
import ListaSupensa from '../listaSuspensa/listaSuspensa.js';
import { useState } from 'react';
import Botao from '../botao/botao.js';

const FormularioEnvioVideos = ({ aoVideoCadastrado, times }) => {
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [imagem, setImagem] = useState('');
  const [video, setVideo] = useState('');
  const [descricao, setDescricao] = useState('');

  const aoSalvar = (evento) => {
    evento.preventDefault();
    aoVideoCadastrado({
      titulo,
      categoria,
      imagem,
      video,
      descricao
    });
    setTitulo('');
    setCategoria('');
    setImagem('');
    setVideo('');
    setDescricao('');
  };

  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2>NOVO VÍDEO</h2>
        <h4>Complete o formulário para criar um novo card de vídeo.</h4>
        <h1>Criar Card</h1>
        <div className='formatar-form'>
          <CampoTexto
            obrigatorio={true}
            label="Título"
            placeholder="Insira o título"
            valor={titulo}
            aoAlterado={valor => setTitulo(valor)}
          />
          <ListaSupensa
            obrigatorio={true}
            label="Categoria"
            itens={times}
            valor={categoria}
            aoAlterado={valor => setCategoria(valor)}
          />
        </div>
        <div className='formatar-form'>
          <CampoTexto
            obrigatorio={true}
            label="Imagem"
            placeholder="Insira link imagem"
            valor={imagem}
            aoAlterado={valor => setImagem(valor)}
          />
          <CampoTexto
            obrigatorio={true}
            label="Vídeo"
            placeholder="Insira link vídeo"
            valor={video}
            aoAlterado={valor => setVideo(valor)}
          />
        </div>
        <div className='formatar-descricao'>
          <CampoTexto
            obrigatorio={true}
            label="Descrição"
            placeholder="Sobre o que é este vídeo?"
            valor={descricao}
            aoAlterado={valor => setDescricao(valor)}
          />
        </div>
        <Botao texto1="Enviar" texto2="Limpar" />
      </form>
    </section>
  );
};

export default FormularioEnvioVideos;
