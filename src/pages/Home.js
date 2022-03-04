import React from 'react';
import './components.css';


const Home = () => {

    return (
        <section id='homeContainer'>
            <div className="homeImageContainer">
                <img className="homeImage" src="/images/updated_home.png" />
                 
                <div className="homeImageContainerText">
                    I'm a developer currently studying Computer Science at Palomar College
                    <div className="textIcons">
                        <a href="https://github.com/patoro7247" target="_blank"><i className="fa-brands fa-github fa-2xl"></i></a>
                        <a href="https://www.linkedin.com/in/patrickharding" target="_blank"><i className="fa-brands fa-linkedin fa-2xl"></i></a>
                    </div>
                </div>
            </div>
            
        </section>
    )
};

export default Home;