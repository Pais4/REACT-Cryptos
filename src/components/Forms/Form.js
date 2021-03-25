import React, {useEffect, useState} from 'react'
import axios from 'axios';

import useCrypto from '../../hooks/useCrypto';
import useMoneda from '../../hooks/useMoneda';
import MONEDAS from '../../utils/dummyMonedas';
import './Form.css';
import Error from '../Error/Error';

const Form = ({setMoneda, setCrypto}) => {

    //state del listado de cryptos
    const [listaCryptos, setListaCryptos] = useState([])

    // state de error
    const [error, setError] = useState(false)

    // Utilizamos el custom hook
    const [moneda, Seleccionar] = useMoneda('Elige tu moneda', '', MONEDAS)
    const [crypto, SeleccionarCrypto] = useCrypto('Elige la criptomoneda', '', listaCryptos)

    // Ejecutar llamado a la api
    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD'
            const resultado = await axios.get(url);
            setListaCryptos(resultado.data.Data)
        }
        consultarAPI()
    }, [])

    //Submit del formulario
    const cotizarMoneda = e => {
        e.preventDefault();
        //Validamos si ambos campos estan llenos
        if(moneda === '' || crypto === '') {
            setError(true)
            return;
        }
        // Pasar los datos al componente principal
        setError(false)
        setMoneda(moneda)
        setCrypto(crypto)
    }

    return (
        <form
            onSubmit={cotizarMoneda}
        >
            <Seleccionar />
            <SeleccionarCrypto />
            <button 
                type='submit'
                className='button'
                value='calcular'
            > Calcular </button>
            {error ? <Error mensaje='Los campos son obligatorios' /> : null}
        </form>
    )
}

export default Form;
