import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import EditableTable from './components/EditableTable';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <EditableTable />
    </ChakraProvider>
  );
}

export default App;
