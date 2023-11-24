/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const ClienteContext = createContext();

export function ClienteLoggedProvider({ children }) {
  // si no hay cliente en local storage usar datos vacios sino leer cliente de local storage
  const clienteFromLocalStorage = localStorage.getItem('cliente')
    ? JSON.parse(localStorage.getItem('cliente'))
    : {
      nombre: '',
      apellido: '',
      email: '',
      password: ''
    };
  const [clienteLogged, setclienteLogged] = useState(clienteFromLocalStorage);

  return (
    <ClienteContext.Provider value={{ clienteLogged, setclienteLogged }}>
      {children}
    </ClienteContext.Provider>
  );
}