
import React from 'react';
import { Image,
    Box,
} from '@chakra-ui/react';
//import { CardExample } from './CardExample.js';




function CreateBox(props) {
    const projectList = [
        {
            projectName : 'Mock School Admin Panel',
            projectDescription : 'CRUD app made with Javascript, Express, Node, and PostgreSQL',
            projectLink : 'https://github.com/patoro7247/database-crud-app',
            src: '/images/projectThumbnails/MockAdminPanel.png',
        },
        {
            projectName : 'Spotify Recommended Playlist Generator',
            projectDescription : "This project used Spotify's API to create persistent 'Made For You' playlists on my account",
            projectLink : 'https://github.com/patoro7247/SpotifyAPIPythonProject',
            src: '/images/projectThumbnails/spotifyPlaylist.png',
        },
        {
            projectName : 'Python Guessing Game with Dictionary API',
            projectDescription : 'Guessing game where a user guesses antonyms of random english words using Python and DictionaryAPI',
            projectLink : 'https://github.com/patoro7247/DictionaryAPIgame',
            src: '/images/projectThumbnails/dictionaryGame.png',
        },
        {
            projectName : 'This Website',
            projectDescription : 'This website was made using React',
            projectLink : 'placeholderLink',
            src: 'placeholderURL',
        },
    ];


    return (
        projectList.map((item,index) => {
            return (
                <a href={item.projectLink} key={index} target="_blank" rel="noreferrer">
                    <Box w='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' bgColor='#B7B5B3' h='sm'>
                        <Image src={item.src} alt='projectImage' />
                        <Box p='6'>
                            <Box mt='1' fontWeight='semibold' as='h3' lineHeight='tight' isTruncated> {item.projectName} </Box>
                            <Box> {item.projectDescription} </Box>
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
                    <hr/> 
                    <div className='posts'>
                        <CreateBox />
                    </div>
                </div>
           


            

        </section>
    )
};

export default Projects;