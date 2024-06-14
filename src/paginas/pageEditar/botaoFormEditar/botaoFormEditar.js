import './botaoFormEditar.css'

const BotaoFormEditar = ({limparForm}) => {
    return (
        <div className='botaoFormEditar'>
            <button className='botaoGuardarFormEditar' type='submit'>GUARDAR</button>
            <button className='botaoLimparFormEditar'type='button' onClick={limparForm}>LIMPAR</button>
        </div>
    )
}

export default BotaoFormEditar;