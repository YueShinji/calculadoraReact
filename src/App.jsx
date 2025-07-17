import { useState } from 'react'
import './App.css'
import BtnNumber from './components/btnNumber'
import BtnOperador from './components/btnOperador'

function App() {
  const [display, setDisplay] = useState(0)
  const [resultado, setResultado] = useState([])
  const [operador, setOperador] = useState(null)
  const [aguardandoNovoNumero, setAguardandoNovoNumero] = useState(false)

  const handleClick = ({ target }) => {
    if (display === 0 || aguardandoNovoNumero) {
      setDisplay(target.value)
      setAguardandoNovoNumero(false)
    } else {
      setDisplay(`${display + target.value}`)
    }
  }

  const handleClickOperador = ({ target }) => {
    const numeros = [...resultado, display]
    setResultado(numeros)
    setDisplay(0)

    if (["+", "-", "*", "/"].includes(target.value)) {
      if (numeros.length >= 2) {
        let parcial = 0
        if (target.value === "+") {
          parcial = numeros.reduce((acc, el) => parseFloat(acc) + parseFloat(el))
        } else if (target.value === "-") {
          parcial = numeros.reduce((acc, el) => parseFloat(acc) - parseFloat(el))
        } else if (target.value === "*") {
          parcial = numeros.reduce((acc, el) => parseFloat(acc) * parseFloat(el))
        } else if (target.value === "/") {
          parcial = numeros.reduce((acc, el) => parseFloat(acc) / parseFloat(el))
        }
        setDisplay(parcial)
        setResultado([parcial])
      }
    }
    setOperador(target.value)
    setAguardandoNovoNumero(true)
  }

  const handleIgual = () => {
    if (operador && resultado.length > 0) {display          
      const prev = parseFloat(resultado[0])
      const atual = parseFloat(display)
      let res = 0
      if (operador === '+') res = prev + atual
      if (operador === '-') res = prev - atual
      if (operador === '*') res = prev * atual
      if (operador === '/') res = prev / atual
      setDisplay(res)
      setResultado([])
      setOperador(null)
      setAguardandoNovoNumero(true)
    }
  }

  const handleLimpar = () => {
    setDisplay(0)
    setResultado([])
    setOperador(null)
    setAguardandoNovoNumero(false)
  }

  return (
    <div className="calculadora">
      <div className="display">{display}</div>
      <div className='numeros'>
        <BtnNumber title={7} click={handleClick} />
        <BtnNumber title={8} click={handleClick} />
        <BtnNumber title={9} click={handleClick} />
        <BtnNumber title={4} click={handleClick} />
        <BtnNumber title={5} click={handleClick} />
        <BtnNumber title={6} click={handleClick} />
        <BtnNumber title={1} click={handleClick} />
        <BtnNumber title={2} click={handleClick} />
        <BtnNumber title={3} click={handleClick} />
        <BtnOperador title={"+"} click={handleClickOperador} className="btn-operador" />
        <BtnNumber title={0} click={handleClick} />
        <BtnOperador title={"-"} click={handleClickOperador} className="btn-operador" />
        <BtnOperador title={"*"} click={handleClickOperador} className="btn-operador" />
        <BtnOperador title={"/"} click={handleClickOperador} className="btn-operador" />
        <button onClick={handleIgual} className="btn-operador">=</button>
        <button onClick={handleLimpar}>C</button>
      </div>
    </div>
  )
}

export default App