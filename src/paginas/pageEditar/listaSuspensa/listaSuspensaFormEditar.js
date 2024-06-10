import './listaSuspensaFormEditar.css'

const ListaSupensa = (propriedades) => {
    return(
        <div className='listaSuspensaFormEditar'>
            <label>
                {propriedades.label}
            </label>
            <select onChange={evento => propriedades.aoAlterado(evento.target.value)} required={propriedades.required} value={propriedades.valor}>
                <option value=""></option>
                {propriedades.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select> 
        </div>
    )
}

export default ListaSupensa;