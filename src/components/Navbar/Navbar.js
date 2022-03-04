import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import './Navbar.css'
import * as Scroll from 'react-scroll';

let Link = Scroll.Link;



class Navbar extends Component {
    // People name things in react with capitalized letter
    
    //states whenever you click on something if its true or false
    state = { clicked : false }
    
    // Whenever you click, alters clicked status to opposite value
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }

    // If this is clicked, we add the class nav-menu active, or if you did not click on it, the class will be regular nav menu
    // <h1 className="navbar-logo"><i className="fa-solid fa-mountain"></i></h1>

    render() {
        return(
            <nav className="NavbarItems">
                
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                

                 
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) =>  {
                        return (
                            <li key={index}> 
                                {/*}
                                    <a className={item.cName} href={item.url}>
                                        {item.title}
                                    </a>
                                {*/}           
                                <Link className={item.cName} to={item.url} spy={true} offset={-60} smooth={true}>{item.title}</Link>


                            </li>
                        )
                    })}
                </ul>
            </nav> 
        )
    }
}

export default Navbar