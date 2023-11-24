import 'bootstrap/dist/css/bootstrap.css';
import { ChakraProvider } from '@chakra-ui/react'
import { ClienteLoggedProvider } from "./context/ClienteContext";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Registro from "./components/zonaCliente/Registro/Registro"
import Login from "./components/zonaCliente/InicioSesion/Login"
import Productos from "./components/zonaSteam/juegos/Productos"
import Layout from './components/zonaSteam/layouts/Layout';

const routerObjects = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        { path: '/', element: <Productos /> },
        { path: '/:idcategoria', element: <Productos /> }
      ]
    },
    { path: '/zonaCliente/registro', element: <Registro /> },
    { path: '/zonaCliente/login', element: <Login /> }

  ]
)

function App() {

  return (
    <ChakraProvider>
      <ClienteLoggedProvider>
        <RouterProvider router={routerObjects} />
      </ClienteLoggedProvider>
    </ChakraProvider>

  )
}

export default App
