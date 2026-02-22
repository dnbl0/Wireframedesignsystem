import { RouterProvider } from 'react-router';
import { ChakraProvider } from '@chakra-ui/react';
import { system } from './theme/chakra-theme';
import { router } from './routes';

export default function App() {
  return (
    <ChakraProvider value={system}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}