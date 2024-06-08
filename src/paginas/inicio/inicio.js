import Cabecalho from "../../componentes/cabecalho/cabecalho.js";
import EmDestaque from "../../componentes/emDestaque/emDestaque.js";
import RodapeHome from "../../componentes/rodape/rodape.js";
import Times from "../../componentes/times/times.js";
import { useState } from 'react';
import VouReceberdoForm from "../receberDeForm/deixaAqui.js";
import FormularioEnvioVideos from "../envioDeVideos/formulario/formularioEnvioVideos.js";


const PageInicio = () => {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  }



  return (
    <div className="App">
      <Cabecalho />
      <EmDestaque />
      {/* <VouReceberdoForm /> */}

      <FormularioEnvioVideos times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      {times.map(time =>
        <Times
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />)}


      <RodapeHome />
    </div>
  )
}

export default PageInicio;