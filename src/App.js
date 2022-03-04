import './App.css';
import { Main } from "./pages";



import { ChakraProvider } from '@chakra-ui/react';
// Check out Chakra toast when user submits request


import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
      <ChakraProvider>
        <div className="App">
          <div className="navbarHolder">
            <Navbar />
          </div>
          <Main />
        </div>
      </ChakraProvider>
  );
}

export default App;
