
import React from 'react';
import { Image,
    Box,
} from '@chakra-ui/react';
//import { CardExample } from './CardExample.js';




function CreateBox(props) {
    const projectList = [
        {
            projectName : 'Fullstack Movie Database',
            projectDescription : 'A search engine for movies based off title, directors, actors, and more. Based off Stanford\'s Movie Database at http://infolab.stanford.edu/pub/movies/dtd.html   ',
            projectLink : 'https://github.com/patoro7247/moviedb',
            src: 'images/projectThumbnails/movieDBScreenshot.png',
        },
        {
            projectName : 'Graffiti and Crime Correlation Map',
            projectDescription : "This project visualizes the occurrences of graffiti reportings in comparison with hate crimes reported in the San Diego County area",
            projectLink : 'https://github.com/patoro7247/crime-graffiti-map',
            src: 'images/projectThumbnails/crimegraffitmap.png',
        },
        {
            projectName : 'UCI Search Engine',
            projectDescription : 'This project crawled all websites(>50,000) under the ics.uci.edu domain and implemented a web gui for a ranked retrieval search engine of the scraped sites',
            projectLink : 'https://github.com/patoro7247/UCI-Search-Engine',
            src: 'images/projectThumbnails/webgui-screenshot.png',
        },
        
        {
            projectName : 'Mock Student Dashboard',
            projectDescription : 'CRUD app made with Javascript, Express, Node, and PostgreSQL',
            projectLink : 'https://github.com/patoro7247/database-crud-app',
            src: 'images/projectThumbnails/MockAdminPanel.png',
        },
        
        
    ];


    return (
        projectList.map((item,index) => {
            return (
                <a href={item.projectLink} key={index} target="_blank" rel="noreferrer">
                    <Box w='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' bgColor='#B7B5B3' h='sm'>
                        <Image src={item.src} alt='projectImage' maxHeight="40%" />
                        <Box p='6'>
                            <Box mt='1' fontWeight='semibold' as='h3' lineHeight='tight' isTruncated> {item.projectName} </Box>
                            <Box textAlign="left"> {item.projectDescription} </Box>
                        </Box>
                    </Box>
                </a>
            )
        })
    )
}

const Projects = () => {



    return (
        
        <section id='projectsContainer'>
        
                <div className='headerPostsContainer'>
                    <h2>Projects</h2>
                    <hr style={{margin:"auto"}}/> 

                    <div className='posts'>
                        <CreateBox />
                    </div>
                </div>
           


            

        </section>
    )
};

export default Projects;