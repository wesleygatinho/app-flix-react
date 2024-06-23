import React, { useState } from 'react';
import './campoTextoFormEditar.css';

const CampoTexto = ({ label, valor, aoAlterado, obrigatorio, placeholder }) => {
    const [erro, setErro] = useState('');

    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value);
        if (obrigatorio && evento.target.value === '') {
            setErro('Este campo é obrigatório.');
        } else {
            setErro('');
        }
    };

    const aoPerderFoco = (evento) => {
        if (obrigatorio && evento.target.value === '') {
            setErro('Este campo é obrigatório.');
        } else {
            setErro('');
        }
    };

    return (
        <div className="campoTextoFormEditar">
            <label>{label}</label>
            <input
                value={valor}
                onChange={aoDigitado}
                onBlur={aoPerderFoco}
                required={obrigatorio}
                placeholder={placeholder}
                title={erro} // Adiciona a mensagem de erro como título
                className={erro ? 'inputErro' : ''} // Adiciona uma classe condicional
            />
            {erro && <span className="mensagemErro">{erro}</span>} {/* Exibe a mensagem de erro */}
        </div>
    );
};

export default CampoTexto;