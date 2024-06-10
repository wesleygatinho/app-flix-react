import './formEditar.css';
import CampoTexto from '../campoTextoFormEditar/campoTextoFormEditar.js';
import ListaSupensa from '../listaSuspensa/listaSuspensaFormEditar.js';
import { useState } from 'react';
import BotaoFormEditar from '../botaoFormEditar/botaoFormEditar.js';

const FormEditar = (propriedades) => {
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
    <section className='formularioEditar'>
      <form onSubmit={aoSalvar}>
        <img className='botaoSair' src='../../imagens/cross.png' alt='Imagem saída'/>
        <h2>EDITAR CARD:</h2>        
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
        
        
          <CampoTexto
            label="Descrição"
            placeholder="Sobre o que é este vídeo?"
            valor={descricao}
            aoAlterado={valor => setDescricao(valor)}
          />
        
        <BotaoFormEditar/>
      </form>
    </section>
  );
};

export default FormEditar;