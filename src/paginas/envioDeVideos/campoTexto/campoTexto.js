import './campoTexto.css'

const CampoTexto = ({aoAlterado, label, obrigatorio, placeholder, valor, dataForm}) => {
    

    
    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{label}</label>
            <input value={valor} onChange={aoDigitado} required={obrigatorio} placeholder={placeholder} data={dataForm}/>
        </div>
    )
}

export default CampoTexto;