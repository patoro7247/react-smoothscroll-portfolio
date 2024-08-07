import React from 'react';
import './components.css';

import { Image } from '@chakra-ui/react'

const Home = () => {

    return (
        <section id='homeContainer'>
            <div className="homeImageContainer">
                
                {/* <img className="homeImage" src="/images/updated_home.png" alt='home'/> */}
                <Image 
                src="images/updated_home.png"
                alt="home"
                objectFit="contain !important"
                overflow="hidden"
                maxHeight="100%"
                maxWidth="100%"
                height="inherit"
                //id="animated-photo"
                />


                <div className="homeImageContainerText">
                    I'm a developer newly graduated in Computer Science from UC Irvine
                    <div className="textIcons">
                        <a href="https://github.com/patoro7247" target="_blank" rel="noreferrer"><i className="fa-brands fa-github fa-2xl"></i></a>
                        <a href="https://www.linkedin.com/in/patrickharding" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin fa-2xl"></i></a>
                    </div>
                </div>
            </div>
            
        </section>
    )
};

export default Home;