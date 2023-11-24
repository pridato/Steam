import { useContext } from 'react';
import { ClienteContext } from './../context/ClienteContext';

export function useClienteLogged() {
  const { clienteLogged, setclienteLogged } = useContext(ClienteContext);
  
  return { clienteLogged, setclienteLogged };
}