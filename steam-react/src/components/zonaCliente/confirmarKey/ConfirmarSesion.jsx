import { PinInput, PinInputField, HStack, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import clienteRESTService from '../../../servicios/restCliente';

const ConfirmarSesion = () => {

  const navigate = useNavigate();
  const [pin, setPin] = useState({});
  const [resetKey, setResetKey] = useState(0);

  const handleChange = (ev) => {
    // Vaciar el pin en el que estás primero
    if (ev.target.value === '') {
      console.log('vacio');
    } else {
      console.log('no vacio');
      setPin({ ...pin, [ev.target.name]: ev.target.value });
    }
  };

  async function handleSubmit() {
    try {
      const respuesta = await clienteRESTService.ConfirmarSesionCliente(pin);
      console.log(respuesta)
      if(respuesta.mensaje==='usuario encontrado'){
        console.log('sesion iniciada')
        navigate('/')
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handlePinReset = () => {
    // Incrementar la clave de reinicio para resetear el estado de 'pin'
    setResetKey((prevKey) => prevKey + 1);
    // También puedes reiniciar el estado de 'pin' directamente si lo prefieres:
    // setPin({});
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <HStack>
        <PinInput key={resetKey} type='alphanumeric'>
          <PinInputField name="pin1" onChange={handleChange} />
          <PinInputField name="pin2" onChange={handleChange} />
          <PinInputField name="pin3" onChange={handleChange} />
          <PinInputField name="pin4" onChange={handleChange} />
          <PinInputField name="pin5" onChange={handleChange} />
        </PinInput>
        <Button colorScheme='blue' onClick={handleSubmit}>
          Enviar
        </Button>
        <Button colorScheme='red' onClick={handlePinReset}>
          Resetear Pin
        </Button>
      </HStack>
    </div>
  );
};

export default ConfirmarSesion;
