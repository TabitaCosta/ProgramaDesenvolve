import './App.css'
import Timer from './components/timer'
import Interval from './components/Interval'
import { useState } from 'react'
import useToogle from './hooks/use-toogle'

function App() {
  const {value, toogle} = useToogle()
  return (
    <>
      <Timer/>
      {value && <Interval/>}
      <button onClick={toogle}>{
        value ? 'Fechar Intervalo' : 'Abrir intervalo'}
      </button>
    </>
  )
}

export default App
