import React from 'react';
import './components.css';

import * as Scroll from 'react-scroll';

import { Box }  from '@chakra-ui/react';



let Link = Scroll.Link;

// <Link to={'projectsContainer'} spy={true} smooth={true}>here</Link>.</p>


const About = () => {

    return (
        <section id='aboutContainer'>
            
            <Box display="flex" flexDirection="row" alignItems="flex-start" gap="10vw">

                <div className="aboutTextContainer">
                    <h2>About Me</h2>
                    <hr/> 
                    <p>I'm a developer looking to learn and build </p>
                
                </div>    

                <div className="SkillsContainer">
                    <h2>Skills</h2>
                    <hr/>
                    <Box display="flex" flexDirection="row" >
                        
                    </Box>
                </div>

            </Box>


        </section>
    )
};

export default About;