import React from 'react';
import './components.css';



import { Box, Text, Tag,  }  from '@chakra-ui/react';





// <Link to={'projectsContainer'} spy={true} smooth={true}>here</Link>.</p>


const About = () => {
    const languagesList = [ 'Javascript', 'Python'];
    const technologiesList = ['Express', 'Git', 'Node', 'HTML/CSS',];

    return (
        <section id='aboutContainer'>

            <Box display="flex" flexDirection="row" alignItems="flex-start" gap="5vw" w="60vw">

                <div className="aboutTextContainer">
                    <h2>About Me</h2>
                    <hr/> 
                    <Box>
                        <Text color='white' fontSize="1rem">
                            I'm a college student that's been studying Computer Science at Palomar College since 2019, this Spring I'll be receiving

                            I'm a developer building projects with javascript and picking up new technologies like react, node, express, chakraUI and others.
                            
                        </Text>
                        
                    </Box>
                
                </div>    

                <div className="SkillsContainer">
                    <h2>Skills</h2>
                    <hr/>
                    <Box display="flex" flexDirection="row" alignItems="flex-start" gap="1vw" p="0">
                        <Box>
                            <Text color='white'>Languages</Text>
                            <Box display="flex" flexDirection="row" flexWrap="wrap" p="8px">
                            {languagesList.map((name, index) => (
                                    <Tag key={index} size="lg" m="4px">{name}</Tag>
                                ))}
                            </Box>
                        </Box>
                        <Box><Text color='white'>Technologies</Text>
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