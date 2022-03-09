import React, { Component } from 'react';
import './Footer.css'
import { 
    Box,
    Center,
    Text,
} from '@chakra-ui/react';


class Footer extends Component {
    // People name things in react with capitalized letter
    
    //states whenever you click on something if its true or false
    state = { clicked : false }
    
    // Whenever you click, alters clicked status to opposite value
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }
    
    // If this is clicked, we add the class nav-menu active, or if you did not click on it, the class will be regular nav menu
    // <h1 className="navbar-logo"><i className="fa-solid fa-mountain"></i></h1>

    backgroundColor='linear-gradient(90deg, rgb(0,0,0) 0%, rgb(102, 89, 83) 100%)'

    render() {
        return(
            <nav className="FooterContainer">
                <Box w="100vw" h="5vh" bgGradient='linear(to-r, #141414, black)' position="fixed" bottom="0" zIndex="9999">
                    <Center paddingTop="1rem">
                        <Text fontSize='sm'>Made with React and Chakra UI     2022</Text>
                    </Center>
                </Box>
              
            </nav> 
        )
    }
}

export default Footer