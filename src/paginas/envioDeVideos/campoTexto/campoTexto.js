import './campoTexto.css'

const CampoTexto = (propriedades) => {
    

    
    const aoDigitado = (evento) => {
        propriedades.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{propriedades.label}</label>
            <input value={propriedades.valor} onChange={aoDigitado} required={propriedades.obrigatorio} placeholder={propriedades.placeholder} />
        </div>
    )
}

export default CampoTexto;