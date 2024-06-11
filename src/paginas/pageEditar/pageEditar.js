import FormEditar from './formularioEditar/formEditar';
import './pageEditar.css';
import { useState } from 'react';

const PageEditar = ({ isOpen, onClose }) => {



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

  const [videosDaPlataforma, setvideosDaPlataforma] = useState([]);

  const aoNovoVideoAdicionado = (colaborador) => {
    setvideosDaPlataforma([...videosDaPlataforma, colaborador]);
  }

  if (isOpen) {
    return (
      <div className='backGround'>
        <FormEditar times={times.map(time => time.nome)}
          aoVideoCadastrado={colaborador => aoNovoVideoAdicionado(colaborador)}
          onClose={onClose}
        />
      </div>

    )
  }
  return null;
}


export default PageEditar;