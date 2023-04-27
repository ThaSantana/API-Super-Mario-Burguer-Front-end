import './App.css'
import { Outlet } from 'react-router-dom'
import Menu from './Componentes/Menu'

function App() {
    return (
    <>
    <Menu/>
     <Outlet/>
    </>
  )
}

export default App
