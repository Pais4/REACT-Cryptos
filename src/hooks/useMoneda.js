import React, {Fragment, useState} from 'react'
import './useMoneda.css'

const useMoneda = (label, stateInicial, opciones) => {

    // State del custom hook
    const [moneda, actualizarMoneda] = useState(stateInicial);

    const Seleccionar = () => (
        <Fragment>
            <label className='label'>{label}</label>
            <select
                onChange={ e => actualizarMoneda(e.target.value)}
                value={moneda}
                className='select'
            >
                <option value=''>- Seleccione -</option>
                    {opciones.map(opcion => (
                        // Return implicito ()
                        <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
                    ))}
            </select>
        </Fragment>
    );

    //Retornar state, interfaz y funcion que modifica el state
    return [moneda, Seleccionar];
}

export default useMoneda
