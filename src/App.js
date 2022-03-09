import './App.css';
import { Main } from "./pages";



import { ChakraProvider } from '@chakra-ui/react';
// Check out Chakra toast when user submits request


import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";


function App() {
  return (
      <ChakraProvider>
        <div className="App">
          <div className="navbarHolder">
            <Navbar />
          </div>
          <Main />
          <Footer />
        </div>
      </ChakraProvider>
  );
}

export default App;
