import React from 'react';
import { About, Home, Projects } from './';
import './components.css';

const Main = () => {
   return (
        <main>
            <div id="maindiv">
                <Home />
                <About />
                <Projects />
            </div>
        </main>
   )
};

export default Main;