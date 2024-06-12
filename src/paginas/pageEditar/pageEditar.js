import './pageEditar.css';
import FormEditar from './formularioEditar/formEditar';

const PageEditar = ({ video, onClose, onSubmit, times }) => {
  return (
    <div className='backGround'>
      <FormEditar video={video} onClose={onClose} onSubmit={onSubmit} times={times} />
    </div>
  );
};

export default PageEditar;
