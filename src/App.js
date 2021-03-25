import React, {useState, useEffect} from 'react'
import axios from 'axios';

import './App.css';
import imagen from './assets/cryptomonedas.png'
import Form from './components/Forms/Form';
import Cotizacion from './components/Cotizacion/Cotizacion';
import Spinner from './components/Spinner/Spinner';

function App() {

  const [moneda, setMoneda] = useState('');
  const [crypto, setCrypto] = useState('');
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    
    //consultamos la api para la cotización
    const getPrice = async() => {
      if(moneda === '') return;
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${moneda}`
      const resultado = await axios.get(url)
      //mostrar spinner
      setLoading(true)
      //ocultar spinner y mostrar resultado
      setTimeout(() => {
        setLoading(false)
        // De esta forma accedemos dinamicamente al objeto ya que cambia la key
        setResult(resultado.data.DISPLAY[crypto][moneda]);
      }, 1000)
    } 

    getPrice()

  // Evitamos la primera ejecucion
  }, [moneda, crypto])

  // mostrar spinner o resultado
  const componente = (loading) ? <Spinner /> : <Cotizacion resultado={result} />

  return (
    <div className='container'>
      <div>
        <img 
          src={imagen}
          alt='Crypto img'
          className='image'
        />
      </div>
      <div>
        <div className='heading'>
          <h1>Cotizador de Cryptos</h1>
          <Form 
            setMoneda={setMoneda}
            setCrypto={setCrypto}
          />
          {componente}
        </div>
      </div>
    </div>
  );
}

export default App;
