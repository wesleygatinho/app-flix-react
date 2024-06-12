import './listaSuspensaFormEditar.css'

const ListaSupensaFormEditar = ({label, aoAlterado, itens, required, valor}) => {
    return(
        <div className='listaSuspensaFormEditar'>
            <label>
                {label}
            </label>
            <select onChange={evento => aoAlterado(evento.target.value)} required={required} value={valor}>
                <option value=""></option>
                {itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select> 
        </div>
    )
}

export default ListaSupensaFormEditar;