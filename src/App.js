import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Routes from "./Routes";

function App() {
  return (
    <ChakraProvider theme={theme}>
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
