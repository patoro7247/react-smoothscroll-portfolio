import './App.css';
import { Main } from "./pages";



//import { ChakraProvider } from '@chakra-ui/react';

import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    
      <div className="App">
        <Navbar />
        <Main />
      </div>
    
  );
}

export default App;
