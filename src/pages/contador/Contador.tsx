import { useState } from "react"

function Contador() {
  const [valor, setValor] = useState(0);

  const handleClickAdicionar = () => {
    setValor(valor+1);
  }

  const handleClickSubstrair = () => {
    setValor(valor-1);
  }

  return (
    <div>
      <h1>Componente Contador</h1>
      <p>O valor atual é: {valor}</p>
      <button onClick={handleClickAdicionar}>Adicionar 1</button>
      <button onClick={handleClickSubstrair}>Subtrair 1</button>
    </div>
  )
}

export default Contador