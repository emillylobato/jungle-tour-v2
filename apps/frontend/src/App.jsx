import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          {/* Removido o logo do Vite */}
        </a>
        <a href="https://react.dev" target="_blank">
          {/* Removido o logo do React */}
        </a>
      </div>
      <h1>Jungle Tour - Sistema de Turismo</h1> {/* Mudei o título */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Comece a desenvolver sua aplicação Jungle Tour aqui!
        </p>
      </div>
    </>
  )
}

export default App