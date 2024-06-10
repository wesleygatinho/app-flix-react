import './formularioEnvioVideos.css';
import CampoTexto from '../campoTexto/campoTexto.js';
import ListaSupensa from '../listaSuspensa/listaSuspensa.js';
import { useState } from 'react';
import Botao from '../botao/botao.js';

const FormularioEnvioVideos = (propriedades) => {
  const [titulo, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('');
  const [descricao, setDescricao] = useState('');

  const aoSalvar = (evento) => {
    evento.preventDefault();
    propriedades.aoVideoCadastrado({
      titulo,
      cargo,
      imagem,
      time
    });
    setNome('');
    setCargo('');
    setImagem('');
    setTime('');
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
            aoAlterado={valor => setNome(valor)}
          />
          <ListaSupensa
            obrigatorio={true}
            label="Categoria"
            itens={propriedades.times}
            valor={time}
            aoAlterado={valor => setTime(valor)}
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
            label="Vídeo"
            placeholder="Insira link vídeo"
            valor={cargo}
            aoAlterado={valor => setCargo(valor)}
          />
        </div>
        <div className='formatar-descricao'>
          <CampoTexto
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
