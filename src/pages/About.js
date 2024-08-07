import React from 'react';
import './components.css';
import { Box, Text, Tag,  }  from '@chakra-ui/react';

// <Link to={'projectsContainer'} spy={true} smooth={true}>here</Link>.</p>



const About = () => {
    const languagesList = [ 'Javascript', 'Python', 'Java', 'C++'];
    const technologiesList = ['Linux','React','Express', 'Git', 'Node', 'HTML/CSS',];

    return (
        <section id='aboutContainer'>

            <Box display="flex" flexDirection="column" alignItems="flex-start" gap="5vw" w="80vw">

                <div className="aboutTextContainer">
                    <h2 className="aboutTextHeader">About Me</h2>
                    <hr/> 
                    <Box>
                        <Text color='white' fontSize="1.2rem" w="70vw">
                            I'm a newgrad in Computer Science from UC Irvine and have focused in Web Development in school and extracurricarlly.
                            I've developed a number of projects with Javascript, Python, Java, and C++. I also have experience with technologies/frameworks like React, Node, Express, chakraUI, Linux, Git and others. 
                        </Text>
                        
                    </Box>
                
                </div>    

                <div className="SkillsContainer">
                    <h2>Skills</h2>
                    <hr/>
                    <Box display="flex" flexDirection="column" alignItems="flex-start" gap="1vw" p="0">
                        <Box>
                            <Text color='white' fontWeight="bold" fontSize="1.2rem">Languages</Text>
                            <Box display="flex" flexDirection="row" flexWrap="wrap" p="8px">
                            {languagesList.map((name, index) => (
                                    <Tag key={index} size="lg" m="4px">{name}</Tag>
                                ))}
                            </Box>
                        </Box>
                        <Box><Text color='white' fontWeight="bold" fontSize="1.2rem">Technologies</Text>
                            <Box display="flex" flexDirection="row" flexWrap="wrap" p="8px">
                                {technologiesList.map((name, index) => (
                                    <Tag key={index} size="lg" m="4px">{name}</Tag>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </div>

            </Box>


        </section>
    )
};

export default About;