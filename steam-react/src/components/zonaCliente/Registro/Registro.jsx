import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  useToast
} from '@chakra-ui/react'
import PasswordInput from './PasswordInput'
import { useClienteLogged } from '../../../hooks/useClienteLogged'
import { useNavigate } from 'react-router-dom'

const Registro = () => {

  const { clienteLogged, setclienteLogged } = useClienteLogged();
  const toast = useToast()
  const navigate = useNavigate();

  const handleOnChange = (e) => {

    setclienteLogged({ ...clienteLogged, [e.target.name]: e.target.value })
  }

  const handleSubmitForm = (e) => {
    e.preventDefault()

    console.log(clienteLogged)
    // guardar en localstorage
    localStorage.setItem('cliente', JSON.stringify(clienteLogged))
    // mostrar toast y al cerrar navegar a login
    toast({
      title: "Cuenta creada.",
      description: "Ya puedes iniciar sesión.",
      status: "success",
      duration: 9000,
      isClosable: true,
    })
      // navegar a login
      navigate('/zona-cliente/login')

    
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" name="nombre" value={clienteLogged.nombre} onChange={handleOnChange} />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" name="apellido" value={clienteLogged.apellido} onChange={handleOnChange} />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" name="email" value={clienteLogged.email} onChange={handleOnChange} />
            </FormControl>
            <FormControl id="password" isRequired>
              <PasswordInput />
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }
                }
                onClick={handleSubmitForm}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link color={'blue.400'}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack >
    </Flex >
  )
}

export default Registro