import React from 'react'
import './Cotizacion.css'
import SingleBox from './SingleBox';

const Cotizacion = ({resultado}) => {

    // Si el objeto llega vacio no va a ejecutar nada
    if(Object.keys(resultado).length === 0) return null;

    console.log(resultado);

    return (
        <div className='result__container'>
            <SingleBox text='El precio es:' info={resultado.PRICE} color='#fff'/>
            <SingleBox text='Precio más alto del día' info={resultado.HIGHDAY} color='#fff'/>
            <SingleBox text='Precio más bajo del día:' info={resultado.LOWDAY} color='#fff'/>
            <SingleBox text='Variación últimas 24 HRS:' info={resultado.CHANGEPCT24HOUR} color='#fff'/>
            <SingleBox text='Última Actualización:' info={resultado.LASTUPDATE} color='#fff'/>
        </div>
    )
}

export default Cotizacion
