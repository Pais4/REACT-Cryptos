import React, {useState, Fragment} from 'react'

const useCrypto = (label, stateInicial, listaCryptos) => {

    // State del custom hook
    const [crypto, actualizarMoneda] = useState(stateInicial);

    const SeleccionarCrypto = () => (
        <Fragment>
            <label className='label'>{label}</label>
            <select
                onChange={ e => actualizarMoneda(e.target.value)}
                value={crypto}
                className='select'
            >
                <option value=''>- Seleccione -</option>
                    {listaCryptos.map(crypto => (
                        // Return implicito ()
                        <option key={crypto.CoinInfo.Id} value={crypto.CoinInfo.Name}>{crypto.CoinInfo.FullName}</option>
                    ))}
            </select>
        </Fragment>
    );

    //Retornar state, interfaz y funcion que modifica el state
    return [crypto, SeleccionarCrypto, actualizarMoneda];
}

export default useCrypto
