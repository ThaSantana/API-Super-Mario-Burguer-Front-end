import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Home from './Rotas/Home.jsx';
import Cardapio from './Rotas/Cardapio.jsx';
import Fornecedor from './Rotas/Fornecedor.jsx';

const Menu = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:
    [
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"cardapio",
        element: <Cardapio/>
      },
      {
        path: "fornecedor",
        element:<Fornecedor/>
      }
    ]
  },
  
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Menu}/>
    
  </React.StrictMode>,
)
