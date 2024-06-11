import './listaSuspensa.css'

const ListaSupensa = ({label, aoAlterado, itens, required, valor, dataForm}) => {
    return(
        <div className='lista-suspensa'>
            <label>
                {label}
            </label>
            <select onChange={evento => aoAlterado(evento.target.value)} required={required} value={valor} data={dataForm}>
                <option value=""></option>
                {itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select> 
        </div>
    )
}

export default ListaSupensa;