import './campoTextoFormEditar.css'

const CampoTexto = ({label, valor, aoAlterado, obrigatorio, placeholder}) => {
    

    
    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campoTextoFormEditar">
            <label>{label}</label>
            <input value={valor} onChange={aoDigitado} required={obrigatorio} placeholder={placeholder} />
        </div>
    )
}

export default CampoTexto;