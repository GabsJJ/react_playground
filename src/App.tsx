import './App.css'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import Contador from './pages/contador/Contador'
import Tarefa from './pages/tarefa/Tarefa'

function App() {

  return (
    <>
      <Login />
      <br />
      <Home titulo='Exemplo de título' texto='Exemplo de texto' />
      <br />
      <Contador />
      <br />
      <Tarefa />
    </>
  )
}

export default App
