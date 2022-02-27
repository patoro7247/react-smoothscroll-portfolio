import React from 'react';
import './components.css';

const About = () => {

    return (
        <section id='aboutContainer'>
           
           <div className="aboutTextContainer">
                <h3>What I'm about</h3>
                <p>I'm a college student learning frontend and backend languages to learn the developer ways</p>

                <h3>Technologies</h3>
                <p>I use python, javascript, ...</p>
            </div>
           
            <img className="aboutPanel" src="/images/about_panel.jpg" />
                
        </section>
    )
};

export default About;