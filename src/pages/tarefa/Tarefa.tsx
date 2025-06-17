import { useEffect, useState } from "react"

function Tarefa() {
  const [completed, setCompleted] = useState(false);
  const [tarefa, setTarefa] = useState('');

  useEffect(() => {
    if(completed == true)
      setTarefa("Parabéns! Você concluiu a tarefa")
  }, [completed])

  return (
    <div>
      <h1>Componente Tarefa</h1>
      <h2>{tarefa}</h2>
      <p>Conclua a tarefa</p>
      <button onClick={() => setCompleted(true)}>Concluir tarefa</button>
    </div>
  )
}

export default Tarefa