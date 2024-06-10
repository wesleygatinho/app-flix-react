import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Cabecalho from "../../componentes/cabecalho/cabecalho.js";
import EmDestaque from "../../componentes/emDestaque/emDestaque.js";
import RodapeHome from "../../componentes/rodape/rodape.js";
import Times from "../../componentes/times/times.js";
import FormularioEnvioVideos from "../envioDeVideos/formulario/formularioEnvioVideos.js";

const PageInicio = () => {
  const times = [
    { id: uuidv4(), nome: 'Programação', corPrimaria: '#57C278', corSecundaria: '#D9F7E9' },
    { id: uuidv4(), nome: 'Front-End', corPrimaria: '#82CFFA', corSecundaria: '#E8F8FF' },
    { id: uuidv4(), nome: 'Data Science', corPrimaria: '#A6D157', corSecundaria: '#F0F8E2' },
    { id: uuidv4(), nome: 'Devops', corPrimaria: '#E06B69', corSecundaria: '#FDE7E8' },
    { id: uuidv4(), nome: 'UX e Design', corPrimaria: '#DB6EBF', corSecundaria: '#FAE9F5' },
    { id: uuidv4(), nome: 'Mobile', corPrimaria: '#FFBA05', corSecundaria: '#FFF5D9' },
    { id: uuidv4(), nome: 'Inovação e Gestão', corPrimaria: '#FF8A29', corSecundaria: '#FFEEDF' },
  ];

  const inicial = [
    { id: uuidv4(), nome: 'JULIANA AMOASEI', cargo: 'Desenvolvedora de software e instrutora', imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg', time: times[0].nome },
    { id: uuidv4(), nome: 'DANIEL ARTINE', cargo: 'Engenheiro de Software na Stone Age', imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg', time: times[0].nome },
    { id: uuidv4(), nome: 'GUILHERME LIMA', cargo: 'Desenvolvedor Python e JavaScript na Alura', imagem: 'https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg', time: times[0].nome },
    { id: uuidv4(), nome: 'PAULO SILVEIRA', cargo: 'Hipster e CEO da Alura', imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg', time: times[0].nome },
    { id: uuidv4(), nome: 'JULIANA AMOASEI', cargo: 'Desenvolvedora de software e instrutora', imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg', time: times[1].nome },
    { id: uuidv4(), nome: 'DANIEL ARTINE', cargo: 'Engenheiro de Software na Stone Age', imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg', time: times[1].nome },
    { id: uuidv4(), nome: 'GUILHERME LIMA', cargo: 'Desenvolvedor Python e JavaScript na Alura', imagem: 'https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg', time: times[1].nome },
    { id: uuidv4(), nome: 'PAULO SILVEIRA', cargo: 'Hipster e CEO da Alura', imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg', time: times[1].nome },
    { id: uuidv4(), nome: 'JULIANA AMOASEI', cargo: 'Desenvolvedora de software e instrutora', imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg', time: times[2].nome },
    { id: uuidv4(), nome: 'DANIEL ARTINE', cargo: 'Engenheiro de Software na Stone Age', imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg', time: times[2].nome },
    { id: uuidv4(), nome: 'GUILHERME LIMA', cargo: 'Desenvolvedor Python e JavaScript na Alura', imagem: 'https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg', time: times[2].nome },
    { id: uuidv4(), nome: 'PAULO SILVEIRA', cargo: 'Hipster e CEO da Alura', imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg', time: times[2].nome },
    { id: uuidv4(), nome: 'JULIANA AMOASEI', cargo: 'Desenvolvedora de software e instrutora', imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg', time: times[3].nome },
    { id: uuidv4(), nome: 'DANIEL ARTINE', cargo: 'Engenheiro de Software na Stone Age', imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg', time: times[3].nome },
    { id: uuidv4(), nome: 'GUILHERME LIMA', cargo: 'Desenvolvedor Python e JavaScript na Alura', imagem: 'https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg', time: times[3].nome },
    { id: uuidv4(), nome: 'PAULO SILVEIRA', cargo: 'Hipster e CEO da Alura', imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg', time: times[3].nome },
    { id: uuidv4(), nome: 'JULIANA AMOASEI', cargo: 'Desenvolvedora de software e instrutora', imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg', time: times[4].nome },
    { id: uuidv4(), nome: 'DANIEL ARTINE', cargo: 'Engenheiro de Software na Stone Age', imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg', time: times[4].nome },
    { id: uuidv4(), nome: 'GUILHERME LIMA', cargo: 'Desenvolvedor Python e JavaScript na Alura', imagem: 'https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg', time: times[4].nome },
    { id: uuidv4(), nome: 'PAULO SILVEIRA', cargo: 'Hipster e CEO da Alura', imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg', time: times[4].nome },
    { id: uuidv4(), nome: 'JULIANA AMOASEI', cargo: 'Desenvolvedora de software e instrutora', imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg', time: times[5].nome },
    { id: uuidv4(), nome: 'DANIEL ARTINE', cargo: 'Engenheiro de Software na Stone Age', imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg', time: times[5].nome },
    { id: uuidv4(), nome: 'GUILHERME LIMA', cargo: 'Desenvolvedor Python e JavaScript na Alura', imagem: 'https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg', time: times[5].nome },
    { id: uuidv4(), nome: 'PAULO SILVEIRA', cargo: 'Hipster e CEO da Alura', imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg', time: times[5].nome },
  ];

  const [videosDaPlataforma, setVideosDaPlataforma] = useState(inicial);

  const aoNovoVideoAdicionado = (colaborador) => {
    setVideosDaPlataforma([...videosDaPlataforma, colaborador]);
  };

  function deletarVideo(id) {
    console.log('Deletando...');
    setVideosDaPlataforma(videosDaPlataforma.filter(colaborador => colaborador.id !== id));
  }

  return (
    <div className="App">
      <Cabecalho />
      <EmDestaque />
      <FormularioEnvioVideos times={times.map(time => time.nome)} aoVideoCadastrado={colaborador => aoNovoVideoAdicionado(colaborador)} />
      {times.map(time => (
        <Times
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={videosDaPlataforma.filter(colaborador => colaborador.time === time.nome)}
          deletar={deletarVideo}
        />
      ))}
      <RodapeHome />
    </div>
  );
}

export default PageInicio;
